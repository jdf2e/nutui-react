import { BaseAnimate } from './base'

export interface WebAnimateProps extends Omit<BaseAnimate, 'onClick'> {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
