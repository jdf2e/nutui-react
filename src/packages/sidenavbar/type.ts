type NavBarProps = {
  showHead?: boolean
}
export type SideNavBarProps = NavBarProps & {
  title?: string
  visible: boolean
}
export type SubNavBarProps = NavBarProps & {
  title: string
}
