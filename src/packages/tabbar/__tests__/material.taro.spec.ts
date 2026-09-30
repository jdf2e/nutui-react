import {
  getTabbarNativeMaterial,
  getTabbarNativePlatform,
  getTabbarNativeViewProps,
} from '../material.taro'

test.each([
  ['RN', 'ios', 'ios'],
  ['RN', 'android', 'android'],
  ['HARMONY', 'harmony', 'harmony'],
  ['HARMONYHYBRID', 'android', 'harmony'],
  ['JDHARMONY', 'harmony', 'harmony'],
  ['WEB', 'ios', 'none'],
  ['JD', 'android', 'none'],
  ['RN', 'unknown', 'none'],
])('resolves %s on %s to %s material', (env, device, expected) => {
  expect(getTabbarNativePlatform(env, device)).toBe(expected)
})

test('iOS bottom-bar uses gradient blur for both themes and every iOS version', () => {
  expect(getTabbarNativeMaterial('ios', false)).toMatchObject({
    kind: 'ios',
    solidColor: '#ffffff',
    borderRadius: 16,
    gradientBlur: {
      minBlur: 0.5,
      maxBlur: 0.8,
      overlayAlpha: 0.9,
      overlayColor: 'rgba(255, 255, 255, 1)',
    },
  })
  expect(getTabbarNativeMaterial('ios', true)).toMatchObject({
    kind: 'ios',
    solidColor: '#14171a',
    gradientBlur: {
      overlayColor: 'rgba(0, 0, 0, 1)',
    },
  })
  expect(getTabbarNativeMaterial('ios', false)).not.toHaveProperty(
    'liquidGlass'
  )
})

test('opt-in liquid glass uses the biz regular preset only on iOS 26+', () => {
  const light = getTabbarNativeMaterial('ios', false, 26, 'liquid-glass')
  expect(light.liquidGlass).toEqual({
    style: 'regular',
    interactive: true,
    darkMode: false,
    tintColor: 'rgba(255, 255, 255, 0.45)',
  })
  expect(light.gradientBlur).toBeDefined()
  expect(getTabbarNativeViewProps(light)).toMatchObject({
    liquidGlass: light.liquidGlass,
    gradientBlur: light.gradientBlur,
    style: { borderRadius: 16 },
  })

  expect(
    getTabbarNativeMaterial('ios', true, 26, 'liquid-glass').liquidGlass
  ).toEqual({ style: 'regular', interactive: true, darkMode: true })
  expect(
    getTabbarNativeMaterial('ios', false, 25, 'liquid-glass')
  ).not.toHaveProperty('liquidGlass')
  expect(
    getTabbarNativeMaterial('ios', false, 0, 'liquid-glass')
  ).not.toHaveProperty('liquidGlass')
  expect(
    getTabbarNativeMaterial('android', false, 26, 'liquid-glass')
  ).not.toHaveProperty('liquidGlass')
})

test('Android bottom-bar uses the source blur and overlay colors', () => {
  expect(getTabbarNativeMaterial('android', false)).toMatchObject({
    kind: 'android',
    solidColor: '#ffffff',
    borderRadius: 16,
    backdropFilter: 'blur(50px)',
    overlayColor: 'rgba(255, 255, 255, 0.8)',
  })
  expect(getTabbarNativeMaterial('android', true)).toMatchObject({
    kind: 'android',
    solidColor: '#14171a',
    overlayColor: 'rgba(31, 34, 38, 0.8)',
  })
})

test('Harmony bottom-bar uses native blur with a seven-stop overlay', () => {
  const light = getTabbarNativeMaterial('harmony', false)
  const dark = getTabbarNativeMaterial('harmony', true)
  expect(light).toMatchObject({
    kind: 'harmony',
    solidColor: '#ffffff',
    borderRadius: 16,
    blurScale: 0.2,
    colorMode: 'light',
    boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
  })
  expect(light.backgroundGradient).toContain('rgba(255, 255, 255, 0.8) 0%')
  expect(light.backgroundGradient).toContain('rgba(255, 255, 255, 0.3) 100%')
  expect(dark).toMatchObject({ colorMode: 'dark', solidColor: '#14171a' })
  expect(dark.backgroundGradient).toContain('rgba(0, 0, 0, 0.8) 0%')
  expect(dark.backgroundGradient).toContain('rgba(0, 0, 0, 0.3) 100%')
})

test('native View props preserve the 16px shape and keep unsupported targets solid', () => {
  const ios = getTabbarNativeViewProps(getTabbarNativeMaterial('ios', false))
  expect(ios).toMatchObject({
    gradientBlur: {
      minBlur: 0.5,
      maxBlur: 0.8,
      overlayAlpha: 0.9,
    },
    style: { backgroundColor: 'transparent', borderRadius: 16 },
  })

  const androidWithoutTarget = getTabbarNativeViewProps(
    getTabbarNativeMaterial('android', true)
  )
  expect(androidWithoutTarget).toMatchObject({
    style: { backgroundColor: '#14171a', borderRadius: 16 },
  })
  expect(androidWithoutTarget).not.toHaveProperty('backdropFilter')
  expect(androidWithoutTarget).not.toHaveProperty('overlayColor')

  const android = getTabbarNativeViewProps(
    getTabbarNativeMaterial('android', true),
    'home-content'
  )
  expect(android).toMatchObject({
    targetId: 'home-content',
    overlayColor: 'rgba(31, 34, 38, 0.8)',
    style: {
      backgroundColor: 'transparent',
      backdropFilter: 'blur(50px)',
      borderRadius: 16,
    },
  })

  const harmony = getTabbarNativeViewProps(
    getTabbarNativeMaterial('harmony', false)
  )
  expect(harmony).toMatchObject({
    blurScale: 0.2,
    colorMode: 'light',
    borderRadius: 16,
    style: {
      background: getTabbarNativeMaterial('harmony', false).backgroundGradient,
      borderRadius: 16,
    },
  })
})

test.each(['ios', 'android', 'harmony'] as const)(
  '%s skin uses the solid fallback without native material props',
  (platform) => {
    const material = getTabbarNativeMaterial(
      platform,
      false,
      26,
      'liquid-glass'
    )
    const props = getTabbarNativeViewProps(material, 'home-content', true)
    expect(props).toEqual({
      style: { backgroundColor: '#ffffff', borderRadius: 16 },
    })
  }
)
