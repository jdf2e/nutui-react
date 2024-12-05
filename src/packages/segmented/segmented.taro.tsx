import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { SegmentedItem, SegmentedProps } from './types'
import { usePropsValue } from '@/utils/use-props-value'
import { mergeProps } from '@/utils/merge-props'

const defaultProps = {
  options: [],
  onChange: <T = any,>(value: T) => {},
}

export const Segmented = (props: Partial<SegmentedProps>) => {
  const classPrefix = 'nut-segmented'
  const itemClassPrefix = 'nut-segmented-item'
  const mergedProps = mergeProps(defaultProps, props)

  const { options, onChange } = mergedProps

  const [value, setValue] = usePropsValue({
    value: mergedProps.value,
    defaultValue: mergedProps.defaultValue,
    finalValue: 0,
    onChange: mergedProps.onChange,
  })
  const renderItems = useCallback(
    (options: SegmentedProps['options'], value: string | number) => {
      return options.map((option, index) => {
        const optionType = typeof option
        switch (optionType) {
          case 'object':
            // eslint-disable-next-line no-case-declarations
            const opt = option as SegmentedItem
            return (
              <View
                className={classNames(itemClassPrefix, {
                  [`${itemClassPrefix}-active`]: opt.value === value,
                  [`${opt.className}`]: !!opt.className,
                })}
                key={opt.value}
                onClick={() => {
                  if (opt.disabled) return
                  setValue((option as SegmentedItem).value)
                }}
              >
                {opt.icon ? (
                  <View className="nut-segmented-icon">{opt.icon}</View>
                ) : null}
                {opt.label}
              </View>
            )
          default: {
            if (typeof option !== 'string' && typeof option !== 'number') {
              console.warn('Unsupported option type:', optionType)
            }
            return (
              <View
                className={classNames(itemClassPrefix, {
                  [`${itemClassPrefix}-active`]: index === value,
                })}
                key={option.toString()}
                onClick={() => {
                  setValue(index)
                }}
              >
                {option as string}
              </View>
            )
          }
        }
      })
    },
    [value]
  )

  return (
    <View className={classNames(classPrefix)} style={mergedProps.style}>
      {renderItems(options, value)}
    </View>
  )
}
