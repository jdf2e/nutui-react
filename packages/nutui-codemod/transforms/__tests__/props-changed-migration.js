jest.autoMockOff()
const defineTest = require('jscodeshift/dist/testUtils').defineTest

describe('reverse-identifiers', () => {
  defineTest(
    __dirname,
    'props-changed-migration',
    null,
    'components/button/index',
    {
      parser: 'babylon',
    }
  )
})
