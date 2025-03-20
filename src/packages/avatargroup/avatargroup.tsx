import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import { AvatarContext } from './context'
import { ComponentDefaults } from '@/utils/typings'
import { WebAvatarGroupProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  maxContent: '',
  max: '',
  maxBackground: '#eee',
  maxColor: '#666',
  gap: '-8',
  level: 'left',
} as WebAvatarGroupProps

const classPrefix = `nut-avatar-group`
export const AvatarGroup: FunctionComponent<Partial<WebAvatarGroupProps>> = (
  props
) => {
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

AvatarGroup.displayName = 'NutAvatarGroup'
