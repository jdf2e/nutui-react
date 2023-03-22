import React, { FunctionComponent, ReactNode } from 'react'
import { redirectTo, navigateTo } from '@tarojs/taro'
import { Right } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellProps extends BasicComponent {
  title: ReactNode
  subTitle: ReactNode
  description: string
  descriptionTextAlign: string
  isLink: boolean
  icon: ReactNode
  roundRadius: string | number
  url: string
  to: string
  replace: boolean
  center: boolean
  size: string
  className: string
  linkSlot: ReactNode
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  subTitle: null,
  description: '',
  descriptionTextAlign: 'right',
  isLink: false,
  icon: null,
  roundRadius: '6px',
  url: '',
  to: '',
  replace: false,
  center: false,
  size: '',
  className: '',
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
    description,
    descriptionTextAlign,
    isLink,
    icon,
    roundRadius,
    url,
    to,
    replace,
    center,
    size,
    className,
    linkSlot,
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
      ? { textAlign: descriptionTextAlign }
      : {
          textAlign: descriptionTextAlign,
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
          {icon && <div className={b('icon')}>{icon}</div>}
          {title || subTitle ? (
            <div className={`${b('title')}`}>
              {title ? <div className={b('maintitle')}>{title}</div> : null}
              {subTitle ? (
                <div className={b('subtitle')}>{subTitle}</div>
              ) : null}
            </div>
          ) : null}
          {description ? (
            <div
              className={b('value', {
                alone: !title && !subTitle,
              })}
              style={styles as React.CSSProperties}
            >
              {description}
            </div>
          ) : null}
          {!linkSlot && (isLink || to) ? (
            <Right className={b('link')} />
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
