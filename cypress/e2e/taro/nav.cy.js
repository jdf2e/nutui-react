const getPath = (component) => `nav/pages/${component}/index`

describe('layout components test', () => {
  it('backtop successfully passes', () => {
    cy.visit(getPath('backtop'))
    cy.get('.applets-demo-header').contains('BackTop')
    cy.contains('顶部').should('not.be.visible')
    cy.contains('我是测试数据20').scrollIntoView()
    cy.contains('顶部').should('be.visible')
    cy.contains('顶部').click()
    cy.contains('我是测试数据20').should('not.be.visible')
    cy.contains('我是测试数据1').should('be.visible')
    cy.contains('顶部').should('not.be.visible')
    cy.wait(400)
  })
  it('elevator successfully passes', () => {
    cy.visit(getPath('elevator'))
    cy.get('.applets-demo-header').contains('Elevator')
    cy.contains('h2', '自定义内容').scrollIntoView()
    cy.get('.nut-elevator-list-inner.taro-scroll-view__scroll-y')
      .eq(4)
      .scrollTo('bottom')
      .then(() => {
        cy.get('.nut-elevator-list-inner.taro-scroll-view__scroll-y')
          .eq(4)
          .contains('河南')
          .should('be.visible')
      })
    cy.wait(400)
  })
  it('fixednav successfully passes', () => {
    cy.visit(getPath('fixednav'))
    cy.get('.applets-demo-header').contains('FixedNav')
    cy.get('.nut-fixednav-btn').contains('左侧展开').click()
    cy.get('.nut-fixednav-btn').contains('快速导航').click()
    cy.get('.nut-fixednav-btn').contains('自定义关').click()
    cy.wait(400)
  })
  it('navbar successfully passes', () => {
    cy.visit(getPath('navbar'))
    cy.wait(400)
  })
  it('sidenavbar successfully passes', () => {
    cy.visit(getPath('sidenavbar'))
    cy.wait(400)
  })
  it('tabbar successfully passes', () => {
    cy.visit(getPath('tabbar'))
    cy.wait(400)
  })
  it('tabs successfully passes', () => {
    cy.visit(getPath('tabs'))
    cy.wait(400)
  })
})
