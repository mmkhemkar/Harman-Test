export default {
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },

  moduleNameMapper: {
    "\\.(css|scss|less)$": "identity-obj-proxy"
  },

  testMatch: [
    "<rootDir>/src/**/*.test.ts",
    "<rootDir>/src/**/*.test.tsx"
  ],

  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/tests/",
    "<rootDir>/playwright-report/",
    "<rootDir>/test-results/"
  ]
};