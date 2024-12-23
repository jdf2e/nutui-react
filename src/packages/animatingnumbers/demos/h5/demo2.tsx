import React, { useEffect, useState } from 'react'
import { AnimatingNumbers, Cell, ConfigProvider } from '@nutui/nutui-react'

const Demo2 = () => {
  const customTheme = {
    nutuiCountupWidth: '24px',
    nutuiCountupBgColor: `var(--nutui-color-primary)`,
    nutuiCountupColor: `#fff`,
    nutuiCountupLrMargin: `1px`,
    nutuiCountupSeparatorColor: `var(--nutui-color-primary)`,
  }
  const [value, setEndNumer] = useState('1570.99')
  useEffect(() => {
    setInterval(() => {
      setEndNumer(
        `${Math.floor(Math.random() * 999999)}.${Math.floor(
          Math.random() * 89 + 10
        )}`
      )
    }, 3000)
  }, [])
  return (
    <Cell
      title={
        <ConfigProvider theme={customTheme}>
          <AnimatingNumbers.CountUp value={value} duration={1.2} length={6} />
        </ConfigProvider>
      }
    />
  )
}
export default Demo2
