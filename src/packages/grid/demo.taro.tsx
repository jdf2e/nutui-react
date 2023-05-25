import React from 'react'
import Taro from '@tarojs/taro'
import { Dongdong, My } from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Avatar, Grid } from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  basic: string
  text: string
  columns: string
  square: string
  gap: string
  reverse: string
  horizontal: string
  reverseHorizontal: string
  iconStyle: string
  customContent: string
  event: string
}
const GridDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基本用法',
      text: '文字',
      columns: '自定义列数',
      square: '正方形格子',
      gap: '格子间距',
      reverse: '内容翻转',
      horizontal: '内容横向',
      reverseHorizontal: '内容翻转 + 横向',
      iconStyle: '图标颜色/大小',
      customContent: '自定义内容',
      event: '点击子项事件',
    },
    'zh-TW': {
      basic: '基本用法',
      text: '文字',
      columns: '自定義列數',
      square: '正方形格子',
      gap: '格子間距',
      reverse: '內容翻轉',
      horizontal: '內容橫向',
      reverseHorizontal: '內容翻轉 + 橫向',
      iconStyle: '圖標顏色/大小',
      customContent: '自定義內容',
      event: '點擊子項事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      text: 'text',
      columns: 'Column Num',
      square: 'Square',
      gap: 'Gap',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      reverseHorizontal: 'Reverse & Horizontal',
      iconStyle: 'Icon Style',
      customContent: 'Custom Content',
      event: 'Grid Item Click',
    },
  })

  const onClick = (item: any, index: number) => {
    Taro.showToast({ title: `点击了${item.text}，第${index}个` })
  }

  return (
    <>
      <Header />
      <div
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ marginBottom: '100px' }}
      >
        <h2>{translated.basic}</h2>
        <Grid>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.columns}</h2>
        <Grid columns={3}>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.square}</h2>
        <Grid columns={3} square>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.gap}</h2>
        <Grid gap={3}>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.reverse}</h2>
        <Grid reverse>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.horizontal}</h2>
        <Grid direction="horizontal">
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.reverseHorizontal}</h2>
        <Grid reverse direction="horizontal">
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>

        <h2>{translated.iconStyle}</h2>
        <Grid columns="3">
          <Grid.Item text={translated.text}>
            <Dongdong width={10} height={10} />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong color="red" />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong width={20} height={20} color="#478EF2" />
          </Grid.Item>
        </Grid>

        <h2>{translated.customContent}</h2>
        <Grid>
          <Grid.Item text={<span>More</span>}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item>
            <Avatar
              className="demo-avatar"
              icon={<My color="#fff" />}
              background="#FA2C19"
            />
          </Grid.Item>
          <Grid.Item>
            <Avatar
              size="large"
              icon={
                <img
                  width="100%"
                  height="100%"
                  alt="头像"
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
                />
              }
            />
          </Grid.Item>
        </Grid>

        <h2>{translated.event}</h2>
        <Grid direction="horizontal" onClick={onClick}>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <Dongdong />
          </Grid.Item>
        </Grid>
      </div>
    </>
  )
}

export default GridDemo
