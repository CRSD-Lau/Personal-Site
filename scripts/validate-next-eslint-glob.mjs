import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const { globSync } = require("../vendor/next-eslint-glob");

const originalDirectory = process.cwd();
const fixtureRoot = mkdtempSync(join(tmpdir(), "personal-site-next-eslint-glob-"));

try {
  mkdirSync(join(fixtureRoot, "literal"));
  mkdirSync(join(fixtureRoot, "roots", "alpha", "nested"), { recursive: true });
  mkdirSync(join(fixtureRoot, "roots", "beta"), { recursive: true });
  mkdirSync(join(fixtureRoot, "linked-target"));
  symlinkSync(join(fixtureRoot, "linked-target"), join(fixtureRoot, "roots", "linked"), "junction");
  process.chdir(fixtureRoot);

  assert.deepEqual(globSync("literal", { onlyDirectories: true }), ["literal"]);
  assert.deepEqual(globSync("./literal/", { onlyDirectories: true }), ["./literal/"]);

  const directChildren = globSync("./roots/*", { onlyDirectories: true }).sort();
  assert.deepEqual(directChildren, ["./roots/alpha", "./roots/beta", "./roots/linked"]);
  assert.ok(directChildren.every((directory) => !directory.includes("\\")));

  const descendants = globSync("./roots/**", { onlyDirectories: true }).sort();
  assert.ok(descendants.includes("./roots/alpha"));
  assert.ok(descendants.includes("./roots/alpha/nested"));
  assert.ok(descendants.includes("./roots/beta"));
  assert.ok(descendants.includes("./roots/linked"));

  assert.throws(() => globSync(["roots/*"], { onlyDirectories: true }), TypeError);
  assert.throws(() => globSync("roots/*", { onlyDirectories: false }), TypeError);
  assert.throws(() => globSync("roots/*", { onlyDirectories: true, absolute: true }), TypeError);

  console.log("Next ESLint glob adapter contract validation passed.");
} finally {
  process.chdir(originalDirectory);
  rmSync(fixtureRoot, { recursive: true, force: true });
}
