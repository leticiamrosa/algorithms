module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    "^.+\\.(js|ts)$": "babel-jest"
  },
  testRegex : "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  transformIgnorePatterns: [
    "node_modules/"
  ],
};
