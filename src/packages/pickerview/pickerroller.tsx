import React, {
  useState,
  useEffect,
  useRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import { useTouch } from '@/hooks/use-touch'
import { passiveSupported } from '@/utils/supports-passive'
import { PickerRollerProps, PickerOption } from './types'
import { preventDefault } from '@/utils'
import { momentum, useStyles } from './utils'

const InternalPickerRoller: ForwardRefRenderFunction<
  { stopMomentum: () => void; moving: boolean },
  Partial<PickerRollerProps>
> = (props, ref) => {
  const {
    keyIndex = 0,
    options = [],
    threeDimensional = true,
    duration = 1000,
    onSelect,
    renderLabel = (item: PickerOption) => item.label,
  } = props

  const DEFAULT_DURATION = 200
  const INERTIA_TIME = 300
  const INERTIA_DISTANCE = 15
  const ROTATION = 20
  const touch = useTouch()
  const [currentIndex, setCurrentIndex] = useState(1)
  const lineSpacing = useRef(36)
  const [touchTime, setTouchTime] = useState(0)
  const [touchDeg, setTouchDeg] = useState('0deg')
  const isMoving = useRef(false)
  const rollerRef = useRef<any>(null)
  const pickerRollerRef = useRef<any>(null)
  const [startTime, setStartTime] = useState(0)
  const [startY, setStartY] = useState(0)
  const transformY = useRef(0)
  const [scrollDistance, setScrollDistance] = useState(0)

  const { touchRollerStyle, touchTiledStyle, rollerStyle } = useStyles(
    touchTime,
    touchDeg,
    scrollDistance,
    lineSpacing,
    ROTATION
  )

  const isItemHidden = (index: number) =>
    index >= currentIndex + 8 || index <= currentIndex - 8

  const applyTransform = (
    type: string,
    deg: string,
    time = DEFAULT_DURATION,
    translateY = 0
  ) => {
    setTouchTime(type !== 'end' ? 0 : time)
    setTouchDeg(deg)
    setScrollDistance(translateY)
  }

  const handleMove = (move: number, type?: string, time?: number) => {
    let updatedMove = move + transformY.current
    if (type === 'end') {
      updatedMove = Math.max(
        Math.min(updatedMove, 0),
        -(options.length - 1) * lineSpacing.current
      )

      // 滚动距离为lineSpacing.current的倍数值
      const endMove =
        Math.round(updatedMove / lineSpacing.current) * lineSpacing.current
      const deg = `${(Math.abs(Math.round(endMove / lineSpacing.current)) + 1) * ROTATION}deg`
      applyTransform(type, deg, time, endMove)
      setCurrentIndex(Math.abs(Math.round(endMove / lineSpacing.current)) + 1)
    } else {
      const currentDeg = (-updatedMove / lineSpacing.current + 1) * ROTATION
      const deg = Math.min(
        Math.max(currentDeg, 0),
        (options.length + 1) * ROTATION
      )
      if (deg >= 0 && deg < (options.length + 1) * ROTATION) {
        applyTransform('', `${deg}deg`, undefined, updatedMove)
        setCurrentIndex(
          Math.abs(Math.round(updatedMove / lineSpacing.current)) + 1
        )
      }
    }
  }

  const selectValue = (move: number) => {
    onSelect?.(options?.[Math.round(-move / lineSpacing.current)], keyIndex)
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touch.start(event)
    setStartY(touch.deltaY.current)
    setStartTime(Date.now())
    transformY.current = scrollDistance
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touch.move(event)
    if ((touch as any).isVertical) {
      isMoving.current = true
      preventDefault(event, true)
    }
    const move = touch.deltaY.current - startY
    handleMove(move)
  }

  const handleTouchEnd = () => {
    if (!isMoving.current) return
    const move = touch.deltaY.current - startY
    const moveTime = Date.now() - startTime
    if (moveTime <= INERTIA_TIME && Math.abs(move) > INERTIA_DISTANCE) {
      const distance = momentum(move, moveTime)
      handleMove(distance, 'end', +duration)
    } else {
      handleMove(move, 'end')
    }
    setTimeout(() => {
      touch.reset()
    }, 0)
  }

  const updateStatus = (shouldSelect?: boolean, value?: string | number) => {
    const selectedValue = value || props.value
    const index = options.findIndex(
      (item: PickerOption) => item.value === selectedValue
    )
    setCurrentIndex(index === -1 ? 1 : index + 1)
    const move = index * lineSpacing.current
    shouldSelect && selectValue(-move)
    handleMove(-move)
  }

  const stopMomentumScroll = () => {
    isMoving.current = false
    setTouchTime(0)
    selectValue(scrollDistance)
  }

  // lineSpacing.current CSS variable
  useEffect(() => {
    const element = pickerRollerRef.current
    if (element) {
      const computedStyle = getComputedStyle(element)
      const currentLineSpacing = computedStyle.getPropertyValue(
        '--nutui-picker-item-height'
      )
      !!currentLineSpacing &&
        (lineSpacing.current = parseFloat(currentLineSpacing))
    }
  }, [pickerRollerRef.current])

  useEffect(() => {
    isMoving.current = false
    setScrollDistance(0)
    transformY.current = 0
    updateStatus(false)
  }, [options, props.value])

  useImperativeHandle(ref, () => ({
    stopMomentum: stopMomentumScroll,
    moving: isMoving.current,
  }))

  useEffect(() => {
    const options = passiveSupported ? { passive: false } : false
    pickerRollerRef.current?.addEventListener(
      'touchstart',
      handleTouchStart,
      options
    )
    pickerRollerRef.current?.addEventListener(
      'touchmove',
      handleTouchMove,
      options
    )
    pickerRollerRef.current?.addEventListener(
      'touchend',
      handleTouchEnd,
      options
    )
    return () => {
      pickerRollerRef.current?.removeEventListener(
        'touchstart',
        handleTouchStart
      )
      pickerRollerRef.current?.removeEventListener('touchmove', handleTouchMove)
      pickerRollerRef.current?.removeEventListener('touchend', handleTouchEnd)
    }
  }, [
    pickerRollerRef.current,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ])

  return (
    <div className="nut-pickerview-list" ref={pickerRollerRef}>
      <div
        className="nut-pickerview-roller"
        ref={rollerRef}
        style={threeDimensional ? touchRollerStyle() : touchTiledStyle()}
        onTransitionEnd={stopMomentumScroll}
      >
        {/* 3D */}
        {threeDimensional &&
          options.map((item: PickerOption, index: number) => (
            <div
              className={`nut-pickerview-roller-item ${
                isItemHidden(index + 1) && 'nut-pickerview-roller-item-hidden'
              }`}
              style={rollerStyle(index)}
              key={item.value ?? index}
            >
              {renderLabel(item)}
            </div>
          ))}
        {/* Tiled */}
        {!threeDimensional &&
          options.map((item: PickerOption, index: number) => (
            <div
              className="nut-pickerview-roller-item-tiled"
              key={item.value ?? index}
            >
              {renderLabel(item)}
            </div>
          ))}
      </div>
    </div>
  )
}

const PickerRoller = React.forwardRef<
  { stopMomentum: () => void; moving: boolean },
  Partial<PickerRollerProps>
>(InternalPickerRoller)

export default PickerRoller
