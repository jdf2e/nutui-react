import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  ForwardRefRenderFunction,
} from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import PickerPanel from './pickerpanel'
import useRefs from '@/utils/use-refs'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
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
    // 选择的数据的 value 值, 每一条数据的 value 值
    const [selectedValue, setSelectedValue] = useState<Array<string | number>>([
      ...defaultValue,
    ])
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
    const normalListData = () => {
      const type = columnsType()
      switch (type) {
        case 'multiple':
          return options
        case 'cascade':
          // 级联数据处理
          return formatCascade(options as PickerOption[], selectedValue)
        default:
          return [options]
      }
    }
    const init = () => {
      setColumnsList(normalListData() as PickerOption[][])
    }
    useEffect(() => {
      init()
    }, [options])

    const setSelectedOptions = () => {
      const options: PickerOption[] = []
      let currOptions = []
      columnsList.forEach((columnOptions: PickerOption[], index: number) => {
        currOptions = columnOptions.filter(
          (item) => item.value === selectedValue[index]
        )
        if (currOptions[0]) {
          options.push(currOptions[0])
        } else {
          columnOptions[0] && options.push(columnOptions[0])
        }
      })
      return options
    }

    // 选中值进行修改
    useEffect(() => {
      onChange && onChange(setSelectedOptions(), selectedValue, columnIndex)
      if (isConfirmEvent.current) {
        isConfirmEvent.current = false
        onConfirm && onConfirm(setSelectedOptions(), selectedValue)
      }
    }, [selectedValue])

    // 更新已选择数据
    const chooseItem = (columnOptions: PickerOption, columnIndex: number) => {
      if (columnOptions && Object.keys(columnOptions).length) {
        // 切换数据后，数据有变动才触发。
        if (selectedValue[columnIndex] !== columnOptions.value) {
          if (columnsType() === 'cascade') {
            selectedValue[columnIndex] = columnOptions.value || ''
            setSelectedValue([...selectedValue])

            while (columnOptions?.children?.[0]) {
              selectedValue[columnIndex + 1] = columnOptions.children[0].value
              setSelectedValue([...selectedValue])
              columnIndex++
              columnOptions = columnOptions.children[0]
            }
            // 当前改变列的下一列 children 值为空
            if (columnOptions?.children?.length) {
              selectedValue[columnIndex + 1] = ''
              setSelectedValue([...selectedValue])
            }
            setColumnsList(normalListData() as PickerOption[][])
          } else {
            setSelectedValue((data) => {
              const cdata = [...data]
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
      let movings = false
      refs.forEach((ref: any) => {
        if (ref.moving) movings = true
        ref.stopMomentum()
      })
      if (movings) {
        isConfirmEvent.current = true
      } else {
        onConfirm && onConfirm(setSelectedOptions(), selectedValue)
        closePicker()
      }
      setTimeout(() => {
        isConfirmEvent.current = false
      }, 0)
    }

    const closePicker = () => {
      onClose && onClose(setSelectedOptions(), selectedValue)
      afterClose && afterClose(setSelectedOptions(), selectedValue, pickerRef)
    }

    const renderTitleBar = () => {
      return (
        <div className={classNames(`${classPrefix}__control`)}>
          <span
            className={classNames(`${classPrefix}__cancel-btn`)}
            onClick={() => closePicker()}
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

    return (
      <Popup
        visible={visible}
        position="bottom"
        onClose={() => {
          closePicker()
        }}
      >
        <div className={classes} style={style} {...rest}>
          {renderTitleBar()}
          <div className={classNames(`${classPrefix}__panel`)} ref={pickerRef}>
            {columnsList?.map((item, index) => {
              return (
                <PickerPanel
                  ref={setRefs(index)}
                  defaultValue={selectedValue?.[index]}
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
