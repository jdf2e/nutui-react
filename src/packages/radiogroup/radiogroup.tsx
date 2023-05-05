import React, { useCallback, useEffect, useState } from 'react'
import classNames from 'classnames'
import { RadioGroupOptionType } from './type'
import RadioContext from '../radio/context'
import { Radio } from '../radio/radio'

type Position = 'left' | 'right'
type Direction = 'horizontal' | 'vertical'

export interface RadioGroupProps {
  value?: string | number
  defaultValue?: string | number
  labelPosition: Position
  direction: Direction
  disabled?: boolean
  onChange: (value: string | number | boolean) => void
  options: RadioGroupOptionType[]
}

const defaultProps = {
  labelPosition: 'right',
  onChange: (value: string | number | boolean) => {},
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
    const { children } = { ...defaultProps, ...props }
    const {
      className,
      value,
      onChange,
      labelPosition,
      direction,
      options,
      ...rest
    } = props

    const [val2State, setVal2State] = useState(value)

    useEffect(() => {
      setVal2State(value)
    }, [value])

    function validateChildChecked(child: any) {
      if (val2State === null) return false
      return val2State === child.props.value
    }

    function validateChecked(value: any) {
      if (val2State === null) return false
      return val2State === value
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any, index) => {
        const childChecked = validateChildChecked(child)
        if ((child as any).type.displayName !== 'NutRadio') {
          return React.cloneElement(child)
        }
        return React.cloneElement(child, {
          labelPosition,
          checked: childChecked,
        })
      })
    }

    const renderOptionsChildren = useCallback(() => {
      return options?.map(({ label, value, disabled, onChange, ...rest }) => {
        const childChecked = validateChecked(value)
        return (
          <Radio
            {...rest}
            key={value?.toString()}
            children={label}
            value={value}
            disabled={disabled}
            onChange={onChange}
            labelPosition={labelPosition}
            checked={childChecked}
          />
        )
      })
    }, [val2State, options])

    return (
      <RadioContext.Provider
        value={{
          onChange: (val) => {
            setVal2State(val)
            onChange && onChange(val)
          },
        }}
      >
        <div
          className={classNames(classPrefix, className, {
            [`nut-radiogroup--${props.direction}`]: props.direction,
          })}
          {...rest}
        >
          {options?.length ? renderOptionsChildren() : cloneChildren()}
        </div>
      </RadioContext.Provider>
    )
  }
)

RadioGroup.defaultProps = defaultProps
RadioGroup.displayName = 'NutRadioGroup'
