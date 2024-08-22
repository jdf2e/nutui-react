import React, { useCallback, useImperativeHandle } from 'react'
import classNames from 'classnames'
import { RadioGroupOption } from '@/packages/radiogroup/types'
import { Checkbox } from '../checkbox/checkbox.taro'
import Context from './context'
import { usePropsValue } from '@/utils/use-props-value'
import {
  CheckboxDirection,
  CheckboxLabelPosition,
  CheckboxLimit,
} from '@/packages/checkboxgroup/types'

export interface CheckboxGroupProps {
  disabled?: boolean
  value?: string[]
  defaultValue?: string[]
  list: boolean
  max: number | undefined
  min: number | undefined
  labelPosition: CheckboxLabelPosition
  direction: CheckboxDirection
  options: RadioGroupOption[]
  onChange: (value: string[]) => void
  onLimit: (type: CheckboxLimit) => void
}

const defaultProps = {
  max: undefined,
  min: undefined,
  list: false,
  labelPosition: 'right',
  direction: 'vertical',
  onChange: (value: string[]) => {},
  onLimit: (type: 'max' | 'min') => {},
  options: [],
} as CheckboxGroupProps

const classPrefix = 'nut-checkboxgroup'
export const CheckboxGroup = React.forwardRef(
  (
    props: Partial<CheckboxGroupProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const {
      children,
      className,
      disabled,
      list,
      value,
      defaultValue,
      max,
      min,
      labelPosition,
      direction,
      options,
      onChange,
      onLimit,
      ...rest
    } = { ...defaultProps, ...props }

    useImperativeHandle<any, any>(ref, () => ({
      toggle(state: boolean) {
        if (state === false) {
          setValue([])
        } else {
          const childrenLabel: string[] = []
          React.Children.map(children, (child) => {
            const childProps = (child as any).props
            childrenLabel.push(childProps.value)
          })
          setValue(childrenLabel)
        }
      },
      reverse() {
        const childrenLabel: string[] = []
        React.Children.map(children, (child) => {
          const childProps = (child as any).props
          childrenLabel.push(childProps.value)
        })
        const reverse: string[] = childrenLabel.filter(
          (c) => _value?.findIndex((v) => v === c) === -1
        )
        setValue(reverse)
      },
    }))

    const [_value, setValue] = usePropsValue<string[]>({
      value,
      defaultValue,
      finalValue: [] as string[],
      onChange,
    })

    const renderOptions = useCallback(() => {
      return options?.map(({ label, value, disabled, onChange, ...rest }) => {
        return (
          <Checkbox
            key={value?.toString()}
            label={label}
            disabled={disabled}
            value={value}
            {...rest}
          />
        )
      })
    }, [options, max, min])

    return (
      <Context.Provider
        value={{
          labelPosition: labelPosition || 'right',
          disabled,
          max,
          list,
          onLimit,
          value: _value,
          check: (value: string) => {
            const combined: string[] = [..._value, value]
            if (max !== undefined) {
              if (combined.length > max) {
                return onLimit?.('max')
              }
            }
            setValue(combined)
          },
          uncheck: (value: string) => {
            const reduced = _value.filter((item) => item !== value)
            if (min !== undefined && reduced.length < min) {
              return onLimit?.('min')
            }
            setValue(reduced)
          },
        }}
      >
        <div
          className={classNames(
            classPrefix,
            {
              [`nut-checkboxgroup-${direction}`]: direction,
              [`nut-checkboxgroup-list`]: list,
            },
            className
          )}
          {...rest}
        >
          {options?.length ? renderOptions() : children}
        </div>
      </Context.Provider>
    )
  }
)

CheckboxGroup.displayName = 'NutCheckboxGroup'
