import React, { useState, useEffect, FunctionComponent } from 'react'
import type { MouseEvent } from 'react'
import { Close } from '@nutui/icons-react'
import classNames from 'classnames'
import Popover from '@/packages/popover'
import { PopoverLocation } from '@/packages/popover/popover'
import { getRect } from '@/utils/use-client-rect'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

import './tour.scss'

interface StepOptions {
  target: Element | string
  content?: string
  location?: string
  popoverOffset?: number[]
  arrowOffset?: number
}

type TourType = 'step' | 'tile'

export interface TourProps extends BasicComponent {
  isShowModel: boolean
  type: TourType
  location: PopoverLocation | string
  mask: boolean
  maskWidth: number | string
  maskHeight: number | string
  offset: number[]
  steps: StepOptions[]
  showTitleBar: boolean
  nextStepTxt: string
  prevStepTxt: string
  completeTxt: string
  showPrevStep: boolean
  closeOnOverlayClick: boolean
  onClose: (e: MouseEvent<HTMLDivElement>) => void
}
const defaultProps = {
  ...ComponentDefaults,
  isShowModel: false,
  type: 'step',
  location: 'bottom',
  mask: true,
  maskWidth: '',
  maskHeight: '',
  offset: [8, 10],
  showTitleBar: true,
  nextStepTxt: '下一步',
  prevStepTxt: '上一步',
  completeTxt: '完成',
  showPrevStep: true,
  closeOnOverlayClick: true,
} as TourProps

const classPrefix = 'nut-tour'
export const Tour: FunctionComponent<
  Partial<TourProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    className,
    showTitleBar,
    closeOnOverlayClick,
    showPrevStep,
    steps,
    type,
    location,
    isShowModel,
    mask,
    maskWidth,
    maskHeight,
    offset,
    nextStepTxt,
    prevStepTxt,
    completeTxt,
    onClose,
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

  const classes = classNames(className, classPrefix)

  useEffect(() => {
    console.log('showModel', isShowModel)
    if (isShowModel) {
      getRootPosition()
    }
    setActive(0)
    setShowTour(isShowModel)
    setShowPopup(isShowModel)
  }, [isShowModel])

  useEffect(() => {
    console.log('aaaa')
    setShowPopup(true)
    getRootPosition()
  }, [active])

  const getRootPosition = () => {
    const el: any = document.querySelector(`#${steps[active].target}`)
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
    } else {
      setActive(active - 1)
    }
    setShowPopup(false)
    // nextTick(() => {
    //   state.showPopup = true;
    //   getRootPosition();
    // });

    // emit('change', state.active);
  }

  return (
    <div className={classes} {...rest}>
      <div
        className="nut-tour-masked"
        style={{ display: showTour ? 'block' : 'none' }}
        onClick={handleClickMask}
      />
      {steps.map((item, index) => {
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
                            {showTitleBar && (
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
                                {active + 1}/{steps.length}
                              </div>
                              <div className="nut-tour-content-bottom-operate">
                                {active !== 0 && showPrevStep && (
                                  <div
                                    className="nut-tour-content-bottom-operate-btn"
                                    onClick={() => changeStep('prev')}
                                  >
                                    {prevStepTxt}
                                  </div>
                                )}
                                {steps.length - 1 === active && (
                                  <div className="nut-tour-content-bottom-operate-btn active">
                                    {completeTxt}
                                  </div>
                                )}
                                {steps.length - 1 !== active && (
                                  <div
                                    className="nut-tour-content-bottom-operate-btn active"
                                    onClick={() => changeStep('next')}
                                  >
                                    {nextStepTxt}
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

Tour.defaultProps = defaultProps
Tour.displayName = 'NutTour'
