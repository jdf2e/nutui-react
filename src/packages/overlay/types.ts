import { BasicComponent } from '@/utils/typings'

export interface OverlayProps extends BasicComponent {
  zIndex: number
  duration: number
  closeOnOverlayClick: boolean
  visible: boolean
  lockScroll: boolean
  onClick: (event: TouchEvent) => void
  afterShow: () => void
  afterClose: () => void
}
