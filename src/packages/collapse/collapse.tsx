import React, { FunctionComponent, useCallback } from 'react'
import classNames from 'classnames'
import { ComponentDefaults } from '@/utils/typings'
import CollapseItem from '../collapseitem'
import CollapseContext from './context'
import { usePropsValue } from '@/hooks/use-props-value'
import { WebCollapseProps, CollapseActiveName } from '@/types'

const defaultProps = {
  ...ComponentDefaults,
  defaultActiveName: [] as CollapseActiveName,
  accordion: false,
  expandIcon: null,
  rotate: 180,
} as WebCollapseProps

export const Collapse: FunctionComponent<Partial<WebCollapseProps>> & {
  Item: typeof CollapseItem
} = (props) => {
  const {
    className,
    style,
    children,
    activeName,
    defaultActiveName,
    accordion,
    expandIcon,
    rotate,
    onChange,
  } = {
    ...defaultProps,
    ...props,
  }
  const classPrefix = 'nut-collapse'

  const [value, setValue] = usePropsValue<CollapseActiveName>({
    value: activeName,
    defaultValue: defaultActiveName,
    finalValue: [],
  })

  const changeVal = (
    newValue: CollapseActiveName,
    name: string,
    isOpen: boolean
  ) => {
    setValue(newValue)
    onChange && onChange(newValue, name, isOpen)
  }

  const updateValue = (name: string) => {
    if (accordion) {
      if (value === name) {
        changeVal('', name, false)
      } else {
        changeVal(name, name, true)
      }
    } else if (Array.isArray(value)) {
      if (value.includes(name)) {
        const newValue = value.filter((v: string) => v !== name)
        changeVal(newValue, name, false)
      } else {
        const newValue = value.concat([name])
        changeVal(newValue, name, true)
      }
    } else {
      console.warn('[NutUI] <Collapse> 未开启手风琴模式时 activeName 应为数组')
    }
  }

  const isOpen = useCallback(
    (name: string) => {
      if (accordion) {
        return value === name
      }
      if (Array.isArray(value)) {
        return value.includes(name)
      }
      return false
    },
    [accordion, value]
  )

  return (
    <CollapseContext.Provider
      value={{
        isOpen,
        updateValue,
        expandIcon,
        rotate,
      }}
    >
      <div className={classNames(classPrefix, className)} style={style}>
        {children}
      </div>
    </CollapseContext.Provider>
  )
}

Collapse.displayName = 'NutCollapse'
Collapse.Item = CollapseItem
