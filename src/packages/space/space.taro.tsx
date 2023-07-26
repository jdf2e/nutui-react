import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { BasicComponent } from '@/utils/typings'

const prefixCls = 'nut-space'

export interface SpaceProps extends BasicComponent {
  direction: 'horizontal' | 'vertical'
  align: 'start' | 'end' | 'center' | 'baseline'
  justify:
    | 'start'
    | 'end'
    | 'center'
    | 'between'
    | 'around'
    | 'evenly'
    | 'stretch'
  wrap: boolean
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const defaultProps = {
  direction: 'horizontal',
} as SpaceProps

export const Space: FunctionComponent<
  Partial<SpaceProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { locale } = useConfig()
  const { children, onClick, wrap, align, direction, justify } = {
    ...defaultProps,
    ...props,
  }
  const cls = classNames(
    prefixCls,
    wrap && `${prefixCls}-wrap`,
    direction && `${prefixCls}-${direction}`,
    align && `${prefixCls}-align-${align}`,
    justify && `${prefixCls}-justify-${justify}`
  )
  return (
    <div className={cls}>
      {React.Children.map(children, (child) => {
        return (
          child !== null &&
          child !== undefined && (
            <div className={`${prefixCls}-item`}>{child}</div>
          )
        )
      })}
    </div>
  )
}

Space.defaultProps = defaultProps
Space.displayName = 'NutSpace'
