import { BasicComponent } from '@/utils/typings'

export type SideBarItemProps = {
  title: string
  disabled: boolean
  active?: boolean
  value: string | number
}

export interface SideBarProps extends BasicComponent {
  value: string | number
  defaultValue: string | number
  contentDuration: number
  sidebarDuration: number
  onChange: (index: string | number) => void
  onClick: (index: string | number) => void
  children?: React.ReactNode
}
