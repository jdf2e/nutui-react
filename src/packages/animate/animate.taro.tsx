import React, { useState, FunctionComponent } from 'react'
import { AnimateType, AnimateAction } from './type'
import classNames from 'classnames'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AnimateProps extends BasicComponent {
  type: AnimateType
  action: AnimateAction
  loop: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const defaultProps = {
  ...ComponentDefaults,
  type: 'shake',
  action: 'initial',
  loop: false,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as AnimateProps
export const Animate: FunctionComponent<
  Partial<AnimateProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { className, type, action, loop, onClick, children, ...rest } = {
    ...defaultProps,
    ...props,
  }

  const [clicked, setClicked] = useState(false)

  const b = bem('animate')
  const classes = classNames({
    'nut-ani-container': true,
    [`${b('')}-${type}`]: action === 'initial' || clicked ? type : false,
    loop: loop,
  })
  const cls = classNames(classes, className)

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClicked(true)
    //如果不是无限循环，清除类名
    if (!loop) {
      setTimeout(() => {
        setClicked(false)
      }, 1000)
    }
    onClick && onClick(event)
  }

  return (
    <div className="nut-animate">
      <div className={cls} onClick={handleClick} {...rest}>
        {children}
      </div>
    </div>
  )
}

Animate.defaultProps = defaultProps
Animate.displayName = 'NutAnimate'
