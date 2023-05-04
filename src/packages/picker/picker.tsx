import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
} from 'react'
import Popup from '@/packages/popup'
import PickerSlot from './pickerSlot'
import useRefs from '@/utils/use-refs'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: string
  children?: PickerOption[]
  className?: string | number
}
export interface PickerProps {
  visible: boolean
  title?: string
  options: (PickerOption | PickerOption[])[]
  defaultValue?: (number | string)[]
  className?: ''
  style?: React.CSSProperties
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

const InternalPicker: ForwardRefRenderFunction<unknown, Partial<PickerProps>> =
  (props, ref) => {
    const { locale } = useConfig()
    const {
      visible,
      title,
      options = [],
      defaultValue,
      onConfirm,
      onClose,
      afterClose,
      onChange,
      className,
      style,
      threeDimensional,
      duration,
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

    // 默认值修改
    useEffect(() => {
      if (
        defaultValue &&
        defaultValue.length !== 0 &&
        defaultValue.toString() !== chooseValueData.toString()
      ) {
        const data = [...defaultValue]
        setchooseValueData(data)
        setColumnsList(normalListData() as PickerOption[][])
      }
    }, [defaultValue])

    // 选中值进行修改
    useEffect(() => {
      onChange && onChange(columnIndex, chooseValueData, selectedOptions())
      if (isConfirmEvent.current) {
        isConfirmEvent.current = false
        onConfirm && onConfirm(chooseValueData, selectedOptions())
      }
    }, [chooseValueData])

    // 列表格式修改
    useEffect(() => {
      init()
    }, [options])

    const closeActionSheet = () => {
      onClose && onClose(chooseValueData, selectedOptions())
      afterClose && afterClose(chooseValueData, selectedOptions(), pickerRef)
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
    // 传入的数据格式化
    const normalListData = () => {
      const type = columnsType()

      switch (type) {
        case 'multiple':
          return options
        case 'cascade':
          // 级联数据处理
          return formatCascade(options as PickerOption[], chooseValueData)
        default:
          return [options]
      }
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
      const data: (string | number)[] = []

      const normalData: PickerOption[][] = normalListData() as PickerOption[][]

      setColumnsList(normalData)

      normalData.length > 0 &&
        normalData.map((item) => {
          item[0] && data.push(item[0].value)
          return item
        })

      if (!defaultValue && chooseValueData.length === 0) {
        setchooseValueData([...data])
      }
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
    return (
      <Popup
        visible={visible}
        position="bottom"
        onClose={() => {
          closeActionSheet()
        }}
      >
        <div className={`${b()} ${className || ''}`} style={style} {...rest}>
          {renderToolbar()}
          <div className={b('panel')} ref={pickerRef}>
            {columnsList?.map((item, index) => {
              return (
                <PickerSlot
                  ref={setRefs(index)}
                  defaultValue={chooseValueData?.[index]}
                  options={item}
                  threeDimensional={threeDimensional}
                  chooseItem={(value: PickerOption, index: number) =>
                    chooseItem(value, index)
                  }
                  duration={duration}
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

const Picker = React.forwardRef<unknown, Partial<PickerProps>>(InternalPicker)
export default Picker
