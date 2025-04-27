import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'
import { Image, ITouchEvent, View } from '@tarojs/components'
import classNames from 'classnames'
import { User } from '@nutui/icons-react-taro'
import { AvatarContext } from '@/packages/avatargroup/context'
import { ComponentDefaults } from '@/utils/typings'
import { harmony } from '@/utils/taro/platform'
import AvatarGroup from '@/packages/avatargroup/index.taro'
import { pxTransform } from '@/utils/taro/px-transform'
import { TaroAvatarProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  size: harmony() ? '40' : '',
  shape: 'round',
  icon: '',
  background: '#eee',
  color: '#666',
  fit: 'cover',
  src: '',
  alt: '',
  avatarIndex: 0,
} as TaroAvatarProps

const classPrefix = `nut-avatar`
export const Avatar: FunctionComponent<Partial<TaroAvatarProps>> & {
  Group: typeof AvatarGroup
} = (props) => {
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
    [harmony() ? 'marginRight' : 'marginLeft']:
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

  const clickAvatar = (e: ITouchEvent) => {
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
