import React, {
  FunctionComponent,
  TouchEvent,
  useEffect,
  useRef,
  useState,
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
import { mergeProps } from '@/utils'

interface Store {
  scale: number
  moveable: boolean
  oriDistance: number
  originScale: number
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
} as unknown as WebImagePreviewProps
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
    ...rest
  } = mergeProps(defaultProps, props)
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
  const [store, setStore] = useState<Store>({
    scale: 1,
    moveable: false,
    oriDistance: 0,
    originScale: 1,
  })
  const lastTouchEndTime = useRef(0) // 用来辅助监听双击
  const onTouchStart = (event: TouchEvent) => {
    const { touches } = event
    const events = touches[0]
    const events2 = touches[1]
    // 如果是原尺寸，双击放大；否则回到原尺寸。
    const curTouchTime = Date.now()
    if (curTouchTime - lastTouchEndTime.current < 100) {
      const store1 = store
      store1.scale = store1.scale === 1 ? 2 : 1
      scaleNow()
    }
    const store1 = store
    store1.moveable = true

    if (events2) {
      // 如果开始两指操作，记录初始时刻两指间的距离
      store1.oriDistance = getDistance(events, events2)
    }
    // 取到开始两指操作时的放大（缩小比例），store.scale 存储的是当前的放缩比（相对于标准大小 scale 为 1 的情况的放大缩小比）
    store1.originScale = store1.scale
  }

  const onTouchMove = (event: TouchEvent) => {
    if (!store.moveable) return
    const { touches } = event
    const events = touches[0]
    const events2 = touches[1]
    const store1 = store

    // 双指移动
    if (events2) {
      const curDistance = getDistance(events, events2)
      /** 此处计算倍数，距离放大（缩小） k 倍则 scale 也 扩大（缩小） k 倍。距离放大（缩小）倍数 = 结束时两点距离 除以 开始时两点距离
       * 注意此处的 scale 变化是基于 store.scale 的。
       * store.scale 是一个暂存值，比如第一次放大 2 倍，则 store.scale 为 2。
       * 再次两指触碰的时候，store.originScale 就为 store.scale 的值，基于此时的 store.scale 继续放大缩小。 * */
      const curScale = curDistance / store1.oriDistance
      // 最大放大 3 倍，缩小后松手要弹回原比例
      store1.scale = Math.min(store1.originScale * curScale, 3)
      scaleNow()
    }
  }

  const onTouchEnd = () => {
    lastTouchEndTime.current = Date.now()
    const store1 = store
    store1.moveable = false
    if ((store1.scale < 1.1 && store1.scale > 1) || store1.scale < 1) {
      store1.scale = 1
      scaleNow()
    }
  }

  useEffect(() => {
    init()
  }, [])

  const init = () => {
    document.addEventListener('touchmove', onTouchMove as any)
    document.addEventListener('touchend', onTouchEnd)
    document.addEventListener('touchcancel', onTouchEnd)
    return () => {
      document.removeEventListener('touchcancel', onTouchEnd)
      document.removeEventListener('touchmove', onTouchMove as any)
      document.removeEventListener('touchend', onTouchEnd)
    }
  }

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

  const scaleNow = () => {
    if (ref.current) {
      ref.current.style.transform = `scale(${store.scale})`
    }
  }

  // 用于查找给定数字的斜边。起止两点间距离。
  const getDistance = (first: any, second: any) => {
    return Math.hypot(
      Math.abs(second.pageX - first.pageX),
      Math.abs(second.pageY - first.pageY)
    )
  }

  const slideChangeEnd = (page: number) => {
    setActive(page + 1)
    onChange?.(page + 1)
  }

  const onCloseInner = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.stopPropagation()
    setShowPop(false)
    setActive(innerNo)
    scaleNow()
    onClose?.()
    setStore({
      ...store,
      scale: 1,
    })
  }

  const closeOnImg = (e: any) => {
    e.stopPropagation()
    // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
    if (closeOnContentClick) onCloseInner(e)
  }
  const duration = typeof autoPlay === 'string' ? parseInt(autoPlay) : autoPlay
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
            autoplay={!!duration}
            className={`${classPrefix}-swiper`}
            style={{
              '--nutui-indicator-color': indicatorColor,
            }}
            onChange={(page) => slideChangeEnd(page)}
            defaultValue={innerNo > maxNo ? maxNo - 1 : innerNo - 1}
            indicator={indicator}
            {...rest}
          >
            {[
              ...videos.map((item) => ({ type: 'video', data: item })),
              ...images.map((item) => ({ type: 'image', data: item })),
            ]
              .sort((a, b) => (a.data.index ?? 0) - (b.data.index ?? 0))
              .map((item, index) => (
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
      </div>
      {pagination && (
        <div className={`${classPrefix}-index`}>
          {active}/{maxNo}
        </div>
      )}
      {closeIcon !== false && (
        <div
          className={`${classPrefix}-close ${closeIconPosition}`}
          onClick={onCloseInner}
        >
          {closeIcon === true ? <Close /> : closeIcon}
        </div>
      )}
    </Popup>
  )
}

ImagePreview.displayName = 'NutImagePreview'
