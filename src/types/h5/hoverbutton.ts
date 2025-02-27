import { BaseHoverButton, BaseHoverButtonItem } from '../base/hoverbutton'

export interface WebHoverButtonProps extends BaseHoverButton {}

export interface WebHoverButtonItemProps
  extends Omit<BaseHoverButtonItem, 'onClick'> {
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
