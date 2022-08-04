type NavBarProps = {
  showhead?: boolean
}
export interface SideNavBarProps extends React.HTMLAttributes<HTMLDivElement>, NavBarProps {
  title: string
  visible: boolean
  width?: string
  position?: 'left' | 'right'
  handleClose: () => void
  // showhead?: boolean
}
export type SideNavBarItemProps = {
  title: string
  ikey: string | number
  click?: ({ title, ikey }: { title: string; ikey: string | number }) => void
}
export type SubNavBarProps = {
  title: string
  ikey: string | number
  offset?: number
  open?: boolean
  titleClick?: ({
    title,
    ikey,
    isShow,
  }: {
    title: string
    ikey: string | number
    isShow: boolean
  }) => void
}
