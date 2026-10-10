import React from 'react'
import { act, render } from '@testing-library/react'
import { Tabbar } from '../tabbar.taro'

const native = vi.hoisted(() => ({
  env: 'RN',
  platform: 'ios',
  theme: 'light',
  views: [] as Array<Record<string, any>>,
  themeChange: undefined as undefined | ((theme: { theme: string }) => void),
}))

vi.mock('@tarojs/taro', () => ({
  default: {
    getEnv: () => native.env,
    getSystemInfoSync: () => ({
      platform: native.platform,
      theme: native.theme,
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
        {
          className: props.className,
          style: props.style,
          'aria-hidden': props['aria-hidden'],
        },
        props.children
      )
    },
  }
})

const backdrop = () =>
  native.views.find((view) =>
    String(view.className).includes('nut-tabbar-backdrop')
  )

beforeEach(() => {
  native.env = 'RN'
  native.platform = 'ios'
  native.theme = 'light'
  native.views = []
  native.themeChange = undefined
})

test.each([
  ['RN', 'ios'],
  ['RN', 'android'],
  ['JDHARMONY', 'harmony'],
  ['WEB', 'ios'],
])('%s %s uses the MaterialView bottom-bar preset', (env, platform) => {
  native.env = env
  native.platform = platform
  const { container } = render(<Tabbar />)
  expect(
    container.querySelector('.nut-tabbar-wrap > .nut-tabbar-backdrop')
      ?.className
  ).toContain('nut-materialview')
  expect(backdrop()?.style).toMatchObject({
    borderRadius: 16,
    backdropFilter: 'blur(3PX)',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  })
  expect(backdrop()?.gradientBlur).toBeUndefined()
  expect(backdrop()?.liquidGlass).toBeUndefined()
  expect(backdrop()?.targetId).toBeUndefined()
})

test('MaterialView follows the system theme', () => {
  const { container } = render(<Tabbar />)
  expect(backdrop()?.style.backgroundColor).toBe('rgba(255, 255, 255, 0.8)')
  native.views = []
  act(() => native.themeChange?.({ theme: 'dark' }))
  expect(backdrop()?.style.backgroundColor).toBe('rgba(20, 23, 26, 0.8)')
  expect(
    container.querySelector('.nut-tabbar-backdrop')?.getAttribute('aria-hidden')
  ).toBe('true')
})

test('native Tabbar renders a skin without the MaterialView backdrop', () => {
  const { container } = render(
    <Tabbar skinBackground={<span>skin artwork</span>} />
  )

  expect(container.querySelector('.nut-tabbar-backdrop')).toBeNull()
  expect(backdrop()).toBeUndefined()
  expect(
    container.querySelector('.nut-tabbar-skin-background')?.textContent
  ).toBe('skin artwork')
})
