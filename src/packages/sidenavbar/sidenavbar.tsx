import React, { FunctionComponent } from 'react'
// import './sidenavbar.scss'
import { useConfig } from '@/packages/configprovider'
import Popup from '@/packages/popup'
import '@/packages/popup/popup.scss'
import { SideNavBarProps } from './type'
import { handleClick } from './utils'

const defaultProps = {
  showHead: true,
} as SideNavBarProps
export const SideNavBar: FunctionComponent<
  Partial<SideNavBarProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { title, visible, children, className, ...rest } = { ...defaultProps, ...props }
  return (
    <Popup
      visible={visible}
      style={{ width: '80%', height: '100%' }}
      position="left"
      onClose={() => {}}
    >
      <div className={className ? `${className} nut-sidenavbar` : 'nut-sidenavbar'} {...rest}>
        <div className="nut-sidenavbar__content">
          <div className="nut-sidenavbar__head">📈</div>

          <div className="nut-sidenavbar__list nutShow" onClick={handleClick}>
            {title ? <div className="nut-sidenavbar__title border-bt ">{title}</div> : null}
            <div className="nut-sidenavbar__content">{children}</div>
          </div>
        </div>
      </div>
    </Popup>
  )
}

SideNavBar.defaultProps = defaultProps
SideNavBar.displayName = 'NutSideNavBar'
