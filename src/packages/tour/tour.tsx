import React, { useState, useEffect, ReactNode, FunctionComponent } from 'react'
import type { MouseEvent } from 'react'
import { Close } from '@nutui/icons-react'
import classNames from 'classnames'
import Popover from '@/packages/popover'
import { PopoverLocation } from '@/packages/popover/types'
import { getRect } from '@/utils/use-client-rect'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import { useConfig } from '@/packages/configprovider'

export interface TourList {
  target: Element | string
  content?: string
  location?: string
  popoverOffset?: number[]
  arrowOffset?: number
}

export type TourType = 'step' | 'tile'

export interface TourProps extends BasicComponent {
  visible: boolean
  type: TourType
  location: PopoverLocation | string
  mask: boolean
  maskWidth: number | string
  maskHeight: number | string
  offset: number[]
  list: TourList[]
  title: ReactNode
  next: ReactNode
  prev: ReactNode
  complete: ReactNode
  showPrev: boolean
  closeOnOverlayClick: boolean
  onClose: (e: MouseEvent<HTMLDivElement>) => void
  onChange: (value: number) => void
}

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
} as TourProps

const classPrefix = 'nut-tour'
export const Tour: FunctionComponent<
  Partial<TourProps> &
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
    ...rest
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
    const el: any = document.querySelector(`#${list[active].target}`)
    const rect = getRect(el)
    setMaskRect(rect)
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

  const maskClose = (e: MouseEvent<HTMLDivElement>) => {
    setShowTour(false)
    setShowPopup(false)

    onClose && onClose(e)
  }

  const handleClickMask = (e: MouseEvent<HTMLDivElement>) => {
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
    <div className={classes} {...rest}>
      <div
        className="nut-tour-masked"
        style={{ display: showTour ? 'block' : 'none' }}
        onClick={handleClickMask}
      />
      {list.map((item, index) => {
        return (
          <div key={index} style={{ height: 0 }}>
            {index === active && (
              <>
                {showTour && (
                  <div
                    className={`${
                      mask
                        ? 'nut-tour-mask'
                        : 'nut-tour-mask nut-tour-mask-none'
                    }`}
                    id="nut-tour-popid"
                    style={maskStyle()}
                  />
                )}
                <Popover
                  visible={showPopup}
                  location={item.location || location}
                  targetId="nut-tour-popid"
                  closeOnOutsideClick={false}
                  offset={item.popoverOffset || [0, 12]}
                  arrowOffset={item.arrowOffset || 0}
                >
                  {/* placeholder don't delete <></> */}
                  <></>
                  <>
                    {children || (
                      <>
                        {type === 'step' && (
                          <div className="nut-tour-content">
                            {title && (
                              <div className="nut-tour-content-top">
                                <div onClick={(e) => maskClose(e)}>
                                  <Close className="nut-tour-content-top-close" />
                                </div>
                              </div>
                            )}
                            <div className="nut-tour-content-inner">
                              {item.content}
                            </div>
                            <div className="nut-tour-content-bottom">
                              <div className="nut-tour-content-bottom-init">
                                {active + 1}/{list.length}
                              </div>
                              <div className="nut-tour-content-bottom-operate">
                                {active !== 0 && showPrev && (
                                  <div
                                    className="nut-tour-content-bottom-operate-btn"
                                    onClick={() => changeStep('prev')}
                                  >
                                    {prev || locale.tour.prevStepText}
                                  </div>
                                )}
                                {list.length - 1 === active && (
                                  <div
                                    className="nut-tour-content-bottom-operate-btn active"
                                    onClick={(e) => maskClose(e)}
                                  >
                                    {complete || locale.tour.completeText}
                                  </div>
                                )}
                                {list.length - 1 !== active && (
                                  <div
                                    className="nut-tour-content-bottom-operate-btn active"
                                    onClick={() => changeStep('next')}
                                  >
                                    {next || locale.tour.nextStepText}
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        )}
                        {type === 'tile' && (
                          <div className="nut-tour-content nut-tour-content-tile">
                            <div className="nut-tour-content-inner">
                              {item.content}
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </>
                </Popover>
              </>
            )}
          </div>
        )
      })}
    </div>
  )
}

Tour.displayName = 'NutTour'
