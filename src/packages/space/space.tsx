import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
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
}
const defaultProps = {
  direction: 'horizontal',
} as SpaceProps

export const Space: FunctionComponent<
  Partial<SpaceProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const { className, style, children, wrap, align, direction, justify } = {
    ...defaultProps,
    ...props,
  }
  const cls = classNames(prefixCls, {
    [`${prefixCls}-${direction}`]: direction,
    [`${prefixCls}-${direction}-wrap`]: wrap,
    [`${prefixCls}-align-${align}`]: align,
    [`${prefixCls}-justify-${justify}`]: justify,
    [`${className}`]: className,
  })
  const itemCls = classNames(`${prefixCls}-item`, {
    [`${prefixCls}-${direction}-item`]: direction,
    [`${prefixCls}-${direction}-wrap-item`]: wrap,
  })
  const childrenCount = React.Children.count(children)

  return (
    <div className={cls} style={style}>
      {React.Children.map(children, (child, idx) => {
        const isLast = idx === childrenCount - 1
        return (
          child !== null &&
          child !== undefined && (
            <div
              className={classNames(
                itemCls,
                isLast && `${prefixCls}-${direction}-item-last`
              )}
            >
              {child}
            </div>
          )
        )
      })}
    </div>
  )
}

Space.displayName = 'NutSpace'
