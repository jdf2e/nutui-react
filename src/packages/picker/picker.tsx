import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useMemo,
} from 'react'
import classNames from 'classnames'
import isEqual from 'react-fast-compare'
import {
  PickerView,
  PickerOptions,
  PickerValue,
  PickerOptionItem,
  PickerOnChangeCallbackParameter,
} from '@nutui/nutui-react'
import { Popup, PopupProps } from '@/packages/popup/popup'
import { SafeArea } from '@/packages/safearea/safearea'
import useRefs from '@/utils/use-refs'
import { useConfig } from '@/packages/configprovider'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { PickerActions, PickerRef } from './types'

export interface PickerProps extends Omit<BasicComponent, 'children'> {
  visible?: boolean | undefined
  title?: string
  options: PickerOptions | PickerOptions[]
  value?: PickerValue[]
  defaultValue?: PickerValue[]
  threeDimensional?: boolean
  duration: number | string
  closeOnOverlayClick: boolean
  renderLabel?: (item: PickerOptionItem) => React.ReactNode

  popupProps: Partial<
    Omit<PopupProps, 'title' | 'onClose' | 'closeOnOverlayClick'>
  >
  onConfirm?: (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => void
  onCancel?: () => void
  onClose?: (
    selectedOptions: PickerOptions[],
    selectedValue: PickerValue[]
  ) => void
  afterClose?: (
    selectedOptions: PickerOptions[],
    selectedValue: PickerOptions[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (args0: PickerOnChangeCallbackParameter) => void
  children?: any
}

const defaultProps = {
  ...ComponentDefaults,
  title: '',
  options: [],
  value: undefined,
  defaultValue: [],
  closeOnOverlayClick: true,
} as unknown as PickerProps
const InternalPicker: ForwardRefRenderFunction<
  PickerRef,
  Partial<PickerProps>
> = (props, ref) => {
  const { locale } = useConfig()
  const {
    children,
    visible,
    title,
    options = [],
    closeOnOverlayClick,
    popupProps = {},
    defaultValue = [],
    className,
    style,
    threeDimensional,
    duration,
    onConfirm,
    onCancel,
    onClose,
    afterClose,
    onChange,
    ...rest
  } = { ...defaultProps, ...props }
  const classPrefix = 'nut-picker'
  const classes = classNames(classPrefix, className)
  const [selectedValue, setSelectedValue] = usePropsValue<PickerValue[]>({
    value: props.value,
    defaultValue: [...defaultValue],
    finalValue: [...defaultValue],
    onChange: (value: PickerValue[]) => {
      props.onConfirm?.(selectedOptions, value)
    },
  })
  const [innerVisible, setInnerVisible] = usePropsValue<boolean>({
    value: props.visible,
    defaultValue: false,
    finalValue: false,
    onChange: (v: boolean) => {
      if (!v) {
        props.onClose?.(selectedOptions, innerValue)
      }
    },
  })
  const actions: PickerActions = {
    open: () => {
      setInnerVisible(true)
    },
    close: () => {
      setInnerVisible(false)
    },
  }

  useImperativeHandle(ref, () => actions)

  const [innerValue, setInnerValue] = useState(selectedValue)
  const [innerOptions, setInnerOptions] = useState<PickerOptions[]>([])
  const changeIndex = useRef<number>(-1)
  const isConfirmEvent = useRef(false)
  const pickerRef = useRef<any>(null)
  const [refs, setRefs] = useRefs()

  const formatCascadeOptions = (
    options: PickerOptions,
    values: PickerValue[]
  ) => {
    if (!options.length || !values.length) return []

    const formatted: PickerOptions[] = []
    let currentOptions: PickerOptions = options

    for (let i = 0; i < values.length; i++) {
      const value = values[i]
      const foundItem = currentOptions.find((item) => item.value === value)

      if (!foundItem) break // 如果未找到匹配项，终止循环

      formatted.push(currentOptions) // 将当前层级的选项添加到结果中

      if (foundItem.children) {
        currentOptions = foundItem.children // 更新当前层级为子选项
      } else {
        break // 如果没有子选项，终止循环
      }
    }

    return formatted
  }

  /**
   * 数据类型：多列、嵌套、单列
   */
  const columnsType = useMemo(() => {
    const [firstColumn] = options
    if (!firstColumn) return 'single'
    if (Array.isArray(firstColumn)) return 'multiple'
    if ('children' in firstColumn) return 'cascade'
    return 'single'
  }, [options])

  const formatOptions = useMemo(
    (value = null) => {
      if (columnsType === 'multiple') {
        return options
      }

      if (columnsType === 'cascade') {
        return formatCascadeOptions(
          options as PickerOptions,
          value || innerValue
        )
      }

      return [options]
    },
    [innerValue, options, columnsType]
  )

  useEffect(() => {
    if (innerVisible) {
      console.log('selectedValue变更', selectedValue)
      setInnerValue(selectedValue)
      setInnerOptions(formatOptions as PickerOptions[])
    }
  }, [options, innerVisible, selectedValue, innerOptions])

  useEffect(() => {
    console.log('innerValue变更onChange', innerValue, innerVisible)
    innerVisible &&
      onChange &&
      onChange({
        selectedOptions,
        value: innerValue,
        index: changeIndex.current,
      })
  }, [innerValue, innerVisible])

  const selectedOptions = useMemo(() => {
    return options.map((columnOptions, index) => {
      const selectedOption = columnOptions.find(
        (item) => item.value === innerValue[index]
      )
      return selectedOption || {}
    })
  }, [innerOptions, innerValue])

  //   确保value值变更再返回
  const onChangeItem = ({
    value,
    index,
    selectedOptions,
  }: PickerOnChangeCallbackParameter) => {
    const values: any = []
    const start = index
    if (isEqual(value, innerValue)) return
    console.log('onChangeItem', value, innerValue, index, selectedOptions)
    if (columnsType === 'cascade') {
      values[value] = value.value || ''
      while (value?.children?.[0]) {
        values[value + 1] = value.children[0].value
        value++
        value = value.children[0]
      }
      // 当前改变列的下一列 children 值为空
      if (value?.children?.length) {
        values[value + 1] = ''
      }
      const combineResult = [
        ...innerValue.slice(0, start),
        ...values.splice(start),
      ]
      setInnerValue(combineResult)
      // setInnerOptions(formatOptions(combineResult))
    } else {
      setInnerValue(value)
    }
    changeIndex.current = index
  }

  const confirm = () => {
    let moving = false
    refs.forEach((ref: any) => {
      if (ref.moving) moving = true
      ref.stopMomentum()
    })
    if (moving) {
      isConfirmEvent.current = true
    } else {
      setSelectedValue(innerValue, true)
      setInnerVisible(false)
    }
    setTimeout(() => {
      isConfirmEvent.current = false
    }, 0)
  }

  const renderTitleBar = () => {
    return (
      <div className={`${classPrefix}-control`}>
        <span
          className={`${classPrefix}-cancel-btn`}
          onClick={(e) => {
            e.stopPropagation()
            onCancel?.()
            setInnerVisible(false)
          }}
        >
          {locale?.cancel}
        </span>
        <div className={`${classPrefix}-title`}>{title || ''}</div>
        <span
          className={`${classPrefix}-confirm-btn`}
          onClick={(e) => {
            e.stopPropagation()
            confirm()
          }}
        >
          {locale.confirm}
        </span>
      </div>
    )
  }

  console.log('innerValue渲染子组件', innerValue)

  const renderPickerElement = () => {
    return (
      <div className={classes} style={style} {...rest}>
        {renderTitleBar()}
        {typeof children !== 'function' && children}
        <div className={`${classPrefix}-panel`} ref={pickerRef}>
          <PickerView
            value={innerValue}
            options={innerOptions}
            threeDimensional={threeDimensional}
            duration={duration}
            onChange={({
              value,
              index,
              selectedOptions,
            }: PickerOnChangeCallbackParameter) => {
              onChangeItem({ value, index, selectedOptions })
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <>
      {typeof children === 'function' && children(selectedValue)}
      <Popup
        {...popupProps}
        visible={innerVisible}
        position="bottom"
        onOverlayClick={() => {
          if (!closeOnOverlayClick) return
          props.onCancel?.()
          setInnerVisible(false)
        }}
        afterClose={() => {
          // afterClose?.(setSelectedOptions(), innerValue, pickerRef)
        }}
      >
        {renderPickerElement()}
        <SafeArea position="bottom" />
      </Popup>
    </>
  )
}

const Picker = React.forwardRef<PickerRef, Partial<PickerProps>>(InternalPicker)
export default Picker
