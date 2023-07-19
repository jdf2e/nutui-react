import React, { FunctionComponent } from 'react'
import './tour.scss'
import { useConfig } from '@/packages/configprovider'

export interface TourProps {}
const defaultProps = {} as TourProps
export const Tour: FunctionComponent<
  Partial<TourProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-tour">Tour</div>
}

Tour.defaultProps = defaultProps
Tour.displayName = 'NutTour'
