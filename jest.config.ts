module.exports = {
  testEnvironment: "jsdom",

  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 60,
      functions: 60,
      lines: 60,
      statements: 60
    },
  },

   // Adjust testMatch to include __tests__ folder within src
  testMatch: ['<rootDir>/src/**/__tests__/**/*.[jt]s?(x)', '<rootDir>/src/**/*.(spec|test).[jt]s?(x)'],
  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',
  testPathIgnorePatterns: ['/node_modules/'],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};