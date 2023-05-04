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
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}
export interface PickerProps extends BasicComponent {
  visible: boolean
  title?: string
  options: (PickerOption | PickerOption[])[]
  defaultValue?: (number | string)[]
  threeDimensional?: boolean
  duration: number | string
  onConfirm?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  onClose?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  afterClose?: (
    selectedValue: (string | number)[],
    list: PickerOption[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (
    index: number,
    value: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
}
const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  title: '',
  options: [],
  defaultValue: [],
  threeDimensional: true,
  duration: 1000,
} as PickerProps
const InternalPicker: ForwardRefRenderFunction<unknown, Partial<PickerProps>> =
  (props, ref) => {
    const { locale } = useConfig()
    const {
      visible,
      title,
      options = [],
      defaultValue,
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
    const [chooseValue, setChooseValue] = useState<Array<string | number>>([]) // 选择的数据的 value 值, 每一条数据的 value 值
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
      let cursor: PickerOption = {
        text: '',
        value: '',
        children: columns,
      }

      let columnIndex = 0
      while (cursor && cursor.children) {
        const options: PickerOption[] = cursor.children
        const value = values[columnIndex]
        let index = options.findIndex(
          (columnItem) => columnItem.value === value
        )
        if (index === -1) index = 0
        cursor = cursor.children[index]
        columnIndex++
        formatted.push(options)
      }
      return formatted
    }

    // 每一列的类型
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
    const normalListData = () => {
      const type = columnsType()
      switch (type) {
        case 'multiple':
          return options
        case 'cascade':
          // 级联数据处理
          return formatCascade(options as PickerOption[], chooseValue)
        default:
          return [options]
      }
    }
    const init = () => {
      // const data: (string | number)[] = []
      const normalData: PickerOption[][] = normalListData() as PickerOption[][]
      setColumnsList(normalData)
      // normalData.length > 0 &&
      //   normalData.map((item) => {
      //     item[0] && data.push(item[0].value)
      //     return item
      //   })
      // 为何要重置呢？
      // if (!defaultValue && chooseValue.length === 0) {
      //   setChooseValue([...data])
      // }
    }
    // 列表格式修改
    useEffect(() => {
      init()
    }, [options])

    // 默认值修改
    useEffect(() => {
      if (
        defaultValue &&
        defaultValue.length !== 0 &&
        defaultValue.toString() !== chooseValue.toString() &&
        !currentValue.length
      ) {
        const data = [...defaultValue]
        setChooseValue(data)
        setColumnsList(normalListData() as PickerOption[][])
      }
    }, [defaultValue])

    const selectedOptions = () => {
      const options: PickerOption[] = []
      columnsList.map((column: PickerOption[], index: number) => {
        let currOptions = []
        currOptions = column.filter((item) => item.value === chooseValue[index])
        if (currOptions[0]) {
          options.push(currOptions[0])
        } else {
          column[0] && options.push(column[0])
        }
        return column
      })
      return options
    }

    // 选中值进行修改
    useEffect(() => {
      Taro.getEnv() !== 'WEB' && setCurrentValue(defaultValuesConvert())
      onChange && onChange(columnIndex, chooseValue, selectedOptions())
      if (isConfirmEvent.current) {
        isConfirmEvent.current = false
        onConfirm && onConfirm(chooseValue, selectedOptions())
      }
    }, [chooseValue])

    const closeActionSheet = () => {
      onClose && onClose(chooseValue, selectedOptions())
      afterClose && afterClose(chooseValue, selectedOptions(), pickerRef)
    }

    // 选择每一列的数据
    const chooseItem = (option: PickerOption, columnIndex: number) => {
      if (option && Object.keys(option).length) {
        // 是否移动后是否与之前有差异
        if (chooseValue[columnIndex] !== option.value) {
          if (columnsType() === 'cascade') {
            chooseValue[columnIndex] = option.value ? option.value : ''
            setChooseValue([...chooseValue])

            let index = columnIndex
            let cursor = option
            while (cursor && cursor.children && cursor.children[0]) {
              chooseValue[index + 1] = cursor.children[0].value
              setChooseValue([...chooseValue])
              index++
              cursor = cursor.children[0]
            }
            // 当前改变列的下一列 children 值为空
            if (cursor && cursor.children) {
              chooseValue[index + 1] = ''
              setChooseValue([...chooseValue])
            }
            setColumnsList(normalListData() as PickerOption[][])
          } else {
            setChooseValue((data) => {
              const cdata = [...data]
              cdata[columnIndex] = Object.prototype.hasOwnProperty.call(
                option,
                'value'
              )
                ? option.value
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
      let movings = false
      refs.forEach((ref: any) => {
        if (ref.moving) movings = true
        ref.stopMomentum()
      })
      if (movings) {
        isConfirmEvent.current = true
      } else {
        onConfirm && onConfirm(chooseValue, selectedOptions())
      }
      onClose && onClose(chooseValue, selectedOptions())
      setTimeout(() => {
        isConfirmEvent.current = false
      }, 0)
    }

    const renderToolbar = () => {
      return (
        <div className={classNames(`${classPrefix}__control`)}>
          <span
            className={classNames(`${classPrefix}__cancel-btn`)}
            onClick={() => closeActionSheet()}
          >
            {locale.cancel}
          </span>
          <div className={classNames(`${classPrefix}__title`)}>
            {title || ''}
          </div>
          <span
            className={classNames(`${classPrefix}__confirm-btn`)}
            onClick={confirm}
          >
            {locale.confirm}
          </span>
        </div>
      )
    }

    const [currentValue, setCurrentValue] = useState<number[]>([])
    const [pickingStatus, setPickingStatus] = useState(false)

    const defaultValuesConvert = () => {
      const defaultIndexs: number[] = []
      if (chooseValue.length > 0) {
        chooseValue.forEach((value, index) => {
          for (let i = 0; i < columnsList[index].length; i++) {
            if (columnsList[index][i].value === value) {
              defaultIndexs.push(i)
              break
            }
          }
        })
      } else if (columnsList && columnsList.length > 0) {
        columnsList.forEach((item) => {
          defaultIndexs.push(0)
          item.length > 0 && chooseValue.push(item[0].value)
        })
      }

      return defaultIndexs
    }
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
          closeActionSheet()
        }}
      >
        <View className={classes} style={style} {...rest} catchMove>
          {renderToolbar()}
          <div className={classNames(`${classPrefix}__panel`)} ref={pickerRef}>
            {Taro.getEnv() === 'WEB' ? (
              columnsList?.map((item, index) => {
                return (
                  <PickerPanel
                    ref={setRefs(index)}
                    defaultValue={chooseValue?.[index]}
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
                {columnsList?.map((column, index) => {
                  return (
                    <PickerViewColumn key={`col${index}`}>
                      {column.map((item, index) => {
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
