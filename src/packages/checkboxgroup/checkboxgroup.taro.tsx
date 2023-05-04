import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import bem from '@/utils/bem'
import { RadioGroupOptionType } from '@/packages/radiogroup/type'
import { Checkbox } from '../checkbox/checkbox.taro'
import Context from './context'

export type CheckboxTextPosition = 'left' | 'right'
export type CheckboxDirection = 'horizontal' | 'vertical'

export interface CheckboxGroupProps {
  disabled: boolean
  checkedValue: string[]
  max: number | undefined
  textPosition: CheckboxTextPosition
  direction: CheckboxDirection
  onChange: (value: string[]) => void
  options: RadioGroupOptionType[]
}

const defaultProps = {
  disabled: false,
  checkedValue: [],
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
      checkedValue,
      max,
      textPosition,
      direction,
      options,
      ...rest
    } = props

    useImperativeHandle<any, any>(ref, () => ({
      toggleAll(state: boolean) {
        if (state === false) {
          setInnerValue([])
        } else {
          const childrenLabel: string[] = []
          React.Children.map(children, (child) => {
            const childProps = (child as any).props
            childrenLabel.push(childProps.label || (child as any).children)
          })
          setInnerValue(childrenLabel)
        }
      },
      toggleReverse() {
        const childrenLabel: string[] = []
        React.Children.map(children, (child) => {
          const childProps = (child as any).props
          childrenLabel.push(childProps.label || (child as any).children)
        })
        const reverse: string[] = childrenLabel.filter(
          (c) => innerValue?.findIndex((v) => v === c) === -1
        )
        setInnerValue(reverse)
      },
    }))

    const [innerValue, setInnerValue] = useState(checkedValue || [])
    useEffect(() => {
      setInnerValue(checkedValue || [])
    }, [checkedValue])

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
          labelPosition: textPosition || 'left',
          disabled,
          max,
          checkedValue: innerValue || [],
          check: (value: string) => {
            const combined = [...innerValue, value]
            setInnerValue(combined)
            onChange && onChange(combined)
          },
          uncheck: (value: string) => {
            const reduced = innerValue.filter((item) => item !== value)
            setInnerValue(reduced)
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
