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
    'd3-scale-chromatic':
      '<rootDir>/node_modules/d3-scale-chromatic/dist/d3-scale-chromatic.min.js',
    'd3-interpolate':
      '<rootDir>/node_modules/.pnpm/d3-interpolate@3.0.1/node_modules/d3-interpolate/dist/d3-interpolate.min.js',
    'd3-color':
      '<rootDir>/node_modules/.pnpm/d3-color@3.1.0/node_modules/d3-color/dist/d3-color.min.js',
  },

  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
