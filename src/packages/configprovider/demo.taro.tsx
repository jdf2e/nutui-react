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
import { useTranslate } from '@/sites/assets/locale/taro'
import Taro from '@tarojs/taro'

const darkTheme = {
  nutuiBrandColor: 'green',
  nutuiBrandColorStart: 'green',
  nutuiBrandColorEnd: 'green',
}
const ConfigProviderDemo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
      title1: 'Textarea 默认',
      title2: 'Textarea 英文',
      defaultTheme: '默认主题',
      customTheme: '定制主题',
      submit: '提交',
    },
    'zh-TW': {
      title1: '默認用法',
      title2: 'Textarea 英文',
      defaultTheme: '默認主題',
      customTheme: '定制主題',
      submit: '提交',
    },
    'en-US': {
      title1: 'Textarea default',
      title2: 'Textarea en-US',
      customTheme: 'Custom Theme',
      defaultTheme: 'Default Theme',
      submit: 'Submit',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated.title1}</h2>
        <ConfigProvider>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>{translated.title2}</h2>
        <ConfigProvider locale={enUS}>
          <TextArea disabled limitshow maxlength="20" />
        </ConfigProvider>
        <h2>{translated.defaultTheme}</h2>
        <ConfigProvider>
          <CellGroup>
            <Cell>
              <Rate modelValue={3} />
            </Cell>
            <Cell>
              <Button type="primary" size="large">
                {translated.submit}
              </Button>
            </Cell>
          </CellGroup>
        </ConfigProvider>
        <h2>{translated.customTheme}</h2>
        <ConfigProvider theme={darkTheme}>
          <CellGroup>
            <Cell>
              <Rate modelValue={3} />
            </Cell>
            <Cell>
              <Button type="primary" size="large">
                {translated.submit}
              </Button>
            </Cell>
          </CellGroup>
        </ConfigProvider>
      </div>
    </>
  )
}

export default ConfigProviderDemo
