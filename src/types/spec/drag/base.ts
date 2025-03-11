import { BaseProps } from '../../base/props'

export interface DragState {
  offset: [x: number, y: number]
}
export interface BaseDrag extends BaseProps {
  attract: boolean
  direction: 'x' | 'y' | 'lock' | undefined
  boundary: {
    top: number
    left: number
    right: number
    bottom: number
  }
  onDragStart: () => void
  onDragEnd: (state: DragState) => void
  onDrag: (state: DragState) => void
}
