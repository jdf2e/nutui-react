// eslint-disable-next-line react/no-typos
import 'react'

declare module 'react' {
  interface CSSProperties {
    // Allow any CSS Custom Properties
    [index: `--${string}`]: any
  }
}

declare module '@tarojs/components' {
  export interface StandardProps {
    ariaRole?: string
    ariaLabel?: string
    ariaLabelledby?: string
    ariaModal?: boolean | 'true' | 'false'
    ariaChecked?: boolean | 'true' | 'false' | 'mixed'
    ariaDisabled?: boolean | 'true' | 'false'
    ariaHidden?: boolean | 'true' | 'false'
    ariaExpanded?: boolean | 'true' | 'false'
    ariaControls?: string
    ariaHaspopup?:
      | boolean
      | 'true'
      | 'false'
      | 'menu'
      | 'listbox'
      | 'tree'
      | 'grid'
      | 'dialog'
    ariaSelected?: boolean | 'true' | 'false'
    ariaValueMax?: number
    ariaValueMin?: number
    ariaValueNow?: number
    ariaValueText?: string
    ariaValuemax?: number
    ariaValuemin?: number
    ariaValuenow?: number
    ariaValuetext?: string
    tabIndex?: number
    onKeyDown?: (event: React.KeyboardEvent<any>) => void
    onKeyUp?: (event: React.KeyboardEvent<any>) => void
    onKeyPress?: (event: React.KeyboardEvent<any>) => void
    ariaLevel?: number
    ariaCurrent?:
      | 'page'
      | 'step'
      | 'location'
      | 'date'
      | 'time'
      | boolean
      | 'true'
      | 'false'
    ariaLive?: 'polite' | 'assertive' | 'off'
    ariaBusy?: boolean | 'true' | 'false'
    ariaAtomic?: boolean | 'true' | 'false'
    ariaOrientation?: 'horizontal' | 'vertical'
  }
}
