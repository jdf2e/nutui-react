import React, { useCallback } from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { ViewProps } from '@tarojs/components/types/View'
import RadioContext from './context'
import Radio from '@/packages/radio/index.taro'
import { usePropsValue } from '@/hooks/use-props-value'
import { TaroRadioGroupProps } from '@/types'

const defaultProps = {
  labelPosition: 'right',
  onChange: (value: string | number) => {},
  direction: 'vertical',
  options: [],
} as TaroRadioGroupProps

const classPrefix = 'nut-radiogroup'

export const RadioGroup = React.forwardRef(
  (props: Partial<TaroRadioGroupProps> & Omit<ViewProps, 'onChange'>, ref) => {
    const {
      children,
      className,
      value,
      defaultValue,
      onChange,
      shape,
      labelPosition,
      direction,
      options,
      disabled,
      ...rest
    } = { ...defaultProps, ...props }
    const cls = classNames(
      classPrefix,
      {
        [`${classPrefix}-${direction}`]: direction,
      },
      className
    )

    const [val2State, setVal2State] = usePropsValue<string | number>({
      defaultValue: props.defaultValue,
      value: props.value,
      finalValue: '',
      onChange,
    })

    const renderOptionsChildren = useCallback(() => {
      return options?.map(({ label, value, disabled, onChange, ...rest }) => {
        return (
          <Radio
            {...rest}
            key={value?.toString()}
            children={label}
            value={value}
            disabled={disabled}
            onChange={onChange}
            labelPosition={labelPosition}
            checked={value === val2State}
          />
        )
      })
    }, [options, labelPosition, val2State])

    return (
      <RadioContext.Provider
        value={{
          labelPosition: labelPosition || 'right',
          disabled,
          shape,
          value: val2State,
          check: (value: string | number) => {
            setVal2State(value)
          },
          uncheck: () => {
            setVal2State('')
          },
        }}
      >
        <View className={cls} {...rest}>
          {options?.length ? renderOptionsChildren() : children}
        </View>
      </RadioContext.Provider>
    )
  }
)

RadioGroup.displayName = 'NutRadioGroup'
