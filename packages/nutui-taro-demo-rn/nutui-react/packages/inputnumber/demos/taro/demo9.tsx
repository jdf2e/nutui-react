import React, { useState } from 'react'
import { Cell, InputNumber, Toast } from '@nutui/nutui-react-taro'
import ConfigProvider from '@/packages/configprovider'

const Demo9 = () => {
  const customTheme3 = {
    nutuiInputnumberInputWidth: '60px',
  }
  const [toastType, SetToastType] = useState('text')
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')

  return (
    <>
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
          />
        </ConfigProvider>
      </Cell>
      <Cell>
        <ConfigProvider theme={customTheme3}>
          <InputNumber
            className="format-width"
            defaultValue={100}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
          />
        </ConfigProvider>
      </Cell>
      <Toast
        type={toastType}
        visible={show}
        content={toastMsg}
        onClose={() => {
          SetShow(false)
        }}
      />
    </>
  )
}
export default Demo9
