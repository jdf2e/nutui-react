import React, { FunctionComponent } from 'react'
import { useConfig } from '@/packages/configprovider'
import Popup from '@/packages/popup'
import { SideNavBarProps } from './type'
import { handleClick } from './utils'

const defaultProps = {
  showhead: false,
  position: 'left',
  width: '80%',
} as SideNavBarProps
export const SideNavBar: FunctionComponent<SideNavBarProps> = (props) => {
  const { locale } = useConfig()
  const { title, visible, width, position, children, className, showhead, handleClose, ...rest } = {
    ...defaultProps,
    ...props,
  }

  return (
    <Popup
      visible={visible}
      style={{ width, height: '100%' }}
      position={position}
      onClose={handleClose}
    >
      <div className={className ? `${className} nut-sidenavbar` : 'nut-sidenavbar'} {...rest}>
        <div className="nut-sidenavbar__content">
          {/* {showhead ? <div className="nut-sidenavbar__head">📈</div> : null} */}

          <div className="nut-sidenavbar__list nutShow" onClick={handleClick}>
            <div className="nut-sidenavbar__title border-bt ">
              {title} <i className="arrow-icon arrow-down" />
            </div>
            <div className="nut-sidenavbar__content">{children}</div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

SideNavBar.defaultProps = defaultProps
SideNavBar.displayName = 'NutSideNavBar'
