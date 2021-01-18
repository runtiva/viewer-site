module.exports = {
  //defaultBranch: "main",
  branches: "main",
  // [
  //   "+([0-9])?(.{+([0-9]),x}).x",
  //   "$default-branch",
  //   "next",
  //   "next-major",
  //   { name: "beta", prerelease: true },
  //   { name: "alpha", prerelease: true }
  // ],
  repositoryUrl: "https://github.com/runtiva/viewer-site.git",
  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    "@semantic-release/github"
  ]
};
