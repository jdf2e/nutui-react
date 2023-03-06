import React, { useState, useEffect } from 'react'
import { Cell, Price, CellGroup } from '@/packages/nutui.react.taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface T {
  title1: string
  title2: string
  title3: string
  title4: string
  title5: string
  title6: string
}

const PriceDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title1: '支持三种尺寸：small、normal、large',
      title2: '不保留小数',
      title3: '有人民币符号，无千位分隔',
      title4: '有人民币符号，有千位分隔，保留小数点后三位',
      title5: '调整 symbol 符号位置',
      title6: '异步随机变更',
    },
    'zh-TW': {
      title1: '支持三種尺寸：small、normal、large',
      title2: '不保留小數',
      title3: '有人民幣符號，無千位分隔',
      title4: '有人民幣符號，有千位分隔，保留小數點後三位',
      title5: '調整 symbol 符號位置',
      title6: '異步隨機變更',
    },
    'en-US': {
      title1: 'Support three sizes：small、normal、large',
      title2: 'No decimals',
      title3: 'With RMB symbol, no thousands separator',
      title4:
        'With RMB symbol, separated by thousands, keep three decimal places',
      title5: 'Adjust the symbol position',
      title6: 'Asynchronous random changes',
    },
  })
  const [price, setPrice] = useState(Math.random() * 10000000)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrice(Math.random() * 10000000)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <CellGroup title={translated.title1}>
          <Cell>
            <Price price={0} size="small" needSymbol thousands />
          </Cell>
          <Cell>
            <Price price={0} size="normal" needSymbol thousands />
          </Cell>
          <Cell>
            <Price price={0} size="large" needSymbol thousands />
          </Cell>
        </CellGroup>
        <h2>{translated.title2}</h2>
        <Cell>
          <Price
            price={8888}
            decimalDigits={0}
            needSymbol
            size="normal"
            thousands
          />
        </Cell>
        <h2>{translated.title3}</h2>
        <Cell>
          <Price price={10010.01} size="normal" needSymbol thousands={false} />
        </Cell>
        <h2>{translated.title4}</h2>
        <Cell>
          <Price
            price={15213.1221}
            size="normal"
            decimalDigits={3}
            needSymbol
            thousands
          />
        </Cell>
        <h2>{translated.title5}</h2>
        <Cell>
          <Price
            price={8888.01}
            size="normal"
            position="after"
            symbol="元"
            needSymbol
            thousands
          />
        </Cell>
        <h2>{translated.title6}</h2>
        <Cell>
          <Price
            price={price}
            decimalDigits={3}
            size="normal"
            needSymbol
            thousands
          />
        </Cell>
      </div>
    </>
  )
}

export default PriceDemo
