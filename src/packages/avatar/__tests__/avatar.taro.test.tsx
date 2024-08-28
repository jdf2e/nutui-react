import TestUtils from '@tarojs/test-utils-react'
import '@testing-library/jest-dom'
import { Avatar } from '../avatar.taro'

const classPrefix = `nut-avatar`
const testUtils = new TestUtils()
describe('avatar-taro', () => {
  it('small size props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        size: 'small',
      },
    })
    const item = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item).toHaveClass(`${classPrefix}-small`)
    testUtils.unmout()
  })
  it('normal size props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        size: 'normal',
      },
    })
    const item = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item).toHaveClass(`${classPrefix}-normal`)
    testUtils.unmout()
  })
  it('large size props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        size: 'large',
      },
    })
    const item = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item).toHaveClass(`${classPrefix}-large`)
    testUtils.unmout()
  })
  it('shape props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        size: 'large',
        shape: 'square',
      },
    })
    const item = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item).toHaveClass(`${classPrefix}-square`)
    testUtils.unmout()
  })
  it('bgcolor props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        background: 'rgb(112, 112, 112)',
      },
    })
    const item: any = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item?.style.backgroundColor).toBe('rgb(112, 112, 112)')
    testUtils.unmout()
  })
  it('color props', async () => {
    await testUtils.mount(Avatar, {
      props: {
        color: 'rgb(222, 222, 222)',
      },
    })
    const item: any = testUtils.queries.querySelector(`.${classPrefix}`)
    expect(item?.style.color).toBe('rgb(222, 222, 222)')
    testUtils.unmout()
  })
  it('url props', async () => {
    const src =
      'https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png'
    await testUtils.mount(Avatar, {
      props: {
        src,
      },
    })
    expect(testUtils.queries.querySelector('img')).toHaveAttribute('src', src)
    testUtils.unmout()
  })
})
