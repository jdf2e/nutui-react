import React, { useState, useEffect } from 'react'
import { Price } from '@nutui/nutui-react-taro'

const Demo7 = () => {
  const [price, setPrice] = useState(Math.random() * 10000000)

  useEffect(() => {
    const timer = setInterval(() => {
      setPrice(Math.random() * 10000000)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [])
  return <Price price={price} digits={3} size="normal" thousands />
}
export default Demo7
