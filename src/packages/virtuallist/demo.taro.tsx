import React, { useState, useEffect, useCallback } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Cell,
  CellGroup,
  Radio,
  VirtualList,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

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

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',
    fontSize: '14px',
    background: '#fff',
    borderRadius: '10px',
  }
  const itemStyel2 = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    fontSize: '14px',
    background: '#fff',
    borderRadius: '10px',
  }

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

  useEffect(() => {
    getData()
  }, [getData])

  const ItemRender = ({ data }: any) => {
    return <div style={itemStyle}>{data}</div>
  }
  const ItemRenderMemo = React.memo(ItemRender)

  const ItemVariable = ({ data, index }: any) => {
    return (
      <div
        style={{
          height: `${index % 2 === 0 ? '100px' : '50px'}`,
          ...itemStyel2,
        }}
      >
        {data}
      </div>
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

  const showNode = () => {
    switch (radioVal) {
      case '1':
        return (
          <VirtualList
            itemSize={50}
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            onScroll={onScroll}
          />
        )
      case '2':
        return (
          <VirtualList
            itemSize={80}
            sourceData={sourceData}
            ItemRender={ItemVariableDemo}
            onScroll={onScroll}
            itemEqualSize={false}
            containerSize={500}
          />
        )
      default:
        return (
          <VirtualList
            itemSize={50}
            sourceData={sourceData}
            ItemRender={ItemRenderMemo}
            onScroll={onScroll}
          />
        )
    }
  }
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <CellGroup>
          <Cell>
            <RadioGroup
              value={radioVal}
              onChange={handleChange}
              direction="horizontal"
            >
              <Radio value="1">{translated.text1}</Radio>
              <Radio value="2">{translated.text2}</Radio>
            </RadioGroup>
          </Cell>
        </CellGroup>
        <div style={{ height: '100%' }}>{showNode()}</div>
      </div>
    </>
  )
}

export default ListDemo
