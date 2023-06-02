import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
} from 'react'
import classNames from 'classnames'
import Taro from '@tarojs/taro'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import PickerPanel from './pickerpanel.taro'
import useRefs from '@/utils/use-refs'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { PickerOption } from './types'
import { usePropsValue } from '@/utils/use-props-value'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface PickerProps extends BasicComponent {
  visible: boolean
  title?: string
  options: (PickerOption | PickerOption[])[]
  value?: (number | string)[]
  defaultValue?: (number | string)[]
  threeDimensional?: boolean
  duration: number | string
  onConfirm?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  onClose?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[]
  ) => void
  afterClose?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (
    selectedOptions: PickerOption[],
    selectedValue: (string | number)[],
    columnIndex: number
  ) => void
}

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  title: '',
  options: [],
  value: [],
  defaultValue: [],
  threeDimensional: true,
  duration: 1000,
} as PickerProps
const InternalPicker: ForwardRefRenderFunction<unknown, Partial<PickerProps>> =
  (props, ref) => {
    const { locale } = useConfig()
    const {
      children,
      visible,
      title,
      options = [],
      defaultValue = [],
      className,
      style,
      threeDimensional,
      duration,
      onConfirm,
      onClose,
      afterClose,
      onChange,
      ...rest
    } = { ...defaultProps, ...props }
    const classPrefix = 'nut-picker'
    const classes = classNames(classPrefix, className)
    const [selectedValue, setSelectedValue] = usePropsValue<
      Array<string | number>
    >({
      value: props.value,
      defaultValue: [...defaultValue],
      finalValue: [...defaultValue],
      onChange: (val) => {
        props.onConfirm?.(setSelectedOptions(), val)
      },
    })
    const [innerValue, setInnerValue] = useState(selectedValue)
    const [currentValue, setCurrentValue] = useState<number[]>([])
    const [columnIndex, setColumnIndex] = useState<number>(0) // 选中列
    const pickerRef = useRef<any>(null)
    const [refs, setRefs] = useRefs()
    const [columnsList, setColumnsList] = useState<PickerOption[][]>([]) // 格式化后每一列的数据
    const isConfirmEvent = useRef(false)

    // 级联数据格式化
    const formatCascade = (
      columns: PickerOption[],
      values: (number | string)[]
    ) => {
      const formatted: PickerOption[][] = []
      let columnOptions: PickerOption = {
        text: '',
        value: '',
        children: columns,
      }

      let columnIndex = 0
      while (columnOptions && columnOptions.children) {
        const options: PickerOption[] = columnOptions.children
        const value = values[columnIndex]
        let index = options.findIndex(
          (columnItem) => columnItem.value === value
        )
        if (index === -1) index = 0
        columnOptions = columnOptions.children[index]
        columnIndex++
        formatted.push(options)
      }
      return formatted
    }

    // 数据类型：多列、嵌套、单列
    const columnsType = () => {
      const firstColumn: PickerOption | PickerOption[] = options[0]
      if (firstColumn) {
        if (Array.isArray(firstColumn)) {
          return 'multiple'
        }
        if ('children' in firstColumn) {
          return 'cascade'
        }
      }
      return 'single'
    }

    // 传入的数据格式化
    const normalListData = (innerValue: any) => {
      const type = columnsType()
      switch (type) {
        case 'multiple':
          return options
        case 'cascade':
          // 级联数据处理
          return formatCascade(options as PickerOption[], innerValue)
        default:
          return [options]
      }
    }
    const init = () => {
      const normalData: PickerOption[][] = normalListData(
        innerValue
      ) as PickerOption[][]
      setColumnsList(normalData)
      // 初始化默认选中数据
      const data: (string | number)[] = []
      normalData.length > 0 &&
        normalData.map((item) => {
          item[0] && data.push(item[0].value)
          return item
        })
      if (!innerValue.length && innerValue.length === 0) {
        setInnerValue([...data])
      }
    }

    useEffect(() => {
      setInnerValue(innerValue !== selectedValue ? selectedValue : innerValue)
    }, [visible])
    useEffect(() => {
      if (visible) {
        init()
      }
    }, [options, visible])
    // 选中值进行修改
    useEffect(() => {
      if (!visible) {
        return
      }
      Taro.getEnv() !== 'WEB' && setCurrentValue(defaultValuesConvert())
      onChange && onChange(setSelectedOptions(), innerValue, columnIndex)
    }, [innerValue, columnsList, visible])

    const setSelectedOptions = () => {
      const options: PickerOption[] = []
      let currOptions = []
      columnsList.forEach((columnOptions: PickerOption[], index: number) => {
        currOptions = columnOptions.filter(
          (item) => item.value === innerValue[index]
        )
        if (currOptions[0]) {
          options.push(currOptions[0])
        } else {
          columnOptions[0] && options.push(columnOptions[0])
        }
      })
      return options
    }

    const defaultValuesConvert = () => {
      const defaultIndexs: number[] = []
      if (innerValue.length > 0) {
        innerValue.forEach((value, index) => {
          for (let i = 0; i < columnsList?.[index]?.length; i++) {
            if (columnsList[index][i].value === value) {
              defaultIndexs.push(i)
              break
            }
          }
        })
      } else if (columnsList && columnsList.length > 0) {
        columnsList.forEach((item) => {
          defaultIndexs.push(0)
          item.length > 0 && selectedValue.push(item[0].value)
        })
      }

      return defaultIndexs
    }

    // 更新已选择数据
    const chooseItem = (columnOptions: PickerOption, columnIndex: number) => {
      const _value = [...innerValue]
      if (columnOptions && Object.keys(columnOptions).length) {
        // 切换数据后，数据有变动才触发。
        if (_value[columnIndex] !== columnOptions.value) {
          if (columnsType() === 'cascade') {
            _value[columnIndex] = columnOptions.value || ''
            while (columnOptions?.children?.[0]) {
              _value[columnIndex + 1] = columnOptions.children[0].value
              columnIndex++
              columnOptions = columnOptions.children[0]
            }
            // 当前改变列的下一列 children 值为空
            if (columnOptions?.children?.length) {
              _value[columnIndex + 1] = ''
            }
            setInnerValue(_value)
            setColumnsList(normalListData(_value) as PickerOption[][])
          } else {
            setInnerValue((data: (number | string)[]) => {
              const cdata: (number | string)[] = [...data]
              cdata[columnIndex] = Object.prototype.hasOwnProperty.call(
                columnOptions,
                'value'
              )
                ? columnOptions.value
                : ''
              return cdata
            })
          }
          setColumnIndex(columnIndex)
        }
      }
    }
    // 点击确定
    const confirm = () => {
      let moving = false
      refs.forEach((ref: any) => {
        if (ref.moving) moving = true
        ref.stopMomentum()
      })
      if (moving) {
        isConfirmEvent.current = true
      } else {
        setSelectedValue(innerValue)
        closePicker()
      }
      setTimeout(() => {
        isConfirmEvent.current = false
      }, 0)
    }

    const closePicker = () => {
      onClose && onClose(setSelectedOptions(), innerValue)
      afterClose && afterClose(setSelectedOptions(), innerValue, pickerRef)
    }

    const renderTitleBar = () => {
      return (
        <div className={`${classPrefix}__control`}>
          <span
            className={`${classPrefix}__cancel-btn`}
            onClick={() => closePicker()}
          >
            {locale.cancel}
          </span>
          <div className={`${classPrefix}__title`}>{title || ''}</div>
          <span className={`${classPrefix}__confirm-btn`} onClick={confirm}>
            {locale.confirm}
          </span>
        </div>
      )
    }

    const [, setPickingStatus] = useState(false)

    const pickerStart = () => {
      setPickingStatus(true)
    }

    const pickerEnd = () => {
      setPickingStatus(false)
    }

    const pickerChange = (data: any) => {
      const prevDefaultValue = currentValue
      let changeIndex = 0
      // 判断变化的是第几个
      const list = data.detail.value
      for (let i = 0, len = list.length; i < len; i++) {
        if (prevDefaultValue[i] !== list[i]) {
          changeIndex = i
          break
        }
      }

      // 选择的是哪个 option
      chooseItem(
        columnsList[changeIndex][data.detail.value[changeIndex]],
        changeIndex
      )
    }

    return (
      <Popup
        visible={visible}
        position="bottom"
        onClose={() => {
          closePicker()
        }}
      >
        <View className={classes} style={style} {...rest} catchMove>
          {renderTitleBar()}
          {children}
          <div className={`${classPrefix}__panel`} ref={pickerRef}>
            {Taro.getEnv() === 'WEB' ? (
              columnsList?.map((item, index) => {
                return (
                  <PickerPanel
                    ref={setRefs(index)}
                    defaultValue={innerValue?.[index]}
                    options={item}
                    threeDimensional={threeDimensional}
                    chooseItem={(value: PickerOption, index: number) =>
                      chooseItem(value, index)
                    }
                    duration={duration}
                    key={index}
                    keyIndex={index}
                    itemShow={visible}
                  />
                )
              })
            ) : (
              <PickerView
                ref={pickerRef}
                value={currentValue}
                immediateChange
                onPickStart={pickerStart}
                onChange={pickerChange}
                onPickEnd={pickerEnd}
                className="nut-picker-view-panel"
              >
                {columnsList?.map((columnOptions, index) => {
                  return (
                    <PickerViewColumn key={`col${index}`}>
                      {columnOptions.map((item, index) => {
                        return (
                          <View
                            key={item.value || index}
                            className="nut-picker-roller-item-title"
                          >
                            <>{item.text || item}</>
                          </View>
                        )
                      })}
                    </PickerViewColumn>
                  )
                })}
              </PickerView>
            )}
          </div>
        </View>
      </Popup>
    )
  }

const Picker = React.forwardRef<unknown, Partial<PickerProps>>(InternalPicker)
export default Picker
