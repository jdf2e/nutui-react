import { BaseProps } from '../../base/props'

export interface BaseMaterialView extends BaseProps {
  scene:
    | 'top-solid'
    | 'top-plain'
    | 'top-bar'
    | 'promotion-fair'
    | 'promotion-deep'
    | 'immersive'
    | 'bottom-bar'
  targetId: string
  darkMode: boolean
  frostedGlass: {
    style:
      | 'ultra-thin-light'
      | 'ultra-thin-dark'
      | 'thin-light'
      | 'thin-dark'
      | 'regular-light'
      | 'regular-dark'
      | 'thick-light'
      | 'thick-dark'
      | 'chrome-light'
      | 'chrome-dark'
    alpha?: number
  }
  gradientBlur: {
    minBlur?: number
    maxBlur?: number
    overlayAlpha?: number
    overlayColor?: string
  }
  overlayColor: string
}
