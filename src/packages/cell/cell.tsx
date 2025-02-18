import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import CellGroup from '@/packages/cellgroup'
import CellGroupContext from '@/packages/cellgroup/context'
import { useRtl } from '@/packages/configprovider'
import { CellProps } from './types'

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  clickable: false,
  isLast: false,
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps

const classPrefix = 'nut-cell'

export const Cell: FunctionComponent<
  Partial<CellProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
> & { Group: typeof CellGroup } = (props) => {
  const ctx = useContext(CellGroupContext)
  const {
    children,
    clickable,
    onClick,
    title,
    description,
    extra,
    radius,
    align,
    isLast,
    className,
    style,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick(event)
  }

  const baseStyle = {
    ...style,
    borderRadius: Number.isNaN(Number(radius)) ? String(radius) : `${radius}px`,
    alignItems: align,
  }

  return (
    <>
      <div
        className={`${classNames(
          [
            classPrefix,
            className,
            {
              [`${classPrefix}-group-item`]: ctx?.group,
            },
          ],
          clickable ? `${classPrefix}-clickable` : ''
        )}`}
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
              <div className={`${classPrefix}-extra`}>{extra}</div>
            ) : null}
          </>
        )}
      </div>
      {ctx?.divider && !isLast ? (
        <div
          className={classNames([
            {
              [`${classPrefix}-divider`]: true,
              [`${classPrefix}-divider-rtl`]: rtl,
            },
          ])}
        >
          <div className={`${classPrefix}-divider-inner`} />
        </div>
      ) : null}
    </>
  )
}

Cell.displayName = 'NutCell'
Cell.Group = CellGroup
