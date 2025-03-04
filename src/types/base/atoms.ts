export type SimpleValue = string | number
export type SimpleValues = string[] | number[]

export type UIType =
  | 'default'
  | 'primary'
  | 'info'
  | 'success'
  | 'warning'
  | 'danger'
export type UISize = 'xlarge' | 'large' | 'normal' | 'small' | 'mini'
export type UIRound = 'square' | 'round'
export type UIFill = 'solid' | 'outline' | 'dashed' | 'none'
export type UILayout = 'row' | 'col'
export type UITheme = 'light' | 'dark'

export type FlexAlign = 'flex-start' | 'center' | 'flex-end' | 'baseline'

export type FlexJustify =
  | 'start'
  | 'end'
  | 'center'
  | 'between'
  | 'around'
  | 'evenly'
  | 'stretch'

export type Align = 'left' | 'center' | 'right'
export type VAlign = 'top' | 'middle' | 'bottom'

export type Direction = 'horizontal' | 'vertical'

export type PositionX = 'left' | 'right'
export type PositionY = 'top' | 'bottom'
export type Position = PositionX | PositionY
export type EdgePosition =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'left-top'
  | 'left-bottom'
  | 'right-top'
  | 'right-bottom'

export type FullPosition = Position | EdgePosition
