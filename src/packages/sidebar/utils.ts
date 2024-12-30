import { MouseEventHandler } from 'react'

const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
  e.stopPropagation()
  const isIcon = (e.target as HTMLDivElement).className.includes('arrow-icon')
  const isTitle =
    (e.target as HTMLDivElement).className.includes('-title') || isIcon
  const currentClass = e.currentTarget.className
  const isShow = currentClass.includes('sidenavbar-show')
  const arrowIcon = e.currentTarget.querySelector('.arrow-icon') as Element
  const iconClass = arrowIcon.className

  if (isTitle) {
    e.currentTarget.className = isShow
      ? currentClass.replace('sidenavbar-show', 'sidenavbar-hide')
      : currentClass.replace('sidenavbar-hide', 'sidenavbar-show')
    arrowIcon.className = isShow
      ? iconClass.replace('arrow-down', 'arrow-up')
      : iconClass.replace('arrow-up', 'arrow-down')
  }
}
export { handleClick }
