import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import enUS from '@/locales/en-US'

import { ConfigProvider, useConfig } from '../configprovider'

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

  test('should theme variable and locale variable injection correctly', () => {
    const Children: React.FC = () => {
      const { locale } = useConfig()
      return <>{locale.save}</>
    }
    const darkTheme = {
      nutuiBrandColor: 'green',
      nutuiBrandColorStart: 'green',
      nutuiBrandColorEnd: 'green',
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
      '--nutui-brand-color: green; --nutui-brand-color-start: green; --nutui-brand-color-end: green; margin: 8px;'
    )
  })
})
