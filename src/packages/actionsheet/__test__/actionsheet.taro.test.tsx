import TestUtils from '@tarojs/test-utils-react'
import { waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { jest } from '@jest/globals'
import { ActionSheet, ActionSheetOption } from '../actionsheet.taro'

const menulist: ActionSheetOption<string | boolean>[] = [
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
const testUtils = new TestUtils()
describe('actionsheet-taro', () => {
  it('props test options ', async () => {
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
      },
    })
    const options = await testUtils.queries.waitForQuerySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )
    expect(options.length).toBe(3)
  })
  it('props test cancelText ', async () => {
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
      },
    })
    const cancelEle = testUtils.queries.querySelectorAll(
      '.nut-actionsheet-cancel'
    )[0]
    expect(cancelEle).toHaveTextContent('关闭弹层')
  })

  it('props test has value ', async () => {
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
      },
    })
    const chooseTagEle = testUtils.queries.querySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )[0]
    expect(chooseTagEle).toHaveTextContent('选项一')
    expect(chooseTagEle).toHaveClass('danger')
  })

  it('props test choose item and show value', async () => {
    const choose: any = jest.fn()
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
        onSelect: choose,
      },
    })
    const chooseTagEle = testUtils.queries.querySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )[0]
    await testUtils.act(() => {
      testUtils.fireEvent.click(chooseTagEle)
    })
    await waitFor(() => expect(testUtils.html()).toMatchSnapshot())
  })

  it('props test disabled item has disabled classes', async () => {
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
      },
    })
    const options = testUtils.queries.querySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )
    const disableItem = options[1]
    expect(disableItem).toHaveClass('nut-actionsheet-item disabled')
  })

  it('props test click disabled item and not call fn', async () => {
    const choose = jest.fn()
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
        onSelect: choose,
      },
    })
    const options = testUtils.queries.querySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )
    const disableItem = options[0]
    await testUtils.act(() => {
      testUtils.fireEvent.click(disableItem)
    })
    await waitFor(() => expect(choose).not.toBeCalled())
  })
})
