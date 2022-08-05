import React, { useState, useEffect } from 'react'
import { Price } from './price'
import { Cell } from '../cell/cell'
import { useTranslate } from '@/sites/assets/locale'

interface T {
  basic: string
  title1: string
  title2: string
  title3: string
}

const PriceDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      title1: '有人民币符号，无千位分隔',
      title2: '带人民币符号，有千位分隔，保留小数点后三位',
      title3: '异步随机变更',
    },
    'zh-TW': {
      basic: '基本用法',
      title1: '有人民幣符號，無千位分隔',
      title2: '帶人民幣符號，有千位分隔，保留小數點後三位',
      title3: '異步隨機變更',
    },
    'en-US': {
      basic: 'Basic Usage',
      title1: 'With RMB symbol, no thousands separator',
      title2:
        'With RMB symbol, separated by thousands, keep three decimal places',
      title3: 'Asynchronous random changes',
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
    <div className="demo">
      <h2>{translated.basic}</h2>
      <Cell>
        <Price price={1010} needSymbol={false} thousands />
      </Cell>
      <h2>{translated.title1}</h2>
      <Cell>
        <Price price={10010.01} needSymbol thousands={false} />
      </Cell>
      <h2>{translated.title2}</h2>
      <Cell>
        <Price price={15213.1221} decimalDigits={3} needSymbol thousands />
      </Cell>
      <h2>{translated.title3}</h2>
      <Cell>
        <Price price={price} decimalDigits={3} needSymbol thousands />
      </Cell>
    </div>
  )
}

export default PriceDemo
