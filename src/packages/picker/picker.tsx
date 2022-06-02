import React, {
  useState,
  useEffect,
  useRef,
  RefObject,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react'
import Popup from '@/packages/popup'
import PickerSlot from './pickerSlot'
import { useConfig } from '@/packages/configprovider'
import bem from '@/utils/bem'

interface IPickerProps {
  isVisible: boolean
  title?: string
  listData: any[]
  defaultValueData?: any[]
  className: ''
  style: {}
  onConfirm?: (list: any[]) => void
  onClose?: () => void
  onCloseUpdate?: (list: any[], pickerRef: RefObject<HTMLDivElement>) => void
  onChoose?: (
    index: number,
    value: IResValue,
    list: any[],
    pickerRef: RefObject<HTMLDivElement>
  ) => void
}

interface IResValue {
  label: number
  value: string
}
const InternalPicker: ForwardRefRenderFunction<unknown, Partial<IPickerProps>> = (props, ref) => {
  const { locale } = useConfig()
  const {
    isVisible,
    title,
    listData = [],
    defaultValueData = [],
    onConfirm,
    onClose,
    onCloseUpdate,
    onChoose,
    className,
    style,
    ...rest
  } = props

  const [chooseValueData, setchooseValueData] = useState<Array<any>>([])
  const [cacheValueData, setcacheValueData] = useState<Array<any>>([])
  const [isUpdate, setisUpdate] = useState(false)
  const pickerRef = useRef<any>(null)

  const pickerSlotRef1 = useRef<any>(null)
  const pickerSlotRef2 = useRef<any>(null)
  const pickerSlotRef3 = useRef<any>(null)
  const refList: any[] = [pickerSlotRef1, pickerSlotRef2, pickerSlotRef3]
  const [isReady, setIsReady] = useState(true)
  const b = bem('picker')

  useEffect(() => {
    const data = [...defaultValueData]
    setchooseValueData(data)
    setcacheValueData(data)
    onConfirm && onConfirm(data)
  }, [defaultValueData])

  useEffect(() => {
    init()
  }, [listData])

  const updateChooseValue = (index: number, value: any, cacheValueData: any[]) => {
    if (!value) return
    setcacheValueData((data) => {
      const cache = [...cacheValueData]
      cache.splice(index, 1, value)
      return cache
    })
    refList[index].current?.updateTransform(value)
  }

  useImperativeHandle(ref, () => {
    return { updateChooseValue }
  })

  const closeActionSheet = () => {
    setisUpdate(!isUpdate)
    setcacheValueData([...chooseValueData])
    onClose && onClose()
    onCloseUpdate && onCloseUpdate(chooseValueData, pickerRef)
  }

  const confirm = (defaultValueData?: Array<any>) => {
    const data = defaultValueData || cacheValueData
    onConfirm && onConfirm(data)
    setchooseValueData([...data])
    onClose && onClose()
  }

  const chooseItem = (value: any, index: number) => {
    setcacheValueData((data) => {
      const cacheData = [...data]
      if (cacheData[index] != value) {
        cacheData[index] = value
        onChoose && onChoose(index, value, cacheData, pickerRef)
      }
      return cacheData
    })
  }
  const init = () => {
    if (defaultValueData && defaultValueData.length) {
      setchooseValueData([...defaultValueData])
    } else {
      const data: React.SetStateAction<any[]> = []
      listData.map((item, index) => {
        data.push(item[0])
      })
      setcacheValueData((cache) => {
        return [...data]
      })
      setchooseValueData([...data])
    }
    setIsReady(true)
  }
  return (
    <Popup
      visible={isVisible}
      position="bottom"
      onClose={() => {
        onClose && onClose()
      }}
    >
      <div className={`${b()} ${className || ''}`} style={style} {...rest}>
        <div className={b('control')}>
          <span className={b('cancel-btn')} onClick={() => closeActionSheet()}>
            {locale.cancel}
          </span>
          <div className={b('title')}>{title || ''}</div>
          <span className={b('confirm-btn')} onClick={() => confirm()}>
            {locale.confirm}
          </span>
        </div>
        <div className={b('panel')} ref={pickerRef}>
          {listData?.map((item, index) => {
            return (
              <PickerSlot
                defaultValue={chooseValueData?.[index]}
                isUpdate={isUpdate}
                listData={item}
                chooseItem={(value: any, index: number) => chooseItem(value, index)}
                key={index}
                keyIndex={index}
                ref={refList[index]}
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
