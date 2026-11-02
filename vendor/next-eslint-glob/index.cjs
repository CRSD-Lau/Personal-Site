"use strict";
const { globSync: findEntries, statSync } = require("node:fs");
const { isAbsolute, join, relative } = require("node:path");
const { globSync: findDirectories, isDynamicPattern } = require("tinyglobby");
function globSync(pattern, options) {
  if (typeof pattern !== "string" || pattern.length === 0) throw new TypeError("Patterns must be a string (non empty) or an array of strings");
  if (!options || options.onlyDirectories !== true || Object.keys(options).some((key) => key !== "onlyDirectories")) throw new TypeError("Next ESLint glob adapter requires a nonempty string and { onlyDirectories: true }");
  if (!isDynamicPattern(pattern)) return statSync(pattern, { throwIfNoEntry: false })?.isDirectory() ? [pattern] : [];
  const prefix = pattern.startsWith("./") ? "./" : "";
  const searchPattern = /(^|\/)\*\*\/?$/.test(pattern) ? `${pattern.replace(/\/$/, "")}/*` : pattern;
  const absolutePattern = isAbsolute(pattern);
  const directories = findDirectories(searchPattern, { onlyDirectories: true, expandDirectories: false, absolute: absolutePattern }).map((directory) => prefix + directory.replace(/\/$/, ""));
  const linkedDirectories = findEntries(searchPattern, { withFileTypes: true }).filter((entry) => entry.isSymbolicLink()).map((entry) => join(entry.parentPath, entry.name)).filter((directory) => statSync(directory, { throwIfNoEntry: false })?.isDirectory()).map((directory) => !absolutePattern && isAbsolute(directory) ? relative(process.cwd(), directory) : directory).map((directory) => prefix + directory.replace(/\\/g, "/"));
  return [...new Set([...directories, ...linkedDirectories])];
}
module.exports = { globSync };
