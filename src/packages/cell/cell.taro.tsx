import React, { FunctionComponent, useContext } from 'react'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import { ComponentDefaults } from '@/utils/typings'
import { CellGroup } from '@/packages/cellgroup/cellgroup.taro'
import CellGroupContext from '@/packages/cellgroup/context'
import { useRtl } from '@/packages/configprovider/index.taro'
import pxTransform from '@/utils/px-transform'
import { CellProps } from './types'

interface CellTaroProps extends CellProps {
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
  clickable: false,
  isLast: false,
  onClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent> | ITouchEvent
  ) => {},
} as CellTaroProps

const classPrefix = 'nut-cell'

export const Cell: FunctionComponent<
  Partial<CellTaroProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>
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
    clickable,
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
    borderRadius: pxTransform(radiusNumber),
    alignItems: align,
  }

  return (
    <>
      <View
        hoverStyle={{ opacity: clickable ? 0.7 : 1 }}
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
