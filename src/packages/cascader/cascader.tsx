import React, { FunctionComponent, useState, useEffect } from 'react'
import Popup from '@/packages/popup'
import { Tabs } from '@/packages/tabs/tabs'
import { TabPane } from '@/packages/tabpane/tabpane'
import { Icon } from '@/packages/icon/icon'
import { CascaderItem } from './cascaderItem'
import classNames from 'classnames'
import bem from '@/utils/bem'

interface OptiosData {
  nodes: OptiosInfo[]
  selectedNode: OptiosInfo | null
  paneKey: string
}

interface OptiosInfo {
  text: string
  value: string
  paneKey: string
  disabled?: boolean
  loading?: boolean
  children: OptiosInfo[]
}

export interface CascaderProps {
  visible: boolean
  options: OptiosInfo[]
  title: string
  value: []
  onClose?: () => void
  onChange: (params: any) => void
}

const defaultProps = {
  visible: false,
  options: [],
  title: '',
  value: [],
  onClose: () => {},
  onChange: (params) => {},
} as CascaderProps

export const Cascader: FunctionComponent<
  Partial<CascaderProps> & React.HTMLAttributes<HTMLDivElement>
> = (props) => {
  const [tabvalue, setTabvalue] = useState('c1')
  const [optiosData, setOptiosData] = useState<OptiosData[]>([])
  const [checkedIndexList, setCheckedIndexList] = useState<Array<number>>([])
  const [selectValue, setSelectValue] = useState([])

  const {
    visible,
    options,
    title,
    value, // 选中值
    onClose,
    onChange,
  } = { ...defaultProps, ...props }

  const b = bem('cascader')

  const classes = classNames(b(''))

  const classesPane = classNames({
    [`${b('')}-pane`]: true,
  })

  useEffect(() => {
    initData()
  }, [])

  const initData = () => {
    console.log('options', options)
    let newOptions: any[] = []
    let newOptionsChild: any[] = []
    options.forEach((item: any, index: number) => {
      console.log('item', item)
      item.paneKey = 'c' + (index + 1)
      // item.checked = false
      newOptionsChild.push(item)
    })
    newOptions = [
      {
        nodes: newOptionsChild,
        selectedNode: null,
        paneKey: 'c1',
      },
    ]
    setOptiosData([...newOptions])

    console.log('newOptions', newOptions)
    console.log('optiosData 2', optiosData)
  }

  const close = () => {
    onClose && onClose()
  }

  // const choose = (param: string) => {
  //   close()
  //   onChoose && onChoose(param)
  // }
  const closePopup = () => {
    close()
  }

  const chooseItem = (item: any, checked: boolean, index: number, tabIndex: number) => {
    console.log('item:', item)
    console.log('checked', checked, 'index', index, tabIndex)
    let newOptiosData = [...optiosData]
    let newCheckedIndexList = [...checkedIndexList]
    // 当前状态为true，被选中，滑到下一个
    // 当前状态为false，没被选中
    newCheckedIndexList[tabIndex] = index + 1
    newOptiosData[tabIndex].selectedNode = item
    // newOptiosData = newOptiosData.slice(0, level);
    if (item.children && item.children.length > 0) {
      newOptiosData.push({
        nodes: item.children || [],
        selectedNode: null,
        paneKey: 'c' + (tabIndex + 2),
      })
    }
    // console.log('newOptiosData 3', newOptiosData)
    // console.log('tabIndex', tabIndex)
    setCheckedIndexList(newCheckedIndexList)
    setOptiosData([...newOptiosData])

    // 滑到下一个
    if (item.children && item.children.length > 0) {
      setTabvalue('c' + (tabIndex + 2))
    } else {
      const pathNodes = optiosData.map((item) => item.selectedNode)
      const optionParams = pathNodes.map((item) => item.value)
      console.log('optionParams', optionParams)
      onChange(optionParams)
      close()
    }
  }

  return (
    <>
      <div className={classes}>
        {console.log('dom optiosData 2', optiosData)}
        <Popup
          visible={visible}
          position="bottom"
          round
          closeable
          onClickOverlay={closePopup}
          onClickCloseIcon={closePopup}
          style={{ padding: '30px 50px' }}
        >
          <div className="nut-cascader__title">{title}</div>
          <Tabs
            value={tabvalue}
            titleNode={() => {
              return optiosData.map((pane) => (
                <div
                  onClick={() => setTabvalue(pane.paneKey)}
                  className={`nut-tabs__titles-item ${tabvalue == pane.paneKey ? 'active' : ''}`}
                  key={pane.paneKey}
                >
                  <span className="nut-tabs__titles-item__text">
                    {pane?.selectedNode?.text ? pane.selectedNode.text : '请选择'}
                  </span>
                  <span className="nut-tabs__titles-item__line" />
                </div>
              ))
            }}
          >
            {optiosData.map((pane, tabIndex) => (
              <TabPane key={pane.paneKey} paneKey={pane.paneKey}>
                <div className={classesPane}>
                  {pane.nodes &&
                    pane.nodes.map((item: any, index: number) => (
                      <CascaderItem
                        key={index}
                        {...props}
                        data={item}
                        checked={checkedIndexList[tabIndex] == index + 1}
                        index={index}
                        tabIndex={tabIndex}
                        chooseItem={(
                          item: any,
                          checked: boolean,
                          index: number,
                          tabIndex: number
                        ) => chooseItem(item, checked, index, tabIndex)}
                      />
                    ))}
                </div>
              </TabPane>
            ))}
          </Tabs>
        </Popup>
      </div>
    </>
  )
}

Cascader.defaultProps = defaultProps
Cascader.displayName = 'NutCascader'
