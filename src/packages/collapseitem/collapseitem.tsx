import React, {
  FunctionComponent,
  useEffect,
  useState,
  useCallback,
} from 'react'

import bem from '@/utils/bem'
import Icon from '@/packages/icon'

import { IComponent, ComponentDefaults } from '@/utils/typings'

export interface CollapseItemProps extends IComponent {
  title: string
  name: string
  isOpen: boolean
  icon: string
  iconSize: string
  iconColor: string
  disabled: boolean
  rotate: number
  subTitle: string
  titleIcon: string
  titleIconColor: string
  titleIconPosition: string
  titleIconSize: string
  childnull: boolean
  onToggle: (isOpen: boolean, name: string) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  name: '',
  isOpen: false,
  icon: '',
  iconSize: '',
  iconColor: '',
  disabled: false,
  rotate: 180,
  subTitle: '',
  titleIcon: '',
  titleIconColor: '',
  titleIconPosition: '',
  titleIconSize: '',
  childnull: true,
} as CollapseItemProps
export const CollapseItem: FunctionComponent<
  Partial<CollapseItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    title,
    isOpen,
    onToggle,
    name,
    disabled,
    icon,
    rotate,
    subTitle,
    titleIcon,
    titleIconColor,
    titleIconPosition,
    titleIconSize,
    iconSize,
    iconColor,
    childnull,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const [domHeight, setDomHeight] = useState(-1) // 保存content的高度
  const [currHeight, setCurrHeight] = useState('auto') // 设置content的高度
  const [update, setUpdate] = useState(false)
  const [iconStyle, setIconStyle] = useState({
    transform: 'translateY(-50%)',
  })
  const colBem = bem('collapse-item')

  useEffect(() => {
    setCurrHeight('auto')
    setUpdate(!update)
  }, [children])

  const measuredRef = useCallback(
    (node: HTMLDivElement) => {
      if (node !== null) {
        setDomHeight(node.getBoundingClientRect().height)
      }
    },
    [update]
  )

  useEffect(() => {
    // 一开始content都有高度，在这里根据isOpen，改变其高度
    setTimeout(() => {
      if (domHeight !== -1) {
        isOpen ? setCurrHeight(`${domHeight}px`) : setCurrHeight('0px')
      }
      const newIconStyle = isOpen
        ? { transform: `translateY(-50%) rotate(${rotate}deg)` }
        : { transform: 'translateY(-50%)' }
      setIconStyle(newIconStyle)
    }, 10)
  }, [isOpen, domHeight, rotate])

  return (
    <div className={colBem()} {...rest}>
      <div
        className={colBem('header', { disabled })}
        onClick={() => {
          if (disabled) return
          onToggle && onToggle(isOpen, name)
        }}
      >
        <div className={colBem('title')}>
          {titleIcon && titleIconPosition === 'left' && (
            <b className={colBem('title-icon-left')}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={titleIcon}
                size={titleIconSize}
                color={disabled ? '#C2C2C2' : titleIconColor}
              />
            </b>
          )}
          {title}
          {titleIcon && titleIconPosition === 'right' && (
            <b className={colBem('title-icon-right')}>
              <Icon
                classPrefix={iconClassPrefix}
                fontClassName={iconFontClassName}
                name={titleIcon}
                size={titleIconSize}
                color={disabled ? '#C2C2C2' : titleIconColor}
              />
            </b>
          )}
        </div>
        <div className={colBem('sub-title')}>{subTitle}</div>
        <div className={colBem('icon-box')}>
          <div className={colBem('icon')} style={iconStyle}>
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name={icon}
              size={iconSize}
              color={disabled ? '#C2C2C2' : iconColor}
            />
          </div>
        </div>
      </div>
      {childnull && (
        <div
          className={colBem('content')}
          style={{ height: currHeight }}
          ref={measuredRef}
        >
          <div className={colBem('content-text')}>{children}</div>
        </div>
      )}
    </div>
  )
}

CollapseItem.defaultProps = defaultProps
CollapseItem.displayName = 'NutCollapseItem'
