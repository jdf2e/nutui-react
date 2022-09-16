import React, {
  FunctionComponent,
  CSSProperties,
  useEffect,
  useState,
  useRef,
  TouchEvent,
} from 'react'
import Popup from '@/packages/popup/index.taro'
import Video from '@/packages/video/index.taro'
import Swiper from '@/packages/swiper/index.taro'
import SwiperItem from '@/packages/swiperitem/index.taro'

interface IStore {
  scale: number
  moveable: boolean
  oriDistance: number
  originScale: number
}

export interface ImagePreviewProps {
  className?: string
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
  show: boolean
  autoplay: number | string
  initNo: number
  contentClose: boolean
  paginationVisible: boolean
  style?: CSSProperties
  paginationColor: string
  onClose: () => void
}
const defaultProps = {
  images: [],
  videos: [],
  show: false,
  autoplay: 3000,
  initNo: 1,
  contentClose: false,
  paginationVisible: false,
  paginationColor: '#fff',
  onClose: () => {},
} as ImagePreviewProps
export const ImagePreview: FunctionComponent<Partial<ImagePreviewProps>> = (
  props
) => {
  const {
    images,
    videos,
    show,
    initNo,
    paginationColor,
    paginationVisible,
    autoplay,
    contentClose,
    onClose,
  } = props

  const nutImagePreview = useRef(null)

  const [showPop, setShowPop] = useState(false)
  const [active, setActive] = useState(1)
  const [maxNo, setMaxNo] = useState(1)
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

    const store1 = store as IStore
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
    const store1 = store as IStore

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
    const store1 = store as IStore
    store1.moveable = false
    if ((store1.scale < 1.1 && store1.scale > 1) || store1.scale < 1) {
      store1.scale = 1
      scaleNow()
    }
  }

  const init = () => {
    document.addEventListener('touchmove', onTouchMove as any)
    document.addEventListener('touchend', onTouchEnd)
    document.addEventListener('touchcancel', onTouchEnd)
  }

  useEffect(() => {
    if (show !== undefined) {
      setShowPop(show)
      init()
    }
  }, [show])

  useEffect(() => {
    if (initNo !== undefined) {
      setActive(initNo)
    }

    if (show !== undefined) {
      setShowPop(show)
    }

    if (images && videos) {
      setMaxNo(images.length + videos.length)
    }
  }, [])

  const scaleNow = () => {
    if (nutImagePreview.current as any) {
      ;(
        nutImagePreview.current as any
      ).style.transform = `scale(${store.scale})`
    }
  }

  const onCloseInner = () => {
    setShowPop(false)
    setActive(1)
    scaleNow()
    onClose && onClose()
    setStore({
      ...store,
      scale: 1,
    })
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
  }

  const closeOnImg = () => {
    // 点击内容区域的图片是否可以关闭弹层（视频区域由于nut-video做了限制，无法关闭弹层）
    if (contentClose) {
      onCloseInner()
    }
  }

  return (
    <Popup
      visible={showPop}
      popClass="custom-pop"
      style={{ width: '100%' }}
      onClick={onCloseInner}
    >
      <div
        className="nut-imagepreview"
        ref={nutImagePreview}
        onClick={closeOnImg}
        onTouchStart={onTouchStart as any}
      >
        <Swiper
          autoPlay={autoplay}
          className="nut-imagepreview-swiper"
          loop
          isPreventDefault={false}
          style={{ display: showPop ? 'block' : 'none' }}
          direction="horizontal"
          onChange={slideChangeEnd}
          initPage={initNo && (initNo > maxNo ? maxNo - 1 : initNo - 1)}
          paginationColor={paginationColor}
          paginationVisible={paginationVisible}
        >
          {videos &&
            videos.length > 0 &&
            videos.map((item, index) => {
              return (
                <SwiperItem key={index}>
                  <Video source={item.source} options={item.options} />
                </SwiperItem>
              )
            })}
          {images &&
            images.length > 0 &&
            images.map((item, index) => {
              return (
                <SwiperItem key={index}>
                  <img src={item.src} alt="" className="nut-imagepreview-img" />
                </SwiperItem>
              )
            })}
        </Swiper>
      </div>
      <div className="nut-imagepreview-index">
        {active}/{(images ? images.length : 0) + (videos ? videos.length : 0)}
      </div>
    </Popup>
  )
}

ImagePreview.defaultProps = defaultProps
ImagePreview.displayName = 'NutImagePreview'
