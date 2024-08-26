import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { ActionSheet } from '../actionsheet'

const testUtils = new TestUtils()
describe('App', () => {
  it('RenderComponent', async () => {
    console.log(777)
    // React跟Vue相同用法
    await testUtils.mount(ActionSheet, {})
    // 等待页面出现.btn这个节点
    const btn = await testUtils.queries.waitForQuerySelector('.btn')
    // 等待react的渲染更新完成
    await testUtils.act(() => {
      // 触发点击事件
      testUtils.fireEvent.click(btn)
    })
    // 打印渲染结果
    expect(testUtils.html()).toMatchSnapshot()
    // <div class="hello">...
  })
})
