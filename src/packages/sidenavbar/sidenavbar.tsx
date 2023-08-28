import React, { FunctionComponent, ReactNode } from 'react'
import classNames from 'classnames'
import Popup from '@/packages/popup'
import { handleClick } from './utils'
import { OffsetContext } from './context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface SideNavBarProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'>,
    BasicComponent {
  title: ReactNode
  visible: boolean
  width: string
  indent: number
  position: 'left' | 'right'
  onClose: () => void
}

const defaultProps = {
  ...ComponentDefaults,
  position: 'left',
  width: '80%',
} as SideNavBarProps

export const SideNavBar: FunctionComponent<Partial<SideNavBarProps>> = (
  props
) => {
  const classPrefix = 'nut-sidenavbar'
  const {
    title,
    visible,
    width,
    position,
    children,
    className,
    onClose,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const indent = props.indent ? Number(props.indent) : 20

  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <div className={classNames(className, classPrefix)} {...rest}>
        <div className={`${classPrefix}__content`}>
          <div
            className={`${classPrefix}__list sidenavbar-show`}
            onClick={handleClick}
          >
            <div
              className={`${classPrefix}__title ${classPrefix}-border-bt`}
              style={{ paddingLeft: `${indent}px` }}
            >
              {title} <i className="arrow-icon arrow-down" />
            </div>
            <OffsetContext.Provider value={indent}>
              <div className={`${classPrefix}__content`}>{children}</div>
            </OffsetContext.Provider>
          </div>
        </div>
      </div>
    </Popup>
  )
}

SideNavBar.defaultProps = defaultProps
SideNavBar.displayName = 'NutSideNavBar'
