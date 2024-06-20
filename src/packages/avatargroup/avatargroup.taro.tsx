import React, { FunctionComponent, useRef } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { AvatarContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface AvatarGroupProps extends BasicComponent {
  maxContent: string
  max: string | number
  maxBackground: string
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
  maxBackground: '#eee',
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
    propAvatarGroup: {
      avatarCount: React.Children.count(children) || 0,
      ...propAvatarGroup,
    },
    avatarGroupRef,
  }

  return (
    <AvatarContext.Provider value={parentAvatar}>
      <View className={cls} style={style} ref={avatarGroupRef}>
        {React.Children.map(children, (child, index) => {
          // @ts-ignore
          return child?.type?.displayName === 'NutAvatar'
            ? // @ts-ignore
              React.cloneElement(child, {
                avatarIndex: index + 1,
                className: 'nut-avatar-group-avatar',
              })
            : child
        })}
      </View>
    </AvatarContext.Provider>
  )
}

AvatarGroup.displayName = 'NutAvatarGroup'
