import React, {
  FunctionComponent,
  useEffect,
  useState,
  memo,
  ReactNode,
} from 'react'
import classNames from 'classnames'

import bem from '@/utils/bem'

export interface CollapseProps {
  className: string
  style: React.CSSProperties
  activeName: Array<number | string> | number | string
  accordion: boolean
  expandIcon: ReactNode
  rotate: number
  onChange: (isOpen: boolean, name: string) => void
  children?: React.ReactNode
}
const defaultProps = {
  style: {},
  activeName: ['0'],
  accordion: false,
  expandIcon: null,
  rotate: 180,
} as CollapseProps

function areEqual(
  prevProps: Partial<CollapseProps>,
  nextProps: Partial<CollapseProps>
) {
  return (
    prevProps.children === nextProps.children &&
    JSON.stringify(prevProps.activeName) ===
      JSON.stringify(nextProps.activeName)
  )
}

export const Collapse: FunctionComponent<Partial<CollapseProps>> = memo(
  (props) => {
    const {
      className,
      style,
      children,
      activeName,
      accordion,
      expandIcon,
      rotate,
      onChange,
    } = {
      ...defaultProps,
      ...props,
    }
    const childrenDom = React.Children.toArray(children)
    const [defaultOpenIndex, setDefaultOpenIndex] = useState<Array<string>>([])
    const handleActiveName = () => {
      let activeArr = []
      if (!Array.isArray(activeName)) {
        activeArr.push(activeName.toString())
      } else {
        // 数组
        if (accordion && activeName.length > 1) {
          console.warn('手风琴模式不支持传递多个打开页签')
        }
        const activeNameStr = activeName.map((item) => {
          return item.toString()
        })
        activeArr = [...activeNameStr]
      }
      return activeArr
    }

    const colBem = bem('collapse')
    useEffect(() => {
      const activeArr = handleActiveName()
      setDefaultOpenIndex(activeArr)
    }, [activeName])

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
      <div className={classNames(colBem(), className)} style={style}>
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
  },
  areEqual
)

Collapse.defaultProps = defaultProps
Collapse.displayName = 'NutCollapse'
