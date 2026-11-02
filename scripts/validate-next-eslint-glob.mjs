import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { mkdtempSync, mkdirSync, rmSync, symlinkSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const require = createRequire(import.meta.url);
const pluginRoot = require.resolve("@next/eslint-plugin-next/package.json");
const pluginGlob = require.resolve("fast-glob", { paths: [join(pluginRoot, "..")] });
assert.match(pluginGlob, /@next[\\/]eslint-plugin-next[\\/]node_modules[\\/]fast-glob[\\/]out[\\/]index\.js$/);
const { globSync } = require(pluginGlob);

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

  console.log("Next ESLint bundled fast-glob contract validation passed.");
} finally {
  process.chdir(originalDirectory);
  rmSync(fixtureRoot, { recursive: true, force: true });
}
