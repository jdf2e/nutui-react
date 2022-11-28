import React, { FunctionComponent } from 'react'
import './watermark.scss'
import { useConfig } from '@/packages/configprovider'

export interface WaterMarkProps {}
const defaultProps = {} as WaterMarkProps
export const WaterMark: FunctionComponent<
  Partial<WaterMarkProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-watermark">WaterMark</div>
}

WaterMark.defaultProps = defaultProps
WaterMark.displayName = 'NutWaterMark'
