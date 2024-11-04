const getPath = (component) => `layout/pages/${component}/index`

describe('layout components test', () => {
  it('divider successfully passes', () => {
    cy.visit(getPath('divider'))
    cy.get('.applets-demo-header').contains('Divider')
    // Click URL
    cy.contains('垂直分割线').scrollIntoView()
    cy.contains('链接').click()
    cy.window().then((win) => {
      const currentPath = win.location.pathname
      expect(currentPath).to.equal('/')
    })
    cy.wait(400)
  })

  it('grid successfully passes', () => {
    cy.visit(getPath('grid'))
    cy.get('.applets-demo-header').contains('Grid')
    // GridItem Click
    cy.contains('点击子项事件').scrollIntoView()
    cy.get('h2').then((element) => {
      if (element.has('点击子项事件')) {
        cy.wrap(element)
          .next()
          .then((nextElement) => {
            // 在这里对下一个节点进行操作
            nextElement.find('.nut-grid-item').eq(-2).click()
            cy.contains('点击了文字，第2个')
          })
      }
    })
    cy.wait(400)
  })

  it('layout successfully passes', () => {
    cy.visit(getPath('layout'))
    cy.get('.applets-demo-header').contains('Layout')
    // layout test
    cy.contains('span:24').parent().children().should('have.length', 1)
    cy.contains('span:12').parent().parent().children().should('have.length', 2)
    cy.contains('span:8').parent().parent().children().should('have.length', 3)
    cy.contains('span:6').parent().parent().children().should('have.length', 4)
    cy.wait(400)
  })

  it('space successfully passes', () => {
    cy.visit(getPath('space'))
    cy.get('.applets-demo-header').contains('Space')
    // Space Test
    cy.contains('垂直')
      .next()
      .find('.nut-space')
      .should('have.class', 'nut-space-vertical')
    cy.wait(400)
  })

  it('sticky successfully passes', () => {
    cy.visit(getPath('sticky'))
    cy.get('.applets-demo-header').contains('Sticky')
    // Scroll Sticky
    cy.get('.demo').scrollTo('bottom')
    cy.contains('距离顶部120px').parent().should('have.css', 'top', '120px')
    cy.get('.demo').scrollTo('top')
    cy.contains('距离底部0px').parent().should('have.css', 'bottom', '0px')
    cy.wait(400)
  })

  it('safearea successfully passes', () => {
    cy.visit(getPath('safearea'))
    cy.get('.applets-demo-header').contains('SafeArea')
    // SafeArea Class
    cy.get('.demo').scrollTo('bottom')
    cy.get('.nut-safe-area').should('exist')
    cy.get('.nut-safe-area-position-bottom').should('exist')
    cy.wait(400)
  })
})
