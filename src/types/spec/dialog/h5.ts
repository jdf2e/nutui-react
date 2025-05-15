import { BaseDialog, BaseContentProps } from './base'

export interface WebContentProps extends BaseContentProps {
  onClick: (event: MouseEvent) => void
}
export interface WebDialogProps extends BaseDialog {}
