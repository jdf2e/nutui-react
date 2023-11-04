import React, {
  useState,
  useEffect,
  useRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { PickerOption } from './types'
import { useTouch } from '@/utils/use-touch'
import { passiveSupported } from '@/utils/supports-passive'

interface PickerPanelProps {
  keyIndex?: number
  defaultValue?: string | number
  options?: PickerOption[]
  threeDimensional: boolean
  duration: number | string
  chooseItem?: (val: PickerOption, idx: number) => void
}

const InternalPickerPanel: ForwardRefRenderFunction<
  { stopMomentum: () => void; moving: boolean },
  Partial<PickerPanelProps>
> = (props, ref) => {
  const {
    keyIndex = 0,
    defaultValue,
    options = [],
    threeDimensional = true,
    duration = 1000,
    chooseItem,
  } = props

  const touch = useTouch()
  const DEFAULT_DURATION = 200
  // 触发惯性滑动条件:
  // 在手指离开屏幕时，如果和上一次 move 时的间隔小于 `MOMENTUM_TIME` 且 move
  // 距离大于 `MOMENTUM_DISTANCE` 时，执行惯性滑动
  const INERTIA_TIME = 300
  const INERTIA_DISTANCE = 15
  const [currIndex, setCurrIndex] = useState(1)
  const lineSpacing = 36
  const [touchTime, setTouchTime] = useState(0)
  const [touchDeg, setTouchDeg] = useState('0deg')
  const rotation = 20
  const moving = useRef(false)
  let timer: number | undefined

  const rollerRef = useRef<any>(null)
  const PickerPanelRef = useRef<any>(null)

  const [startTime, setStartTime] = useState(0)
  const [startY, setStartY] = useState(0)

  const transformY = useRef(0)
  const [scrollDistance, setScrollDistance] = useState(0)

  const isHidden = (index: number) => {
    if (index >= currIndex + 8 || index <= currIndex - 8) {
      return true
    }
    return false
  }

  const setTransform = (
    type: string,
    deg: string,
    time = DEFAULT_DURATION,
    translateY = 0
  ) => {
    let nTime = time
    if (type !== 'end') {
      nTime = 0
    }
    setTouchTime(nTime)
    setTouchDeg(deg)
    setScrollDistance(translateY)
  }

  const setMove = (move: number, type?: string, time?: number) => {
    let updateMove = move + transformY.current
    if (type === 'end') {
      // 限定滚动距离
      if (updateMove > 0) {
        updateMove = 0
      }
      if (updateMove < -(options.length - 1) * lineSpacing) {
        updateMove = -(options.length - 1) * lineSpacing
      }

      // 设置滚动距离为lineSpacing的倍数值
      const endMove = Math.round(updateMove / lineSpacing) * lineSpacing
      const deg = `${
        (Math.abs(Math.round(endMove / lineSpacing)) + 1) * rotation
      }deg`

      setTransform(type, deg, time, endMove)
      setCurrIndex(Math.abs(Math.round(endMove / lineSpacing)) + 1)
    } else {
      let deg = 0
      const currentDeg = (-updateMove / lineSpacing + 1) * rotation

      // picker 滚动的最大角度
      const maxDeg = (options.length + 1) * rotation
      const minDeg = 0

      deg = Math.min(Math.max(currentDeg, minDeg), maxDeg)

      if (minDeg < deg && deg < maxDeg) {
        setTransform('', `${deg}deg`, undefined, updateMove)
        setCurrIndex(Math.abs(Math.round(updateMove / lineSpacing)) + 1)
      }
    }
  }

  const setChooseValue = (move: number) => {
    chooseItem &&
      chooseItem(options?.[Math.round(-move / lineSpacing)], keyIndex)
  }

  // 开始滚动
  const touchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touch.start(event)
    setStartY(touch.deltaY.current)
    setStartTime(Date.now())
    transformY.current = scrollDistance
  }

  const touchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touch.move(event)
    if ((touch as any).isVertical) {
      moving.current = true
      preventDefault(event, true)
    }
    const move = touch.deltaY.current - startY
    setMove(move)
  }

  const touchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (!moving.current) return
    const move = touch.deltaY.current - startY
    const moveTime = Date.now() - startTime
    // 区分是否为惯性滚动
    if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
      // 惯性滚动
      const distance = momentum(move, moveTime)
      setMove(distance, 'end', +duration)
    } else {
      setMove(move, 'end')
    }
    setTimeout(() => {
      // moving.current = false
      touch.reset()
    }, 0)
  }

  // 惯性滚动 距离
  const momentum = (distance: number, duration: number) => {
    let nDistance = distance
    // 惯性滚动的速度
    const speed = Math.abs(nDistance / duration)
    // 惯性滚动的距离
    nDistance = (speed / 0.003) * (nDistance < 0 ? -1 : 1)
    return nDistance
  }

  const modifyStatus = (type?: boolean, val?: string | number) => {
    const value = val || defaultValue
    let index = -1
    if (value) {
      options.some((item, idx) => {
        if (item.value === value) {
          index = idx
          return true
        }
        return false
      })
    } else {
      options.forEach((item, i) => {
        if (item.value === defaultValue) {
          index = i
        }
      })
    }

    setCurrIndex(index === -1 ? 1 : index + 1)
    const move = index === -1 ? 0 : index * lineSpacing
    type && setChooseValue(-move)
    setMove(-move)
  }

  // 惯性滚动结束
  const stopMomentum = () => {
    moving.current = false
    setTouchTime(0)
    setChooseValue(scrollDistance)
  }
  // 阻止默认事件
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

  const touchRollerStyle = () => {
    return {
      transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `rotate3d(1, 0, 0, ${touchDeg})`,
    }
  }
  const touchTileStyle = () => {
    return {
      transition: `transform ${touchTime}ms cubic-bezier(0.17, 0.89, 0.45, 1)`,
      transform: `translate3d(0, ${scrollDistance}px, 0)`,
    }
  }

  useEffect(() => {
    setScrollDistance(0)
    transformY.current = 0
    modifyStatus(false)
    return () => {
      clearTimeout(timer)
    }
  }, [options])

  useImperativeHandle(ref, () => ({
    stopMomentum,
    moving: moving.current,
  }))

  useEffect(() => {
    const options = passiveSupported ? { passive: false } : false
    PickerPanelRef.current?.addEventListener('touchstart', touchStart, options)
    PickerPanelRef.current?.addEventListener('touchmove', touchMove, options)
    PickerPanelRef.current?.addEventListener('touchend', touchEnd, options)
    return () => {
      PickerPanelRef.current?.removeEventListener('touchstart', touchStart)
      PickerPanelRef.current?.removeEventListener('touchmove', touchMove)
      PickerPanelRef.current?.removeEventListener('touchend', touchEnd)
    }
  })

  return (
    <div
      className="nut-picker-list"
      ref={PickerPanelRef}
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
    >
      <div
        className="nut-picker-roller"
        ref={rollerRef}
        style={threeDimensional ? touchRollerStyle() : touchTileStyle()}
        onTransitionEnd={stopMomentum}
      >
        {/* 3D 效果 */}
        {threeDimensional &&
          options.map((item, index) => {
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
                key={item.value ? item.value : index}
              >
                <>{item.text ? item.text : item}</>
              </div>
            )
          })}
        {/* 平铺 */}
        {!threeDimensional &&
          options.map((item, index) => {
            return (
              <div
                className="nut-picker-roller-item-title"
                key={item.value ? item.value : index}
              >
                <>{item.text ? item.text : item}</>
              </div>
            )
          })}
      </div>
      <div className="nut-picker-mask" />
      <div className="nut-picker-indicator" />
    </div>
  )
}
const PickerPanel = React.forwardRef<
  { stopMomentum: () => void; moving: boolean },
  Partial<PickerPanelProps>
>(InternalPickerPanel)
export default PickerPanel
