import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
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
describe('App', () => {
  it('props test options ', async () => {
    // React跟Vue相同用法
    await testUtils.mount(ActionSheet, {
      props: {
        visible: true,
        title: '弹层标题',
        description: '弹层描述信息',
        cancelText: '关闭弹层',
        options: menulist,
      },
    })
    // 等待页面出现.btn这个节点
    const options = await testUtils.queries.waitForQuerySelectorAll(
      '.nut-actionsheet-list .nut-actionsheet-item'
    )
    expect(options.length).toBe(3)
    // const btn = await testUtils.queries.waitForQuerySelector('.btn')
    // // 等待react的渲染更新完成
    // await testUtils.act(() => {
    //   // 触发点击事件
    //   testUtils.fireEvent.click(btn)
    // })
    // // 打印渲染结果
    // expect(testUtils.html()).toMatchSnapshot()
    // <div class="hello">...
  })
})
