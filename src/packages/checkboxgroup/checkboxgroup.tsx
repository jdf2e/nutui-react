import React, { useCallback, useImperativeHandle } from 'react'
import bem from '@/utils/bem'
import { RadioGroupOptionType } from '@/packages/radiogroup/type'
import { Checkbox } from '../checkbox/checkbox'
import Context from './context'
import { usePropsValue } from '@/utils/use-props-value'

export type CheckboxTextPosition = 'left' | 'right'
export type CheckboxDirection = 'horizontal' | 'vertical'

export interface CheckboxGroupProps {
  disabled: boolean
  value?: string[]
  defaultValue?: string[]
  max: number | undefined
  textPosition: CheckboxTextPosition
  direction: CheckboxDirection
  onChange: (value: string[]) => void
  options: RadioGroupOptionType[]
}

const defaultProps = {
  disabled: false,
  max: undefined,
  textPosition: 'right',
  direction: 'vertical',
  onChange: (value: string[]) => {},
  options: [],
} as CheckboxGroupProps

export const CheckboxGroup = React.forwardRef(
  (
    props: Partial<CheckboxGroupProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props }
    const b = bem('checkboxgroup')
    const {
      className,
      disabled,
      onChange,
      value,
      defaultValue,
      max,
      textPosition,
      direction,
      options,
      ...rest
    } = props

    useImperativeHandle<any, any>(ref, () => ({
      toggleAll(state: boolean) {
        if (state === false) {
          setValue([])
        } else {
          const childrenLabel: string[] = []
          React.Children.map(children, (child) => {
            const childProps = (child as any).props
            childrenLabel.push(childProps.label || (child as any).children)
          })
          setValue(childrenLabel)
        }
      },
      toggleReverse() {
        const childrenLabel: string[] = []
        React.Children.map(children, (child) => {
          const childProps = (child as any).props
          childrenLabel.push(childProps.label || (child as any).children)
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
            children={label}
            label={value}
            {...rest}
          />
        )
      })
    }, [options, max])

    return (
      <Context.Provider
        value={{
          textPosition: textPosition || 'left',
          disabled,
          max,
          checkedValue: _value,
          check: (value: string) => {
            const combined: string[] = [..._value, value]
            setValue(combined)
            onChange && onChange(combined)
          },
          uncheck: (value: string) => {
            const reduced = _value.filter((item) => item !== value)
            setValue(reduced)
            onChange && onChange(reduced)
          },
        }}
      >
        <div
          className={`${b()} nut-checkboxgroup--${props.direction} ${
            className || ''
          }`}
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
