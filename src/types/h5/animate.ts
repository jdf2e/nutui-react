import { BaseAnimate } from '../base/animate'

export interface WebAnimateProps extends Omit<BaseAnimate, 'onClick'> {
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
