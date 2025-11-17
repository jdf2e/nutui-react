import React, { FC } from 'react'
import classNames from 'classnames'
import { WebSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<WebSafeAreaProps> = (props) => {
  const { className, style, position, ...rest } = props

  return (
    <div
      {...rest}
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${position}`,
        className
      )}
      style={style}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
