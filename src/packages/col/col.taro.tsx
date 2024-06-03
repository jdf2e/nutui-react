import React, {
  FunctionComponent,
  useEffect,
  useState,
  CSSProperties,
  useContext,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import { pxTransform } from '@tarojs/taro'
import { DataContext } from '@/packages/row/context'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'

export type ColEventType = 'row' | 'col'

export interface ColProps extends BasicComponent {
  span: string | number
  offset: string | number
  gutter: string | number
  isFirst: boolean
  isLast: boolean
  onClick: (e: any, type: ColEventType) => void
}

const defaultProps = {
  ...ComponentDefaults,
  span: '24',
  offset: '0',
  gutter: '0',
  isFirst: false,
  isLast: false,
} as ColProps

export const Col: FunctionComponent<Partial<ColProps>> = (props) => {
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
      style.paddingLeft = pxTransform((gutter as number) / 2)
    }
    if (!isLast) {
      style.paddingRight = pxTransform((gutter as number) / 2)
    }
    return style
  }
  useEffect(() => {
    setColName(classs)
    setColStyle(getStyle)
  }, [span, offset, gutter])

  return (
    <View
      className={classNames(colName, className)}
      style={{ ...style, ...colStyle }}
      onClick={(e) => {
        onClick && onClick(e, 'col')
      }}
    >
      {children}
    </View>
  )
}

Col.displayName = 'NutCol'
