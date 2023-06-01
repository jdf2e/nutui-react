import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export interface TimePannelProps extends BasicComponent {
  date: string
  curKey: string | number
  onChange: (curKey: string | number) => void
}
const defaultProps = {
  ...ComponentDefaults,
  date: '',
  curKey: 0,
} as TimePannelProps
export const TimePannel: FunctionComponent<
  Partial<TimePannelProps> &
    Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'>
> = (props) => {
  const { className, date, curKey, onChange } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-timepannel'
  return (
    <div
      className={classNames(classPrefix, className)}
      onClick={() => onChange(curKey)}
    >
      {date}
    </div>
  )
}

TimePannel.defaultProps = defaultProps
TimePannel.displayName = 'NutTimePannel'
