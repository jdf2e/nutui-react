import React, { FunctionComponent, useRef, useEffect, useCallback } from 'react'
import { SubNavBarProps } from '../sidenavbar/type'
import { handleClick } from '../sidenavbar/utils'

export const SubSideNavBar: FunctionComponent<
  Partial<SubNavBarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { title, children, ...rest } = props
  const offset = 20
  const listRef = useRef<HTMLDivElement>(null)
  const setListLevel = useCallback((nodeList: HTMLCollection, level = 1) => {
    const titleClass = nodeList[0].className
    if (titleClass.includes('nut-subsidenavbar__title')) {
      const left = 15 + offset * level
      // eslint-disable-next-line no-param-reassign
      ;(nodeList[0] as HTMLElement).style.paddingLeft = `${left}px`
    }
    const childNodes =
      nodeList[1] &&
      nodeList[1].children &&
      Array.from(nodeList[1].children).filter((item) => item.nodeType !== 3 && item.nodeType !== 8)
    childNodes.forEach((item) => {
      const itemClass = item.className

      if (itemClass.includes('nut-subsidenavbar__item')) {
        const left = 15 + offset * (level + 1)
        // eslint-disable-next-line no-param-reassign
        ;(item as HTMLElement).style.paddingLeft = `${left}px`
      }
      if (itemClass.includes('nut-subsidenavbar__list')) {
        let level = item.getAttribute('level') ? Number(item.getAttribute('level')) : 1
        level += 1
        item.setAttribute('level', level.toString())
        item.children && setListLevel(item.children, level)
      }
    })
  }, [])

  useEffect(() => {
    const childNodes = listRef.current?.children as HTMLCollection
    listRef.current?.setAttribute('level', '1')
    console.log('childNodes')
    childNodes && setListLevel(childNodes)
  }, [setListLevel])
  return (
    <div className="nut-subsidenavbar__list  nutShow" ref={listRef} onClick={handleClick}>
      <div className="nut-subsidenavbar__title border-bt">
        {title} <i className="arrow-icon arrow-down" />
      </div>
      <div className="nut-subsidenavbar__content">{children}</div>
    </div>
  )
}
