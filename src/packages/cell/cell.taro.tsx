import React, { FunctionComponent, ReactNode } from 'react'
import { redirectTo, navigateTo } from '@tarojs/taro'
import bem from '@/utils/bem'
import Icon from '@/packages/icon/index.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellProps extends BasicComponent {
  title: ReactNode
  subTitle: ReactNode
  desc: string
  descTextAlign: string
  isLink: boolean
  icon: string
  roundRadius: string | number
  url: string
  to: string
  replace: boolean
  center: boolean
  size: string
  className: string
  iconSlot: ReactNode
  linkSlot: ReactNode
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  subTitle: null,
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  icon: '',
  roundRadius: '6px',
  url: '',
  to: '',
  replace: false,
  center: false,
  size: '',
  className: '',
  iconSlot: null,
  linkSlot: null,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps

export const Cell: FunctionComponent<
  Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    children,
    onClick,
    title,
    subTitle,
    desc,
    descTextAlign,
    isLink,
    icon,
    roundRadius,
    url,
    to,
    replace,
    center,
    size,
    className,
    iconSlot,
    linkSlot,
    iconClassPrefix,
    iconFontClassName,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell')
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event)
    const link = to || url
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }

  const baseStyle = {
    borderRadius: Number.isNaN(Number(roundRadius))
      ? String(roundRadius)
      : `${roundRadius}px`,
  }

  const styles =
    title || subTitle || icon
      ? { textAlign: descTextAlign }
      : {
          textAlign: descTextAlign,
          flex: 1,
        }
  return (
    <div
      className={`${b(
        { clickable: !!(isLink || to), center, large: size === 'large' },
        [className]
      )} `}
      onClick={(event) => handleClick(event)}
      style={baseStyle}
      {...rest}
    >
      {children || (
        <>
          {icon || iconSlot ? (
            <div className={b('icon')}>
              {iconSlot ||
                (icon ? (
                  <Icon
                    classPrefix={iconClassPrefix}
                    fontClassName={iconFontClassName}
                    name={icon}
                    className="icon"
                  />
                ) : null)}
            </div>
          ) : null}
          {title || subTitle ? (
            <div className={`${b('title')}`}>
              {title ? <div className={b('maintitle')}>{title}</div> : null}
              {subTitle ? (
                <div className={b('subtitle')}>{subTitle}</div>
              ) : null}
            </div>
          ) : null}
          {desc ? (
            <div
              className={b('value', {
                alone: !title && !subTitle,
              })}
              style={styles as React.CSSProperties}
            >
              {desc}
            </div>
          ) : null}
          {!linkSlot && (isLink || to) ? (
            <Icon
              classPrefix={iconClassPrefix}
              fontClassName={iconFontClassName}
              name="right"
              className={b('link')}
            />
          ) : (
            linkSlot
          )}
        </>
      )}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
