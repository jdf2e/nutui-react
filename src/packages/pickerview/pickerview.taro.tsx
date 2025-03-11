import React, {
  ForwardRefRenderFunction,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import isEqual from 'react-fast-compare'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import {
  TaroPickerViewProps,
  PickerOption,
  PickerValue,
  PickerOptions,
} from '@/types'
import PickerRoller from './pickerroller.taro'

const defaultProps = {
  ...ComponentDefaults,
  options: [],
  defaultValue: [],
  value: undefined,
  renderLabel: (item: PickerOption) => item.label,
} as TaroPickerViewProps

const InternalPickerView: ForwardRefRenderFunction<
  unknown,
  Partial<TaroPickerViewProps>
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
    const firstColumn = (props.options as PickerOptions[])[0] || []
    if (
      Array.isArray(firstColumn) &&
      firstColumn.length > 0 &&
      'children' in firstColumn[0]
    ) {
      return 'cascade'
    }
    return 'multiple'
  }, [props.options])

  const formatCascadeOptions = (
    options: PickerOptions,
    value: PickerValue[]
  ) => {
    if (!options.length) return [] // 如果 options 为空，直接返回空数组

    const formatted: PickerOptions[] = []
    let columnOptions: PickerOption = {
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
          (columnItem: PickerOption) => columnItem.value === currentValue
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
    if (columnsType === 'cascade') {
      return formatCascadeOptions(
        props?.options?.[0] as PickerOptions,
        innerValue
      )
    }
    return props.options
  }, [innerValue, options, columnsType])

  useEffect(() => {
    const options = props.options
    if (Array.isArray(options) && options.length && options !== innerOptions) {
      setInnerOptions(formatOptions as PickerOptions[])
    }
  }, [props.options, innerValue])

  useEffect(() => {
    if (selectedValue !== innerValue) {
      setInnerValue(selectedValue)
    }
  }, [selectedValue])

  const handleSelect = useCallback(
    (option: PickerOption, index: number) => {
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
        setInnerValue([...combineResult])
        const optionFirst = props?.options?.[0] as PickerOptions
        if (
          !isEqual(
            formatCascadeOptions(optionFirst, combineResult),
            innerOptions
          )
        ) {
          setInnerOptions(formatCascadeOptions(optionFirst, combineResult))
        }
      }
    },
    [innerValue, props.options, columnsType, innerOptions]
  )

  const selectedOptions = useMemo(() => {
    return innerOptions
      .map((columnOptions, index) => {
        const selectedOption = columnOptions.find(
          (item: PickerOption) => item.value === innerValue[index]
        )
        return selectedOption
        // return selectedOption || columnOptions[0]
      })
      .filter(Boolean) as PickerOptions
  }, [innerOptions, innerValue])

  useEffect(() => {
    onChange?.({
      value: innerValue,
      index: changeIndex.current,
      selectedOptions,
    })
  }, [innerValue, selectedOptions, onChange])

  return (
    <View className={cls} style={style}>
      {innerOptions.map((item, index) => (
        <PickerRoller
          ref={props?.setRefs?.(index)}
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
      {innerOptions?.length ? (
        <>
          <View className="nut-pickerview-mask" />
          <View className="nut-pickerview-indicator" />
        </>
      ) : null}
    </View>
  )
}

const PickerView = React.forwardRef<unknown, Partial<TaroPickerViewProps>>(
  InternalPickerView
)

export default PickerView
