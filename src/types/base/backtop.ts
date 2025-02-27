import { BaseProps } from './baseprops'

export interface BaseBacktop extends BaseProps {
  zIndex: number
  tabbarHeight: number
  target: string
  threshold: number
  duration: number
  onClick: (event: any) => void
}
