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
import { createSelectorQuery } from '@tarojs/taro'
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
  const wrapperRef: any = useRef(null)
  const contentRef: any = useRef(null)
  const [refRandomId] = useState(() => Math.random().toString(36).slice(-8))
  const target = `#nut-collapse-content-${refRandomId}`

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

  const handleClick = () => {
    if (!disabled) {
      context.updateValue(name)
    }
  }

  const [timer, setTimer] = useState<any>(null)
  const [currentHeight, setCurrentHeight] = useState<string>('auto')
  const inAnimation = useRef(false)
  const [wrapperHeight, setWrapperHeight] = useState(() =>
    expanded ? 'auto' : '0px'
  )

  const getRect = (selector: string) => {
    return new Promise((resolve) => {
      createSelectorQuery()
        .select(selector)
        .boundingClientRect()
        .exec((rect = []) => {
          resolve(rect[0])
        })
    })
  }

  useEffect(() => {
    setTimeout(() => {
      getRect(target).then((res: any) => {
        if (res?.height) {
          setCurrentHeight(`${res.height}px`)
        }
      })
    }, 200)
  }, [children])

  useEffect(() => {
    setTimeout(() => {
      getRect(target).then((res: any) => {
        if (res?.height) {
          setCurrentHeight(`${res.height}px`)
        }
      })
    }, 100)
  }, [])

  const toggle = () => {
    // 连续切换状态时，清除打开的后续操作
    if (timer) {
      clearTimeout(timer)
      setTimer(timer)
    }
    const start = expanded ? '0px' : currentHeight
    const end = expanded ? currentHeight : '0px'
    inAnimation.current = true
    setWrapperHeight(start)
    setTimeout(() => {
      setWrapperHeight(end)
      inAnimation.current = false
      if (expanded) {
        const timer = setTimeout(() => {
          setWrapperHeight('auto')
        }, 300)
        setTimer(timer)
      }
    }, 100)
  }

  const init = useRef(true)

  useEffect(() => {
    if (init.current) {
      init.current = false
    } else {
      toggle()
    }
  }, [expanded])

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <div
        className={classNames(`${classPrefix}-header`, { disabled })}
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
        className={`${classPrefix}-content`}
        ref={wrapperRef}
        style={{
          willChange: 'height',
          height: wrapperHeight,
        }}
      >
        <div
          ref={contentRef}
          className={`${classPrefix}-content-text`}
          id={`nut-collapse-content-${refRandomId}`}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

CollapseItem.displayName = 'NutCollapseItem'
