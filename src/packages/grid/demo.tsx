import React from 'react'
import { Image as ImageIcon } from '@nutui/icons-react'
import { Grid } from './grid'
import { useTranslate } from '../../sites/assets/locale'
import Toast from '../toast'
import Image from '../image'

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
  clicked: (text: string, index: number) => string
}

const GridDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
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
      clicked: (text, index) => {
        return `点击了${text}，第${index}个`
      },
    },
    'zh-TW': {
      basic: '基础用法',
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
      clicked: (text, index) => {
        return `点击了${text}，第${index}个`
      },
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
      clicked: (text, index) => {
        return `clicked ${text}，index ${index}`
      },
    },
  })

  const onClick = (item: any, index: number) => {
    Toast.show(translated.clicked(item.text, index))
  }
  const imgSrc =
    'https://m.360buyimg.com/babel/jfs/t1/36973/29/11270/120042/5cf1fe3cEac2b5898/10c2722d0cc0bfa7.png'
  return (
    <>
      <div className="demo" style={{ marginBottom: '100px' }}>
        <h2>{translated.basic}</h2>
        <Grid>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.columns}</h2>
        <Grid columns={3}>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.square}</h2>
        <Grid columns={3} square>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.gap}</h2>
        <Grid gap={3}>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.reverse}</h2>
        <Grid reverse>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.horizontal}</h2>
        <Grid direction="horizontal">
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.reverseHorizontal}</h2>
        <Grid reverse direction="horizontal">
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>

        <h2>{translated.iconStyle}</h2>
        <Grid columns="3">
          <Grid.Item text={translated.text}>
            <ImageIcon width={15} height={15} />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon color="red" />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon width={30} height={30} color="#478EF2" />
          </Grid.Item>
        </Grid>

        <h2>{translated.customContent}</h2>
        <Grid columns={3} square>
          <Grid.Item>
            <Image src={imgSrc} width="100%" height="100%" />
          </Grid.Item>
          <Grid.Item>
            <Image src={imgSrc} width="100%" height="100%" />
          </Grid.Item>
          <Grid.Item>
            <Image src={imgSrc} width="100%" height="100%" />
          </Grid.Item>
        </Grid>

        <h2>{translated.event}</h2>
        <Grid direction="horizontal" onClick={onClick}>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
          <Grid.Item text={translated.text}>
            <ImageIcon />
          </Grid.Item>
        </Grid>
      </div>
    </>
  )
}

export default GridDemo
