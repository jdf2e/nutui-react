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
  onA?: any
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
      onA,
      ...rest
    } = { ...defaultProps, ...props }
    const classPrefix = 'nut-picker'
    const classes = classNames(classPrefix, className)
    console.log('before useProps', props.value, defaultValue)
    const [selectedValue, setSelectedValue] = usePropsValue<
      Array<string | number>
    >({
      value: props.value,
      defaultValue: [...defaultValue],
      finalValue: [...defaultValue],
      onChange: (val: (string | number)[]) => {
        console.log('xxxx')
        props.onConfirm?.(setSelectedOptions(), val)
      },
    })
    const [innerValue, setInnerValue] = useState([...defaultValue])
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
          return formatCascade(options as PickerOption[], innerValue)
        default:
          return [options]
      }
    }
    const init = () => {
      const normalData: PickerOption[][] = normalListData() as PickerOption[][]
      setColumnsList(normalData)
      // 初始化默认选中数据
      const data: (string | number)[] = []
      normalData.length > 0 &&
        normalData.map((item) => {
          item[0] && data.push(item[0].value)
          return item
        })
    }

    useEffect(() => {
      console.log('selectedValue', selectedValue)
      console.log('innerValue', innerValue)
      setInnerValue(innerValue !== selectedValue ? selectedValue : innerValue)
    }, [visible])

    useEffect(() => {
      if (visible) {
        init()
      }
    }, [options])

    // 选中值进行修改
    useEffect(() => {
      onChange && onChange(setSelectedOptions(), innerValue, columnIndex)
    }, [innerValue, columnsList])

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

    // 更新已选择数据
    const chooseItem = (columnOptions: PickerOption, columnIndex: number) => {
      console.log('onchoose')
      if (columnOptions && Object.keys(columnOptions).length) {
        // 切换数据后，数据有变动才触发。
        if (innerValue[columnIndex] !== columnOptions.value) {
          if (columnsType() === 'cascade') {
            console.log('cascade')
            innerValue[columnIndex] = columnOptions.value || ''
            // setInnerValue([...innerValue])
            while (columnOptions?.children?.[0]) {
              innerValue[columnIndex + 1] = columnOptions.children[0].value
              // setInnerValue([...innerValue])
              columnIndex++
              columnOptions = columnOptions.children[0]
            }
            // 当前改变列的下一列 children 值为空
            if (columnOptions?.children?.length) {
              innerValue[columnIndex + 1] = ''
              // setInnerValue([...innerValue])
            }
            console.log('casca', innerValue, selectedValue)
            setInnerValue([...innerValue])
            setColumnsList(normalListData() as PickerOption[][])
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
      let movings = false
      refs.forEach((ref: any) => {
        if (ref.moving) movings = true
        ref.stopMomentum()
      })
      if (movings) {
        isConfirmEvent.current = true
      } else {
        console.log('setSelectedValue', innerValue)
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
          {children}
          <div className={`${classPrefix}__panel`} ref={pickerRef}>
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
