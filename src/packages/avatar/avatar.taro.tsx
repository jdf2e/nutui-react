import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useContext,
} from 'react'
import type { MouseEvent } from 'react'
import Taro, { getEnv } from '@tarojs/taro'
import { View, ITouchEvent } from '@tarojs/components'
import classNames from 'classnames'
import { User } from '@nutui/icons-react-taro'
import Image from '@/packages/image/index.taro'
import { AvatarContext } from '@/packages/avatargroup/context'
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
  alt: string
  onClick: (e: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
  onError: () => void
}

export type AvatarShape = 'round' | 'square'

const defaultProps = {
  ...ComponentDefaults,
  size: '',
  shape: 'round',
  icon: '',
  fit: 'cover',
  background: '#eee',
  color: '#666',
  src: '',
  alt: '',
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
    alt,
    className,
    style,
    onClick,
    onError,
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [maxSum, setMaxSum] = useState(0) // avatarGroup里的avatar的个数
  const [showMax, setShowMax] = useState(false) // 是否显示的最大头像个数
  const [avatarIndex, setAvatarIndex] = useState(1) // avatar的索引
  const avatarRef = useRef<any>(null)
  const parent: any = useContext(AvatarContext)
  const sizeValue = ['large', 'normal', 'small']

  const classes = classNames({
    [`nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}`]: true,
    [`nut-avatar-${parent?.propAvatarGroup?.shape || shape}`]: true,
    [`nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-round`]:
      shape === 'round' && true,
  })
  const cls = classNames(classPrefix, classes, className)

  const styles: React.CSSProperties = {
    width: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    height: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    backgroundColor: `${background}`,
    color,
    marginLeft:
      avatarIndex !== 1 && parent?.propAvatarGroup?.gap
        ? `${parent?.propAvatarGroup?.gap}px`
        : '',
    zIndex:
      parent?.propAvatarGroup?.level === 'right'
        ? `${Math.abs(maxSum - avatarIndex)}`
        : '',
    ...style,
  }

  const maxStyles: React.CSSProperties = {
    backgroundColor: `${parent?.propAvatarGroup?.maxBackground}`,
    color: `${parent?.propAvatarGroup?.maxColor}`,
  }

  useEffect(() => {
    const avatarChildren = parent?.avatarGroupRef?.current.children
    if (avatarChildren) {
      avatarLength(avatarChildren)
    }
  }, [])

  const isAvatarInClassList = (element: any) => {
    if (getEnv() === Taro.ENV_TYPE.WEB) {
      return (
        element.classList[0] === 'nut-avatar' ||
        element.classList.values().next().value === 'nut-avatar'
      )
    }

    return (
      element.classList?.tokenList[0] === 'nut-avatar' ||
      element.classList?.tokenList.values().next().value === 'nut-avatar'
    )
  }

  const avatarLength = (children: any) => {
    for (let i = 0; i < children.length; i++) {
      if (
        children[i] &&
        children[i].classList &&
        isAvatarInClassList(children[i])
      ) {
        children[i].setAttribute('data-index', i + 1)
      }
    }
    const index = avatarRef?.current?.dataset?.index
    const maxCount = parent?.propAvatarGroup?.max || children.length
    setMaxSum(children.length)
    setAvatarIndex(index)
    if (
      index === children.length &&
      index !== maxCount &&
      children.length > maxCount
    ) {
      setShowMax(true)
    }
  }

  const errorEvent = () => {
    if (onError) {
      onError()
    }
  }

  const clickAvatar = (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    onClick && onClick(e)
  }

  return (
    <>
      {(showMax ||
        !parent?.propAvatarGroup?.max ||
        avatarIndex <= parent?.propAvatarGroup?.max) && (
        <View
          className={cls}
          // {...rest}
          style={!showMax ? styles : maxStyles}
          onClick={clickAvatar}
          ref={avatarRef}
        >
          {(!parent?.propAvatarGroup?.max ||
            avatarIndex <= parent?.propAvatarGroup?.max) && (
            <>
              {src &&
                (harmonyAndRn() ? (
                  <Image
                    className={`nut-avatar-img nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-img`}
                    src={src}
                    width={pxTransform(60)}
                    height={pxTransform(60)}
                    style={{ objectFit: fit }}
                    onError={errorEvent}
                  />
                ) : (
                  <Image
                    className={`nut-avatar-img nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-img`}
                    src={src}
                    style={{ objectFit: fit }}
                    onError={errorEvent}
                  />
                ))}
              {React.isValidElement(icon)
                ? React.cloneElement<any>(icon, {
                    ...icon.props,
                    className: `${icon.props.className || ''} nut-avatar-icon nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-icon`,
                    style: { position: 'absolute' },
                  })
                : null}
              {children && (
                <View
                  className={`nut-avatar-text nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-text`}
                >
                  {children}
                </View>
              )}
              {!src && !icon && !children && !harmonyAndRn() && (
                <User
                  className={`nut-avatar-icon nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-icon`}
                  style={{ position: 'absolute' }}
                />
              )}
            </>
          )}
          {/* 折叠头像 */}
          {showMax && (
            <View
              className={`nut-avatar-text nut-avatar-${parent?.propAvatarGroup?.size || size || 'normal'}-text`}
            >
              {parent?.propAvatarGroup?.maxContent
                ? parent?.propAvatarGroup?.maxContent
                : `+ ${
                    avatarIndex - Number(parent?.propAvatarGroup?.max || 0)
                  }`}
            </View>
          )}
        </View>
      )}
    </>
  )
}

Avatar.displayName = 'NutAvatar'
Avatar.Group = AvatarGroup
