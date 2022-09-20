import React, {
  useState,
  useEffect,
  useRef,
  FunctionComponent,
  useContext,
  MouseEventHandler,
} from 'react'
import classNames from 'classnames'
import { AvatarContext } from '@/packages/avatargroup/AvatarContext'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface AvatarProps extends IComponent {
  size: string
  icon: string
  shape: AvatarShape
  bgColor: string
  color: string
  prefixCls: string
  url: string
  className: string
  alt: string
  style: React.CSSProperties
  activeAvatar: (e: MouseEvent) => void
  onError: (e: any) => void
}

export type AvatarShape = 'round' | 'square'

const defaultProps = {
  ...ComponentDefaults,
  size: '',
  icon: '',
  bgColor: '#eee',
  color: '#666',
  prefixCls: 'nut-avatar',
  url: '',
  alt: '',
} as AvatarProps
export const Avatar: FunctionComponent<
  Partial<AvatarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    prefixCls,
    size,
    shape,
    bgColor,
    color,
    url,
    alt,
    icon,
    className,
    style,
    activeAvatar,
    onError,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [maxSum, setMaxSum] = useState(0) // avatarGroup里的avatar的个数
  const [showMax, setShowMax] = useState(false) // 是否显示的最大头像个数
  const [avatarIndex, setAvatarIndex] = useState(1) // avatar的索引
  const avatarRef = useRef<any>(null)
  const parent: any = useContext(AvatarContext)

  const b = bem('avatar')
  const classes = classNames({
    [`nut-avatar-${size || parent?.propAvatarGroup?.size || 'normal'}`]: true,
    [`nut-avatar-${shape || parent?.propAvatarGroup?.shape || 'round'}`]: true,
  })
  const cls = classNames(b(''), classes, className)

  const sizeValue = ['large', 'normal', 'small']
  const styles: React.CSSProperties = {
    width: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    height: sizeValue.indexOf(size) > -1 ? '' : `${size}px`,
    backgroundColor: `${bgColor}`,
    color: `${color}`,
    marginLeft:
      avatarIndex !== 1 && parent?.propAvatarGroup?.span
        ? `${parent?.propAvatarGroup?.span}px`
        : '',
    zIndex:
      parent?.propAvatarGroup?.zIndex === 'right'
        ? `${Math.abs(maxSum - avatarIndex)}`
        : '',
    ...style,
  }

  const maxStyles: React.CSSProperties = {
    backgroundColor: `${parent?.propAvatarGroup?.maxBgColor}`,
    color: `${parent?.propAvatarGroup?.maxColor}`,
  }

  const iconStyles = icon || ''

  useEffect(() => {
    const avatarChildren = parent?.avatarGroupRef?.current.children
    if (avatarChildren) {
      avatarLength(avatarChildren)
    }
  }, [])

  const avatarLength = (children: any) => {
    for (let i = 0; i < children.length; i++) {
      console.log('child', children[i], children[i].classList)
      if (
        children[i] &&
        children[i].classList &&
        children[i].classList[0] === 'nut-avatar'
      ) {
        children[i].setAttribute('data-index', i + 1)
      }
    }
    const index = Number(avatarRef?.current?.dataset?.index)
    const maxCount = parent?.propAvatarGroup?.maxCount
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

  const errorEvent = (e: any) => {
    if (props.onError) {
      props.onError(e)
    }
  }

  const clickAvatar: MouseEventHandler<HTMLDivElement> = (e: any) => {
    if (props.activeAvatar) {
      props.activeAvatar(e)
    }
  }

  return (
    <>
      {(showMax ||
        !parent?.propAvatarGroup?.maxCount ||
        avatarIndex <= parent?.propAvatarGroup?.maxCount) && (
        <div
          className={cls}
          {...rest}
          style={!showMax ? styles : maxStyles}
          onClick={clickAvatar}
          ref={avatarRef}
        >
          {(!parent?.propAvatarGroup?.maxCount ||
            avatarIndex <= parent?.propAvatarGroup?.maxCount) && (
            <>
              {url && <img src={url} alt={alt} onError={errorEvent} />}
              {icon && (
                <Icon
                  classPrefix={iconClassPrefix}
                  fontClassName={iconFontClassName}
                  className="icon"
                  name={iconStyles}
                />
              )}
              {children && <span className="text">{children}</span>}
            </>
          )}
          {/* 折叠头像 */}
          {showMax && (
            <div className="text">
              {parent?.propAvatarGroup?.maxContent
                ? parent?.propAvatarGroup?.maxContent
                : `+ ${avatarIndex - parent?.propAvatarGroup?.maxCount}`}
            </div>
          )}
        </div>
      )}
    </>
  )
}

Avatar.defaultProps = defaultProps
Avatar.displayName = 'NutAvatar'
