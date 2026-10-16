# Disposable Agent Skills CI fixture

Synthetic, dependency-free Node 26 fixture. This is a workflow verification project, not production code. review-target.js intentionally contains planted arithmetic/sensitive-field review defects; the CI baseline tests are separate. No user data, credentials, installed skills, caches or personal configuration are included.

Checks: syntax, tests, build, zero-dependency guard and offline audit. The workflow uses standard ubuntu-latest with no artifact upload, package publishing, cache or deployment step.
