import React, { FunctionComponent, useState } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { TaroAnimateProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  type: 'shake',
  action: 'initial',
  loop: false,
  onClick: (event) => {},
} as TaroAnimateProps

const classPrefix = 'nut-animate'

export const Animate: FunctionComponent<Partial<TaroAnimateProps>> = (
  props
) => {
  const { className, type, action, loop, onClick, children, style } = {
    ...defaultProps,
    ...props,
  }

  const [clicked, setClicked] = useState(false)

  const classes = classNames(
    {
      'nut-ani-container': true,
      [`${classPrefix}-${type}`]: action === 'initial' || clicked,
      loop,
    },
    className
  )

  const handleClick = (event: ITouchEvent) => {
    setClicked(true)
    // 如果不是无限循环，清除类名
    if (!loop) {
      setTimeout(() => setClicked(false), 1000)
    }
    onClick(event)
  }

  return (
    <View className="nut-animate">
      <View className={classes} onClick={handleClick} style={style}>
        {children}
      </View>
    </View>
  )
}

Animate.displayName = 'NutAnimate'
