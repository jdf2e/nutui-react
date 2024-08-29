import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { waitFor } from '@testing-library/react'
import { Barrage } from '../barrage.taro'

const testUtils = new TestUtils()
const barrageList = [
  '画美不看',
  '不明觉厉',
  '喜大普奔',
  '男默女泪',
  '累觉不爱',
  '爷青结-',
]
const execFn = async (desc: string, component: any, props: object, cb: any) => {
  it(desc, async () => {
    await testUtils.mount(component, {
      props,
    })
    await cb()
    testUtils.unmout()
  })
}
describe('barrage-taro', () => {
  execFn(
    'should danmu list props',
    Barrage,
    {
      duration: 300,
      list: barrageList,
    },
    async () => {
      await waitFor(
        () => {
          testUtils.queries
            .querySelectorAll('.barrage-item')
            .forEach((item) => {
              expect(Number(item.getAttribute('data-index'))).toBeLessThan(
                barrageList.length
              )
            })
        },
        { timeout: 4000 }
      )
    }
  )
})
