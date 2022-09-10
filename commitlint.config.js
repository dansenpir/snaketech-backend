module.exports = {
  "extends": [
    "@commitlint/config-conventional"
  ],
  "rules": {
    "type-enum": [
      2,
      "always",
      [
        "build",
        "bugfix",
        "ci",
        "chore",
        "docs",
        "feat",
        "fix",
        "hotfix",
        "perf",
        "refactor",
        "revert",
        "style",
        "test"
      ]
    ]
  }
}