import React, { useCallback, useEffect, useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, CellGroup, Radio } from '@/packages/nutui.react.taro'

import VirtualList from './index'

const { RadioGroup } = Radio

const ListDemo = () => {
  const [translated] = useTranslate<any>({
    'zh-CN': {
      text1: '垂直等高',
      text2: '垂直不等高',
      text3: '水平等宽',
      text4: '水平不等宽',
    },
    'zh-TW': {
      text1: '縱向等高',
      text2: '縱向不等高',
      text3: '水平等寬',
      text4: '水平不等寬',
    },
    'en-US': {
      text1: 'Vertical equal height',
      text2: 'Vertical unequal height',
      text3: 'Horizontal equal width',
      text4: 'Horizontal unequal width',
    },
  })
  const [sourceData, setsourceData] = useState<any>([])
  const [pageNo, setPageNo] = useState(1)
  const [radioVal, setRadioVal] = useState('1')
  const [isLoading, setIsLoading] = useState(false)
  const handleChange = (v: any) => {
    setRadioVal(v)
    setPageNo(1)
  }
  const getData = useCallback(() => {
    const datas: any = []
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
      setsourceData((sourceData: any) => {
        return [...sourceData, ...datas]
      })
    }
  }, [pageNo])
  const ItemRender = ({ data }: any) => {
    return <p>{data}</p>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  const ItemVariable = ({ data, index }: any) => {
    return (
      <p className={index % 2 === 0 ? '' : 'nut-virtualList-demo-item'}>
        {data}
      </p>
    )
  }
  const ItemVariableDemo = React.memo(ItemVariable)
  const handleScroll = () => {
    if (pageNo > 50 || isLoading) return
    setIsLoading(true)
    setTimeout(() => {
      setPageNo(pageNo + 1)
      setIsLoading(false)
    }, 30)
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
            ItemRender={ItemVariableDemo}
            itemSize={128}
            containerSize={500}
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
            containerSize={341}
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
            handleScroll={handleScroll}
          />
        )
      default:
        return (
          <VirtualList
            itemSize={66}
            className="heigh1"
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            handleScroll={handleScroll}
          />
        )
    }
  }
  return (
    <>
      <div className="demo">
        <CellGroup>
          <Cell>
            <RadioGroup
              value={radioVal}
              onChange={handleChange}
              direction="horizontal"
            >
              <Radio value="1">{translated.text1}</Radio>
              <Radio value="2">{translated.text2}</Radio>
              <Radio value="3">{translated.text3}</Radio>
              <Radio value="4">{translated.text4}</Radio>
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
