import React, { useCallback, useEffect, useState } from 'react'
import Radio from '@/packages/radio'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import { useTranslate } from '../../sites/assets/locale'
import VirtualList from './index'

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
  const [list, setsourceData] = useState<any>([])
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
      setsourceData((list: any) => {
        return [...list, ...datas]
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
  const onScroll = () => {
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
            list={list}
            ItemRender={ItemRenderMemo}
            onScroll={onScroll}
          />
        )
      case '2':
        return (
          <VirtualList
            list={list}
            ItemRender={ItemVariableDemo}
            itemSize={128}
            containerSize={500}
            itemEqualSize={false}
            onScroll={onScroll}
          />
        )
      case '3':
        return (
          <VirtualList
            list={list}
            ItemRender={ItemRenderMemo}
            itemSize={124}
            containerSize={341}
            onScroll={onScroll}
            horizontal
          />
        )
      case '4':
        return (
          <VirtualList
            list={list}
            itemSize={300}
            ItemRender={ItemVariableDemo}
            horizontal
            itemEqualSize={false}
            onScroll={onScroll}
          />
        )
      default:
        return (
          <VirtualList
            itemSize={66}
            className="heigh1"
            list={list}
            ItemRender={ItemRenderMemo}
            onScroll={onScroll}
          />
        )
    }
  }
  return (
    <>
      <div className="demo">
        <CellGroup>
          <Cell>
            <Radio.Group
              value={radioVal}
              onChange={handleChange}
              direction="horizontal"
            >
              <Radio value="1">{translated.text1}</Radio>
              <Radio value="2">{translated.text2}</Radio>
              <Radio value="3">{translated.text3}</Radio>
              <Radio value="4">{translated.text4}</Radio>
            </Radio.Group>
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
