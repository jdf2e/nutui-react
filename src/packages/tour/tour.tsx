import React, { useState, useEffect, FunctionComponent } from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import Popover from '@/packages/popover'
import { PopoverLocation } from '@/packages/popover/popover'
import { getRect } from '@/utils/use-client-rect'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

import './tour.scss'

interface StepOptions {
  target: Element | string
  content: string
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
  closeOnOverlayClick: true,
} as TourProps

const classPrefix = 'nut-tour'
export const Tour: FunctionComponent<
  Partial<TourProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const {
    children,
    className,
    closeOnOverlayClick,
    steps,
    type,
    location,
    isShowModel,
    mask,
    maskWidth,
    maskHeight,
    offset,
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
            {showTour && (
              <div
                className={`${
                  mask ? 'nut-tour-mask' : 'nut-tour-mask nut-tour-mask-none'
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
            >
              {/* placeholder don't delete <></> */}
              <></>
              {type === 'tile' && (
                <div className="nut-tour-content nut-tour-content-tile">
                  <div className="nut-tour-content-inner">{item.content}</div>
                </div>
              )}
            </Popover>
          </div>
        )
      })}
    </div>
  )
}

Tour.defaultProps = defaultProps
Tour.displayName = 'NutTour'
