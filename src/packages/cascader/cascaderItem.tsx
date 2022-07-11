import React, { FunctionComponent, useState, useEffect } from 'react'
import Popup from '@/packages/popup'
import { Tabs } from '@/packages/tabs/tabs'
import { TabPane } from '@/packages/tabpane/tabpane'
import { Icon } from '@/packages/icon/icon'

import classNames from 'classnames'
import bem from '@/utils/bem'

export interface CascaderItemProps {
  data: Object
  index: number
  tabIndex: number
  checked: boolean
  options: []
  chooseItem: (data: any, checked: boolean, index: number, tabIndex: number) => void
}

const defaultProps = {
  data: {},
  index: 0,
  tabIndex: 0,
  checked: false,
  options: [],

  // chooseItem: () => {},
} as CascaderItemProps

export const CascaderItem: FunctionComponent<
  Partial<CascaderItemProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [showBasic, setShowBasic] = useState(false)
  const [tabvalue, setTabvalue] = useState('c1')
  const [optiosData, setOptiosData] = useState([])

  const { pane, data, index, tabIndex, checked, options, chooseItem } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('cascader-item')

  const classes = classNames(
    {
      active: checked,
    },
    b('')
  )

  const classesTitle = classNames({
    [`${b('')}__title`]: true,
  })

  useEffect(() => {
    initData()
  }, [])

  const initData = () => {
    // options.forEach((item, index: number) => {
    //   item.title = item.text
    //   item.paneKey = 'c'+ (index + 1)
    //   optiosData.push(item)
    // })
  }

  return (
    <>
      <div
        className={classes}
        onClick={() => {
          chooseItem(data, checked, index, tabIndex)
        }}
      >
        <div className={classesTitle}>{data.text}</div>
        {
          checked ? <Icon className={`${checked ? b('icon-check') : ''}`} name="checklist" /> : ''
          // <Icon v-if="node.loading" className="nut-cascader-item__icon-loading" name="loading" />
        }
      </div>
    </>
  )
}

// Cascader.defaultProps = defaultProps
CascaderItem.displayName = 'NutCascaderItem'
