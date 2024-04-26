import * as React from 'react'
import { render, waitFor, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AnimateType } from '../types'

import { Animate } from '../animate'

const testType = [
  'shake',
  'ripple',
  'breath',
  'float',
  'jump',
  'slide-right',
  'slide-left',
  'slide-top',
  'slide-bottom',
  'twinkle',
  'flicker',
]

test('should change classname when using type prop', () => {
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i] as AnimateType
    const { container } = render(<Animate type={typeProp} />)
    const animate = container.querySelector('.nut-ani-container')
    expect(animate).toHaveClass(`nut-animate-${typeProp}`)
  }
})

test('trigger animate with loop', async () => {
  const handleClick = vi.fn()
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i] as AnimateType
    const { container } = render(
      <Animate type={typeProp} action="click" loop onClick={handleClick} />
    )
    const animate = container.querySelectorAll('.nut-ani-container')[0]
    fireEvent.click(animate)
    await waitFor(() => expect(handleClick).toBeCalled())

    expect(animate).toHaveClass('loop')
    expect(animate).toHaveClass(`nut-animate-${typeProp}`)

    setTimeout(() => {
      expect(animate).toHaveClass('loop')
      expect(animate).toHaveClass(`nut-animate-${typeProp}`)
    }, 1500)
  }
})

test('trigger animate', async () => {
  const handleClick = vi.fn()
  for (let i = 0; i < testType.length; i++) {
    const typeProp = testType[i] as AnimateType
    const { container } = render(
      <Animate type={typeProp} action="click" onClick={handleClick} />
    )
    const animate = container.querySelectorAll('.nut-ani-container')[0]
    fireEvent.click(animate)
    await waitFor(() => expect(handleClick).toBeCalled())

    expect(animate).not.toHaveClass('loop')
    expect(animate).toHaveClass(`nut-animate-${typeProp}`)

    setTimeout(() => {
      expect(animate).not.toHaveClass('loop')
      expect(animate).not.toHaveClass(`nut-animate-${typeProp}`)
    }, 1500)
  }
})
