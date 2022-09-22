import React, { useEffect, useState } from 'react'
import RadioContext from '../radio/context'

import bem from '@/utils/bem'

type Position = 'left' | 'right'
type Direction = 'horizontal' | 'vertical'

export interface RadioGroupProps {
  value: string | number | boolean | null
  textPosition: Position
  direction: Direction
  onChange: (value: string | number | boolean) => void
}

const defaultProps = {
  value: null,
  textPosition: 'right',
  onChange: (value: string | number | boolean) => {},
  direction: 'vertical',
} as RadioGroupProps
export const RadioGroup = React.forwardRef(
  (
    props: Partial<RadioGroupProps> &
      Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>,
    ref
  ) => {
    const { children } = { ...defaultProps, ...props }
    const b = bem('RadioGroup')
    const { className, value, onChange, textPosition, direction, ...rest } =
      props

    const [val2State, setVal2State] = useState(value)

    // useImperativeHandle(ref, () => ({
    //   toggleAll(state: boolean) {
    //     console.log(state)
    //     if (state === false) {
    //       setInnerValue([])
    //     } else {
    //       const childrenLabel: string[] = []
    //       React.Children.map(children, (child) => {
    //         const childProps = (child as any).props
    //         childrenLabel.push(childProps.label || (child as any).children)
    //       })
    //       setInnerValue(childrenLabel)
    //     }
    //   },
    // }))

    useEffect(() => {
      setVal2State(value)
    }, [value])

    // function handleChildChange(state: boolean, label: string) {
    //   if (innerValue) {
    //     let clippedValue = []
    //     if (state) {
    //       clippedValue = [...innerValue, label]
    //     } else {
    //       innerValue?.splice(innerValue?.indexOf(label), 1)
    //       clippedValue = [...innerValue]
    //     }
    //     setInnerValue(clippedValue)
    //     onChange && onChange(clippedValue)
    //   }
    // }

    function validateChildChecked(child: any) {
      if (val2State === null) return false
      return val2State === child.props.value
    }

    function cloneChildren() {
      return React.Children.map(children, (child: any, index) => {
        const childChecked = validateChildChecked(child)
        if ((child as any).type.displayName !== 'NutRadio') {
          return React.cloneElement(child)
        }
        return React.cloneElement(child, {
          textPosition,
          checked: childChecked,
          // onChange: handleChildChange,
        })
      })
    }

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
          className={`nut-radiogroup nut-radiogroup--${props.direction}`}
          {...rest}
        >
          {cloneChildren()}
        </div>
      </RadioContext.Provider>
    )
  }
)

RadioGroup.defaultProps = defaultProps
RadioGroup.displayName = 'NutRadioGroup'
