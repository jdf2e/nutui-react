import React, { FC } from 'react'
import classNames from 'classnames'
import { WebSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<WebSafeAreaProps> = (props) => {
  const { position = 'bottom', className, style, ...rest } = props
  return (
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${position}`,
        className
      )}
      style={style}
      {...rest}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
