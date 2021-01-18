module.exprts = {
  branches: ["main"],
  repositoryUrl: "https://github.com/runtiva/viewer-site.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
