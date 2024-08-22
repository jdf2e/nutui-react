import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
  useContext,
} from 'react'
import type { MouseEvent } from 'react'
import classNames from 'classnames'
import { DataContext } from '@/packages/row/UserContext'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ColEventType = 'row' | 'col'

export interface ColProps extends BasicComponent {
  span: string | number
  offset: string | number
  gutter: string | number
  onClick: (e: MouseEvent<HTMLDivElement>, type: ColEventType) => void
}

const defaultProps = {
  ...ComponentDefaults,
  span: '24',
  offset: '0',
  gutter: '0',
} as ColProps

export const Col: FunctionComponent<
  Partial<ColProps> & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>
> = (props) => {
  const { className, style, span, offset, children, onClick } = {
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
    } ${prefixCls}-${offset}`
  }
  const getStyle = () => {
    // 定义col的style类
    const style: CSSProperties = {}
    style.paddingLeft = `${(gutter as number) / 2}px`
    style.paddingRight = `${(gutter as number) / 2}px`
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
