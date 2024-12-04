import React, { useMemo, useState } from 'react'
import classNames from 'classnames'
import { BaseEventOrig, ITouchEvent, View } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmony, harmonyAndRn } from '@/utils/platform-taro'
import { getIcon } from '@/packages/hoverbuttonitem/utils'

export interface HoverButtonItemProps extends BasicComponent {
  icon?: React.ReactNode
  onClick?: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  icon: null,
  onClick: (
    value: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {},
} as HoverButtonItemProps

const classPrefix = 'nut-hoverbutton-item'
const isHarmony = harmony()
const isNative = harmonyAndRn()

export const HoverButtonItem = (props: Partial<HoverButtonItemProps>) => {
  const { className, style, icon, onClick, children } = {
    ...defaultProps,
    ...props,
  } as any
  const [isTouchStart, setTouchStart] = useState(false)
  // @TODO 待添加暗黑模式及样式变量功能
  const nativeProps = useMemo(
    () => (isNative ? { color: isTouchStart ? '#595959' : '#1A1A1A' } : {}),
    [isTouchStart]
  )

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    onClick && onClick(event)
  }

  const handleActiveStart = (event: BaseEventOrig) => {
    isNative && setTouchStart(true)
  }

  const handleActiveEnd = (event: BaseEventOrig) => {
    isNative && setTouchStart(false)
  }

  const renderBody = () => {
    if (icon && !children)
      return <View className={`${classPrefix}-icon`}>{getIcon(icon)}</View>
    if (icon && children) {
      return (
        <>
          <View
            className={classNames({
              [`${classPrefix}-text-icon`]: true,
            })}
          />
          {getIcon(icon)}
          <View
            className={classNames({
              [`${classPrefix}-text`]: true,
            })}
          >
            {children}
          </View>
        </>
      )
    }
  }

  return (
    <View
      className={classNames([`${classPrefix}-container`, className], {
        [`${classPrefix}-container-active`]: isNative && isTouchStart,
        [`${classPrefix}-container-harmony`]: isHarmony,
        [`${classPrefix}-container-icontext`]: icon && children,
      })}
      style={style}
      onTouchStart={handleActiveStart}
      onTouchEnd={handleActiveEnd}
      onTouchCancel={handleActiveEnd}
      onClick={handleClick}
    >
      {renderBody()}
    </View>
  )
}

HoverButtonItem.displayName = 'NutHoverButtonItem'
