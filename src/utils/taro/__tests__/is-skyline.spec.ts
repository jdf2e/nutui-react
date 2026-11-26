import { afterEach, describe, expect, test, vi } from 'vitest'
import Taro from '@tarojs/taro'
import { isSkyline } from '../is-skyline'

vi.mock('@tarojs/taro', () => ({
  default: {
    getCurrentInstance: vi.fn(),
    getCurrentPages: vi.fn(),
    getApp: vi.fn(),
  },
}))

const mockedTaro = vi.mocked(Taro)
const originalSkylineEnv = process.env.SKYLINE

afterEach(() => {
  vi.resetAllMocks()
  if (originalSkylineEnv === undefined) {
    delete process.env.SKYLINE
  } else {
    process.env.SKYLINE = originalSkylineEnv
  }
})

describe('isSkyline', () => {
  test('运行时明确为 webview 时返回 false，即使编译期开启了 SKYLINE=1', () => {
    process.env.SKYLINE = '1'
    mockedTaro.getCurrentInstance.mockReturnValue({
      page: { renderer: 'webview' },
    } as any)

    expect(isSkyline()).toBe(false)
  })

  test('运行时为 skyline 时返回 true，即使未设置编译期 SKYLINE', () => {
    delete process.env.SKYLINE
    mockedTaro.getCurrentInstance.mockReturnValue({ page: {} } as any)
    mockedTaro.getCurrentPages.mockReturnValue([{ renderer: 'skyline' }] as any)

    expect(isSkyline()).toBe(true)
  })

  test('运行时无法获取 renderer 时回退到编译期 SKYLINE 开关', () => {
    process.env.SKYLINE = '1'
    mockedTaro.getCurrentInstance.mockReturnValue(null as any)
    mockedTaro.getCurrentPages.mockReturnValue([] as any)
    mockedTaro.getApp.mockReturnValue(null as any)

    expect(isSkyline()).toBe(true)

    process.env.SKYLINE = ''
    expect(isSkyline()).toBe(false)
  })
})
