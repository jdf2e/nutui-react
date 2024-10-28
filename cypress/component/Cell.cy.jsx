import React from 'react'
import { Cell } from '../../src/packages/cell/cell.taro'
import { Switch } from '../../src/packages/switch/switch.taro'

it('prop title extra description test', () => {
  cy.mount(
    <Cell
      data-testid="prop"
      title="我是标题"
      description="我是描述"
      extra="描述文字"
    />
  )
  cy.get('.nut-cell-title').should('contain.text', '我是标题')
  cy.get('.nut-cell-description').should('contain.text', '我是描述')
  cy.get('.nut-cell-extra').should('contain.text', '描述文字')
})
it('prop ', () => {
  cy.mount(<Cell title="URL 跳转" extra="https://m.jd.com/" />)
  cy.get('.nut-cell-extra').should('be.visible')
})

it('emit click event', () => {
  const testClick = () => {}
  cy.mount(<Cell data-testid="emit-click" onClick={() => testClick()} />)
  cy.get('[data-testid="emit-click"]').click().trigger('testClick')
})

it('slot default test', () => {
  cy.mount(<Cell title={<div>自定义内容</div>} extra="描述文字" />)
  cy.root().should('contain.html', '<div>自定义内容</div>')
})

it('slot extra', () => {
  cy.mount(<Cell title="Switch" extra={<Switch defaultChecked />} />)
  cy.get('.nut-switch').should('be.visible')
  // expect(container.querySelector('.nut-switch')).toBeInTheDocument()
})
