import classNames from 'classnames'
import React, { FunctionComponent, ReactNode, useContext } from 'react'
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro'
import CellGroupContext from '@/packages/cellgroup/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface CellProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  radius: string | number
  align: 'flex-start' | 'center' | 'flex-end'
  clickable: boolean
  disabled: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  clickable: false,
  disabled: false,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps

const classPrefix = 'nut-cell'

export const Cell: FunctionComponent<
  Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & { Group: typeof CellGroup } = (props) => {
  const ctx = useContext(CellGroupContext)
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
    clickable,
    disabled,
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
      className={classNames(classPrefix, className, {
        [`${classPrefix}-clickable`]: clickable,
        [`${classPrefix}-disabled`]: disabled,
      })}
      onClick={(event) => handleClick(event)}
      style={baseStyle}
      {...rest}
    >
      {children || (
        <>
          {title || description ? (
            <div className={`${classPrefix}-left`}>
              {title ? (
                <div className={`${classPrefix}-title`}>{title}</div>
              ) : null}
              {description ? (
                <div className={`${classPrefix}-description`}>
                  {description}
                </div>
              ) : null}
            </div>
          ) : null}
          {extra ? (
            <div
              className={`${classPrefix}-extra`}
              style={styles as React.CSSProperties}
            >
              {extra}
            </div>
          ) : null}
        </>
      )}
      {ctx?.divider ? <div className={`${classPrefix}-divider`} /> : null}
    </div>
  )
}

Cell.displayName = 'NutCell'
Cell.Group = CellGroup
