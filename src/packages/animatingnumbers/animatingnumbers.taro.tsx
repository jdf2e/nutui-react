import React, { Component } from 'react'

import { CountUp } from './countup.taro'

export interface AnimatingNumbersProps {}
const defaultProps = {} as AnimatingNumbersProps

export class AnimatingNumbers extends Component<
  AnimatingNumbersProps,
  unknown
> {
  static defaultProps = defaultProps

  static displayName = 'NutAnimatingNumbers'

  static CountUp = CountUp

  constructor(props: AnimatingNumbersProps) {
    super(props)
    this.state = {}
  }

  render() {
    return <div className="nut-animatingnumbers" />
  }
}
