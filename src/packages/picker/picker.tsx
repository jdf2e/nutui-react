import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
} from 'react'
import Popup from '@/packages/popup'
import PickerSlot from './pickerSlot'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}
export interface IPickerProps {
  isVisible: boolean
  title?: string
  listData: any[]
  defaultValueData?: (number | string)[]
  className?: ''
  style?: React.CSSProperties
  threeDimensional?: boolean
  onConfirm?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  onClose?: (
    selectedValue: (string | number)[],
    selectedOptions: PickerOption[]
  ) => void
  onCloseUpdate?: (
    list: PickerOption[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
  onChange?: (
    index: number,
    value: PickerOption,
    selectedOptions: PickerOption[]
  ) => void
}

const InternalPicker: ForwardRefRenderFunction<unknown, Partial<IPickerProps>> =
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
      ...rest
    } = props

    const [chooseValueData, setchooseValueData] = useState<Array<any>>([]) // 选择的数据, 每一条数据的 value 值
    const pickerRef = useRef<any>(null)

    const [columnsList, setColumnsList] = useState<PickerOption[][]>([]) // 格式化后每一列的数据
    const b = bem('picker')

    // 默认值修改
    useEffect(() => {
      if (defaultValueData && defaultValueData.length !== 0) {
        const data = [...defaultValueData]
        setchooseValueData(data)
        setColumnsList(normalListData())
      }
    }, [defaultValueData])

    // 列表格式修改
    useEffect(() => {
      init()
    }, [listData])

    const closeActionSheet = () => {
      onClose && onClose(chooseValueData, selectedOptions())
      onCloseUpdate && onCloseUpdate(chooseValueData, pickerRef)
    }
    // 点击确定
    const confirm = (defaultValueData?: Array<any>) => {
      const data = defaultValueData || chooseValueData
      setchooseValueData([...data])
      onConfirm && onConfirm(chooseValueData, selectedOptions())
      onClose && onClose(chooseValueData, selectedOptions())
    }

    const selectedOptions = () => {
      const optins: PickerOption[] = []
      columnsList.map((column: PickerOption[], index: number) => {
        let currOptions = []
        currOptions = column.filter(
          (item) => item.value === chooseValueData[index]
        )
        optins.push(currOptions[0])

        return column
      })

      return optins
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
              const cc = cursor.children[0]
              cursor = cc
            }
            // 当前改变列的下一列 children 值为空
            if (cursor && cursor.children) {
              chooseValueData[index + 1] = ''
              setchooseValueData([...chooseValueData])
            }

            setColumnsList(normalListData())
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

          onChange && onChange(columnIndex, option, selectedOptions())
        }
      }
    }
    // 传入的数据格式化
    const normalListData = () => {
      const type = columnsType()

      switch (type) {
        case 'multiple':
          return listData
        case 'cascade':
          // 级联数据处理
          console.log(
            '格式化数据',
            chooseValueData,
            formatCascade(listData, chooseValueData)
          )
          return formatCascade(listData, chooseValueData)
        default:
          return [listData]
      }
    }
    // 每一列的类型
    const columnsType = () => {
      const firstColumn: PickerOption = listData[0]
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

    // 级联数据格式化
    const formatCascade = (
      columns: PickerOption[],
      defaultValues: (number | string)[]
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
        const value = defaultValues[columnIndex]
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

    const init = () => {
      const data: React.SetStateAction<any[]> = []

      const normalData = normalListData()

      setColumnsList(normalData)

      normalData.map((item) => {
        data.push(item[0].value)
        return item
      })

      if (!defaultValueData && chooseValueData.length === 0) {
        setchooseValueData([...data])
      }
    }
    return (
      <Popup
        visible={isVisible}
        position="bottom"
        onClose={() => {
          closeActionSheet()
        }}
      >
        <div className={`${b()} ${className || ''}`} style={style} {...rest}>
          <div className={b('control')}>
            <span
              className={b('cancel-btn')}
              onClick={() => closeActionSheet()}
            >
              {locale.cancel}
            </span>
            <div className={b('title')}>{title || ''}</div>
            <span className={b('confirm-btn')} onClick={() => confirm()}>
              {locale.confirm}
            </span>
          </div>
          <div className={b('panel')} ref={pickerRef}>
            {columnsList?.map((item, index) => {
              return (
                <PickerSlot
                  defaultValue={chooseValueData?.[index]}
                  listData={item}
                  threeDimensional={threeDimensional}
                  chooseItem={(value: any, index: number) =>
                    chooseItem(value, index)
                  }
                  key={index}
                  keyIndex={index}
                />
              )
            })}
          </div>
        </div>
      </Popup>
    )
  }

const Picker = React.forwardRef<unknown, Partial<IPickerProps>>(InternalPicker)
export default Picker
