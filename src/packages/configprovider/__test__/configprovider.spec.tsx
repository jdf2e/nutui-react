import * as React from 'react'

import { render } from '@testing-library/react'
import '@testing-library/jest-dom'

import { ConfigProvider } from '../configprovider'

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

  test('should theme variable injection correctly', () => {
    const darkTheme = {
      nutuiBrandColor: 'green',
      nutuiBrandColorStart: 'green',
      nutuiBrandColorEnd: 'green',
    }
    const { getByText, container } = render(
      <ConfigProvider
        data-testid="configprovider"
        className="bb"
        style={{ margin: 8 }}
        theme={darkTheme}
      >
        测试
      </ConfigProvider>
    )
    expect(getByText('测试')).toHaveTextContent('测试')
    expect(container.querySelector('.nut-configprovider')).toHaveClass(
      'nut-configprovider bb'
    )
    expect(container.querySelector('.nut-configprovider')).toHaveStyle(
      '--nutui-brand-color: green; --nutui-brand-color-start: green; --nutui-brand-color-end: green; margin: 8px;'
    )
  })
})
