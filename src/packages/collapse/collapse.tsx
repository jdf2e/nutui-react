import React, { FunctionComponent, useEffect, useState, ReactNode } from 'react'
import classNames from 'classnames'
import { BasicComponent, ComponentDefaults } from '@/utils/typings'
import CollapseItem from '../collapseitem'

export interface CollapseProps extends BasicComponent {
  activeKey: Array<number | string> | number | string
  accordion: boolean
  expandIcon: ReactNode
  rotate: number
  onChange: (isOpen: boolean, name: string) => void
}
const defaultProps = {
  ...ComponentDefaults,
  activeKey: ['0'],
  accordion: false,
  expandIcon: null,
  rotate: 180,
} as CollapseProps

export const Collapse: FunctionComponent<Partial<CollapseProps>> & {
  Item: typeof CollapseItem
} = (props) => {
  const {
    className,
    style,
    children,
    activeKey,
    accordion,
    expandIcon,
    rotate,
    onChange,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-collapse'
  const childrenDom = React.Children.toArray(children)
  const [defaultOpenIndex, setDefaultOpenIndex] = useState<Array<string>>([])
  const handleActiveName = () => {
    let activeArr = []
    if (!Array.isArray(activeKey)) {
      activeArr.push(activeKey.toString())
    } else {
      // 数组
      if (accordion && activeKey.length > 1) {
        console.warn('手风琴模式不支持传递多个打开页签')
      }
      const activeNameStr = activeKey.map((item) => {
        return item.toString()
      })
      activeArr = [...activeNameStr]
    }
    return activeArr
  }

  useEffect(() => {
    const activeArr = handleActiveName()
    setDefaultOpenIndex(activeArr)
  }, [activeKey])

  const onToggle = (isOpen: boolean, name: string) => {
    let newOpenIndex = [...defaultOpenIndex]
    if (isOpen) {
      // 当前状态为true，则变为false,闭合
      const removeIndex = newOpenIndex.findIndex((value) => {
        return value === name
      })
      newOpenIndex.splice(removeIndex, 1)
    } else {
      // 当前状态为false，变为true，展开
      // eslint-disable-next-line no-lonely-if
      if (accordion) {
        newOpenIndex = [name]
      } else {
        newOpenIndex.push(name)
      }
    }
    setDefaultOpenIndex(newOpenIndex)
    onChange && onChange(!isOpen, name)
  }
  return (
    <div className={classNames(classPrefix, className)} style={style}>
      {childrenDom.map((item: any) => {
        return React.cloneElement(item, {
          isOpen: defaultOpenIndex.includes(item.props.name),
          onToggle: (isOpen: boolean, name: string) => onToggle(isOpen, name),
          expandIcon: item.props.expandIcon || expandIcon,
          rotate,
          childnull: !!item.props.children,
        })
      })}
    </div>
  )
}

Collapse.defaultProps = defaultProps
Collapse.displayName = 'NutCollapse'
Collapse.Item = CollapseItem
