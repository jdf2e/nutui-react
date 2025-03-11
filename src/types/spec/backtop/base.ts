import { BaseProps } from '../../base/props'

export interface BaseBackTop extends BaseProps {
  zIndex: number
  tabbarHeight: number
  target: string
  threshold: number
  duration: number
  onClick: (event: any) => void
}
