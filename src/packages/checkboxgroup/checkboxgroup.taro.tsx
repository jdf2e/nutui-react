import React, {
  useCallback,
  useEffect,
  useImperativeHandle,
  useState,
} from 'react'
import bem from '@/utils/bem'
import { RadioGroupOptionType } from '@/packages/radiogroup/type'
import { Checkbox } from '../checkbox/checkbox.taro'

type Position = 'left' | 'right'
type Direction = 'horizontal' | 'vertical'

export interface CheckboxGroupProps {
  disabled: boolean
  checkedValue: string[]
  max: number | undefined
  textPosition: Position
  direction: Direction
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

    const [innerDisabled, setInnerDisabled] = useState(disabled)
    const [innerValue, setInnerValue] = useState(checkedValue)

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

    useEffect(() => {
      setInnerDisabled(disabled)
      setInnerValue(checkedValue)
    }, [disabled, checkedValue])

    function handleChildChange(state: boolean, label: string) {
      if (max !== undefined && innerValue && innerValue.length > max) return
      if (innerValue) {
        let clippedValue = []
        if (state) {
          clippedValue = [...innerValue, label]
        } else {
          innerValue?.splice(innerValue?.indexOf(label), 1)
          clippedValue = [...innerValue]
        }
        setInnerValue(clippedValue)
        onChange && onChange(clippedValue)
      }
    }

    function validateChildChecked(child: any) {
      if (!innerValue) return false
      return innerValue?.indexOf(child.props.label || child.children) > -1
    }

    function validateChecked(value: any) {
      if (!innerValue) return false
      return innerValue?.indexOf(value) > -1
    }

    function getParentVals() {
      return innerValue
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any) => {
        const childChecked = validateChildChecked(child)
        if ((child as any).type.displayName !== 'NutCheckBox') {
          return React.cloneElement(child)
        }
        return React.cloneElement(child, {
          disabled: innerDisabled,
          checked: childChecked,
          onChange: handleChildChange,
          getParentVals,
          max,
          textPosition,
        })
      })
    }

    const renderOptionsChildren = useCallback(() => {
      return options?.map(({ label, value, disabled, onChange, ...rest }) => {
        const childChecked = validateChecked(value)
        return (
          <Checkbox
            key={value?.toString()}
            children={label}
            label={value}
            disabled={innerDisabled ? true : disabled}
            onChange={handleChildChange}
            {...rest}
            max={max}
            textPosition={textPosition}
            getParentVals={getParentVals}
            checked={childChecked}
          />
        )
      })
    }, [innerValue, options, innerDisabled, max])

    return (
      <div
        className={`${b()} nut-checkboxgroup--${props.direction} ${
          className || ''
        }`}
        {...rest}
      >
        {options?.length ? renderOptionsChildren() : cloneChildren()}
      </div>
    )
  }
)

CheckboxGroup.defaultProps = defaultProps
CheckboxGroup.displayName = 'NutCheckboxGroup'
