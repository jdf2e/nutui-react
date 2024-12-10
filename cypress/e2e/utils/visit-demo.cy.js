export const visitH5Demo = (componentName, delay = 500) => {
  const getPath = () => `${Cypress.env('baseUrl')}${componentName}`
  cy.visit(getPath(componentName), {
    onBeforeLoad: (win) => {
      Object.defineProperty(win.navigator, 'userAgent', {
        value:
          'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko) Version/10.0 Mobile/14E5239e Safari/602.1',
      })
    },
  })
  cy.get('#nav').contains(componentName)
  cy.wait(delay)
}
export const visitTaroDemo = (path, componentName, delay = 1000) => {
  const getPath = (component) =>
    `${Cypress.env('baseUrl')}${path}/pages/${component.toLowerCase()}/index`

  cy.visit(getPath(componentName))
  cy.get('.applets-demo-header').contains(componentName)
  cy.wait(delay)
}
