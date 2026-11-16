import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MaterialView } from '../materialview'
import {
  getCornerRadius,
  getFrostedPreset,
  getMaterialClassName,
} from '../scene-presets'

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

test('should render scene with preset classes and borderRadius', () => {
  const { container } = render(
    <MaterialView scene="top-solid">
      <span>scene</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el).toHaveClass('nut-materialview--top-solid')
  expect(el).toHaveClass('FG-Light-PX')
  expect(el.style.borderRadius).toBe('8px')
})

test('should render top-plain scene with preset class and borderRadius', () => {
  const { container } = render(
    <MaterialView scene="top-plain">
      <span>plain scene</span>
    </MaterialView>
  )
  const el = container.firstChild as HTMLElement
  expect(el).toHaveClass('nut-materialview--top-plain')
  expect(el).toHaveClass('FG-Clear-PX')
  expect(el.style.borderRadius).toBe('8px')
})

test('should render top-bar scene with preset classes and 0px borderRadius', () => {
  const { container: cLight } = render(
    <MaterialView scene="top-bar" darkMode={false} />
  )
  const elLight = cLight.firstChild as HTMLElement
  expect(elLight).toHaveClass('nut-materialview--top-bar')
  expect(elLight).not.toHaveClass('nut-materialview--dark')
  expect(elLight.style.borderRadius).toBe('0px')

  const { container: cDark } = render(<MaterialView scene="top-bar" darkMode />)
  const elDark = cDark.firstChild as HTMLElement
  expect(elDark).toHaveClass('nut-materialview--top-bar')
  expect(elDark).toHaveClass('nut-materialview--dark')
  expect(elDark.style.borderRadius).toBe('0px')
})

test('should render all preset scenes with corresponding classes', () => {
  const { container: cFair } = render(<MaterialView scene="promotion-fair" />)
  const elFair = cFair.firstChild as HTMLElement
  expect(elFair).toHaveClass('nut-materialview--promotion-fair')
  expect(elFair).toHaveClass('FG-Skin-L-PX')

  const { container: cDeep } = render(<MaterialView scene="promotion-deep" />)
  const elDeep = cDeep.firstChild as HTMLElement
  expect(elDeep).toHaveClass('nut-materialview--promotion-deep')
  expect(elDeep).toHaveClass('FG-Skin-D-PX')

  const { container: cImm } = render(<MaterialView scene="immersive" />)
  const elImm = cImm.firstChild as HTMLElement
  expect(elImm).toHaveClass('nut-materialview--immersive')
  expect(elImm).toHaveClass('FG-Dark-PX')

  const { container: cBottom } = render(
    <MaterialView scene="bottom-bar" darkMode />
  )
  const elBottom = cBottom.firstChild as HTMLElement
  expect(elBottom).toHaveClass('nut-materialview--bottom-bar')
  expect(elBottom).toHaveClass('nut-materialview--dark')
  expect(elBottom.style.borderRadius).toBe('0px')
})

describe('scene-presets helpers', () => {
  test('getCornerRadius returns correct radius', () => {
    expect(getCornerRadius('top-bar')).toBe(0)
    expect(getCornerRadius('bottom-bar')).toBe(0)
    expect(getCornerRadius('top-solid')).toBe(8)
    expect(getCornerRadius('top-plain')).toBe(8)
    expect(getCornerRadius('promotion-fair')).toBe(8)
    expect(getCornerRadius('promotion-deep')).toBe(8)
    expect(getCornerRadius('immersive')).toBe(8)
  })

  test('getFrostedPreset returns CSS variables for colors and shadows', () => {
    const immersive = getFrostedPreset('immersive', true)
    expect(immersive.boxShadow).toContain('--nut-material-shadow-immersive')
    expect(immersive.tintColor).toContain('--nut-material-tint-immersive')
    expect(immersive.blurRadius).toBe(3)
    expect(immersive.borderRadius).toBe(8)

    const topSolidLight = getFrostedPreset('top-solid', false)
    expect(topSolidLight.tintColor).toContain('--nut-material-tint-top-solid')
    expect(topSolidLight.boxShadow).toContain('--nut-material-shadow-top-solid')

    const topSolidDark = getFrostedPreset('top-solid', true)
    expect(topSolidDark.tintColor).toContain(
      '--nut-material-tint-top-solid-dark'
    )
    expect(topSolidDark.boxShadow).toContain(
      '--nut-material-shadow-top-solid-dark'
    )

    const topBarLight = getFrostedPreset('top-bar', false)
    expect(topBarLight.tintColor).toContain('--nut-material-tint-top-bar')
    expect(topBarLight.blurRadius).toBe(10)
    expect(topBarLight.borderRadius).toBe(0)

    const bottomBarDark = getFrostedPreset('bottom-bar', true)
    expect(bottomBarDark.tintColor).toContain(
      '--nut-material-tint-bottom-bar-dark'
    )
    expect(bottomBarDark.blurRadius).toBe(3)
    expect(bottomBarDark.borderRadius).toBe(0)
  })

  test('getMaterialClassName returns corresponding legacy class names', () => {
    expect(getMaterialClassName('top-solid', false)).toBe('FG-Light-PX')
    expect(getMaterialClassName('top-solid', true)).toBe('FG-Dark-PX')
    expect(getMaterialClassName('top-plain', false)).toBe('FG-Clear-PX')
    expect(getMaterialClassName('immersive', false)).toBe('FG-Dark-PX')
    expect(getMaterialClassName('promotion-fair', false)).toBe('FG-Skin-L-PX')
    expect(getMaterialClassName('promotion-deep', false)).toBe('FG-Skin-D-PX')
    expect(getMaterialClassName('top-bar', false)).toBeNull()
    expect(getMaterialClassName('bottom-bar', false)).toBeNull()
  })
})
