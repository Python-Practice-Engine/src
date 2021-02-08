module.exports = {
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    testMatch: [
      '<rootDir>/__tests__/*.test.js'
    ],
    transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs)$"],
    preset: "jest-mysql"
  };