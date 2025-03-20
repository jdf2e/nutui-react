import React, { useState, FunctionComponent } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { WebAnimateProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  type: 'shake',
  action: 'initial',
  loop: false,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as WebAnimateProps

const classPrefix = 'nut-animate'
export const Animate: FunctionComponent<
  Partial<WebAnimateProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { className, type, action, loop, onClick, children, ...rest } = {
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

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    setClicked(true)
    // 如果不是无限循环，清除类名
    if (!loop) {
      setTimeout(() => setClicked(false), 1000)
    }
    onClick(event)
  }

  return (
    <div className="nut-animate">
      <div className={classes} onClick={handleClick} {...rest}>
        {children}
      </div>
    </div>
  )
}

Animate.displayName = 'NutAnimate'
