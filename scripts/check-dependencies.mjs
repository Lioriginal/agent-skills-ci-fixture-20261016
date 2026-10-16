import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const manifest = JSON.parse(readFileSync(new URL('../package.json', import.meta.url), 'utf8'));
const lock = JSON.parse(readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'));
const root = lock.packages?.[''];
assert.ok(root, 'Lockfile must contain the root package');
assert.equal(lock.lockfileVersion, 3);
assert.equal(lock.name, manifest.name);
assert.equal(lock.version, manifest.version);
assert.equal(root.name, manifest.name);
assert.equal(root.version, manifest.version);
for (const entry of [manifest, lock, root]) {
  for (const field of ['dependencies', 'devDependencies', 'optionalDependencies', 'peerDependencies', 'bundledDependencies', 'bundleDependencies']) {
    assert.equal(Object.keys(entry[field] ?? {}).length, 0,
      `${field} requires a registry-backed audit and dependency installation policy`);
  }
}
assert.deepEqual(Object.keys(lock.packages), [''], 'Lockfile must have no dependency packages');
assert.equal(manifest.workspaces, undefined, 'Workspaces require a broader dependency audit');
console.log('Dependency-free manifest and lockfile verified.');
