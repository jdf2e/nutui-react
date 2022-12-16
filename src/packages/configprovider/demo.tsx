import React from 'react'
import { ConfigProvider } from './configprovider'
import TextArea from '../textarea'
import Button from '../button'
import CellGroup from '../cellgroup'
import Cell from '../cell'
import Rate from '../rate'
import enUS from '../../locales/en-US'

const darkTheme = {
  'nutui-brand-color': 'green',
  'nutui-brand-color-start': 'green',
  'nutui-brand-color-end': 'green',
}
const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
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
