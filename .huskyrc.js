module.exports = {
  hooks: {
    "commit-msg": "commitlint -E HUSKY_GIT_PARAMS",
    "pre-commit": "npx lint-staged",
  },
};
