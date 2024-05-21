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
    indent,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const innerIndent = indent ? Number(indent) : 20

  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <div className={classNames(classPrefix, className)} {...rest}>
        <div className={`${classPrefix}-content`}>
          <div
            className={`${classPrefix}-list sidenavbar-show`}
            onClick={handleClick}
          >
            <div
              className={`${classPrefix}-title ${classPrefix}-border-bt`}
              style={{ paddingLeft: `${innerIndent}px` }}
            >
              {title} <i className="arrow-icon arrow-down" />
            </div>
            <OffsetContext.Provider value={innerIndent}>
              <div className={`${classPrefix}-content`}>{children}</div>
            </OffsetContext.Provider>
          </div>
        </div>
      </div>
    </Popup>
  )
}

SideNavBar.displayName = 'NutSideNavBar'
