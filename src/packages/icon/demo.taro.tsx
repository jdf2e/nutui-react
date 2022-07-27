import React from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Icon } from './icon'
import Cell from '../cell'
import CellGroup from '../cellgroup'
import icons from '@/styles/font/iconfont.json'

interface T {
  '84aa6bce': string
  dab8a74f: string
  '52c15454': string
  '7aeb5407': string
  f2e6c6d6: string
}

const IconDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
      f2e6c6d6: '基础图标',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
      f2e6c6d6: '基礎圖示',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      dab8a74f: 'Image link',
      '52c15454': 'Icon color',
      '7aeb5407': 'Icon size',
      f2e6c6d6: 'Base Icon',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Icon name="dongdong" />
          <Icon name="JD" />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <Icon
            size="40"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <Icon name="dongdong" color="#fa2c19" />
          <Icon name="dongdong" color="#64b578" />
          <Icon name="JD" color="#fa2c19" />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell>
          <Icon name="dongdong" />
          <Icon name="dongdong" size="24" />
          <Icon name="dongdong" size="16" />
        </Cell>
        <h2>{translated.f2e6c6d6}</h2>
        <CellGroup>
          {icons.glyphs.map((item) => {
            return (
              <Cell key={item.font_class}>
                <Icon name={item.font_class} />
                <span>{item.name}</span>
              </Cell>
            )
          })}
        </CellGroup>
      </div>
    </>
  )
}

export default IconDemo
