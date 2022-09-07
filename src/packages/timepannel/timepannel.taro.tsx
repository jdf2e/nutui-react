import React, { FunctionComponent } from 'react'
import bem from '@/utils/bem'
import { useConfig } from '@/packages/configprovider/configprovider.taro'

export interface TimePannelProps {
  date: string
  curKey: string | number
  className?: string
  change: (curKey: string | number) => void
}
const defaultProps = {
  className: '',
  date: '',
  curKey: 0,
} as TimePannelProps
export const TimePannel: FunctionComponent<
  Partial<TimePannelProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children, className, date, curKey, change } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('timepannel')

  return (
    <div className={`${b()} ${className || ''}`} onClick={() => change(curKey)}>
      {date}
    </div>
  )
}

TimePannel.defaultProps = defaultProps
TimePannel.displayName = 'NutTimePannel'
