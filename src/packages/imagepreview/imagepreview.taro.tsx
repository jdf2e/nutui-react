import React, {
  FunctionComponent,
  useEffect,
  useState,
  useRef,
  TouchEvent,
  ReactNode,
} from 'react'
import Taro from '@tarojs/taro'
import { Video as TaroVideo } from '@tarojs/components'
import classNames from 'classnames'
import { MaskClose } from '@nutui/icons-react-taro'
import Popup from '@/packages/popup/index.taro'
import Image from '@/packages/image/index.taro'
import Swiper from '@/packages/swiper/index.taro'
import SwiperItem from '@/packages/swiperitem/index.taro'

import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { usePropsValue } from '@/utils/use-props-value'

interface Store {
  scale: number
  moveable: boolean
  oriDistance: number
  originScale: number
}

export interface ImagePreviewProps extends BasicComponent {
  images: Array<{
    src: string
  }>
  videos: Array<{
    source: {
      src: string
      type: string
    }
    options: {
      muted: boolean
      controls: boolean
    }
  }>
  visible: boolean
  autoPlay: boolean
  value?: number
  defaultValue: number
  closeOnContentClick: boolean
  indicator: boolean
  indicatorColor: string
  closeIcon: boolean | ReactNode
  closeIconPosition: 'top-right' | 'top-left' | 'bottom'
  showMenuByLongpress: boolean
  onChange: (value: number) => void
  onClose: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  images: [],
  videos: [],
  visible: false,
  autoPlay: false,
  defaultValue: 1,
  closeOnContentClick: false,
  indicator: false,
  indicatorColor: '#fff',
  closeIcon: false,
  closeIconPosition: 'top-right',
  showMenuByLongpress: false,
  onChange: (value: number) => {},
  onClose: () => {},
} as ImagePreviewProps
export const ImagePreview: FunctionComponent<Partial<ImagePreviewProps>> = (
  props
) => {
  const {
    className,
    style,
    images,
    videos,
    visible,
    defaultValue,
    indicatorColor,
    indicator,
    autoPlay,
    closeOnContentClick,
    closeIcon,
    closeIconPosition,
    showMenuByLongpress,
    onClose,
  } = props
  const classPrefix = 'nut-imagepreview'
  const ref = useRef(null)
  const [innerNo, setInnerNo] = usePropsValue<number>({
    value: props.value,
    defaultValue,
    finalValue: defaultValue,
    onChange: (val: number) => {
      props.onChange?.(val)
    },
  })

  const [showPop, setShowPop] = useState(visible)
  const [active, setActive] = useState(0)
  const [maxNo, setMaxNo] = useState(
    images?.length || 0 + (videos?.length || 0)
  )
  const [store, setStore] = useState({
    scale: 1,
    moveable: false,
  })
  const [lastTouchEndTime, setLastTouchEndTime] = useState(0) // 用来辅助监听双击
  const onTouchStart = (event: TouchEvent) => {
    const touches = event.touches
    const events = touches[0]
    const events2 = touches[1]

    // 如果已经放大，双击应变回原尺寸；如果是原尺寸，双击应放大
    const curTouchTime = new Date().getTime()
    if (curTouchTime - lastTouchEndTime < 300) {
      const store1 = store
      if (store1.scale > 1) {
        store1.scale = 1
      } else if (store1.scale === 1) {
        store1.scale = 2
      }
      scaleNow()
    }

    const store1 = store as Store
    store1.moveable = true

    if (events2) {
      // 如果开始两指操作，记录初始时刻两指间的距离
      store1.oriDistance = getDistance(
        {
          x: events.pageX,
          y: events.pageY,
        },
        {
          x: events2.pageX,
          y: events2.pageY,
        }
      )
    }
    // 取到开始两指操作时的放大（缩小比例），store.scale 存储的是当前的放缩比（相对于标准大小 scale 为 1 的情况的放大缩小比）
    store1.originScale = store1.scale || 1
  }

  const onTouchMove = (event: TouchEvent) => {
    const touches = event.touches
    const events = touches[0]
    const events2 = touches[1]

    if (!store.moveable) {
      return
    }
    const store1 = store as Store

    // 双指移动
    if (events2) {
      // 获得当前两点间的距离
      const curDistance = getDistance(
        {
          x: events.pageX,
          y: events.pageY,
        },
        {
          x: events2.pageX,
          y: events2.pageY,
        }
      )

      /** 此处计算倍数，距离放大（缩小） k 倍则 scale 也 扩大（缩小） k 倍。距离放大（缩小）倍数 = 结束时两点距离 除以 开始时两点距离
       * 注意此处的 scale 变化是基于 store.scale 的。
       * store.scale 是一个暂存值，比如第一次放大 2 倍，则 store.scale 为 2。
       * 再次两指触碰的时候，store.originScale 就为 store.scale 的值，基于此时的 store.scale 继续放大缩小。 * */
      const curScale = curDistance / store1.oriDistance
      store1.scale = store1.originScale * curScale

      // 最大放大 3 倍，缩小后松手要弹回原比例
      if (store1.scale > 3) {
        store1.scale = 3
      }
      scaleNow()
    }
  }

  const onTouchEnd = () => {
    setLastTouchEndTime(new Date().getTime())
    const store1 = store as Store
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
    setMaxNo(images?.length || 0 + (videos?.length || 0))
  }, [images, videos])

  const scaleNow = () => {
    if (ref.current as any) {
      ;(ref.current as any).style.transform = `scale(${store.scale})`
    }
  }

  // 计算两个点的距离
  const getDistance = (first: any, second: any) => {
    // 计算两个点起始时刻的距离和终止时刻的距离，终止时刻距离变大了则放大，变小了则缩小
    // 放大 k 倍则 scale 也 扩大 k 倍
    return Math.hypot(
      Math.abs(second.x - first.x),
      Math.abs(second.y - first.y)
    )
  }

  const slideChangeEnd = (page: number) => {
    setActive(page + 1)
    props.onChange?.(page + 1)
  }
  const onCloseInner = () => {
    setShowPop(false)
    setActive(innerNo)
    scaleNow()
    onClose && onClose()
    setStore({
      ...store,
      scale: 1,
    })
  }
  const closeOnImg = () => {
    // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
    if (closeOnContentClick) {
      onCloseInner()
    }
  }

  return (
    <Popup
      visible={showPop}
      className={`${classPrefix}-pop`}
      style={{ width: '100%' }}
      onClick={onCloseInner}
    >
      <div
        className={classNames(classPrefix, className)}
        style={style}
        ref={ref}
        onClick={closeOnImg}
        onTouchStart={onTouchStart as any}
      >
        <Swiper
          autoPlay={autoPlay}
          className={`${classPrefix}-swiper`}
          loop
          height="100%"
          style={{
            display: showPop ? 'block' : 'none',
            '--nutui-indicator-color': indicatorColor,
            width: '100%',
            height: '100%',
          }}
          direction="horizontal"
          onChange={(e) => slideChangeEnd(e.detail.current)}
          defaultValue={innerNo && (innerNo > maxNo ? maxNo - 1 : innerNo - 1)}
          indicator={indicator}
        >
          {(videos && videos.length > 0
            ? videos.map((item, index) => {
                return (
                  <SwiperItem
                    key={index}
                    className="nut-imagepreview-swiper-item"
                  >
                    <TaroVideo
                      src={item.source.src}
                      controls={item.options.controls}
                      autoplay={false}
                      loop={false}
                      muted={item.options.muted}
                    />
                  </SwiperItem>
                )
              })
            : []
          ).concat(
            images && images.length > 0
              ? images.map((item, index) => {
                  return (
                    <SwiperItem
                      key={index}
                      className="nut-imagepreview-swiper-item"
                    >
                      {Taro.getEnv() === 'WEB' ? (
                        <Image src={item.src} mode="aspectFit" />
                      ) : (
                        <Image
                          src={item.src}
                          mode="aspectFit"
                          showMenuByLongpress={!!showMenuByLongpress}
                        />
                      )}
                    </SwiperItem>
                  )
                })
              : []
          )}
        </Swiper>
      </div>
      <div className={`${classPrefix}-index`}>
        {active}/{(images ? images.length : 0) + (videos ? videos.length : 0)}
      </div>
      {closeIcon !== false ? (
        <div
          className={`${classPrefix}-close ${closeIconPosition}`}
          onClick={onCloseInner}
        >
          {closeIcon === true ? <MaskClose /> : closeIcon}
        </div>
      ) : null}
    </Popup>
  )
}

ImagePreview.defaultProps = defaultProps
ImagePreview.displayName = 'NutImagePreview'
