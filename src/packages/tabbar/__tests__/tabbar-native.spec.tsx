import React from 'react'
import { act, render } from '@testing-library/react'
import { Tabbar } from '../tabbar.taro'

const native = vi.hoisted(() => ({
  env: 'RN',
  platform: 'ios',
  theme: 'light',
  system: 'iOS 26.0',
  views: [] as Array<Record<string, any>>,
  themeChange: undefined as undefined | ((theme: { theme: string }) => void),
}))

vi.mock('@tarojs/taro', () => ({
  default: {
    getEnv: () => native.env,
    getSystemInfoSync: () => ({
      platform: native.platform,
      theme: native.theme,
      system: native.system,
    }),
    onThemeChange: (callback: (theme: { theme: string }) => void) => {
      native.themeChange = callback
    },
    offThemeChange: () => {
      native.themeChange = undefined
    },
  },
}))

vi.mock('@tarojs/components', async () => {
  const { createElement } = await import('react')
  return {
    View: (props: Record<string, any>) => {
      native.views.push(props)
      return createElement(
        'div',
        { className: props.className },
        props.children
      )
    },
  }
})

const backing = () =>
  native.views.find((view) =>
    String(view.className).includes('nut-tabbar-wrap')
  )

beforeEach(() => {
  native.env = 'RN'
  native.platform = 'ios'
  native.theme = 'light'
  native.system = 'iOS 26.0'
  native.views = []
  native.themeChange = undefined
})

test('iOS sends bottom-bar gradient blur to the native View and follows theme changes', () => {
  const { rerender } = render(<Tabbar />)
  expect(backing()?.gradientBlur).toEqual({
    minBlur: 0.5,
    maxBlur: 0.8,
    overlayAlpha: 0.9,
    overlayColor: 'rgba(255, 255, 255, 1)',
  })
  expect(backing()?.style).toMatchObject({ borderRadius: 16 })
  act(() => native.themeChange?.({ theme: 'dark' }))
  native.views = []
  rerender(<Tabbar />)
  expect(backing()?.gradientBlur?.overlayColor).toBe('rgba(0, 0, 0, 1)')
})

test('iOS 26 opt-in sends liquid glass with gradient fallback and updates dark mode', () => {
  const { rerender } = render(<Tabbar iosMaterial="liquid-glass" />)
  expect(backing()?.liquidGlass).toEqual({
    style: 'regular',
    interactive: true,
    darkMode: false,
    tintColor: 'rgba(255, 255, 255, 0.45)',
  })
  expect(backing()?.gradientBlur).toBeDefined()

  act(() => native.themeChange?.({ theme: 'dark' }))
  native.views = []
  rerender(<Tabbar iosMaterial="liquid-glass" />)
  expect(backing()?.liquidGlass).toEqual({
    style: 'regular',
    interactive: true,
    darkMode: true,
  })
})

test('iOS 25 opt-in falls back to gradient blur', () => {
  native.system = 'iOS 25.4'
  render(<Tabbar iosMaterial="liquid-glass" />)
  expect(backing()?.liquidGlass).toBeUndefined()
  expect(backing()?.gradientBlur).toBeDefined()
})

test('Harmony sends blurScale and gradient overlay to the native View', () => {
  native.env = 'JDHARMONY'
  native.platform = 'harmony'
  render(<Tabbar />)
  expect(backing()).toMatchObject({
    blurScale: 0.2,
    colorMode: 'light',
    borderRadius: 16,
  })
  expect(backing()?.style.background).toContain('rgba(255, 255, 255, 0.8)')
})

test('Android stays solid until a page blur target is paired', () => {
  native.platform = 'android'
  const { rerender } = render(<Tabbar />)
  expect(backing()?.targetId).toBeUndefined()
  expect(backing()?.style.backgroundColor).toBe('#ffffff')
  native.views = []
  rerender(<Tabbar materialTargetId="home-content" />)
  expect(backing()).toMatchObject({
    targetId: 'home-content',
    overlayColor: 'rgba(255, 255, 255, 0.8)',
  })
  expect(backing()?.style.backdropFilter).toBe('blur(50px)')
})

test('web and mini program keep the existing View and CSS material path', () => {
  native.env = 'WEB'
  render(<Tabbar />)
  expect(backing()?.gradientBlur).toBeUndefined()
  expect(backing()?.blurScale).toBeUndefined()
  expect(backing()?.style).toBeUndefined()
})

test.each([
  ['RN', 'ios'],
  ['RN', 'android'],
  ['JDHARMONY', 'harmony'],
])(
  'skin background disables %s %s native material and restores it when removed',
  (env, platform) => {
    native.env = env
    native.platform = platform
    const { container, rerender } = render(
      <Tabbar
        iosMaterial="liquid-glass"
        materialTargetId="home-content"
        skinBackground={<div className="business-skin" />}
      />
    )
    expect(backing()?.className).toContain('nut-tabbar-wrap-skin')
    expect(
      container.querySelector('.nut-tabbar-skin-background')
    ).not.toBeNull()
    expect(backing()?.gradientBlur).toBeUndefined()
    expect(backing()?.liquidGlass).toBeUndefined()
    expect(backing()?.targetId).toBeUndefined()
    expect(backing()?.overlayColor).toBeUndefined()
    expect(backing()?.blurScale).toBeUndefined()
    expect(backing()?.style?.backgroundColor).toBe('#ffffff')

    native.views = []
    rerender(
      <Tabbar iosMaterial="liquid-glass" materialTargetId="home-content" />
    )
    expect(backing()?.className).not.toContain('nut-tabbar-wrap-skin')
    if (platform === 'ios') expect(backing()?.liquidGlass).toBeDefined()
    if (platform === 'android') expect(backing()?.targetId).toBe('home-content')
    if (platform === 'harmony') expect(backing()?.blurScale).toBe(0.2)
  }
)
