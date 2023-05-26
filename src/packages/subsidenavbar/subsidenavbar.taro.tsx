import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useCallback,
  MouseEventHandler,
  useContext,
  useState,
} from 'react'
import { OffsetContext } from '../sidenavbar/context'

export type SubSideNavBarProps = {
  title: string
  value: string | number
  open?: boolean
  children?: React.ReactNode
  onClick?: ({
    title,
    value,
    isShow,
  }: {
    title: string
    value: string | number
    isShow: boolean
  }) => void
}
const defaultProps = {
  open: true,
} as SubSideNavBarProps
export const SubSideNavBar: FunctionComponent<SubSideNavBarProps> = (props) => {
  const classPrefix = 'nut-subsidenavbar'
  const { title, value, children, onClick, open, ...rest } = {
    ...defaultProps,
    ...props,
  }
  const [subShow, setSubShow] = useState(open)
  const offset = useContext(OffsetContext)
  const listRef = useRef<HTMLDivElement>(null)

  const setListLevel = useCallback(
    (nodeList: HTMLCollection, level = 1) => {
      const titleClass = nodeList[0].className
      if (titleClass.includes(`${classPrefix}__title`)) {
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

        if (itemClass.includes(`${classPrefix}__item`)) {
          const left = offset * (level + 2)
          // eslint-disable-next-line no-param-reassign
          ;(item as HTMLElement).style.paddingLeft = `${left}px`
        }
        if (itemClass.includes(`${classPrefix}__list`)) {
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
    onClick && onClick({ title, value, isShow })
  }
  useEffect(() => {
    const childNodes = listRef.current?.children as HTMLCollection
    listRef.current?.setAttribute('level', '1')
    childNodes && setListLevel(childNodes)
  }, [setListLevel])
  const divClass = subShow
    ? `${classPrefix}__list nutShow`
    : `${classPrefix}__list nutHide`
  const iconClass = subShow ? 'arrow-icon arrow-down' : 'arrow-icon arrow-up'

  return (
    <div className={divClass} ref={listRef} onClick={clickFn} {...rest}>
      <div className={`${classPrefix}__title ${classPrefix}-border-bt`}>
        {title} <i className={iconClass} />
      </div>
      <div className={`${classPrefix}__content`}>{children}</div>
    </div>
  )
}
