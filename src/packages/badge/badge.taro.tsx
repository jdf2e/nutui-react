import React, {
  CSSProperties,
  FunctionComponent,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import pxTransform from '@/utils/px-transform'
import { harmony } from '@/utils/platform-taro'
import { BadgeProps } from './types'

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: 0,
  right: 0,
  fill: 'solid',
  size: 'large',
} as BadgeProps
export const Badge: FunctionComponent<Partial<BadgeProps>> = (props) => {
  const rtl = useRtl()
  const {
    className,
    style,
    value,
    max,
    children,
    dot,
    top,
    right,
    fill,
    size,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-badge'
  const isHarmony = harmony()
  const classes = classNames(classPrefix, className)
  const badgeRef = useRef(null)
  const [contentStyle, setContentStyle] = useState({})

  function content() {
    if (dot || typeof value === 'object' || value === 0) return null
    if (typeof value === 'number' && typeof max === 'number') {
      return max < value ? `${max}+` : `${value}`
    }
    return value
  }

  function isIcon() {
    if (typeof value === 'object' && value) return value
  }

  function isNumber() {
    if (typeof value === 'number' && value) return value
  }

  function isString() {
    if (typeof value === 'string' && value) return value
  }

  const contentClasses = classNames({
    [`${classPrefix}-sup`]: isNumber() || isString() || dot,
    [`${classPrefix}-number`]: isNumber(),
    [`${classPrefix}-one`]:
      typeof content() === 'string' && `${content()}`?.length === 1,
    [`${classPrefix}-dot`]: dot,
    [`${classPrefix}-dot-${size}`]: dot,
    [`${classPrefix}-${fill}`]: fill === 'outline',
    [`${classPrefix}-content`]: children,
  })

  useEffect(() => {
    if (badgeRef.current) {
      getPositionStyle()
    }
  }, [])
  const getPositionStyle = async () => {
    const style: CSSProperties = {}
    style.top = pxTransform(Number(top) || 0)
    const dir = rtl ? 'left' : 'right'
    style[dir] = isHarmony
      ? pxTransform(Number(right))
      : `${Number(right) || 0}px`
    setContentStyle(style)
  }

  return (
    <View className={classes} style={style} ref={badgeRef}>
      {isIcon() && (
        <View
          className={classNames(`${classPrefix}-content`, {
            [`${classPrefix}-icon`]: true,
            [`${classPrefix}-icon-rtl`]: rtl,
          })}
          style={contentStyle}
        >
          {value}
        </View>
      )}
      {children}
      {!isIcon() && (
        <View className={contentClasses} style={contentStyle}>
          {content()}
        </View>
      )}
    </View>
  )
}

Badge.displayName = 'NutBadge'
