import React, { useState, useEffect } from 'react'
import { Cell, Price } from '@/packages/nutui.react.taro'

const PriceDemo = () => {
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
      <h2>基本用法</h2>
      <Cell>
        <Price price={1010} needSymbol={false} thousands />
      </Cell>
      <h2>有人民币符号，无千位分隔</h2>
      <Cell>
        <Price price={10010.01} needSymbol thousands={false} />
      </Cell>
      <h2>带人民币符号，有千位分隔，保留小数点后三位</h2>
      <Cell>
        <Price price={15213.1221} decimalDigits={3} needSymbol thousands />
      </Cell>
      <h2>异步随机变更</h2>
      <Cell>
        <Price price={price} decimalDigits={3} needSymbol thousands />
      </Cell>
    </div>
  )
}

export default PriceDemo
