import React from 'react'
import {
  ConfigProvider,
  TextArea,
  Button,
  CellGroup,
  Cell,
  Rate,
} from '@/packages/nutui.react.taro'
import enUS from '@/locales/en-US'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

const darkTheme = {
  nutuiBrandColor: 'green',
  nutuiBrandColorStart: 'green',
  nutuiBrandColorEnd: 'green',
}
const ConfigProviderDemo = () => {
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>Textarea 默认</h2>
        <ConfigProvider>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>Textarea 英文</h2>
        <ConfigProvider locale={enUS}>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>默认主题</h2>
        <ConfigProvider>
          <CellGroup>
            <Cell>
              <Rate modelValue={3} />
            </Cell>
            <Cell>
              <Button type="primary" size="large">
                提交
              </Button>
            </Cell>
          </CellGroup>
        </ConfigProvider>
        <h2>定制主题</h2>
        <ConfigProvider theme={darkTheme}>
          <CellGroup>
            <Cell>
              <Rate modelValue={3} />
            </Cell>
            <Cell>
              <Button type="primary" size="large">
                提交
              </Button>
            </Cell>
          </CellGroup>
        </ConfigProvider>
      </div>
    </>
  )
}

export default ConfigProviderDemo
