type NavBarProps = {
  showhead?: boolean
}
export type SideNavBarProps = NavBarProps & {
  title?: string
  visible: boolean
  handleClose: () => void
}
export type SubNavBarProps = NavBarProps & {
  title: string
}
