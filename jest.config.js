// jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

  moduleDirectories: ['node_modules', '<rootDir>/'],

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    /**
     * 最新の d3 の module が esm として解決されてしまうため、min.js (common.js) を見るようにする
     * @see {@url https://github.com/facebook/jest/issues/12036#issuecomment-1039439333}
     */
    '^d3-(.*)$': '<rootDir>/node_modules/d3-$1/dist/d3-$1.min.js',
  },

  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
