import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  radius: string | number
  align: string
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps

const classPrefix = 'cell'

export const Cell: FunctionComponent<
  Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> = (props) => {
  const {
    children,
    onClick,
    title,
    description,
    extra,
    radius,
    align,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event)
  }

  const baseStyle = {
    ...style,
    borderRadius: Number.isNaN(Number(radius)) ? String(radius) : `${radius}px`,
    alignItems: align,
  }

  const styles =
    title || description
      ? {}
      : {
          flex: 1,
        }
  return (
    <div
      className={classNames(classPrefix, className)}
      onClick={(event) => handleClick(event)}
      style={baseStyle}
      {...rest}
    >
      {children || (
        <>
          {title || description ? (
            <div className={`${classPrefix}__left`}>
              {title ? (
                <div className={`${classPrefix}__title`}>{title}</div>
              ) : null}
              {description ? (
                <div className={`${classPrefix}__description`}>
                  {description}
                </div>
              ) : null}
            </div>
          ) : null}
          {extra ? (
            <div
              className={`${classPrefix}__extra`}
              style={styles as React.CSSProperties}
            >
              {extra}
            </div>
          ) : null}
        </>
      )}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
