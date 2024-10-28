import React from 'react'
import { mount } from 'cypress/react18'
import { ActionSheet } from '../../src/packages/actionsheet/actionsheet'

const menulist = [
  {
    name: '选项一',
    description: '选项一的描述信息',
    danger: true,
  },
  {
    name: '选项二',
    disabled: true,
  },
  {
    name: '必填',
    name1: '选项三',
  },
]

it('props test options ', () => {
  mount(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  cy.get('.nut-actionsheet-list .nut-actionsheet-item').should('have.length', 3)
})

it('props test cancelText ', async () => {
  mount(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  cy.get('.nut-actionsheet-cancel').then(($el) => {
    const el = cy.wrap($el)
    el.should('have.text', '关闭弹层')
  })
})

it('props test has value ', async () => {
  mount(
    <ActionSheet
      visible
      title="弹层标题"
      description="弹层描述信息"
      cancelText="关闭弹层"
      options={menulist}
    />
  )
  cy.get('.nut-actionsheet-list .nut-actionsheet-item')
    .eq(0)
    .then(($el) => {
      const el = cy.wrap($el)
      el.should('have.text', '选项一选项一的描述信息')
      el.should('have.class', 'danger')
    })
})
