// react
const path = require('path')

const defineJestConfig =
  require('@tarojs/test-utils-react/dist/jest.js').default

module.exports = defineJestConfig({
  // testEnvironment: 'jsdom',  // 测试使用的环境
  testEnvironment: 'jest-environment-jsdom', // 测试使用的环境
  testMatch: ['<rootDir>/src/packages/**/*.taro.test.{tsx,ts}'], // 测试文件匹配
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/packages/**/*.taro.tsx',
    '!<rootDir>/src/packages/**/demo.taro.tsx',
  ],
  moduleNameMapper: {
    // ...
    '@tarojs/taro': '@tarojs/taro-h5',
    '^@/packages/(.*)$': '<rootDir>/src/packages/$1',
    '^@/utils/(.*)$': '<rootDir>/src/utils/$1',
    // '@tarojs/components': '@tarojs/components/lib/react',
    // '@tarojs/plugin-framework-react/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    // '@tarojs/plugin-framework-vue2/dist/runtime': '<rootDir>/__mocks__/taro-framework',
    // '@tarojs/plugin-framework-vue3/dist/runtime': '<rootDir>/__mocks__/taro-framework',
  },
})
