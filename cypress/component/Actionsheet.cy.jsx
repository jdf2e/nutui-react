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

// it('props test choose item and show value', async () => {
//   const choose = vi.fn()
//   mount(
//     <ActionSheet
//       visible
//       title="弹层标题"
//       description="弹层描述信息"
//       cancelText="关闭弹层"
//       options={menulist}
//       onSelect={choose}
//     />
//   )
//   const chooseTagEle = container.querySelectorAll(
//     '.nut-actionsheet-list .nut-actionsheet-item'
//   )[0]
//   fireEvent.click(chooseTagEle)
//   await waitFor(() => expect(choose.mock.calls[0][0].name).toEqual('选项一'))
// })

// it('props test disabled item has disabled classes', async () => {
//   const choose = vi.fn()
//   mount(
//     <ActionSheet
//       visible
//       title="弹层标题"
//       description="弹层描述信息"
//       cancelText="关闭弹层"
//       options={menulist}
//       onSelect={choose}
//     />
//   )
//   const options = container.querySelectorAll(
//     '.nut-actionsheet-list .nut-actionsheet-item'
//   )
//   const disableItem = options[1]
//   expect(disableItem).toHaveClass('nut-actionsheet-item disabled')
// })

// it('props test click disabled item and not call fn', async () => {
//   const choose = vi.fn()
//   mount(
//     <ActionSheet
//       visible
//       title="弹层标题"
//       description="弹层描述信息"
//       cancelText="关闭弹层"
//       options={menulist}
//       onSelect={choose}
//     />
//   )
//   const options = container.querySelectorAll(
//     '.nut-actionsheet-list .nut-actionsheet-item'
//   )
//   const disableItem = options[1]
//   fireEvent.click(disableItem)
//   await waitFor(() => expect(choose).not.toBeCalled())
// })
