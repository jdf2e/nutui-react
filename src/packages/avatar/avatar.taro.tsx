import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useContext,
} from 'react'
import type { MouseEvent } from 'react'
import { View, ITouchEvent, Image } from '@tarojs/components'
import classNames from 'classnames'
import { User } from '@nutui/icons-react-taro'
import { AvatarContext } from '@/packages/avatargroup/context'
// import Image from '@/packages/image/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { harmonyAndRn } from '@/utils/platform-taro'
import AvatarGroup from '@/packages/avatargroup/index.taro'
import pxTransform from '@/utils/px-transform'

export interface AvatarProps extends BasicComponent {
  size: string
  icon: React.ReactNode
  shape: AvatarShape
  background: string
  color: string
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  src: string
  avatarIndex: number
  onClick: (e: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
  onError: () => void
}

export type AvatarShape = 'round' | 'square'

const defaultProps = {
  ...ComponentDefaults,
  size: harmonyAndRn() ? '40' : '',
  shape: 'round',
  icon: '',
  background: '#eee',
  color: '#666',
  fit: 'cover',
  src: '',
  avatarIndex: 0,
} as AvatarProps

const classPrefix = `nut-avatar`
export const Avatar: FunctionComponent<
  Partial<AvatarProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> & { Group: typeof AvatarGroup } = (props) => {
  const {
    children,
    size,
    shape,
    background,
    color,
    src,
    icon,
    fit,
    avatarIndex,
    className,
    style,
    onClick,
    onError,
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [showMax, setShowMax] = useState(false) // 是否显示的最大头像个数
  const avatarRef = useRef<any>(null)
  const parent: any = useContext(AvatarContext)
  const sizeValue = ['large', 'normal', 'small']
  const { propAvatarGroup } = parent
  const groupSize = propAvatarGroup?.size
  const groupShape = propAvatarGroup?.shape
  const groupCount = propAvatarGroup?.avatarCount
  const groupMax = propAvatarGroup?.max

  const classes = classNames({
    [`nut-avatar-${groupSize || size || 'normal'}`]: true,
    [`nut-avatar-${groupShape || shape}`]: true,
    [`nut-avatar-${groupSize || size || 'normal'}-round`]:
      shape === 'round' && true,
  })

  const nativeClasses = classNames({
    [`nut-avatar-first-child`]: avatarIndex === 1,
  })

  const cls = classNames(classPrefix, classes, className, nativeClasses)
  const styles: React.CSSProperties = {
    width: sizeValue.indexOf(size) > -1 ? '' : pxTransform(parseInt(size)),
    height: sizeValue.indexOf(size) > -1 ? '' : pxTransform(parseInt(size)),
    backgroundColor: `${background}`,
    color,
    [harmonyAndRn() ? 'marginRight' : 'marginLeft']:
      avatarIndex !== 1 && propAvatarGroup?.gap
        ? `${propAvatarGroup?.gap}px`
        : '',
    zIndex:
      propAvatarGroup?.level === 'right'
        ? Math.abs(groupCount - avatarIndex)
        : '',
    ...style,
  }

  const maxStyles: React.CSSProperties = {
    backgroundColor: `${propAvatarGroup?.maxBackground}`,
    color: `${propAvatarGroup?.maxColor}`,
  }

  useEffect(() => {
    const maxCount = groupMax || groupCount
    if (
      avatarIndex === groupCount &&
      avatarIndex !== maxCount &&
      groupCount > maxCount
    ) {
      setShowMax(true)
    }
  }, [avatarIndex, groupCount])

  const errorEvent = () => {
    onError && onError()
  }

  const clickAvatar = (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    onClick && onClick(e)
  }

  return (
    <>
      {(showMax || !groupMax || avatarIndex <= groupMax) && (
        <View
          className={cls}
          style={!showMax ? styles : maxStyles}
          onClick={clickAvatar}
          ref={avatarRef}
        >
          {(!groupMax || avatarIndex <= groupMax) && (
            <>
              {src && (
                <Image
                  className={`nut-avatar-img nut-avatar-${groupSize || size || 'normal'}-img`}
                  src={src}
                  style={{ objectFit: fit }}
                  onError={errorEvent}
                />
              )}
              {React.isValidElement(icon) ? (
                <View className="nut-avatar-text">
                  {React.cloneElement<any>(icon, {
                    ...icon.props,
                    color,
                    className: `${icon.props.className || ''} nut-avatar-icon nut-avatar-${groupSize || size || 'normal'}-icon`,
                  })}
                </View>
              ) : null}
              {children && (
                <View
                  style={{ color }}
                  className={`nut-avatar-text nut-avatar-${groupSize || size || 'normal'}-text`}
                >
                  {children}
                </View>
              )}
              {!src && !icon && !children && (
                <View className="nut-avatar-text">
                  <User
                    style={{ color }}
                    className={`nut-avatar-icon nut-avatar-${groupSize || size || 'normal'}-icon`}
                  />
                </View>
              )}
            </>
          )}
          {showMax && (
            <View
              className={`nut-avatar-text nut-avatar-${groupSize || 'normal'}-text`}
              style={{ ...maxStyles }}
            >
              {propAvatarGroup?.maxContent
                ? propAvatarGroup?.maxContent
                : `+ ${avatarIndex - Number(groupMax || 0)}`}
            </View>
          )}
        </View>
      )}
    </>
  )
}

Avatar.displayName = 'NutAvatar'
Avatar.Group = AvatarGroup
