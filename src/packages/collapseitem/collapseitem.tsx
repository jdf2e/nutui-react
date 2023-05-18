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
import CollapseContext from '../collapse/collapse.context'

export interface CollapseItemProps extends BasicComponent {
  title: ReactNode
  name: string
  isOpen: boolean
  expandIcon: ReactNode
  disabled: boolean
  rotate: number
  subTitle: ReactNode
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
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const context = useContext(CollapseContext)
  // 获取 Dom 元素
  const wrapperRef = useRef(null)
  const contentRef: any = useRef(null)

  const expanded = useMemo(() => {
    if (context) {
      return context.isOpen(name)
    }
    return false
  }, [name, context.isOpen])

  const [currHeight, setCurrHeight] = useState(() =>
    expanded ? 'auto' : '0px'
  )

  const toggle = () => {
    context.updateValue(name)
  }

  const onTransitionEnd = () => {
    console.log('onTransitionEnd')
    if (expanded) {
      setCurrHeight('auto')
    }
  }

  const open = () => {
    setCurrHeight('0px')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const height = contentRef.current?.offsetHeight
        setCurrHeight(height ? `${height}px` : 'auto')
      })
    })
  }

  const close = () => {
    const height = contentRef.current?.offsetHeight
    setCurrHeight(height ? `${height}px` : 'auto')
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setCurrHeight('0px')
      })
    })
  }

  useEffect(() => {
    expanded ? open() : close()
  }, [expanded])

  const [iconStyle, setIconStyle] = useState({
    transform: 'translateY(-50%)',
  })

  const classPrefix = 'nut-collapse-item'

  return (
    <div className={classPrefix} {...rest}>
      <div
        className={classNames(`${classPrefix}__header`, { disabled })}
        onClick={() => toggle()}
      >
        <div className={`${classPrefix}__title`}>{title}</div>
        <div className={`${classPrefix}__sub-title`}>{subTitle}</div>
        <div className={`${classPrefix}__icon-box`}>
          <div className={`${classPrefix}__icon`} style={iconStyle}>
            {expandIcon}
          </div>
        </div>
      </div>
      <div
        className={`${classPrefix}__content`}
        style={{ height: currHeight }}
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
