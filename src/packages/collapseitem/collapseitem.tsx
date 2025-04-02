import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CollapseContext from '../collapse/context'
import { useRefState } from '@/hooks/use-ref-state'

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
  const wrapperRef: any = useRef(null)
  const contentRef: any = useRef(null)

  const expanded = useMemo(() => {
    if (context) {
      return context.isOpen(name)
    }
    return false
  }, [name, context.isOpen])

  const iconStyle = useMemo(() => {
    return expanded
      ? { transform: `translateY(-50%) rotate(${rotate || context.rotate}deg)` }
      : { transform: 'translateY(-50%)' }
  }, [expanded, rotate])

  const [tran, setTran] = useState(0)
  const [currentHeight, setCurrentHeight] = useRefState(0)
  const [wrapperHeight, setWrapperHeight] = useState(0)

  const updateRectHeight = async () => {
    const height = contentRef.current.offsetHeight
    setCurrentHeight(height)
    setWrapperHeight(expanded ? height : 0)
    setTimeout(() => {
      setTran(1)
    })
  }

  useEffect(() => {
    updateRectHeight()
  }, [children, expanded])

  const toggle = () => {
    const end = !expanded ? currentHeight.current : 0
    setWrapperHeight(end)
  }
  const handleClick = () => {
    if (!disabled) {
      context.updateValue(name)
      toggle()
    }
  }

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div
        className={classNames(`${classPrefix}-header`, {
          [`${classPrefix}-header-disabled`]: disabled,
        })}
        onClick={handleClick}
      >
        <div className={`${classPrefix}-title`}>{title}</div>
        <div className={`${classPrefix}-extra`}>{extra}</div>
        <div className={`${classPrefix}-icon-box`}>
          <div className={`${classPrefix}-icon`} style={iconStyle}>
            {expandIcon || context.expandIcon}
          </div>
        </div>
      </div>
      <div
        className={classNames({
          [`${classPrefix}-content-wrapper`]: true,
          [`${classPrefix}-content-wrapper-tran`]: true,
        })}
        style={
          tran
            ? {
                height: wrapperHeight,
              }
            : {}
        }
        ref={wrapperRef}
      >
        <div className={`${classPrefix}-content`}>
          <div ref={contentRef} className={`${classPrefix}-content-text`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

CollapseItem.displayName = 'NutCollapseItem'
