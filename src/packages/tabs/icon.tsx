import React, { FC } from 'react'

const shoulderColor =
  'var(--nutui-tabs-titles-item-active-background-color, var(--nutui-color-background-overlay, #ffffff))'

export interface CardShoulderProps {
  className?: string
}

export const CardShoulderLeft: FC<CardShoulderProps> = ({ className }) => {
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
      <g transform="matrix(-1,0,0,1,48,0)">
        <path
          d="M0 0L1.5213693 0C5.2987967 0 8.5614691 2.6422062 9.3466406 6.3371301L15.15336 33.662868C15.938531 37.357792 19.201202 40 22.97863 40L24 40L22.98 40L0 40L0 0Z"
          style={{ fill: shoulderColor }}
          transform="translate(24, 0)"
        />
      </g>
    </svg>
  )
}

export const CardShoulderRight: FC<CardShoulderProps> = ({ className }) => {
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
      <path
        d="M0 0L1.5213693 0C5.2987967 0 8.5614691 2.6422062 9.3466406 6.3371301L15.15336 33.662868C15.938531 37.357792 19.201202 40 22.97863 40L24 40L22.98 40L0 40L0 0Z"
        style={{ fill: shoulderColor }}
      />
    </svg>
  )
}
