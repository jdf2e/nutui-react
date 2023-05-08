import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import { AvatarContext } from './avatarcontext'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AvatarGroupProps extends BasicComponent {
  maxContent: string
  max: string | number
  maxBgColor: string
  maxColor: string
  size: 'large' | 'normal' | 'small'
  shape: 'round' | 'square'
  gap: string
  level: 'left' | 'right'
}
const defaultProps = {
  ...ComponentDefaults,
  maxContent: '',
  max: '',
  maxBgColor: '#eee',
  maxColor: '#666',
  gap: '-8',
  level: 'left',
} as AvatarGroupProps

const classPrefix = `nut-avatar-group`
export const AvatarGroup: FunctionComponent<
  Partial<AvatarGroupProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const propAvatarGroup = { ...defaultProps, ...props }
  const { className, style, children } = propAvatarGroup

  const avatarGroupRef = useRef(null)
  const cls = classNames(classPrefix, className)

  const parentAvatar = {
    propAvatarGroup,
    avatarGroupRef,
  }
  return (
    <AvatarContext.Provider value={parentAvatar}>
      <div className={cls} style={style} ref={avatarGroupRef}>
        {children}
      </div>
    </AvatarContext.Provider>
  )
}

AvatarGroup.defaultProps = defaultProps
AvatarGroup.displayName = 'NutAvatarGroup'
