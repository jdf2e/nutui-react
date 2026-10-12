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
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-badge'
  const isHarmony = harmony()
  const classes = classNames(classPrefix, className)
  const badgeRef = useRef(null)
  const [contentStyle, setContentStyle] = useState<CSSProperties>({})

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

  const contentClasses = classNames(classPrefix, `${classPrefix}-visual`, {
    [`${classPrefix}-number`]: isNumber(),
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

  const hasBadge = !!(getContent() || dot)
  const standalonePositionStyle: CSSProperties = {
    ...(Number(top) ? { top: contentStyle.top } : {}),
    ...(Number(right)
      ? { [rtl ? 'left' : 'right']: contentStyle[rtl ? 'left' : 'right'] }
      : {}),
  }

  if (!children && hasBadge && !isIcon()) {
    return (
      <View
        className={classNames(contentClasses, className)}
        style={{ ...style, ...standalonePositionStyle }}
        ref={badgeRef}
        {...rest}
      >
        {!dot && <View className={`${classPrefix}-sup`}>{getContent()}</View>}
      </View>
    )
  }

  return (
    <View
      className={classNames(classes, `${classPrefix}-wrap`)}
      style={style}
      ref={badgeRef}
      {...rest}
    >
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
      {!isIcon() && hasBadge && (
        <View className={contentClasses} style={contentStyle}>
          {!dot && <View className={`${classPrefix}-sup`}>{getContent()}</View>}
        </View>
      )}
    </View>
  )
}

Badge.displayName = 'NutBadge'
