import React from 'react'
import { Cell, InputNumber } from '@nutui/nutui-react'
import ConfigProvider from '@/packages/configprovider'

const Demo11 = () => {
  const customTheme3 = {
    nutuiInputnumberInputWidth: '60px',
  }
  return (
    <>
      <Cell>
        <InputNumber defaultValue={1} allowEmpty ariaLabel="商品数量输入框" />
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={1000}
            min={10}
            max={15020}
            formatter={(value) =>
              `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
            ariaLabel="金额输入框"
          />
        </ConfigProvider>
      </Cell>
    </>
  )
}
export default Demo11
