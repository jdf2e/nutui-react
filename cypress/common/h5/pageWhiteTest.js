export const pageWhiteTest = (comName, fn, delay = 800) => {
  const getPath = (component) => `${Cypress.env('baseUrl')}${component}`

  cy.visit(getPath(comName), {
    onBeforeLoad: (win) => {
      Object.defineProperty(win.navigator, 'userAgent', {
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1',
      })
    },
  })
  cy.get('#nav').contains(comName)
  cy.wait(delay)
  fn()
}
