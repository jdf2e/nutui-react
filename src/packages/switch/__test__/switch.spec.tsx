import * as React from 'react'
import { render, fireEvent, waitFor, act } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Loading1 } from '@nutui/icons-react'
import { Switch } from '../switch'

describe('Switch', () => {
  test('renders with className, style, activeText, inactiveText and handles toggle', async () => {
    const testFn = vi.fn()
    const { container } = render(
      <Switch
        className="switch-test"
        style={{
          fontSize: '12px',
          '--nutui-switch-active-background-color': 'blue',
        }}
        activeText="开"
        inactiveText="关"
        defaultChecked={false}
        onChange={testFn}
      />
    )
    const el = container.querySelector('.nut-switch')
    expect(el).not.toBeNull()
    expect(el).toHaveClass('nut-switch', 'switch-test', 'nut-switch-close')
    expect(el).toHaveStyle({
      fontSize: '12px',
    })
    expect(el).toHaveTextContent('关')

    await act(async () => {
      fireEvent.click(el!)
    })

    expect(testFn).toHaveBeenCalledWith(true)
    expect(el).toHaveClass('nut-switch')
    expect(el).not.toHaveClass('nut-switch-close')
    expect(el).toHaveTextContent('开')
  })

  test('disabled switch cannot be clicked', async () => {
    const testFn = vi.fn()
    const { container } = render(<Switch disabled onChange={testFn} />)
    const el = container.querySelector('.nut-switch')
    expect(el).toHaveClass('nut-switch-disabled', 'nut-switch-disabled-close')

    await act(async () => {
      fireEvent.click(el!)
    })

    expect(testFn).not.toHaveBeenCalled()
  })

  test('loadingIcon renders while loading', async () => {
    const { container } = render(
      <Switch loading loadingIcon={<Loading1 data-testid="loading-icon" />} />
    )
    expect(
      container.querySelector('.nut-switch-button svg')
    ).toBeInTheDocument()
  })

  test('async onChange error interrupts toggle', async () => {
    const errorFn = vi.fn().mockRejectedValue(new Error('Async error'))
    const { container } = render(
      <Switch
        defaultChecked={false}
        activeText="开"
        inactiveText="关"
        onChange={errorFn}
      />
    )
    const el = container.querySelector('.nut-switch')
    expect(el).toHaveClass('nut-switch-close')

    await act(async () => {
      fireEvent.click(el!)
    })

    expect(errorFn).toHaveBeenCalledWith(true)
    // After async rejection, switch should remain closed (not toggled)
    await waitFor(() => {
      expect(el).toHaveClass('nut-switch-close')
      expect(el).toHaveTextContent('关')
    })
  })
})
