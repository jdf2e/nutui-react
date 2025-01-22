import React, {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import { PickerViewProps, PickerOptionItem, PickerValue } from './types'
import PickerRoller from './pickerroller'
import { usePropsValue } from '@/utils/use-props-value'

const defaultProps = {
  ...ComponentDefaults,
  options: [],
  defaultValue: [],
  value: undefined,
  renderLabel: (item: PickerOptionItem) => item.label,
} as PickerViewProps

const InternalPickerView: ForwardRefRenderFunction<
  unknown,
  Partial<PickerViewProps>
> = (props, ref) => {
  const {
    options,
    defaultValue,
    value,
    duration,
    threeDimensional,
    renderLabel,
    className,
    style,
    onChange,
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-pickerview'
  const cls = classNames(classPrefix, className)

  const [selectedValue] = usePropsValue<PickerValue[]>({
    value,
    defaultValue,
    finalValue: defaultValue,
  })

  const [innerValue, setInnerValue] = useState(selectedValue)
  const [innerOptions, setInnerOptions] = useState(options)

  useEffect(() => {
    if (selectedValue !== innerValue) {
      setInnerValue(selectedValue)
    }
  }, [selectedValue])

  useEffect(() => {
    if (options !== innerOptions) {
      setInnerOptions(options)
    }
  }, [options])

  const handleSelect = useCallback(
    (option: PickerOptionItem, index: number) => {
      const newValue = option?.value
      if (!newValue) return
      setInnerValue((prev) => {
        if (prev[index] === newValue) return prev
        const next = [...prev]
        next[index] = newValue
        return next
      })
    },
    []
  )

  const selectedOptions = useMemo(() => {
    return options.map((columnOptions, index) => {
      const selectedOption = columnOptions.find(
        (item) => item.value === innerValue[index]
      )
      return selectedOption || columnOptions[0] // Fallback to the first option if not found
    })
  }, [options, innerValue])

  useEffect(() => {
    onChange?.(innerValue, selectedOptions)
  }, [innerValue, selectedOptions, onChange])

  return (
    <div className={cls} style={style}>
      {innerOptions.map((item, index) => (
        <PickerRoller
          key={index}
          keyIndex={index}
          value={innerValue[index] as PickerValue}
          options={item}
          renderLabel={renderLabel}
          onSelect={handleSelect}
          duration={duration}
          threeDimensional={threeDimensional}
        />
      ))}
      <div className="nut-pickerview-mask" />
      <div className="nut-pickerview-indicator" />
    </div>
  )
}

const PickerView = React.forwardRef<unknown, Partial<PickerViewProps>>(
  InternalPickerView
)

export default PickerView
