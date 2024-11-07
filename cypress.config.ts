import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:10086/#/',
    specPattern: 'cypress/e2e/**/*.js',
  },
  viewportWidth: 414,
  viewportHeight: 896,
})
