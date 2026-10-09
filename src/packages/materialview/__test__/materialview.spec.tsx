import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MaterialView } from '../materialview'

test('should render plain div without any config', () => {
  const { container } = render(
    <MaterialView>
      <span>plain</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el).toHaveClass('nut-materialview')
  expect(el.style.backdropFilter || '').toBe('')
})

test('should render with frostedGlass', () => {
  const { container } = render(
    <MaterialView frostedGlass={{ style: 'regular-light' }}>
      <span>content</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el).toHaveClass('nut-materialview')
  expect(el.style.backdropFilter).toBe('blur(20px)')
})

test('should render thin frostedGlass with 10px blur', () => {
  const { container } = render(
    <MaterialView frostedGlass={{ style: 'thin-light' }}>
      <span>thin</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backdropFilter).toBe('blur(10px)')
})

test('should render thick frostedGlass with 40px blur', () => {
  const { container } = render(
    <MaterialView frostedGlass={{ style: 'thick-dark' }}>
      <span>thick</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backdropFilter).toBe('blur(40px)')
  expect(el.style.backgroundColor).toBe('rgba(0, 0, 0, 0.3)')
})

test('should render with gradientBlur', () => {
  const { container } = render(
    <MaterialView gradientBlur={{ maxBlur: 0.5 }}>
      <span>gradient</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backdropFilter).toBe('blur(25px)')
})

test('frostedGlass takes priority over gradientBlur', () => {
  const { container } = render(
    <MaterialView
      frostedGlass={{ style: 'regular-light' }}
      gradientBlur={{ maxBlur: 0.5 }}
    >
      <span>priority</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backdropFilter).toBe('blur(20px)')
})

test('should render with targetId', () => {
  const { container } = render(
    <MaterialView targetId="abc" frostedGlass={{ style: 'thin-dark' }}>
      <span>target</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.dataset.targetId).toBe('abc')
})

test('should apply frostedGlass alpha', () => {
  const { container } = render(
    <MaterialView frostedGlass={{ style: 'regular-light', alpha: 0.8 }}>
      <span>alpha</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.opacity).toBe('0.8')
})

test('should apply overlayColor', () => {
  const { container } = render(
    <MaterialView
      frostedGlass={{ style: 'regular-light' }}
      overlayColor="rgba(255,0,0,0.5)"
    >
      <span>overlay</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backgroundColor).toBe('rgba(255, 0, 0, 0.5)')
})

test('should render scene with H5 preset class and borderRadius', () => {
  const { container } = render(
    <MaterialView scene="top-solid">
      <span>scene</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.classList.contains('FG-Light-PX')).toBe(true)
  expect(el.style.borderRadius).toBe('8px')
})

test('should render top-plain scene with 0 blur', () => {
  const { container } = render(
    <MaterialView scene="top-plain">
      <span>plain scene</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el.style.backdropFilter || '').toBe('')
  expect(el.style.borderRadius).toBe('8px')
})

test('should render top-bar scene with 10PX blur and 0px borderRadius', () => {
  const { container: cLight } = render(
    <MaterialView scene="top-bar" darkMode={false} />
  )
  const elLight = cLight.firstChild as HTMLElement
  expect(elLight.style.backdropFilter).toBe('blur(10PX)')
  expect(elLight.style.backgroundColor).toBe('rgba(255, 255, 255, 0.9)')
  expect(elLight.style.borderRadius).toBe('0px')

  const { container: cDark } = render(<MaterialView scene="top-bar" darkMode />)
  const elDark = cDark.firstChild as HTMLElement
  expect(elDark.style.backdropFilter).toBe('blur(10PX)')
  expect(elDark.style.backgroundColor).toBe('rgba(20, 23, 26, 0.85)')
  expect(elDark.style.borderRadius).toBe('0px')
})
