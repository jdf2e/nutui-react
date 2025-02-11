import React, {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import isEqual from 'react-fast-compare'
import { ComponentDefaults } from '@/utils/typings'
import {
  PickerViewProps,
  PickerOptionItem,
  PickerValue,
  PickerOptions,
} from './types'
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
    defaultValue = [],
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
    defaultValue: [...defaultValue],
    finalValue: [...defaultValue],
  })

  const [innerValue, setInnerValue] = useState(selectedValue)
  const [innerOptions, setInnerOptions] = useState([] as PickerOptions[])
  const changeIndex = useRef<number>(0)

  /**
   * 数据类型：级联、多列
   */
  const columnsType = useMemo(() => {
    const [firstColumn] = options
    if (Array.isArray(firstColumn) && 'children' in firstColumn[0]) {
      return 'cascade'
    }
    return 'multiple'
  }, [options])

  const formatCascadeOptions = (
    options: PickerOptions,
    value: PickerValue[]
  ) => {
    if (!options.length) return [] // 如果 options 为空，直接返回空数组

    const formatted: PickerOptions[] = []
    let columnOptions: PickerOptionItem = {
      label: '',
      value: '',
      children: options,
    }

    let columnIndex = 0
    while (columnOptions && columnOptions.children) {
      const currentOptions: PickerOptions = columnOptions.children
      formatted.push(currentOptions)

      const currentValue = value?.[columnIndex]
      if (currentValue === 0) {
        // 如果 currentValue 为 0，返回第一个 children
        columnOptions = currentOptions[0]
      } else if (currentValue) {
        // 如果 currentValue 存在，查找匹配的项
        const index = currentOptions.findIndex(
          (columnItem) => columnItem.value === currentValue
        )
        columnOptions = currentOptions[index === -1 ? 0 : index] // 如果未找到，默认取第一个
      } else {
        break // 如果 currentValue 不存在，终止循环
      }

      columnIndex++
    }
    return formatted
  }

  const formatOptions = useMemo(() => {
    if (columnsType === 'multiple') {
      return options
    }
    if (columnsType === 'cascade') {
      return formatCascadeOptions(options[0] as PickerOptions, innerValue)
    }
    return options
  }, [innerValue, options, columnsType])

  useEffect(() => {
    if (options !== innerOptions) {
      setInnerOptions(formatOptions)
    }
  }, [options, innerValue])

  useEffect(() => {
    if (selectedValue !== innerValue) {
      setInnerValue(selectedValue)
    }
  }, [selectedValue])

  const handleSelect = useCallback(
    (option: PickerOptionItem, index: number) => {
      console.log(innerValue, options, columnsType, innerOptions)
      const newValue = option?.value
      if (!newValue || innerValue[index] === newValue) return
      changeIndex.current = index
      if (columnsType === 'multiple') {
        setInnerValue((prev) => {
          const next = [...prev]
          next[index] = newValue
          return next
        })
      } else {
        const startIndex = index
        const values: PickerValue[] = []
        values[index] = option.value
        while (option?.children?.[0]) {
          values[index + 1] = option.children[0].value
          index++
          option = option.children[0]
        }
        // 当前改变列的下一列 children 值为空
        if (option?.children?.length) {
          values[index + 1] = ''
        }
        const combineResult = [
          ...innerValue.slice(0, startIndex),
          ...values.splice(startIndex),
        ]
        console.log('combineResult', combineResult)
        setInnerValue([...combineResult])

        if (
          !isEqual(
            formatCascadeOptions(options[0], combineResult),
            innerOptions
          )
        ) {
          setInnerOptions(formatCascadeOptions(options[0], combineResult))
        }
      }
    },
    [innerValue, options, columnsType, innerOptions]
  )

  const selectedOptions = useMemo(() => {
    return innerOptions
      .map((columnOptions, index) => {
        const selectedOption = columnOptions.find(
          (item) => item.value === innerValue[index]
        )
        return selectedOption
        // return selectedOption || columnOptions[0]
      })
      .filter(Boolean) as PickerOptionItem[]
  }, [innerOptions, innerValue])

  useEffect(() => {
    console.log('onChange', {
      value: innerValue,
      index: changeIndex.current,
      selectedOptions,
    })
    onChange?.({
      value: innerValue,
      index: changeIndex.current,
      selectedOptions,
    })
  }, [innerValue, onChange])

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
