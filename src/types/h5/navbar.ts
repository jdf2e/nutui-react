import { BaseNavBar } from '../base/navbar'

export interface WebNavBarProps extends Omit<BaseNavBar, 'onBackClick'> {
  onBackClick: (e: React.MouseEvent<HTMLElement>) => void
}
