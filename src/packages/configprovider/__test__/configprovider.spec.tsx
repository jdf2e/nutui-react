import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import zhTW from '@/locales/zh-TW'
import enUS from '@/locales/en-US'

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
