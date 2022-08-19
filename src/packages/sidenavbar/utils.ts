import { MouseEventHandler } from 'react'

const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
  e.stopPropagation()
  const isIcon = (e.target as HTMLDivElement).className.includes('arrow-icon')
  const isTitle =
    (e.target as HTMLDivElement).className.includes('__title') || isIcon
  const currentClass = e.currentTarget.className
  const isShow = currentClass.includes('nutShow')
  const arrowIcon = e.currentTarget.querySelector('.arrow-icon') as Element
  const iconClass = arrowIcon.className

  if (isTitle) {
    e.currentTarget.className = isShow
      ? currentClass.replace('nutShow', 'nutHide')
      : currentClass.replace('nutHide', 'nutShow')
    arrowIcon.className = isShow
      ? iconClass.replace('arrow-down', 'arrow-up')
      : iconClass.replace('arrow-up', 'arrow-down')
  }
}
export { handleClick }
