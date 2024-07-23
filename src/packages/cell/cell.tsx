import React, {
  CSSProperties,
  FunctionComponent,
  ReactNode,
  useContext,
} from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CellGroup from '@/packages/cellgroup'
import CellGroupContext from '@/packages/cellgroup/context'
import { pxCheck } from '@/utils/px-check'

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
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const baseStyle = {
    ...style,
    borderRadius: pxCheck(radius),
    alignItems: align,
  }

  const styles: CSSProperties =
    title || description
      ? {}
      : {
          flex: 1,
        }
  return (
    <div
      className={classNames(classPrefix, className)}
      onClick={onClick}
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
            <div className={`${classPrefix}-extra`} style={styles}>
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
