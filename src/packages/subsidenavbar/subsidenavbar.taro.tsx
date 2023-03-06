import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useCallback,
  MouseEventHandler,
  useContext,
  useState,
} from 'react'
// import { SubSideNavBarProps } from '../sidenavbar/type'
import { handleClick } from '../sidenavbar/utils'
import { OffsetContext } from '../sidenavbar/offsetContext'

export type SubSideNavBarProps = {
  title: string
  ikey: string | number
  open?: boolean
  children?: React.ReactNode
  onClick?: ({
    title,
    ikey,
    isShow,
  }: {
    title: string
    ikey: string | number
    isShow: boolean
  }) => void
}
const defaultProps = {
  open: true,
} as SubSideNavBarProps
export const SubSideNavBar: FunctionComponent<SubSideNavBarProps> = (props) => {
  const { title, ikey, children, onClick, open, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const [subShow, setSubShow] = useState(open)
  const offset = useContext(OffsetContext)
  const listRef = useRef<HTMLDivElement>(null)

  const setListLevel = useCallback(
    (nodeList: HTMLCollection, level = 1) => {
      const titleClass = nodeList[0].className
      if (titleClass.includes('nut-subsidenavbar__title')) {
        const left = offset * (level + 1)
        // eslint-disable-next-line no-param-reassign
        ;(nodeList[0] as HTMLElement).style.paddingLeft = `${left}px`
      }
      const childNodes =
        nodeList[1] &&
        nodeList[1].children &&
        Array.from(nodeList[1].children).filter(
          (item) => item.nodeType !== 3 && item.nodeType !== 8
        )
      childNodes.forEach((item) => {
        const itemClass = item.className
        if (itemClass.includes('nut-subsidenavbar__item')) {
          const left = offset * (level + 2)
          // eslint-disable-next-line no-param-reassign
          ;(item as HTMLElement).style.paddingLeft = `${left}px`
        }
        if (itemClass.includes('nut-subsidenavbar__list')) {
          let level = item.getAttribute('level')
            ? Number(item.getAttribute('level'))
            : 1
          level += 1
          item.setAttribute('level', level.toString())
          item.children && setListLevel(item.children, level)
        }
      })
    },
    [offset]
  )
  const clickFn: MouseEventHandler<HTMLDivElement> = (e) => {
    e.stopPropagation()
    setSubShow(!subShow)
    const isShow = !subShow
    onClick && onClick({ title, ikey, isShow })
  }
  useEffect(() => {
    const childNodes = listRef.current?.children as HTMLCollection
    listRef.current?.setAttribute('level', '1')
    childNodes && setListLevel(childNodes)
  }, [setListLevel])
  const divClass = subShow
    ? 'nut-subsidenavbar__list  nutShow'
    : 'nut-subsidenavbar__list  nutHide'
  const iconClass = subShow ? 'arrow-icon arrow-down' : 'arrow-icon arrow-up'

  return (
    <div className={divClass} ref={listRef} onClick={clickFn} {...rest}>
      <div className="nut-subsidenavbar__title border-bt">
        {title} <i className={iconClass} />
      </div>
      <div className="nut-subsidenavbar__content">{children}</div>
    </div>
  )
}
