import React, { useState, useEffect } from 'react'
import { Cell, Price } from '@nutui/nutui-react'

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
  return (
    <Cell>
      <Price price={price} digits={3} thousands />
    </Cell>
  )
}
export default Demo7
