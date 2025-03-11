import React, {
  CSSProperties,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/row/context'
import { ComponentDefaults } from '@/utils/typings'
import { WebColProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  span: '24',
  offset: '0',
  gutter: '0',
  isFirst: false,
  isLast: false,
} as WebColProps

export const Col: FunctionComponent<
  Partial<WebColProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { className, style, span, offset, children, isFirst, isLast, onClick } =
    {
      ...defaultProps,
      ...props,
    }
  const [colName, setColName] = useState('')
  const [colStyle, setColStyle] = useState({})
  const { gutter } = useContext(DataContext) as any

  const classs = () => {
    // 定义col的class类
    const prefixCls = 'nut-col'
    return `${prefixCls} ${prefixCls}-${span} ${
      gutter ? `${prefixCls}-gutter` : ''
    } ${prefixCls}-offset-${offset}`
  }
  const getStyle = () => {
    // 定义col的style类
    const style: CSSProperties = {}
    if (!isFirst) {
      style.paddingLeft = `${(gutter as number) / 2}px`
    }
    if (!isLast) {
      style.paddingRight = `${(gutter as number) / 2}px`
    }
    return style
  }
  useEffect(() => {
    setColName(classs)
    setColStyle(getStyle)
  }, [span, offset, gutter])

  return (
    <div
      className={classNames(colName, className)}
      style={{ ...style, ...colStyle }}
      onClick={(e) => {
        onClick && onClick(e, 'col')
      }}
    >
      {children}
    </div>
  )
}

Col.displayName = 'NutCol'
