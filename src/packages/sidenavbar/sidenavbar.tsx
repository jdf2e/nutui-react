import React, { FunctionComponent } from 'react'
import Popup from '@/packages/popup'
import { handleClick } from './utils'
import { OffsetContext } from './offsetContext'

type NavBarProps = {
  showhead?: boolean
}
export interface SideNavBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    NavBarProps {
  title: string
  visible: boolean
  width?: string
  offset?: number
  position?: 'left' | 'right'
  onClose: () => void
  children?: React.ReactNode
}
const defaultProps = {
  showhead: false,
  position: 'left',
  width: '80%',
} as SideNavBarProps
export const SideNavBar: FunctionComponent<SideNavBarProps> = (props) => {
  const {
    title,
    visible,
    width,
    position,
    children,
    className,
    showhead,
    onClose,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const offset = props.offset ? Number(props.offset) : 20

  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={onClose}
    >
      <div
        className={className ? `${className} nut-sidenavbar` : 'nut-sidenavbar'}
        {...rest}
      >
        <div className="nut-sidenavbar__content">
          <div className="nut-sidenavbar__list nutShow" onClick={handleClick}>
            <div
              className="nut-sidenavbar__title border-bt "
              style={{ paddingLeft: `${offset}px` }}
            >
              {title} <i className="arrow-icon arrow-down" />
            </div>
            <OffsetContext.Provider value={offset}>
              <div className="nut-sidenavbar__content">{children}</div>
            </OffsetContext.Provider>
          </div>
        </div>
      </div>
    </Popup>
  )
}

SideNavBar.defaultProps = defaultProps
SideNavBar.displayName = 'NutSideNavBar'
