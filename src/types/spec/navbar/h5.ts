import { BaseNavBar } from './base'

export interface WebNavBarProps extends Omit<BaseNavBar, 'onBackClick'> {
  onBackClick: (e: React.MouseEvent<HTMLElement>) => void
}
