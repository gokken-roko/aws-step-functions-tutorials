// TODO: ESM support
// https://jestjs.io/ja/docs/ecmascript-modules
module.exports = {
  testEnvironment: "node",
  roots: ["<rootDir>/test", "<rootDir>lambda"],
  testMatch: ["**/*.test.ts"],
  transform: {
    //"^.+\\.tsx?$": "ts-jest",
    // https://github.com/swc-project/jest
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
};
