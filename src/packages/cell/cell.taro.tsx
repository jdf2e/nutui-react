import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { View, ITouchEvent } from '@tarojs/components'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro'
import CellGroupContext from '@/packages/cellgroup/context'

export interface CellProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  radius: string | number
  align: string
  onClick: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  onClick: (event: React.MouseEvent<Element, MouseEvent> | ITouchEvent) => {},
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
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const handleClick = (
    event: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
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
    <View
      className={classNames(classPrefix, className)}
      onClick={(event) => handleClick(event)}
      style={baseStyle}
      // {...rest}
    >
      {children || (
        <>
          {title || description ? (
            <View className={`${classPrefix}-left`}>
              {title ? (
                <View className={`${classPrefix}-title`}>{title}</View>
              ) : null}
              {description ? (
                <View className={`${classPrefix}-description`}>
                  {description}
                </View>
              ) : null}
            </View>
          ) : null}
          {extra ? (
            <View
              className={`${classPrefix}-extra`}
              style={styles as React.CSSProperties}
            >
              {extra}
            </View>
          ) : null}
        </>
      )}
      {ctx?.divider ? <View className={`${classPrefix}-divider`} /> : null}
    </View>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
Cell.Group = CellGroup
