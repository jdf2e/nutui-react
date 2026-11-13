import { readFileSync } from 'fs'
import { resolve } from 'path'
import { kebabCase } from '@/utils/kebab-case'

describe('kebabCase', () => {
  test('should convert camelCase to kebab-case correctly', () => {
    expect(kebabCase('nutuiBrandColor')).toBe('nutui-brand-color')
    expect(kebabCase('nutuiButtonPrimaryColor')).toBe(
      'nutui-button-primary-color'
    )
    expect(kebabCase('primaryColor')).toBe('primary-color')
  })

  test('should handle digits and acronyms correctly', () => {
    expect(kebabCase('nutuiColorPrimaryStop1')).toBe(
      'nutui-color-primary-stop-1'
    )
    expect(kebabCase('nutuiColorPrimaryStop2')).toBe(
      'nutui-color-primary-stop-2'
    )
    expect(kebabCase('nutuiNotifyZIndex')).toBe('nutui-notify-z-index')
    expect(kebabCase('nutuiBadgeZIndex')).toBe('nutui-badge-z-index')
  })

  test('should handle edge cases', () => {
    expect(kebabCase('--already-kebab')).toBe('already-kebab')
    expect(kebabCase('nutui-button-color')).toBe('nutui-button-color')
    expect(kebabCase('simple')).toBe('simple')
    expect(kebabCase('')).toBe('')
  })

  test('should correctly parse all official NutCSSVariables without regression', () => {
    const typesPath = resolve(__dirname, '../types.ts')
    const typesContent = readFileSync(typesPath, 'utf8')
    const tokens = [...typesContent.matchAll(/\|\s*'([^']+)'/g)].map(
      (m) => m[1]
    )
    expect(tokens.length).toBeGreaterThan(1000)

    tokens.forEach((token) => {
      const converted = kebabCase(token)
      expect(converted).toBe(converted.toLowerCase())
      expect(converted).not.toContain('_')
      expect(converted.startsWith('--')).toBe(false)
    })
  })
})
