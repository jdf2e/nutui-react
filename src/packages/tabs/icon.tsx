import React, { FC } from 'react'

const shoulderColor =
  'var(--nutui-tabs-titles-item-active-background-color, var(--nutui-color-background-overlay, #ffffff))'

// 卡片肩部只保留这一份图形(右肩形状);左肩在样式层水平镜像复用,不再单独维护第二份资源
const SHOULDER_PATH =
  'M0 0L1.5213693 0C5.2987967 0 8.5614691 2.6422062 9.3466406 6.3371301L15.15336 33.662868C15.938531 37.357792 19.201202 40 22.97863 40L24 40L22.98 40L0 40L0 0Z'

export interface CardShoulderProps {
  className?: string
}

export const CardShoulder: FC<CardShoulderProps> = ({ className }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="40"
      viewBox="0 0 24 40"
      preserveAspectRatio="none"
      fill="none"
    >
      <path d={SHOULDER_PATH} style={{ fill: shoulderColor }} />
    </svg>
  )
}
