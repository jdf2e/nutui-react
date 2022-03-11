import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react'

interface IPickerSlotProps {
  isUpdate?: boolean
  keyIndex?: number
  defaultValue?: string | number
  listData?: any[]
  chooseItem?: (val: string, idx: number) => void
}

const InternalPickerSlot: ForwardRefRenderFunction<unknown, Partial<IPickerSlotProps>> = (
  props,
  ref
) => {
  const { isUpdate, keyIndex = 0, defaultValue, listData = [], chooseItem } = props

  const [currIndex, setCurrIndex] = useState(1)
  const lineSpacing = 36
  const rotation = 20
  let timer: number | undefined

  const listRef = useRef<any>(null)
  const rollerRef = useRef<any>(null)
  const pickerSlotRef = useRef<any>(null)
  const [list, setList] = useState<any[]>()

  const touchParams = {
    startY: 0,
    startTime: 0,
    transformY: 0,
    scrollDistance: 0,
  }

  useImperativeHandle(ref, () => ({
    updateTransform: (value: any) => {
      if (value) {
        touchParams.transformY = 0
        timer = setTimeout(() => {
          modifyStatus(false, value)
        }, 10)
      }
    },
  }))

  useEffect(() => {
    touchParams.transformY = 0
    modifyStatus()
  }, [isUpdate])
  useEffect(() => {
    touchParams.transformY = 0
    modifyStatus()
  }, [defaultValue])

  const isHidden = (index: number) => {
    if (index >= currIndex + 8 || index <= currIndex - 8) {
      return true
    }
    return false
  }

  const setTransform = (translateY = 0, type: string, time = 1000, deg: string) => {
    if (type === 'end') {
      listRef.current.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`
      rollerRef.current.style.webkitTransition = `transform ${time}ms cubic-bezier(0.19, 1, 0.22, 1)`
    } else {
      listRef.current.style.webkitTransition = ''
      rollerRef.current.style.webkitTransition = ''
    }
    listRef.current.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`
    rollerRef.current.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`
    touchParams.scrollDistance = translateY
  }

  const setMove = (move: number, type?: string, time?: number) => {
    let updateMove = move + touchParams.transformY
    if (type === 'end' && time) {
      // 限定滚动距离
      if (updateMove > 0) {
        updateMove = 0
      }
      if (updateMove < -(listData.length - 1) * lineSpacing) {
        updateMove = -(listData.length - 1) * lineSpacing
      }

      // 设置滚动距离为lineSpacing的倍数值
      const endMove = Math.round(updateMove / lineSpacing) * lineSpacing
      const deg = `${(Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation}deg`

      setTransform(endMove, type, time, deg)
      timer = setTimeout(() => {
        setChooseValue(endMove)
      }, time / 2)

      setCurrIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1)
    } else {
      let deg = '0deg'
      if (updateMove < 0) {
        deg = `${(Math.abs(updateMove / lineSpacing) + 1) * rotation}deg`
      } else {
        deg = `${(-updateMove / lineSpacing + 1) * rotation}deg`
      }

      setTransform(updateMove, '', 0, deg)
      setCurrIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1)
    }
  }

  const setChooseValue = (move: number) => {
    chooseItem && chooseItem(listData?.[Math.round(-move / lineSpacing)], keyIndex)
  }

  const touchStart = (event: React.TouchEvent) => {
    event.preventDefault()

    const changedTouches = event.changedTouches[0]

    touchParams.startY = changedTouches.pageY

    touchParams.startTime = event.timeStamp || Date.now()

    touchParams.transformY = touchParams.scrollDistance
  }

  const touchMove = (event: React.TouchEvent, listData?: any[]) => {
    event.preventDefault()

    const changedTouches = event.changedTouches[0]
    const lastY = changedTouches.pageY
    const move = lastY - touchParams.startY
    setMove(move)
  }

  const touchEnd = (event: React.TouchEvent) => {
    event.preventDefault()

    const changedTouches = event.changedTouches[0]
    const lastTime = event.timeStamp || Date.now()
    let move = changedTouches.pageY - touchParams.startY

    let moveTime = lastTime - touchParams.startTime
    if (moveTime <= 300) {
      move *= 2
      moveTime += 1000
      setMove(move, 'end', moveTime)
    } else {
      setMove(move, 'end', moveTime)
    }
  }

  const modifyStatus = (type?: boolean, val?: any) => {
    const value = val || defaultValue
    let index = -1
    if (value && value.value) {
      listData.some((item, idx) => {
        if (item.value == value.value) {
          index = idx
          return true
        }
      })
    } else if (value && !value.value) {
      listData.some((item, idx) => {
        if (item == value) {
          index = idx
          return true
        }
      })
    } else {
      index = listData.indexOf(defaultValue)
    }
    setCurrIndex(index === -1 ? 1 : index + 1)
    const move = index === -1 ? 0 : index * lineSpacing
    type && setChooseValue(-move)
    setMove(-move)
  }

  useEffect(() => {
    modifyStatus(true)
    // 监听
    pickerSlotRef.current?.addEventListener('touchstart', touchStart)
    pickerSlotRef.current?.addEventListener('touchmove', touchMove)
    pickerSlotRef.current?.addEventListener('touchend', touchEnd)
    return () => {
      // 移除监听
      pickerSlotRef.current?.removeEventListener('touchstart', touchStart)
      pickerSlotRef.current?.removeEventListener('touchmove', touchMove)
      pickerSlotRef.current?.removeEventListener('touchend', touchEnd)
      clearTimeout(timer)
    }
  }, [listData])

  return (
    <div className="nut-picker-list" ref={pickerSlotRef}>
      <div className="nut-picker-roller" ref={rollerRef}>
        {listData.map((item, index) => {
          return (
            <div
              className={`nut-picker-roller-item ${
                isHidden(index + 1) && 'nut-picker-roller-item-hidden'
              }`}
              style={{
                transform: `rotate3d(1, 0, 0, ${
                  -rotation * (index + 1)
                }deg) translate3d(0px, 0px, 104px)`,
              }}
              key={item.label ? item.label : index}
            >
              {item.value ? item.value : item}
            </div>
          )
        })}
      </div>
      <div className="nut-picker-content">
        <div className="nut-picker-list-panel" ref={listRef}>
          {listData.map((item, index) => {
            return (
              <div className="nut-picker-item" key={item.label ? item.label : index}>
                {item.value ? item.value : item}
              </div>
            )
          })}

          {listData?.length === 1 && <div className="nut-picker-placeholder" />}
        </div>
      </div>
      <div className="nut-picker-mask" />
      <div className="nut-picker-indicator" />
    </div>
  )
}
const PickerSlot = React.forwardRef<unknown, Partial<IPickerSlotProps>>(InternalPickerSlot)
export default PickerSlot
