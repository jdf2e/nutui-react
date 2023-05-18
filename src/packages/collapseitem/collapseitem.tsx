import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CollapseItemProps extends BasicComponent {
  title: ReactNode
  name: string
  isOpen: boolean
  expandIcon: ReactNode
  disabled: boolean
  rotate: number
  subTitle: ReactNode
  childnull: boolean
  onToggle: (isOpen: boolean, name: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  name: '',
  isOpen: false,
  expandIcon: null,
  disabled: false,
  rotate: 180,
  subTitle: null,
  childnull: true,
} as CollapseItemProps
export const CollapseItem: FunctionComponent<
  Partial<CollapseItemProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    children,
    title,
    isOpen,
    onToggle,
    name,
    disabled,
    expandIcon,
    rotate,
    subTitle,
    childnull,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [domHeight, setDomHeight] = useState(-1) // 保存content的高度
  const [currHeight, setCurrHeight] = useState('auto') // 设置content的高度
  const [update, setUpdate] = useState(false)
  const [iconStyle, setIconStyle] = useState({
    transform: 'translateY(-50%)',
  })
  const classPrefix = 'nut-collapse-item'

  const measuredRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setDomHeight(node.getBoundingClientRect().height)
      }
    },
    [update]
  )

  useEffect(() => {
    // 一开始content都有高度，在这里根据isOpen，改变其高度
    setTimeout(() => {
      if (domHeight !== -1) {
        isOpen ? setCurrHeight(`${domHeight}px`) : setCurrHeight('0px')
      }
      const newIconStyle = isOpen
        ? { transform: `translateY(-50%) rotate(${rotate}deg)` }
        : { transform: 'translateY(-50%)' }
      setIconStyle(newIconStyle)
    }, 10)
  }, [isOpen, domHeight, rotate])

  useEffect(() => {
    if (!isOpen) {
      setCurrHeight('0px')
    } else {
      setCurrHeight('auto')
    }

    setUpdate(!update)
  }, [children, isOpen])

  return (
    <div className={classPrefix} {...rest}>
      <div
        className={classNames(`${classPrefix}__header`, { disabled })}
        onClick={() => {
          if (disabled) return
          onToggle && onToggle(isOpen, name)
        }}
      >
        <div className={`${classPrefix}__title`}>{title}</div>
        <div className={`${classPrefix}__sub-title`}>{subTitle}</div>
        <div className={`${classPrefix}__icon-box`}>
          <div className={`${classPrefix}__icon`} style={iconStyle}>
            {expandIcon}
          </div>
        </div>
      </div>
      {childnull && (
        <div
          className={`${classPrefix}__content`}
          style={{ height: currHeight }}
          ref={measuredRef}
        >
          <div className={`${classPrefix}__content-text`}>{children}</div>
        </div>
      )}
    </div>
  )
}

CollapseItem.defaultProps = defaultProps
CollapseItem.displayName = 'NutCollapseItem'
