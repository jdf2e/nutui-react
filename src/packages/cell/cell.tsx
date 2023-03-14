import React, { FunctionComponent, ReactNode } from 'react'
import { Right } from '@nutui/icons-react'
import bem from '@/utils/bem'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellProps extends BasicComponent {
  title: ReactNode
  subTitle: ReactNode
  desc: string
  descTextAlign: string
  isLink: boolean
  icon: ReactNode
  roundRadius: string | number
  url: string
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
  desc: '',
  descTextAlign: 'right',
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
    desc,
    descTextAlign,
    isLink,
    icon,
    roundRadius,
    url,
    replace,
    center,
    size,
    className,
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
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
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
        { clickable: !!isLink, center, large: size === 'large' },
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
          {!linkSlot && isLink ? <Right className={b('link')} /> : linkSlot}
        </>
      )}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
