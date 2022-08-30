export default {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: [
    './node_modules',
    './dist',
    './scripts',
    './src/sites',
    './src/styles',
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  preset: 'ts-jest',
  testPathIgnorePatterns: [
    './node_modules',
    './dist',
    './scripts',
    './src/sites',
    './src/styles',
  ],
  testEnvironment: 'jsdom',
  testRegex: '(/__tests__/*|(\\.|/)(test|spec))\\.(ts|tsx)$',
  transform: { '\\.[jt]sx?$': 'ts-jest' },
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
}
