import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'
import type { FunctionComponent, ReactNode } from 'react'

export const defaultTheme: Record<string, string> = {}

export const darkTheme: Record<string, string> = {
  nutuiColorPrimary: '#ff0f23',
  nutuiColorPrimaryStop1: '#ff475d',
  nutuiColorPrimaryStop2: '#fa3725',
  nutuiColorPrimaryText: '#ffffff',
  nutuiColorPrimaryPressed: '#ff707b',
  nutuiColorPrimaryDisabled: '#4b5159',
  nutuiColorPrimaryDisabledSpecial: '#5f2b34',
  nutuiColorPrimaryLight: '#2a181c',
  nutuiColorPrimaryLightPressed: '#3d2128',
  nutuiColorService: '#3a2b1a',
  nutuiColorServicePressed: '#d1995a',
  nutuiColorServiceBorder: '#4d443d',
  nutuiColorServiceText: '#b38b6d',
  nutuiColorServiceBtnBg: '#4a3b29',
  nutuiColorServiceBtnBgPressed: '#614d35',
  nutuiColorServiceBtnBgDisabled: '#2b2723',
  nutuiColorSuccess: '#4bd165',
  nutuiColorSuccessLight: '#253a2a',
  nutuiColorSuccessPressed: '#45b058',
  nutuiColorDanger: '#3d2128',
  nutuiColorDangerLight: '#2a181c',
  nutuiColorDangerPressed: '#5f2b34',
  nutuiColorInfo: '#60a5fa',
  nutuiColorInfoLight: '#212f42',
  nutuiColorTextLink: '#60a5fa',
  nutuiColorInfoPressed: '#90caf9',
  nutuiColorWarning: '#ffbd22',
  nutuiColorWarningLight: '#3f351e',
  nutuiColorWarningPressed: '#d99100',
  nutuiColorTitle: '#e1e6eb',
  nutuiColorText: '#a1a9b3',
  nutuiColorTextHelp: '#717985',
  nutuiColorTextDisabled: '#4b5159',
  nutuiColorBackground: '#14171a',
  nutuiColorBackgroundOverlay: '#1f2226',
  nutuiColorBackgroundSunken: '#2a2f36',
  nutuiColorBackgroundComponent: '#2a2f36',
  nutuiColorMask: 'rgba(20, 20, 20, 0.7)',
  nutuiColorMaskPart: 'rgba(20, 20, 20, 0.3)',
  nutuiColorMaskFaultToleran: 'rgba(20, 20, 20, 0.1)',
  nutuiColorBorder: 'rgba(255, 255, 255, 0.12)',
  nutuiColorBorderDisabled: '#4b5159',
  nutuiBrand1: '#2a181c',
  nutuiBrand2: '#3d2128',
  nutuiBrand3: '#5f2b34',
  nutuiBrand4: '#802b37',
  nutuiBrand5: '#b81427',
  nutuiBrand6: '#ff0f23',
  nutuiBrand7: '#ff707b',
  nutuiBrand8: '#ffa3ac',
  nutuiBrand9: '#ffccd2',
  nutuiBrand10: '#fff0f2',
  nutuiBrand11: '#fff4f5',
  nutuiGolden1: '#3a2b1a',
  nutuiGolden2: '#d1995a',
  nutuiGolden3: '#4d443d',
  nutuiGolden4: '#b38b6d',
  nutuiGolden5: '#4a3b29',
  nutuiGolden6: '#614d35',
  nutuiGray1: '#1f2226',
  nutuiGray2: '#2a2f36',
  nutuiGray3: '#14171a',
  nutuiGray4: '#4b5159',
  nutuiGray5: '#717985',
  nutuiGray6: '#a1a9b3',
  nutuiGray7: '#e1e6eb',
  nutuiGray8: '#dadce0',
  nutuiGray9: '#333333',
  nutuiBlack1: 'rgba(255, 255, 255, 0)',
  nutuiBlack2: 'rgba(0, 0, 0, 0.1)',
  nutuiBlack3: 'rgba(255, 255, 255, 0.08)',
  nutuiBlack4: 'rgba(20, 20, 20, 0.1)',
  nutuiBlack5: 'rgba(20, 20, 20, 0.2)',
  nutuiBlack6: 'rgba(20, 20, 20, 0.3)',
  nutuiBlack7: 'rgba(20, 20, 20, 0.4)',
  nutuiBlack8: 'rgba(20, 20, 20, 0.5)',
  nutuiBlack9: 'rgba(20, 20, 20, 0.6)',
  nutuiBlack10: 'rgba(20, 20, 20, 0.7)',
  nutuiBlack11: 'rgba(20, 20, 20, 0.8)',
  nutuiBlack12: 'rgba(20, 20, 20, 0.9)',
  nutuiBlack13: 'rgba(20, 20, 20, 1)',
  nutuiWhite1: 'rgba(31, 31, 31, 0)',
  nutuiWhite7: 'rgba(31, 31, 31, 0.4)',
  nutuiWhite8: 'rgba(31, 31, 31, 0.5)',
  nutuiWhite12: 'rgba(31, 31, 31, 0.9)',
  boxShadow: '0px 1px 7px 0px #14171a',
  pickerMaskBgImg:
    'linear-gradient(180deg,rgba(31, 31, 31, 1),rgba(31, 31, 31, 0.4)),linear-gradient(0deg, rgba(31, 31, 31, 1), rgba(31, 31, 31, 0.4))',
  rowContentBgColor: '#14171a',
  rowContentLightBgColor: 'rgba(20, 20, 20, 0.4)',
}

export interface AppThemeContextValue {
  darkMode: boolean
  theme: Record<string, string>
  changeTheme: () => void
}

const AppThemeContext = createContext<AppThemeContextValue>({
  darkMode: false,
  theme: defaultTheme,
  changeTheme: () => {},
})

export const useAppTheme = () => useContext(AppThemeContext)

const setThemeStyleSheetsDisabled = (disabled: boolean) => {
  if (typeof document === 'undefined') return
  document.querySelectorAll('style').forEach((style) => {
    if (style.textContent && style.textContent.includes('--nutui-brand-1')) {
      style.disabled = disabled
    }
  })
}

export const AppThemeProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [darkMode, setDarkMode] = useState(false)

  const changeTheme = useCallback(() => {
    if (darkMode) {
      document.documentElement.classList.remove('nut-theme-dark')
      setThemeStyleSheetsDisabled(true)
      setDarkMode(false)
      return
    }
    import('../../styles/theme-dark.scss').then(() => {
      document.documentElement.classList.add('nut-theme-dark')
      setThemeStyleSheetsDisabled(false)
      setDarkMode(true)
    })
  }, [darkMode])

  const value = useMemo<AppThemeContextValue>(
    () => ({
      darkMode,
      theme: darkMode ? darkTheme : defaultTheme,
      changeTheme,
    }),
    [darkMode, changeTheme]
  )

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  )
}

export default AppThemeContext
