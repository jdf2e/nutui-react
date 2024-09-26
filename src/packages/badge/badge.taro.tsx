import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useRtl } from '@/packages/configprovider/index.taro'
import pxTransform from '@/utils/px-transform'
import { getRectByTaro } from '@/utils/get-rect-by-taro'
import { harmonyAndRn } from '@/utils/platform-taro'

export type BadgeFill = 'solid' | 'outline'
export interface BadgeProps extends BasicComponent {
  value: ReactNode
  dot: boolean
  max: number
  top: string | number
  right: string | number
  color: string
  fill: BadgeFill
}
const defaultProps = {
  ...ComponentDefaults,
  value: '',
  dot: false,
  max: 99,
  top: '4',
  right: '8',
  color: '',
  fill: 'solid',
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
    color,
    fill,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-badge'
  const classes = classNames(classPrefix, className)
  const isHarmonyAndRn = harmonyAndRn()
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

  const contentClasses = classNames(`${classPrefix}-content`, {
    [`${classPrefix}-sup`]: isNumber() || isString() || dot,
    [`${classPrefix}-one`]:
      typeof content() === 'string' && `${content()}`?.length === 1,
    [`${classPrefix}-dot`]: dot,
    [`${classPrefix}-${fill}`]: fill === 'outline',
  })

  useEffect(() => {
    if (badgeRef.current) {
      getPositionStyle()
    }
  }, [badgeRef.current])
  const getPositionStyle = async () => {
    const style: CSSProperties = {}
    style.top = pxTransform(Number(-top) || 0)
    if (isHarmonyAndRn) {
      try {
        const reacts = await getRectByTaro(badgeRef.current)
        style.left =
          reacts?.width && reacts?.width > Number(right)
            ? pxTransform(reacts.width - Number(right))
            : 0
      } catch (error) {
        console.log(error)
      }
    } else {
      const dir = rtl ? 'left' : 'right'
      style[dir] = `${Number(right) || parseFloat(String(right)) || 0}px`
    }
    setContentStyle(style)
  }

  const getStyle = () => {
    const style: CSSProperties = {}
    if (color) {
      if (fill === 'outline') {
        style.color = color
        style.backgroundColor = '#fff'
        if (!color?.includes('gradient')) {
          style.borderColor = color
        }
      } else {
        style.color = '#fff'
        style.backgroundColor = color
      }
    }
    return style
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
        <View
          className={contentClasses}
          style={{ ...contentStyle, ...getStyle() }}
        >
          {content()}
        </View>
      )}
    </View>
  )
}

Badge.displayName = 'NutBadge'
