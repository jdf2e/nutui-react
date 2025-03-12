import React, { CSSProperties, FunctionComponent, useState } from 'react'
import { ITouchEvent, View } from '@tarojs/components'
import { Close } from '@nutui/icons-react-taro'
import classNames from 'classnames'

import { ComponentDefaults } from '@/utils/typings'
import { TaroTagProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  type: 'default',
  background: '',
  color: '',
  plain: false,
  round: false,
  mark: false,
  closeable: false,
  closeIcon: null,
  onClose: (e: ITouchEvent) => {},
  onClick: (e: ITouchEvent) => {},
} as TaroTagProps
export const Tag: FunctionComponent<Partial<TaroTagProps>> = (props) => {
  const {
    className,
    style,
    background,
    plain,
    type,
    round,
    children,
    mark,
    closeable,
    closeIcon,
    color,
    onClick,
    onClose,
  } = {
    ...defaultProps,
    ...props,
  }
  const [visible, setVisible] = useState(true)
  const classPrefix = 'nut-tag'
  const classes = classNames({
    [classPrefix]: true,
    [`${classPrefix}-${type}`]: type,
    [`${classPrefix}-plain`]: plain,
    [`${classPrefix}-round`]: round,
    [`${classPrefix}-mark`]: mark,
    [`${classPrefix}-close`]: closeable,
    [`${className}`]: className,
  })

  const handleClick = (e: ITouchEvent) => {
    onClick && onClick(e)
  }
  // 综合考虑 color、background、plain 组合使用时的效果
  const getStyle = (): CSSProperties => {
    const style: CSSProperties = {}
    // 标签背景与边框颜色
    if (plain) {
      style.borderColor = background
    } else if (background) {
      style.backgroundColor = background
    }
    return style
  }

  const getTextStyle = () => {
    const style: CSSProperties = {}
    // 标签内字体颜色
    if (color) {
      style.color = color
    } else if (background && plain) {
      style.color = background
    }
    return style
  }

  const textClasses = classNames(`${classPrefix}-text`, {
    [`${classPrefix}-text-plain`]: plain,
  })
  return (
    <>
      {closeable ? (
        visible && (
          <View
            className={classes}
            style={{ ...style, ...getStyle() }}
            onClick={(e) => handleClick(e)}
          >
            {children && (
              <View className={textClasses} style={getTextStyle()}>
                {children}
              </View>
            )}
            {closeIcon ? (
              <View
                className={`${classPrefix}-custom-icon`}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e)
                }}
              >
                {closeIcon}
              </View>
            ) : (
              <Close
                size={8}
                onClick={(e) => {
                  setVisible(false)
                  onClose && onClose(e as any)
                }}
              />
            )}
          </View>
        )
      ) : (
        <View
          className={classes}
          style={{ ...style, ...getStyle() }}
          onClick={(e) => handleClick(e)}
        >
          {children && (
            <View className={textClasses} style={getTextStyle()}>
              {children}
            </View>
          )}
        </View>
      )}
    </>
  )
}

Tag.displayName = 'NutTag'
