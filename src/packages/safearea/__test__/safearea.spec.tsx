import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SafeArea } from '../safearea'

describe('SafeArea Component', () => {
  test('should render bottom position by default', () => {
    const { container } = render(<SafeArea />)
    const el = container.querySelector('.nut-safe-area')
    expect(el).toHaveClass('nut-safe-area-position-bottom')
  })

  test('should render top position', () => {
    const { container } = render(<SafeArea position="top" />)
    const el = container.querySelector('.nut-safe-area')
    expect(el).toHaveClass('nut-safe-area-position-top')
  })

  test('should render left, right, horizontal, and all positions for foldable / landscape devices', () => {
    const { container: cLeft } = render(<SafeArea position="left" />)
    expect(cLeft.querySelector('.nut-safe-area')).toHaveClass(
      'nut-safe-area-position-left'
    )

    const { container: cRight } = render(<SafeArea position="right" />)
    expect(cRight.querySelector('.nut-safe-area')).toHaveClass(
      'nut-safe-area-position-right'
    )

    const { container: cHoriz } = render(<SafeArea position="horizontal" />)
    expect(cHoriz.querySelector('.nut-safe-area')).toHaveClass(
      'nut-safe-area-position-horizontal'
    )

    const { container: cAll } = render(<SafeArea position="all" />)
    expect(cAll.querySelector('.nut-safe-area')).toHaveClass(
      'nut-safe-area-position-all'
    )
  })

  test('should support custom className and style', () => {
    const { container } = render(
      <SafeArea
        position="bottom"
        className="custom-safe"
        style={{ background: 'red' }}
      />
    )
    const el = container.querySelector('.nut-safe-area')
    expect(el).toHaveClass('custom-safe')
    expect(el).toHaveStyle({ background: 'red' })
  })
})
