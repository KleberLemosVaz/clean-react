export default {
  roots: ['<rootDir>/src'],
  collecCoverageFrom: ['<rootDir>/src/**/*.{ts,tsx}'],
  collectCoverage: true,
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  }
}
