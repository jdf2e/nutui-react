import React, {
  FunctionComponent,
  useEffect,
  useState,
  ReactNode,
  useContext,
  useRef,
  useMemo,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CollapseContext from '../collapse/context'

export interface CollapseItemProps extends BasicComponent {
  title: ReactNode
  name: string
  expandIcon: ReactNode
  disabled: boolean
  rotate: number
  extra: ReactNode
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  name: '',
  expandIcon: null,
  disabled: false,
  extra: null,
} as CollapseItemProps
export const CollapseItem: FunctionComponent<
  Partial<CollapseItemProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    children,
    title,
    name,
    disabled,
    expandIcon,
    rotate,
    extra,
    style,
    className,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const classPrefix = 'nut-collapse-item'
  const context = useContext(CollapseContext)
  // 获取 Dom 元素
  const wrapperRef: any = useRef(null)
  const contentRef: any = useRef(null)
  const [iconStyle, setIconStyle] = useState({
    transform: 'translateY(-50%)',
  })

  const expanded = useMemo(() => {
    if (context) {
      return context.isOpen(name)
    }
    return false
  }, [name, context.isOpen])

  const handleClick = () => {
    if (!disabled) {
      context.updateValue(name)
    }
  }

  const onTransitionEnd = () => {
    if (expanded) {
      if (wrapperRef.current) {
        wrapperRef.current.style.height = ''
      }
    }
  }

  const getOffsetHeight = () => {
    const height = contentRef.current?.offsetHeight
    return height ? `${height}px` : ''
  }

  const toggle = () => {
    const start = expanded ? '0px' : getOffsetHeight()
    if (wrapperRef.current) {
      wrapperRef.current.style.height = start
    }
    const newIconStyle = expanded
      ? { transform: `translateY(-50%) rotate(${rotate || context.rotate}deg)` }
      : { transform: 'translateY(-50%)' }
    setIconStyle(newIconStyle)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const end = expanded ? getOffsetHeight() : '0px'
        if (wrapperRef.current) {
          wrapperRef.current.style.height = end
        }
      })
    })
  }
  const init = useRef(true)

  useEffect(() => {
    if (init.current) {
      init.current = false
      if (!expanded) {
        wrapperRef.current.style.height = '0px'
      }
    } else {
      toggle()
    }
  }, [expanded])

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div
        className={classNames(`${classPrefix}__header`, { disabled })}
        onClick={handleClick}
      >
        <div className={`${classPrefix}__title`}>{title}</div>
        <div className={`${classPrefix}__extra`}>{extra}</div>
        <div className={`${classPrefix}__icon-box`}>
          <div className={`${classPrefix}__icon`} style={iconStyle}>
            {expandIcon || context.expandIcon}
          </div>
        </div>
      </div>
      <div
        className={`${classPrefix}__content`}
        onTransitionEnd={onTransitionEnd}
        ref={wrapperRef}
      >
        <div ref={contentRef} className={`${classPrefix}__content-text`}>
          {children}
        </div>
      </div>
    </div>
  )
}

CollapseItem.defaultProps = defaultProps
CollapseItem.displayName = 'NutCollapseItem'
