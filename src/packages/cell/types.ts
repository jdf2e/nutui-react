import { BasicComponent } from '@/utils/typings'

export type CellAlign = 'flex-start' | 'center' | 'flex-end' | 'baseline'

export interface CellProps extends BasicComponent {
  title: React.ReactNode
  description: React.ReactNode
  extra: React.ReactNode
  radius: string | number
  align: CellAlign
  clickable: boolean
  isLast: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
