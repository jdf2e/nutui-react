import React, { useCallback, useImperativeHandle } from 'react'
import classNames from 'classnames'
import { RadioGroupOptionType } from '@/packages/radiogroup/type'
import { Checkbox } from '../checkbox/checkbox'
import Context from './context'
import { usePropsValue } from '@/utils/use-props-value'

export type CheckboxLabelPosition = 'left' | 'right'
export type CheckboxDirection = 'horizontal' | 'vertical'

export interface CheckboxGroupProps {
  disabled?: boolean
  value?: string[]
  defaultValue?: string[]
  max: number | undefined
  labelPosition: CheckboxLabelPosition
  direction: CheckboxDirection
  onChange: (value: string[]) => void
  options: RadioGroupOptionType[]
}

const defaultProps = {
  max: undefined,
  labelPosition: 'right',
  direction: 'vertical',
  onChange: (value: string[]) => {},
  options: [],
} as CheckboxGroupProps

const classPrefix = 'nut-checkboxgroup'
export const CheckboxGroup = React.forwardRef(
  (
    props: Partial<CheckboxGroupProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props }
    const {
      className,
      disabled,
      onChange,
      value,
      defaultValue,
      max,
      labelPosition,
      direction,
      options,
      ...rest
    } = props

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
      value: props.value,
      defaultValue: props.defaultValue,
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
    }, [options, max])

    return (
      <Context.Provider
        value={{
          labelPosition: labelPosition || 'right',
          disabled,
          max,
          checkedValue: _value,
          check: (value: string) => {
            const combined: string[] = [..._value, value]
            setValue(combined)
          },
          uncheck: (value: string) => {
            const reduced = _value.filter((item) => item !== value)
            setValue(reduced)
          },
        }}
      >
        <div
          className={classNames(classPrefix, {
            [`nut-checkboxgroup--${props.direction}`]: props.direction,
            className,
          })}
          {...rest}
        >
          {options?.length ? renderOptions() : children}
        </div>
      </Context.Provider>
    )
  }
)

CheckboxGroup.defaultProps = defaultProps
CheckboxGroup.displayName = 'NutCheckboxGroup'
