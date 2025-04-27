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
import { pxTransform } from '@/utils/taro/px-transform'
import { harmony } from '@/utils/taro/platform'
import { TaroBadgeProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: 0,
  right: 0,
  fill: 'solid',
  size: 'large',
  disabled: false,
} as TaroBadgeProps
export const Badge: FunctionComponent<Partial<TaroBadgeProps>> = (props) => {
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
    disabled,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-badge'
  const isHarmony = harmony()
  const classes = classNames(classPrefix, className)
  const badgeRef = useRef(null)
  const [contentStyle, setContentStyle] = useState({})

  function getContent() {
    if (dot || value === 0) return null
    if (typeof value === 'number') {
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
      typeof getContent() === 'string' && `${getContent()}`?.length === 1,
    [`${classPrefix}-dot`]: dot,
    [`${classPrefix}-dot-${size}`]: dot,
    [`${classPrefix}-${fill}`]: fill === 'outline',
    [`${classPrefix}-content`]: children,
    [`${classPrefix}-disabled`]: disabled,
  })

  useEffect(() => {
    if (badgeRef.current) {
      getPositionStyle()
    }
  }, [])

  const getPositionStyle = async () => {
    const style: CSSProperties = {
      top: pxTransform(Number(top) || 0),
      [rtl ? 'left' : 'right']: isHarmony
        ? pxTransform(Number(right))
        : `${Number(right) || 0}px`,
    }
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
      {!isIcon() && (getContent() || dot) && (
        <View className={contentClasses} style={contentStyle}>
          {getContent()}
        </View>
      )}
    </View>
  )
}

Badge.displayName = 'NutBadge'
