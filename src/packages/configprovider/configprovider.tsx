import React, { FunctionComponent } from 'react'
import './configprovider.scss'

export interface ConfigProviderProps {}
const defaultProps = {} as ConfigProviderProps
export const ConfigProvider: FunctionComponent<
  Partial<ConfigProviderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-configprovider">ConfigProvider</div>
}

ConfigProvider.defaultProps = defaultProps
ConfigProvider.displayName = 'NutConfigProvider'
