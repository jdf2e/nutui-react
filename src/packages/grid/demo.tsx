import React from 'react'
import { Dongdong, My } from '@nutui/icons-react'
import Avatar from '../avatar'
import { Grid } from './grid'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import Image from '../image'

interface T {
  basic: string
  text: string
  columns: string
  square: string
  gutter: string
  reverse: string
  horizontal: string
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
      gutter: '格子间距',
      reverse: '内容翻转',
      horizontal: '内容横向',
      iconStyle: '图标颜色/大小',
      customContent: '自定义内容',
      event: '点击子项事件',
    },
    'zh-TW': {
      basic: '基本用法',
      text: '文字',
      columns: '自定義列數',
      square: '正方形格子',
      gutter: '格子間距',
      reverse: '內容翻轉',
      horizontal: '內容橫向',
      iconStyle: '圖標顏色/大小',
      customContent: '自定義內容',
      event: '點擊子項事件',
    },
    'en-US': {
      basic: 'Basic Usage',
      text: 'text',
      columns: 'Column Num',
      square: 'Square',
      gutter: 'Gutter',
      reverse: 'Reverse',
      horizontal: 'Horizontal',
      iconStyle: 'Icon Style',
      customContent: 'Custom Content',
      event: 'Grid Item Click',
    },
  })

  const handleClick = () => {
    Toast.text('点击了第几个')
  }

  const onClick = (item: any, index: number) => {
    Toast.text(`点击了${item.text}，第${index}个`)
  }

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Grid>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.columns}</h2>
        <Grid columns={3}>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.square}</h2>
        <Grid columns={3} square>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.gutter}</h2>
        <Grid gutter={3}>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.reverse}</h2>
        <Grid reverse>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.horizontal}</h2>
        <Grid direction="horizontal">
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.iconStyle}</h2>
        <Grid columns="3">
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item
            icon={<Dongdong width={40} height={40} color="#478EF2" />}
            text={translated.text}
          />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>

        <h2>{translated.customContent}</h2>
        <Grid border={false}>
          <Grid.Item icon={<Dongdong />} text={<span>More</span>} />
          <Grid.Item
            text={
              <Avatar
                className="demo-avatar"
                icon={<My color="#fff" />}
                bgColor="#FA2C19"
              />
            }
            onClick={handleClick}
          />
          <Grid.Item
            icon={
              <Avatar
                className="demo-avatar"
                icon={<My color="#fff" />}
                bgColor="#FA2C19"
              />
            }
          />
          <Grid.Item>
            <Avatar
              size="large"
              icon={
                <Image src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
              }
            />
          </Grid.Item>
        </Grid>

        <h2>{translated.event}</h2>
        <Grid direction="horizontal" onClick={onClick}>
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
          <Grid.Item icon={<Dongdong />} text={translated.text} />
        </Grid>
      </div>
    </>
  )
}

export default GridDemo
