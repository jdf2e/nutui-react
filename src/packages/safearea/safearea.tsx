import React, { FC } from 'react'
import classNames from 'classnames'
import { WebSafeAreaProps } from '@/types'

const classPrefix = 'nut-safe-area'
export const SafeArea: FC<WebSafeAreaProps> = (props) => {
  return (
    <div
      className={classNames(
        classPrefix,
        `${classPrefix}-position-${props.position}`
      )}
    />
  )
}

SafeArea.displayName = 'NutSafeArea'
