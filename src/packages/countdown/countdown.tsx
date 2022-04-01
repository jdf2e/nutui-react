import React, { FunctionComponent } from 'react'

export interface CountDownProps {}
const defaultProps = {} as CountDownProps
export const CountDown: FunctionComponent<
  Partial<CountDownProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-countdown">CountDown</div>
}

CountDown.defaultProps = defaultProps
CountDown.displayName = 'NutCountDown'
