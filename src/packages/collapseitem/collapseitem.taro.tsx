import React, {
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { nextTick } from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CollapseContext from '../collapse/context'
import { getRectInMultiPlatform } from '@/utils/taro/get-rect'
import { useUuid } from '@/hooks/use-uuid'
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
  const uid = useUuid()
  const target = `nut-collapse-content-${uid}`

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
    const res = await getRectInMultiPlatform(contentRef.current, target)
    if (res?.height) {
      setCurrentHeight(res.height)
      setWrapperHeight(expanded ? res.height : 0)
      nextTick(() => {
        setTran(1)
      })
    }
  }
  useEffect(() => {
    nextTick(() => {
      updateRectHeight()
    })
  }, [children, expanded])

  const toggle = () => {
    const end = !expanded ? currentHeight.current : 0
    setWrapperHeight(end)
  }
  const handleClick = () => {
    if (!disabled) {
      context.updateValue(name)
      setTimeout(() => {
        toggle()
      }, 150)
    }
  }

  return (
    <div className={classNames(classPrefix, className)} style={style} {...rest}>
      <View
        className={classNames(`${classPrefix}-header`, {
          [`${classPrefix}-header-disabled`]: disabled,
        })}
        onClick={handleClick}
      >
        <View className={`${classPrefix}-title`}>{title}</View>
        <View className={`${classPrefix}-extra`}>{extra}</View>
        <View className={`${classPrefix}-icon-box`}>
          <View className={`${classPrefix}-icon`} style={iconStyle}>
            {expandIcon || context.expandIcon}
          </View>
        </View>
      </View>
      <View
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
        <View className={`${classPrefix}-content`} ref={contentRef} id={target}>
          <View className={`${classPrefix}-content-text`}>{children}</View>
        </View>
      </View>
    </div>
  )
}

CollapseItem.displayName = 'NutCollapseItem'
