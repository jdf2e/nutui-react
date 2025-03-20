import React, {
  CSSProperties,
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from 'react'
import classNames from 'classnames'
import { View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { DataContext } from '@/packages/row/context'
import { ComponentDefaults } from '@/utils/typings'
import { TaroColProps } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  span: '24',
  offset: '0',
  gutter: '0',
  isFirst: false,
  isLast: false,
} as TaroColProps

export const Col: FunctionComponent<Partial<TaroColProps>> = (props) => {
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
      key={classNames(colName, className)}
      onClick={(e) => {
        onClick && onClick(e, 'col')
      }}
    >
      {children}
    </View>
  )
}

Col.displayName = 'NutCol'
