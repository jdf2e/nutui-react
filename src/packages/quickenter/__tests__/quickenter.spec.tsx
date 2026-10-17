import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import QuickEnter from '../index'

describe('QuickEnter', () => {
  it('should render correctly when visible is true', () => {
    const { getByText } = render(<QuickEnter visible title="My QuickEnter" />)
    expect(getByText('My QuickEnter')).toBeInTheDocument()
  })

  it('should render options and handle click events', () => {
    const onChange = vi.fn()
    const options = [
      { title: 'Option 1', icon: 'Icon 1' },
      { title: 'Option 2', icon: 'Icon 2' },
    ]
    const { getByText } = render(
      <QuickEnter visible options={options} onChange={onChange} />
    )

    expect(getByText('Option 1')).toBeInTheDocument()
    expect(getByText('Option 2')).toBeInTheDocument()

    fireEvent.click(getByText('Option 1'))
    expect(onChange).toHaveBeenCalledWith(options[0], 0)
  })

  it('should trigger onClose when close button is clicked', () => {
    const onClose = vi.fn()
    const { container } = render(<QuickEnter visible onClose={onClose} />)
    const closeBtn = container.querySelector('.nut-quickenter-close-btn')
    expect(closeBtn).toBeTruthy()
    fireEvent.click(closeBtn!)
    expect(onClose).toHaveBeenCalled()
  })
})
