import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
} from 'react'
import Taro from '@tarojs/taro'
import { View, PickerView, PickerViewColumn } from '@tarojs/components'
import Popup from '@/packages/popup/index.taro'
import PickerSlot from './pickerSlot.taro'
import useRefs from '@/utils/useRefs'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import bem from '@/utils/bem'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}
export interface PickerProps {
  isVisible: boolean
  title?: string
  listData: (PickerOption | PickerOption[])[]
  defaultValueData?: (number | string)[]
  className?: ''
  style?: React.CSSProperties
  threeDimensional?: boolean
  swipeDuration: number | string
  onConfirm?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  onClose?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  onCloseUpdate?: (
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

const InternalPicker: ForwardRefRenderFunction<unknown, Partial<PickerProps>> =
  (props, ref) => {
    const { locale } = useConfig()
    const {
      isVisible,
      title,
      listData = [],
      defaultValueData,
      onConfirm,
      onClose,
      onCloseUpdate,
      onChange,
      className,
      style,
      threeDimensional,
      swipeDuration,
      ...rest
    } = props

    const [chooseValueData, setchooseValueData] = useState<
      Array<string | number>
    >([]) // 选择的数据的 value 值, 每一条数据的 value 值
    const [columnIndex, setcolumnIndex] = useState<number>(0) // 选中列
    const pickerRef = useRef<any>(null)
    const [refs, setRefs] = useRefs()
    const [columnsList, setColumnsList] = useState<PickerOption[][]>([]) // 格式化后每一列的数据
    const b = bem('picker')
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
      const firstColumn: PickerOption | PickerOption[] = listData[0]
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
          return listData
        case 'cascade':
          // 级联数据处理
          return formatCascade(listData as PickerOption[], chooseValueData)
        default:
          return [listData]
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
      // if (!defaultValueData && chooseValueData.length === 0) {
      //   setchooseValueData([...data])
      // }
    }
    // 列表格式修改
    useEffect(() => {
      init()
    }, [listData])

    // 默认值修改
    useEffect(() => {
      if (
        defaultValueData &&
        defaultValueData.length !== 0 &&
        defaultValueData.toString() !== chooseValueData.toString() &&
        !currentValue.length
      ) {
        const data = [...defaultValueData]
        setchooseValueData(data)
        setColumnsList(normalListData() as PickerOption[][])
      }
    }, [defaultValueData])

    const selectedOptions = () => {
      const optins: PickerOption[] = []
      columnsList.map((column: PickerOption[], index: number) => {
        let currOptions = []
        currOptions = column.filter(
          (item) => item.value === chooseValueData[index]
        )
        if (currOptions[0]) {
          optins.push(currOptions[0])
        } else {
          column[0] && optins.push(column[0])
        }
        return column
      })
      return optins
    }

    // 选中值进行修改
    useEffect(() => {
      Taro.getEnv() !== 'WEB' && setCurrentValue(defaultValuesConvert())
      onChange && onChange(columnIndex, chooseValueData, selectedOptions())
      if (isConfirmEvent.current) {
        isConfirmEvent.current = false
        onConfirm && onConfirm(chooseValueData, selectedOptions())
      }
    }, [chooseValueData])

    const closeActionSheet = () => {
      onClose && onClose(chooseValueData, selectedOptions())
      onCloseUpdate &&
        onCloseUpdate(chooseValueData, selectedOptions(), pickerRef)
    }

    // 选择每一列的数据
    const chooseItem = (option: PickerOption, columnIndex: number) => {
      if (option && Object.keys(option).length) {
        // 是否移动后是否与之前有差异
        if (chooseValueData[columnIndex] !== option.value) {
          if (columnsType() === 'cascade') {
            chooseValueData[columnIndex] = option.value ? option.value : ''
            setchooseValueData([...chooseValueData])

            let index = columnIndex
            let cursor = option
            while (cursor && cursor.children && cursor.children[0]) {
              chooseValueData[index + 1] = cursor.children[0].value
              setchooseValueData([...chooseValueData])
              index++
              cursor = cursor.children[0]
            }
            // 当前改变列的下一列 children 值为空
            if (cursor && cursor.children) {
              chooseValueData[index + 1] = ''
              setchooseValueData([...chooseValueData])
            }
            setColumnsList(normalListData() as PickerOption[][])
          } else {
            setchooseValueData((data) => {
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
          setcolumnIndex(columnIndex)
        }
      }
    }

    // 点击确定
    const confirm = () => {
      let movings = false
      refs.forEach((_ref: any) => {
        if (_ref.moving) movings = true
        _ref.stopMomentum()
      })
      if (movings) {
        isConfirmEvent.current = true
      } else {
        onConfirm && onConfirm(chooseValueData, selectedOptions())
      }
      onClose && onClose(chooseValueData, selectedOptions())
      setTimeout(() => {
        isConfirmEvent.current = false
      }, 0)
    }

    const renderToolbar = () => {
      return (
        <div className={b('control')}>
          <span className={b('cancel-btn')} onClick={() => closeActionSheet()}>
            {locale.cancel}
          </span>
          <div className={b('title')}>{title || ''}</div>
          <span className={b('confirm-btn')} onClick={confirm}>
            {locale.confirm}
          </span>
        </div>
      )
    }

    const [currentValue, setCurrentValue] = useState<number[]>([])
    const [pickingStatus, setPickingStatus] = useState(false)

    const defaultValuesConvert = () => {
      const defaultIndexs: number[] = []
      if (chooseValueData.length > 0) {
        chooseValueData.forEach((value, index) => {
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
          item.length > 0 && chooseValueData.push(item[0].value)
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
        visible={isVisible}
        position="bottom"
        onClose={() => {
          closeActionSheet()
        }}
      >
        <View
          className={`${b()} ${className || ''}`}
          style={style}
          {...rest}
          catchMove
        >
          {renderToolbar()}
          <div className={b('panel')} ref={pickerRef}>
            {Taro.getEnv() === 'WEB' ? (
              columnsList?.map((item, index) => {
                return (
                  <PickerSlot
                    ref={setRefs(index)}
                    defaultValue={chooseValueData?.[index]}
                    listData={item}
                    threeDimensional={threeDimensional}
                    chooseItem={(value: PickerOption, index: number) =>
                      chooseItem(value, index)
                    }
                    swipeDuration={swipeDuration}
                    key={index}
                    keyIndex={index}
                    itemShow={isVisible}
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
                className="picker-view-panel"
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
