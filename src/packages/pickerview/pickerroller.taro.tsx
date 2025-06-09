import React, {
  useState,
  useEffect,
  useRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { useTouch } from '@/hooks/use-touch'
import { passiveSupported } from '@/utils/supports-passive'
import { TaroPickerRollerProps, PickerOption } from '@/types'
import { web } from '@/utils/taro/platform'
import { preventDefault } from '@/utils'
import { momentum, useStyles } from './utils'
import { useUuid } from '@/hooks/use-uuid'
import { getRectInMultiPlatform } from '@/utils/taro/get-rect'

const InternalPickerRoller: ForwardRefRenderFunction<
  { stopMomentum: () => void; moving: boolean },
  Partial<TaroPickerRollerProps>
> = (props, ref) => {
  const {
    keyIndex = 0,
    options = [],
    threeDimensional = true,
    duration = 1000,
    onSelect,
    renderLabel = (item: PickerOption) => item.label,
  } = props

  const classPrefix = 'nut-pickerview-roller'
  const uuid = useUuid()

  const DEFAULT_DURATION = 200
  const INERTIA_TIME = 300
  const INERTIA_DISTANCE = 15
  const ROTATION = 20
  const touch = useTouch()
  const [currentIndex, setCurrentIndex] = useState(0)
  const lineSpacing = useRef(36)
  const [touchTime, setTouchTime] = useState(0)
  const [touchDeg, setTouchDeg] = useState('0deg')
  const isMoving = useRef(false)
  const rollerRef = useRef<any>(null)
  const pickerRollerRef = useRef<any>(null)
  const placeholderRef = useRef(null)
  const [startTime, setStartTime] = useState(0)
  const [startY, setStartY] = useState(0)
  const transformY = useRef(0)
  const [scrollDistance, setScrollDistance] = useState(0)
  const [isGetLineSpacing, setGetStatus] = useState(web())

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
        deg > 0 &&
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
    setCurrentIndex(index === -1 ? 0 : index + 1)
    const move = index * lineSpacing.current
    shouldSelect && selectValue(-move)
    handleMove(-move)
  }

  const stopMomentumScroll = () => {
    isMoving.current = false
    setTouchTime(0)
    selectValue(scrollDistance)
  }

  const getReactHeight = async () => {
    try {
      const placeholder = await getRectInMultiPlatform(placeholderRef.current)
      const placeholderHeight = placeholder.height || 36
      return placeholderHeight
    } catch (error) {
      console.error('获取高度失败:', error)
      return 36
    }
  }

  // lineSpacing.current CSS variable
  useEffect(() => {
    const element = pickerRollerRef.current
    let currentLineSpacing
    if (element && web()) {
      const computedStyle = getComputedStyle(element)
      currentLineSpacing = computedStyle.getPropertyValue(
        '--nutui-picker-item-height'
      )
      if (currentLineSpacing) {
        lineSpacing.current = parseFloat(currentLineSpacing)
      }
    } else if (placeholderRef.current) {
      getReactHeight().then((height) => {
        currentLineSpacing = height
        if (currentLineSpacing) {
          lineSpacing.current = currentLineSpacing
          setGetStatus(true)
        }
      })
    }
  }, [pickerRollerRef.current, placeholderRef.current])

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
    const eventOptions = passiveSupported
      ? { passive: false, once: true }
      : false
    pickerRollerRef.current?.addEventListener(
      'touchstart',
      handleTouchStart,
      eventOptions
    )
    pickerRollerRef.current?.addEventListener(
      'touchmove',
      handleTouchMove,
      eventOptions
    )
    pickerRollerRef.current?.addEventListener(
      'touchend',
      handleTouchEnd,
      eventOptions
    )
    return () => {
      pickerRollerRef.current?.removeEventListener(
        'touchstart',
        handleTouchStart,
        eventOptions
      )
      pickerRollerRef.current?.removeEventListener(
        'touchmove',
        handleTouchMove,
        eventOptions
      )
      pickerRollerRef.current?.removeEventListener(
        'touchend',
        handleTouchEnd,
        eventOptions
      )
    }
  }, [
    pickerRollerRef.current,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ])

  return (
    <View className="nut-pickerview-list" ref={pickerRollerRef}>
      <View
        className={`${classPrefix}-placeholder`}
        ref={placeholderRef}
        id={`${classPrefix}-placeholder-${uuid}`}
      />
      <View
        className={classPrefix}
        id={`${classPrefix}-${uuid}`}
        ref={rollerRef}
        style={threeDimensional ? touchRollerStyle() : touchTiledStyle()}
        onTransitionEnd={stopMomentumScroll}
      >
        {/* 3D 效果 */}
        {threeDimensional &&
          options.map((item: PickerOption, index: number) => (
            <React.Fragment key={item.value ?? index}>
              {isGetLineSpacing ? (
                <View
                  className={classNames(`${classPrefix}-item`, {
                    [`${classPrefix}-item-hidden`]: isItemHidden(index + 1),
                    [`${classPrefix}-item-active`]: index + 1 === currentIndex,
                  })}
                  style={rollerStyle(index)}
                >
                  {renderLabel(item)}
                </View>
              ) : null}
            </React.Fragment>
          ))}
        {/* Tiled */}
        {!threeDimensional &&
          options.map((item: PickerOption, index: number) => {
            return (
              <View
                className={classNames(`${classPrefix}-item-tiled`, {
                  [`${classPrefix}-item-active`]: index + 1 === currentIndex,
                })}
                key={item.value ?? index}
              >
                {renderLabel(item)}
              </View>
            )
          })}
      </View>
    </View>
  )
}

const PickerRoller = React.forwardRef<
  { stopMomentum: () => void; moving: boolean },
  Partial<TaroPickerRollerProps>
>(InternalPickerRoller)

export default PickerRoller
