const getPath = (component) => `base/pages/${component}/index`

describe('base components test', () => {
  it('button successfully passes', () => {
    cy.visit(getPath('button'))
    cy.get('.applets-demo-header').contains('Button')
    // Click Loading Test and loading icon shows
    cy.contains('button', 'Click me').scrollIntoView().click()
    cy.contains('button', 'Click me')
      .parent()
      .find('i.nut-icon-Loading')
      .should('exist')
    cy.wait(500)
  })

  it('cell successfully passes', () => {
    cy.visit(getPath('cell'))
    cy.get('.applets-demo-header').contains('Cell')
    // Click Switch
    cy.contains('自定义右侧区域').scrollIntoView()
    cy.get('.nut-switch-button').click()
    cy.get('.nut-switch-button')
      .parent()
      .should('have.class', 'nut-switch-close')
    cy.get('.nut-switch-button').click()
    cy.get('.nut-switch-button')
      .parent()
      .should('have.class', 'nut-switch-open')
    // Jump URL
    cy.contains('链接 | 分组用法').scrollIntoView()
    cy.contains('/pages/index/index').click()
    cy.wait(500)
    cy.window().then((location) => {
      expect(location.location.pathname).to.equal('/')
    })
    cy.wait(400)
  })

  it('ConfigProvider successfully passes', () => {
    cy.visit(getPath('configprovider'))
    cy.get('.applets-demo-header').contains('ConfigProvider')
    // Expected Rate
    cy.get('.nut-rate')
      .first()
      .find('.nut-rate-item')
      .eq(-2)
      .find('.nut-rate-item-icon')
      .click()
    cy.get('.nut-rate')
      .first()
      .find('.nut-rate-item .nut-rate-item-icon')
      .filter('.nut-rate-item-icon-disabled')
      .should('have.length', 1)
    cy.get('.nut-rate')
      .first()
      .find('.nut-rate-item')
      .first()
      .find('.nut-rate-item-icon')
      .click()
    cy.get('.nut-rate')
      .first()
      .find('.nut-rate-item .nut-rate-item-icon')
      .filter('.nut-rate-item-icon-disabled')
      .should('have.length', 4)
    cy.wait(400)
  })

  it('Icon successfully passes', () => {
    cy.visit(getPath('icon'))
    cy.get('.applets-demo-header').contains('Icon')
    // V12 Icon Click Test
    cy.contains('V12 Icon').scrollIntoView()
    cy.get('i.nut-icon-thumbs-up').click()
    cy.contains('<ThumbsUp />')
    cy.get(
      'i.nut-icon-heart-fill.nut-icon-am-breathe.nut-icon-am-infinite'
    ).click()
    cy.contains(
      `<HeartFill className='nut-icon-am-breathe nut-icon-am-infinite' />`
    )
    cy.wait(400)
  })
  it('Image successfully passes', () => {
    cy.visit(getPath('image'))
    cy.get('.applets-demo-header').contains('Image')
    cy.wait(500)
    // Lazy Load Scroll
    cy.contains('图片懒加载').scrollIntoView()
    cy.get('.taro-scroll-view__scroll-y .taro-img__mode-scaletofill')
      .filter('[src]')
      .should('have.length', 3)
    cy.get('.taro-scroll-view__scroll-y').scrollTo('bottom', { duration: 1000 })
    cy.get('.taro-scroll-view__scroll-y .taro-img__mode-scaletofill')
      .filter('[src]')
      .should('have.length.greaterThan', 3)
    cy.wait(400)
  })
  it('Overlay successfully passes', () => {
    cy.visit(getPath('overlay'))
    cy.get('.applets-demo-header').contains('Overlay')
    // Display Overlay
    cy.contains('嵌套内容').scrollIntoView()
    cy.get('.nut-button-success').click()
    cy.contains('这里是正文')
    cy.contains('这里是正文')
      .parent()
      .parent()
      .should('have.class', 'nut-overlay')
      .click()
    cy.contains('这里是正文').should('not.exist')
    cy.get('nut-overlay').should('not.exist')
  })
})
Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})
