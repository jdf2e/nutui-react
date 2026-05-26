import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import zhTW from '@/locales/zh-TW'
import enUS from '@/locales/en-US'
import zhCN from '@/locales/zh-CN'

import { ConfigProvider, useConfig, setDefaultConfig } from '../configprovider'

describe('configprovider', () => {
  let container: any

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
  })

  afterEach(() => {
    document.body.removeChild(container)
    container = null
  })

  test('should match snapshot', () => {
    const { container } = render(
      <ConfigProvider className="aa" style={{ margin: 8 }}>
        测试
      </ConfigProvider>
    )
    expect(container.firstChild?.nodeName).toBe('DIV')
    expect(container).toMatchSnapshot()
  })

  test('should setDefault correctly', () => {
    setDefaultConfig({
      locale: zhTW,
      theme: {
        nutuiColorPrimary: 'red',
      },
    })
    const Children: React.FC = () => {
      const { locale } = useConfig()
      return <>{locale.confirm}</>
    }
    const { container } = render(
      <ConfigProvider>
        <Children />
      </ConfigProvider>
    )

    const ele = container.querySelector('.nut-configprovider')
    expect(ele).toHaveTextContent('確認')
    expect(ele).toHaveClass('nut-configprovider')
    expect(ele).toHaveStyle('--nutui-color-primary: red')
  })

  test('should theme variable and locale variable injection correctly', () => {
    const Children: React.FC = () => {
      const { locale } = useConfig()
      return <>{locale.save}</>
    }
    const darkTheme = {
      nutuiColorPrimary: 'green',
      nutuiColorPrimaryStop1: 'green',
      nutuiColorPrimaryStop2: 'green',
    }
    const { container } = render(
      <ConfigProvider
        data-testid="configprovider"
        locale={enUS}
        className="bb"
        style={{ margin: 8 }}
        theme={darkTheme}
      >
        <Children />
      </ConfigProvider>
    )

    const ele = container.querySelector('.nut-configprovider')
    expect(ele).toHaveTextContent('Save')
    expect(ele).toHaveClass('nut-configprovider bb')
    expect(ele).toHaveStyle(
      '--nutui-color-primary: green; --nutui-color-primary-stop-1: green; --nutui-color-primary-stop-2: green; margin: 8px;'
    )
  })
})

describe('locale new fields', () => {
  test('zh-CN should have back, clear and image.errorTip', () => {
    expect(zhCN.back).toBe('返回')
    expect(zhCN.clear).toBe('清除')
    expect(zhCN.image.errorTip).toBe('图片加载失败')
  })

  test('zh-TW should have back, clear and image.errorTip', () => {
    expect(zhTW.back).toBe('返回')
    expect(zhTW.clear).toBe('清除')
    expect(zhTW.image.errorTip).toBe('圖片加載失敗')
  })

  test('en-US should have back, clear and image.errorTip', () => {
    expect(enUS.back).toBe('Back')
    expect(enUS.clear).toBe('Clear')
    expect(enUS.image.errorTip).toBe('Image failed to load')
  })
})

describe('zh-CN dayAriaLabel', () => {
  const dayAriaLabel = zhCN.calendaritem.dayAriaLabel!

  test('should return active today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, true, false)).toBe(
      '已选定今日5月21号'
    )
  })

  test('should return active non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, true, false)).toBe('已选定5月21号')
  })

  test('should return disabled today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, true)).toBe(
      '5月21号今日按钮变暗'
    )
  })

  test('should return disabled non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, true)).toBe(
      '5月21号按钮变暗'
    )
  })

  test('should return today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, false)).toBe('5月21号今日')
  })

  test('should return normal label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, false)).toBe('5月21号')
  })
})

describe('zh-TW dayAriaLabel', () => {
  const dayAriaLabel = zhTW.calendaritem.dayAriaLabel!

  test('should return active today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, true, false)).toBe(
      '已選定今日5月21號'
    )
  })

  test('should return active non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, true, false)).toBe('已選定5月21號')
  })

  test('should return disabled today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, true)).toBe(
      '5月21號今日按鈕變暗'
    )
  })

  test('should return disabled non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, true)).toBe(
      '5月21號按鈕變暗'
    )
  })

  test('should return today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, false)).toBe('5月21號今日')
  })

  test('should return normal label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, false)).toBe('5月21號')
  })
})

describe('en-US dayAriaLabel', () => {
  const dayAriaLabel = enUS.calendaritem.dayAriaLabel!

  test('should return active today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, true, false)).toBe(
      'Selected Today, 2023-5-21'
    )
  })

  test('should return active non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, true, false)).toBe(
      'Selected 2023-5-21'
    )
  })

  test('should return disabled today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, true)).toBe(
      'Today, 2023-5-21 disabled'
    )
  })

  test('should return disabled non-today label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, true)).toBe(
      '2023-5-21 disabled'
    )
  })

  test('should return today label', () => {
    expect(dayAriaLabel(2023, 5, 21, true, false, false)).toBe(
      'Today, 2023-5-21'
    )
  })

  test('should return normal label', () => {
    expect(dayAriaLabel(2023, 5, 21, false, false, false)).toBe('2023-5-21')
  })
})
