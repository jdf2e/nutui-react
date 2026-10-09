import React, { FC, CSSProperties } from 'react'
import { View } from '@tarojs/components'

const shoulderColor =
  'var(--nutui-tabs-titles-item-active-background-color, var(--nutui-color-background-overlay, #ffffff))'

const shoulderLeft =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDQwIiBmaWxsPSJub25lIj48ZyB0cmFuc2Zvcm09Im1hdHJpeCgtMSwwLDAsMSw0OCwwKSI+PHBhdGggZD0iTTAgMEwxLjUyMTM2OTMgMEM1LjI5ODc5NjcgMCA4LjU2MTQ2OTEgMi42NDIyMDYyIDkuMzQ2NjQwNiA2LjMzNzEzMDFMMTUuMTUzMzYgMzMuNjYyODY4QzE1LjkzODUzMSAzNy4zNTc3OTIgMTkuMjAxMjAyIDQwIDIyLjk3ODYzIDQwTDI0IDQwTDIyLjk4IDQwTDAgNDBMMCAwWiIgZmlsbD0iI2ZmZmZmZiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQsIDApIi8+PC9nPjwvc3ZnPg=='

const shoulderRight =
  'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDI0IDQwIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMCAwTDEuNTIxMzY5MyAwQzUuMjk4Nzk2NyAwIDguNTYxNDY5MSAyLjY0MjIwNjIgOS4zNDY2NDA2IDYuMzM3MTMwMUwxNS4xNTMzNiAzMy42NjI4NjhDMTUuOTM4NTMxIDM3LjM1Nzc5MiAxOS4yMDEyMDIgNDAgMjIuOTc4NjMgNDBMMjQgNDBMMjIuOTggNDBMMCA0MEwwIDBaIiBmaWxsPSIjZmZmZmZmIi8+PC9zdmc+'

export interface CardShoulderProps {
  className?: string
}

const CardShoulder: FC<CardShoulderProps & { url: string }> = ({
  className,
  url,
}) => {
  const mask = `url('${url}') 0 0/100% 100% no-repeat`
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

export const CardShoulderLeft: FC<CardShoulderProps> = ({ className }) => {
  return <CardShoulder className={className} url={shoulderLeft} />
}

export const CardShoulderRight: FC<CardShoulderProps> = ({ className }) => {
  return <CardShoulder className={className} url={shoulderRight} />
}
