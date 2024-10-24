import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useContext,
  useCallback,
} from 'react'
import type { MouseEvent } from 'react'
import Taro, { getEnv } from '@tarojs/taro'
import classNames from 'classnames'
import { User } from '@nutui/icons-react-taro'
import { AvatarContext } from '@/packages/avatargroup/context'
import Image from '@/packages/image/index.taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import AvatarGroup from '@/packages/avatargroup/index.taro'

export interface AvatarProps extends BasicComponent {
  size: string
  icon: React.ReactNode
  shape: AvatarShape
  background: string
  color: string
  fit: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  src: string
  alt: string
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  onError: () => void
}

export type AvatarShape = 'round' | 'square'

const defaultProps = {
  ...ComponentDefaults,
  size: '',
  shape: 'round',
  icon: '',
  background: '#eee',
  color: '#666',
  fit: 'cover',
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
    alt,
    icon,
    fit,
    className,
    style,
    onClick,
    onError,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [maxSum, setMaxSum] = useState(0) // avatarGroup里的avatar的个数
  const [showMax, setShowMax] = useState(false) // 是否显示的最大头像个数
  const [avatarIndex, setAvatarIndex] = useState(1)
  const avatarRef = useRef<any>(null)
  const parent: any = useContext(AvatarContext)
  const sizeValue = ['large', 'normal', 'small']
  const { propAvatarGroup, avatarGroupRef } = parent

  const classes = classNames({
    [`nut-avatar-${propAvatarGroup?.size || size || 'normal'}`]: true,
    [`nut-avatar-${propAvatarGroup?.shape || shape}`]: true,
  })
  const cls = classNames(classPrefix, classes, className)

  const styles: React.CSSProperties = {
    width: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    height: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    backgroundColor: `${background}`,
    color,
    marginLeft:
      avatarIndex !== 1 && propAvatarGroup?.gap
        ? `${propAvatarGroup?.gap}px`
        : '',
    zIndex:
      propAvatarGroup?.level === 'right'
        ? `${Math.abs(maxSum - avatarIndex)}`
        : '',
    ...style,
  }

  const maxStyles: React.CSSProperties = {
    backgroundColor: `${propAvatarGroup?.maxBackground}`,
    color: `${propAvatarGroup?.maxColor}`,
  }

  const avatarLength = useCallback(
    (children: any) => {
      for (let i = 0; i < children.length; i++) {
        if (
          children[i] &&
          children[i].classList &&
          isAvatarInClassList(children[i])
        ) {
          children[i].setAttribute('data-index', i + 1)
        }
      }
      const index = Number(avatarRef?.current?.dataset?.index)
      const maxCount = propAvatarGroup?.max
      setMaxSum(children.length)
      setAvatarIndex(index)
      if (
        index === children.length &&
        index !== maxCount &&
        children.length > maxCount
      ) {
        setShowMax(true)
      }
    },
    [propAvatarGroup?.max]
  )

  useEffect(() => {
    const avatarChildren = avatarGroupRef?.current.children
    if (avatarChildren) {
      avatarLength(avatarChildren)
    }
  }, [avatarLength, avatarGroupRef])

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

  const errorEvent = () => {
    onError && onError()
  }

  const clickAvatar = (e: MouseEvent<HTMLDivElement>) => {
    onClick && onClick(e)
  }

  return (
    <>
      {(showMax ||
        !propAvatarGroup?.max ||
        avatarIndex <= propAvatarGroup?.max) && (
        <div
          className={cls}
          {...rest}
          style={!showMax ? styles : maxStyles}
          onClick={clickAvatar}
          ref={avatarRef}
        >
          {(!propAvatarGroup?.max || avatarIndex <= propAvatarGroup?.max) && (
            <>
              {src && (
                <Image
                  className="avatar-img"
                  src={src}
                  style={{ objectFit: fit }}
                  onError={errorEvent}
                />
              )}
              {React.isValidElement(icon)
                ? React.cloneElement<any>(icon, {
                    ...icon.props,
                    className: `${icon.props.className || ''} icon`,
                  })
                : null}
              {children && <span className="text">{children}</span>}
              {!src && !icon && !children && <User className="icon" />}
            </>
          )}
          {showMax && (
            <div className="text">
              {propAvatarGroup?.maxContent
                ? propAvatarGroup?.maxContent
                : `+ ${avatarIndex - Number(propAvatarGroup?.max || 0)}`}
            </div>
          )}
        </div>
      )}
    </>
  )
}

Avatar.displayName = 'NutAvatar'
Avatar.Group = AvatarGroup
