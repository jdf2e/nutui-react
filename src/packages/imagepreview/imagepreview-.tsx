import React, {
  FunctionComponent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
  useCallback,
  useMemo,
  useReducer,
} from 'react'
import classNames from 'classnames'
import { Close } from '@nutui/icons-react'
import Popup from '@/packages/popup'
import Image from '@/packages/image'
import Video from '@/packages/video'
import Swiper from '@/packages/swiper'
import SwiperItem from '@/packages/swiperitem'
import { ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/hooks/use-props-value'
import {
  PreviewImageOption,
  PreviewVideoOption,
  WebImagePreviewProps,
} from '@/types'

interface Store {
  scale: number
  moveable: boolean
  oriDistance: number
  originScale: number
}

type StoreAction =
  | { type: 'SET_SCALE'; payload: number }
  | { type: 'SET_MOVEABLE'; payload: boolean }
  | { type: 'SET_ORI_DISTANCE'; payload: number }
  | { type: 'SET_ORIGIN_SCALE'; payload: number }
  | { type: 'RESET' }

const storeReducer = (state: Store, action: StoreAction): Store => {
  switch (action.type) {
    case 'SET_SCALE':
      return { ...state, scale: action.payload }
    case 'SET_MOVEABLE':
      return { ...state, moveable: action.payload }
    case 'SET_ORI_DISTANCE':
      return { ...state, oriDistance: action.payload }
    case 'SET_ORIGIN_SCALE':
      return { ...state, originScale: action.payload }
    case 'RESET':
      return {
        scale: 1,
        moveable: false,
        oriDistance: 0,
        originScale: 1,
      }
    default:
      return state
  }
}

const defaultProps = {
  ...ComponentDefaults,
  images: [],
  videos: [],
  visible: false,
  autoPlay: 3000,
  defaultValue: 0,
  closeOnContentClick: false,
  pagination: true,
  indicator: false,
  indicatorColor: '#fff',
  closeIcon: false,
  closeIconPosition: 'top-right',
  onChange: () => {},
  onClose: () => {},
} as WebImagePreviewProps

const useTouchEvents = (ref: React.RefObject<HTMLDivElement>) => {
  const [store, dispatch] = useReducer(storeReducer, {
    scale: 1,
    moveable: false,
    oriDistance: 0,
    originScale: 1,
  })
  const lastTouchEndTime = useRef(0)

  const scaleNow = useCallback(() => {
    if (ref.current) {
      ref.current.style.transform = `scale(${store.scale})`
    }
  }, [ref, store.scale])

  const getDistance = useCallback((first: Touch, second: Touch): number => {
    return Math.hypot(
      Math.abs(second.pageX - first.pageX),
      Math.abs(second.pageY - first.pageY)
    )
  }, [])

  const onTouchStart = useCallback(
    (event: TouchEvent) => {
      const { touches } = event
      const events = touches[0]
      const events2 = touches[1]

      const curTouchTime = Date.now()
      if (curTouchTime - lastTouchEndTime.current < 100) {
        dispatch({
          type: 'SET_SCALE',
          payload: store.scale === 1 ? 2 : 1,
        })
        scaleNow()
      }

      dispatch({ type: 'SET_MOVEABLE', payload: true })

      if (events2) {
        dispatch({
          type: 'SET_ORI_DISTANCE',
          payload: getDistance(events, events2),
        })
      }
      dispatch({ type: 'SET_ORIGIN_SCALE', payload: store.scale })
    },
    [store.scale, scaleNow, getDistance]
  )

  const onTouchMove = useCallback(
    (event: TouchEvent) => {
      if (!store.moveable) return
      const { touches } = event
      const events = touches[0]
      const events2 = touches[1]

      if (events2) {
        const curDistance = getDistance(events, events2)
        const curScale = curDistance / store.oriDistance
        const newScale = Math.min(store.originScale * curScale, 3)
        dispatch({ type: 'SET_SCALE', payload: newScale })
        scaleNow()
      }
    },
    [
      store.moveable,
      store.oriDistance,
      store.originScale,
      scaleNow,
      getDistance,
    ]
  )

  const onTouchEnd = useCallback(() => {
    lastTouchEndTime.current = Date.now()
    dispatch({ type: 'SET_MOVEABLE', payload: false })

    if ((store.scale < 1.1 && store.scale > 1) || store.scale < 1) {
      dispatch({ type: 'SET_SCALE', payload: 1 })
      scaleNow()
    }
  }, [store.scale, scaleNow])

  useEffect(() => {
    document.addEventListener('touchmove', onTouchMove as any)
    document.addEventListener('touchend', onTouchEnd)
    document.addEventListener('touchcancel', onTouchEnd)

    return () => {
      document.removeEventListener('touchcancel', onTouchEnd)
      document.removeEventListener('touchmove', onTouchMove as any)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }, [onTouchMove, onTouchEnd])

  return {
    store,
    onTouchStart,
    onTouchMove,
    onTouchEnd,
    resetStore: () => dispatch({ type: 'RESET' }),
  }
}

export const ImagePreview: FunctionComponent<Partial<WebImagePreviewProps>> = (
  props
) => {
  const {
    value,
    className,
    style,
    images,
    videos,
    visible,
    defaultValue,
    indicatorColor,
    pagination,
    indicator,
    autoPlay,
    closeOnContentClick,
    closeIcon,
    closeIconPosition,
    onClose,
    onChange,
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-imagepreview'
  const ref = useRef<HTMLDivElement | null>(null)
  const [innerNo, setInnerNo] = usePropsValue<number>({
    value,
    defaultValue,
    finalValue: defaultValue,
    onChange,
  })

  const [showPop, setShowPop] = useState(visible)
  const [active, setActive] = useState(0)
  const [maxNo, setMaxNo] = useState(images.length + videos.length)

  const { store, onTouchStart, onTouchMove, onTouchEnd, resetStore } =
    useTouchEvents(ref)

  useEffect(() => {
    setShowPop(visible as boolean)
  }, [visible])

  useEffect(() => {
    setInnerNo(defaultValue || 1)
  }, [defaultValue])

  useEffect(() => {
    setActive(innerNo as number)
  }, [innerNo])

  useEffect(() => {
    setMaxNo(images.length + videos.length)
  }, [images, videos])

  const slideChangeEnd = useCallback(
    (page: number) => {
      setActive(page + 1)
      onChange?.(page + 1)
    },
    [onChange]
  )

  const onCloseInner = useCallback(
    (e: React.MouseEvent<Element, MouseEvent>) => {
      e.stopPropagation()
      setShowPop(false)
      setActive(innerNo)
      resetStore()
      onClose?.()
    },
    [innerNo, onClose, resetStore]
  )

  const closeOnImg = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation()
      if (closeOnContentClick) onCloseInner(e)
    },
    [closeOnContentClick, onCloseInner]
  )

  const duration = useMemo(
    () => (typeof autoPlay === 'string' ? parseInt(autoPlay) : autoPlay),
    [autoPlay]
  )

  const sortedItems = useMemo(
    () =>
      [
        ...videos.map((item) => ({ type: 'video', data: item })),
        ...images.map((item) => ({ type: 'image', data: item })),
      ].sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0)),
    [videos, images]
  )

  return (
    <Popup
      visible={showPop}
      className={`${classPrefix}-pop`}
      onClick={onCloseInner}
    >
      <div
        className={classNames(classPrefix, className)}
        style={style}
        ref={ref}
        onTouchStart={onTouchStart as any}
      >
        {showPop && (
          <Swiper
            autoPlay={!!duration}
            duration={duration}
            className={`${classPrefix}-swiper`}
            loop
            style={{
              '--nutui-indicator-color': indicatorColor,
            }}
            direction="horizontal"
            onChange={slideChangeEnd}
            defaultValue={innerNo > maxNo ? maxNo - 1 : innerNo - 1}
            indicator={indicator}
          >
            {sortedItems.map((item, index) => (
              <SwiperItem key={index}>
                {item.type === 'video' ? (
                  <Video
                    source={(item.data as PreviewVideoOption).source}
                    options={(item.data as PreviewVideoOption).options}
                    onClick={closeOnImg}
                  />
                ) : (
                  <Image
                    src={(item.data as PreviewImageOption).src}
                    draggable={false}
                    onClick={closeOnImg}
                  />
                )}
              </SwiperItem>
            ))}
          </Swiper>
        )}
        {closeIcon && (
          <div
            className={`${classPrefix}-close ${closeIconPosition}`}
            onClick={onCloseInner}
          >
            <Close />
          </div>
        )}
        {pagination && (
          <div className={`${classPrefix}-pagination`}>
            {active}/{maxNo}
          </div>
        )}
      </div>
    </Popup>
  )
}

ImagePreview.displayName = 'NutImagePreview'
