import React, {
  useState,
  useEffect,
  useRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react'
import { useTouch } from '../../utils/useTouch'

interface IPickerSlotProps {
  isUpdate?: boolean
  keyIndex?: number
  defaultValue?: string | number
  listData?: any[]
  chooseItem?: (val: string, idx: number) => void
}

const InternalPickerSlot: ForwardRefRenderFunction<
  unknown,
  Partial<IPickerSlotProps>
> = (props, ref) => {
  const {
    isUpdate,
    keyIndex = 0,
    defaultValue,
    listData = [],
    chooseItem,
  } = props

  const touch = useTouch()
  // 触发惯性滑动条件:
  // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
  // 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
  const INERTIA_TIME = 300
  const INERTIA_DISTANCE = 15
  const [currIndex, setCurrIndex] = useState(1)
  const lineSpacing = 36
  const rotation = 20
  let timer: number | undefined

  const listRef = useRef<any>(null)
  const rollerRef = useRef<any>(null)
  const pickerSlotRef = useRef<any>(null)
  const [list, setList] = useState<any[]>()

  const [moving, setMoving] = useState(false) // 是否处于滚动中
  const [startTime, setStartTime] = useState(0)
  const [startY, setStartY] = useState(0)

  const [transformY, setTransformY] = useState(0)
  const [scrollDistance, setScrollDistance] = useState(0)

  useImperativeHandle(ref, () => ({
    updateTransform: (value: any) => {
      if (value) {
        setTransformY(0)
        timer = setTimeout(() => {
          modifyStatus(false, value)
        }, 10)
      }
    },
  }))

  useEffect(() => {
    setTransformY(0)
    modifyStatus()
  }, [isUpdate])
  useEffect(() => {
    setTransformY(0)
    modifyStatus()
  }, [defaultValue])

  const isHidden = (index: number) => {
    if (index >= currIndex + 8 || index <= currIndex - 8) {
      return true
    }
    return false
  }

  const setTransform = (
    translateY = 0,
    type: string,
    time = 1000,
    deg: string
  ) => {
    let nTime = time
    if (type !== 'end') {
      nTime = 0
    }
    listRef.current.style.webkitTransition = `transform ${nTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`
    rollerRef.current.style.webkitTransition = `transform ${nTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`

    listRef.current.style.webkitTransform = `translate3d(0, ${translateY}px, 0)`
    rollerRef.current.style.webkitTransform = `rotate3d(1, 0, 0, ${deg})`
    setScrollDistance(translateY)
  }

  const setMove = (move: number, type?: string, time?: number) => {
    let updateMove = move + transformY
    if (type === 'end') {
      // 限定滚动距离
      if (updateMove > 0) {
        updateMove = 0
      }
      if (updateMove < -(listData.length - 1) * lineSpacing) {
        updateMove = -(listData.length - 1) * lineSpacing
      }

      // 设置滚动距离为lineSpacing的倍数值
      const endMove = Math.round(updateMove / lineSpacing) * lineSpacing
      const deg = `${
        (Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation
      }deg`

      setTransform(endMove, type, time, deg)
      // timer = setTimeout(() => {
      //   setChooseValue(endMove)
      // }, time / 2)

      setCurrIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1)
    } else {
      let deg = 0
      const currentDeg = (-updateMove / lineSpacing + 1) * rotation

      // picker 滚动的最大角度
      const maxDeg = (listData.length + 1) * rotation
      const minDeg = 0

      deg = Math.min(Math.max(currentDeg, minDeg), maxDeg)

      if (minDeg < deg && deg < maxDeg) {
        setTransform(updateMove, '', undefined, `${deg}deg`)
        setCurrIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1)
      }
    }
  }

  const setChooseValue = (move?: number) => {
    // chooseItem &&
    // chooseItem(listData?.[Math.round(-move / lineSpacing)], keyIndex)
  }

  const touchStart = (event: React.TouchEvent<HTMLElement>) => {
    touch.start(event as any)

    let distance = scrollDistance
    // 正在滚动中
    if (moving) {
      console.log('滚动中')
      const dom = listRef.current as any
      // if (!props.threeDimensional) {
      //   dom = roller.value as any;
      // }
      const { transform } = window.getComputedStyle(dom)

      setScrollDistance(
        +transform.slice(7, transform.length - 1).split(', ')[5]
      )
      distance = +transform.slice(7, transform.length - 1).split(', ')[5]

      console.log(distance)
    }

    setStartY(touch.deltaY)
    setStartTime(Date.now())
    setTransformY(distance)
  }

  const touchMove = (
    event: React.TouchEvent<HTMLElement>,
    listData?: any[]
  ) => {
    touch.move(event as any)

    if ((touch as any).isVertical) {
      setMoving(true)
      preventDefault(event, true)
    }

    const move = touch.deltaY - startY

    setMove(move)
  }

  const touchEnd = (event: React.TouchEvent<HTMLElement>) => {
    const move = touch.deltaY - startY

    const moveTime = Date.now() - startTime

    if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
      // 惯性滚动
      const distance = momentum(move, moveTime)

      setMove(distance, 'end', moveTime + 1000)
    } else {
      setMove(move, 'end')

      setTimeout(() => {
        touch.reset()
        setMoving(false)
      }, 0)
    }
  }

  // 惯性滚动 距离
  const momentum = (distance: number, duration: number) => {
    let nDis = distance
    // 惯性滚动的速度
    const speed = Math.abs(nDis / duration)
    // 惯性滚动的距离
    nDis = (speed / 0.003) * (nDis < 0 ? -1 : 1)
    return nDis
  }

  const modifyStatus = (type?: boolean, val?: any) => {
    const value = val || defaultValue
    let index = -1
    if (value && value.value) {
      listData.some((item, idx) => {
        if (item.value === value.value) {
          index = idx
          return true
        }
        return false
      })
    } else if (value && !value.value) {
      listData.some((item, idx) => {
        if (item === value) {
          index = idx
          return true
        }

        return false
      })
    } else {
      index = listData.indexOf(defaultValue)
    }
    setCurrIndex(index === -1 ? 1 : index + 1)
    const move = index === -1 ? 0 : index * lineSpacing
    type && setChooseValue(-move)
    setMove(-move)
  }

  // 惯性滚动结束
  const stopMomentum = () => {
    console.log('惯性滚动结束')
    setMoving(false)

    setChooseValue()
  }

  const preventDefault = (
    event: React.TouchEvent<HTMLElement>,
    isStopPropagation?: boolean
  ) => {
    /* istanbul ignore else */
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      event.preventDefault()
    }

    if (isStopPropagation) {
      event.stopPropagation()
    }
  }

  useEffect(() => {
    modifyStatus(true)
    return () => {
      clearTimeout(timer)
    }
  }, [listData])

  return (
    <div
      className="nut-picker-list"
      ref={pickerSlotRef}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      {/* <div className="nut-picker-roller" ref={rollerRef} onTransitionEnd={stopMomentum}>
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
              <div
                className="nut-picker-item"
                key={item.label ? item.label : index}
              >
                {item.value ? item.value : item}
              </div>
            )
          })}

          {listData?.length === 1 && <div className="nut-picker-placeholder" />}
        </div>
      </div>
      <div className="nut-picker-mask" ></div>
      <div className='nut-picker-indicator'></div> */}
    </div>
  )
}
const PickerSlot =
  React.forwardRef<unknown, Partial<IPickerSlotProps>>(InternalPickerSlot)
export default PickerSlot
