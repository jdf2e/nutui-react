import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import Radio from '@/packages/radio'
const { RadioGroup } = Radio
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'

import VirtualList from './index'
// import './demo.scss'

const ListDemo = () => {
  const [sourceData, setsourceData] = useState([])
  const [pageNo, setPageNo] = useState(1)
  const [radioVal, setRadioVal] = useState('1')
  const handleChange = (v) => {
    setRadioVal(v)
    setPageNo(1)
  }
  const getData = useCallback(() => {
    const datas = []
    const pageSize = 10
    for (let i = (pageNo - 1) * pageSize; i < pageNo * pageSize; i++) {
      const num = i > 9 ? i : `0${i}`
      datas.push(` list${num}`)
    }
    if (pageNo === 1) {
      setsourceData(() => {
        return datas
      })
    } else {
      setsourceData((sourceData) => {
        return [...sourceData, ...datas]
      })
    }
  }, [pageNo])
  const ItemRender = ({ data }) => {
    return <p>我是-{data}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  const ItemVariable = ({ data, index }) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>可变大小隔行展示-{data}</p>
    )
  }
  const ItemVariableDemo = React.memo(ItemVariable)
  const handleScroll = () => {
    if (pageNo > 100) return
    setPageNo(pageNo + 1)
  }
  useEffect(() => {
    getData()
  }, [getData])
  const showNode = () => {
    switch (radioVal) {
      case '1':
        return (
          <VirtualList
            itemSize={66}
            className="heigh1"
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            handleScroll={handleScroll}
          />
        )
      case '2':
        return (
          <VirtualList
            sourceData={sourceData}
            className="heigh1"
            ItemRender={ItemVariableDemo}
            itemSize={128}
            itemEqualSize={false}
            handleScroll={handleScroll}
          />
        )
      case '3':
        return (
          <VirtualList
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            itemSize={124}
            handleScroll={handleScroll}
            horizontal
          />
        )
      case '4':
        return (
          <VirtualList
            sourceData={sourceData}
            itemSize={300}
            ItemRender={ItemVariableDemo}
            horizontal
            itemEqualSize={false}
          />
        )
    }
  }
  return (
    <>
      <div className="demo">
        <CellGroup>
          <Cell>
            <RadioGroup value={radioVal} onChange={handleChange} direction="horizontal">
              <Radio value="1">垂直等高</Radio>
              <Radio value="2">垂直不等高</Radio>
              <Radio value="3">水平等宽</Radio>
              <Radio value="4">水平不等宽</Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <div key={radioVal} className="nut-virtualList-demo-box hideScrollbar">
          {showNode()}
        </div>
      </div>
    </>
  )
}

export default ListDemo
