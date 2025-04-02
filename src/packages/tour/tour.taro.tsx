import type { MouseEvent } from 'react'
import React, { FunctionComponent, useEffect, useState } from 'react'
import { Close } from '@nutui/icons-react-taro'
import classNames from 'classnames'
import { ITouchEvent, View } from '@tarojs/components'
import Popover from '@/packages/popover/index.taro'
import { getTaroRectById } from '@/hooks/use-taro-rect'
import { ComponentDefaults } from '@/utils/typings'
import { useConfig } from '@/packages/configprovider/index.taro'
import { TaroTourProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  visible: false,
  type: 'step',
  location: 'bottom',
  mask: true,
  maskWidth: '',
  maskHeight: '',
  offset: [8, 10],
  title: '',
  next: '',
  prev: '',
  complete: '',
  showPrev: true,
  closeOnOverlayClick: true,
} as TaroTourProps

const classPrefix = 'nut-tour'
export const Tour: FunctionComponent<
  Partial<TaroTourProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'title' | 'onChange'>
> = (props) => {
  const { locale } = useConfig()
  const {
    children,
    className,
    title,
    closeOnOverlayClick,
    showPrev,
    list,
    type,
    location,
    visible,
    mask,
    maskWidth,
    maskHeight,
    offset,
    next,
    prev,
    complete,
    onClose,
    onChange,
    style,
    // ...rest
  } = {
    ...defaultProps,
    ...props,
  }

  const [showTour, setShowTour] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [active, setActive] = useState(0)

  const [maskRect, setMaskRect] = useState({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: 0,
    height: 0,
  })

  const classes = classNames(classPrefix, className)

  useEffect(() => {
    if (visible) {
      getRootPosition()
    }
    setActive(0)
    setShowTour(visible)
    setShowPopup(visible)
  }, [visible])

  useEffect(() => {
    if (visible) {
      setShowPopup(true)
      getRootPosition()
    }
  }, [active])

  const getRootPosition = () => {
    getTaroRectById(list[active].target as string).then((rect: any) => {
      setMaskRect({
        top: rect.top,
        left: rect.left,
        right: rect.right,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
      })
    })
  }

  const maskStyle = () => {
    const { width, height, left, top } = maskRect
    const center = [left + width / 2, top + height / 2] // 中心点 【横，纵】
    const w = Number(maskWidth || width)
    const h = Number(maskHeight || height)
    const styles = {
      width: `${w + +offset[1] * 2}px`,
      height: `${h + +offset[0] * 2}px`,
      top: `${center[1] - h / 2 - +offset[0]}px`,
      left: `${center[0] - w / 2 - +offset[1]}px`,
    }
    return styles
  }

  const maskClose = (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    setShowTour(false)
    setShowPopup(false)
    onClose && onClose(e)
  }

  const handleClickMask = (
    e: React.MouseEvent<Element, MouseEvent> | ITouchEvent
  ) => {
    closeOnOverlayClick && maskClose(e)
  }

  const changeStep = (type: string) => {
    if (type === 'next') {
      setActive(active + 1)
      onChange && onChange(active + 1)
    } else {
      setActive(active - 1)
      onChange && onChange(active - 1)
    }
    setShowPopup(false)
  }

  return (
    <View className={classes} style={style}>
      <View
        className="nut-tour-masked"
        style={{ display: showTour ? 'block' : 'none' }}
        onClick={handleClickMask}
      />
      {list.map((item, index) => {
        return (
          <View key={index} style={{ height: 0 }}>
            {index === active && (
              <>
                {showTour && (
                  <View
                    className={`${
                      mask
                        ? 'nut-tour-mask'
                        : 'nut-tour-mask nut-tour-mask-none'
                    }`}
                    id={`nut-tour-popid${index}`}
                    style={maskStyle()}
                  />
                )}
                <Popover
                  visible={showPopup}
                  location={item.location || location}
                  targetId={`nut-tour-popid${index === active ? index : ''}`}
                  closeOnOutsideClick={false}
                  offset={item.popoverOffset || [0, 8]}
                  arrowOffset={item.arrowOffset || 0}
                >
                  {/* placeholder don't delete <></> */}
                  <></>
                  <>
                    {children || (
                      <>
                        {type === 'step' && (
                          <View className="nut-tour-content">
                            {title && (
                              <View className="nut-tour-content-top">
                                <View onClick={(e) => maskClose(e)}>
                                  <Close className="nut-tour-content-top-close" />
                                </View>
                              </View>
                            )}
                            <View className="nut-tour-content-inner">
                              {item.content}
                            </View>
                            <View className="nut-tour-content-bottom">
                              <View className="nut-tour-content-bottom-init">
                                {active + 1}/{list.length}
                              </View>
                              <View className="nut-tour-content-bottom-operate">
                                {active !== 0 && showPrev && (
                                  <View
                                    className="nut-tour-content-bottom-operate-btn"
                                    onClick={() => changeStep('prev')}
                                  >
                                    {prev || locale.tour.prevStepText}
                                  </View>
                                )}
                                {list.length - 1 === active && (
                                  <View
                                    className="nut-tour-content-bottom-operate-btn active"
                                    onClick={(e) => maskClose(e)}
                                  >
                                    {complete || locale.tour.completeText}
                                  </View>
                                )}
                                {list.length - 1 !== active && (
                                  <View
                                    className="nut-tour-content-bottom-operate-btn active"
                                    onClick={() => changeStep('next')}
                                  >
                                    {next || locale.tour.nextStepText}
                                  </View>
                                )}
                              </View>
                            </View>
                          </View>
                        )}
                        {type === 'tile' && (
                          <View className="nut-tour-content nut-tour-content-tile">
                            <View className="nut-tour-content-inner">
                              {item.content}
                            </View>
                          </View>
                        )}
                      </>
                    )}
                  </>
                </Popover>
              </>
            )}
          </View>
        )
      })}
    </View>
  )
}

Tour.displayName = 'NutTour'
