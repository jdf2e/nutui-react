import React, { FunctionComponent, ReactNode, useContext } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import Taro, { pxTransform } from '@tarojs/taro'
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

  const radiusNumber = Number(String(radius).replace(/[^\d]/g, ''))

  const baseStyle = {
    ...style,
    borderRadius: [Taro.ENV_TYPE.HARMONYHYBRID, Taro.ENV_TYPE.HARMONY].includes(
      // @ts-ignore
      Taro.getEnv()
    )
      ? pxTransform(radiusNumber)
      : radiusNumber,
    alignItems: align,
  }

  return (
    <>
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
              <View className={`${classPrefix}-extra`}>{extra}</View>
            ) : null}
          </>
        )}
      </View>
      {ctx?.divider && !isLast ? (
        <View
          className={classNames([
            {
              [`${classPrefix}-divider`]: true,
              [`${classPrefix}-divider-rtl`]: rtl,
            },
          ])}
        >
          <View className={`${classPrefix}-divider-inner`} />
        </View>
      ) : null}
    </>
  )
}

Cell.displayName = 'NutCell'
Cell.Group = CellGroup
