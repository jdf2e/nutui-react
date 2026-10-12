import React, { FC, CSSProperties } from 'react'
import { View } from '@tarojs/components'

const shoulderColor =
  'var(--nutui-tabs-titles-item-active-background-color, var(--nutui-color-background-overlay, #ffffff))'

// 卡片肩部只保留这一份图形(右肩形状);左肩在样式层水平镜像复用,不再单独维护第二份资源
const shoulder =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDQwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwTDEuNTIxMzY5MyAwQzUuMjk4Nzk2NyAwIDguNTYxNDY5MSAyLjY0MjIwNjIgOS4zNDY2NDA2IDYuMzM3MTMwMUwxNS4xNTMzNiAzMy42NjI4NjhDMTUuOTM4NTMxIDM3LjM1Nzc5MiAxOS4yMDEyMDIgNDAgMjIuOTc4NjMgNDBMMjQgNDBMMjIuOTggNDBMMCA0MEwwIDBaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+'

export interface CardShoulderProps {
  className?: string
}

export const CardShoulder: FC<CardShoulderProps> = ({ className }) => {
  const mask = `url('${shoulder}') 0 0/100% 100% no-repeat`
  const maskStyle = (
    process.env.TARO_ENV === 'h5'
      ? { mask, WebkitMask: mask }
      : { mask, '-webkitMask': mask }
  ) as CSSProperties
  return (
    <View
      className={className}
      style={{ ...maskStyle, backgroundColor: shoulderColor }}
    />
  )
}
