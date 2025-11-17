import { BaseDialog, BaseContentProps } from './base'

export interface WebContentProps extends BaseContentProps {
  onClick: (event: MouseEvent) => void
  ariaRole?: string
  ariaLabel?: string
}
export interface WebDialogProps extends BaseDialog {}
