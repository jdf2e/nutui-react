import React, { useCallback } from 'react'
import classNames from 'classnames'
import { RadioGroupOptionType } from './type'
import RadioContext from './context'
import Radio from '@/packages/radio/index.taro'
import { usePropsValue } from '@/utils/use-props-value'

type Position = 'left' | 'right'
type Direction = 'horizontal' | 'vertical'

export interface RadioGroupProps {
  value?: string | number
  defaultValue?: string | number
  labelPosition: Position
  direction: Direction
  disabled?: boolean
  options: RadioGroupOptionType[]
  onChange: (value: string | number) => void
}

const defaultProps = {
  labelPosition: 'right',
  onChange: (value: string | number) => {},
  direction: 'vertical',
  options: [],
} as RadioGroupProps

const classPrefix = 'nut-radiogroup'

export const RadioGroup = React.forwardRef(
  (
    props: Partial<RadioGroupProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const {
      children,
      className,
      value,
      defaultValue,
      onChange,
      labelPosition,
      direction,
      options,
      disabled,
      ...rest
    } = { ...defaultProps, ...props }

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
    }, [options])

    return (
      <RadioContext.Provider
        value={{
          labelPosition: labelPosition || 'right',
          disabled,
          value: val2State,
          check: (value: string | number) => {
            setVal2State(value)
          },
          uncheck: () => {
            setVal2State('')
          },
        }}
      >
        <div
          className={classNames(classPrefix, className, {
            [`${classPrefix}--${props.direction}`]: props.direction,
          })}
          {...rest}
        >
          {options?.length ? renderOptionsChildren() : children}
        </div>
      </RadioContext.Provider>
    )
  }
)

RadioGroup.defaultProps = defaultProps
RadioGroup.displayName = 'NutRadioGroup'
