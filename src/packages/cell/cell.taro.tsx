import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro'
import CellGroupContext from '@/packages/cellgroup/context'
import { useRtl } from '@/packages/configprovider/index.taro'

export interface CellProps extends BasicComponent {
  title: ReactNode
  description: ReactNode
  extra: ReactNode
  radius: string | number
  align: string
  isLast: boolean
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  title: null,
  description: null,
  extra: null,
  radius: '6px',
  align: 'flex-start',
  isLast: false,
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {},
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
    isLast,
    className,
    style,
  } = {
    ...defaultProps,
    ...props,
  }

  const rtl = useRtl()

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {
    onClick(event)
  }

  const borderRadius = Number.isNaN(Number(radius))
    ? String(radius)
    : `${radius}px`

  const baseStyle = {
    ...style,
    borderRadius:
      Taro.getEnv() === 'RN' || Taro.getEnv() === Taro.ENV_TYPE.HARMONYHYBRID
        ? Number(String(radius).replace(/[^\d]/g, ''))
        : borderRadius,
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
      className={classNames([
        classPrefix,
        className,
        {
          [`${classPrefix}-group-item`]: ctx?.group,
        },
      ])}
      onClick={(event) => handleClick(event)}
      style={baseStyle}
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
      {ctx?.divider && !isLast ? (
        <View
          className={classNames([
            {
              [`${classPrefix}-divider`]: true,
              [`${classPrefix}-divider-rtl`]: rtl,
            },
          ])}
        />
      ) : null}
    </View>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
Cell.Group = CellGroup
