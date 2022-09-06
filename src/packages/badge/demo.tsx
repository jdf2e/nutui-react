import React from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Badge } from './badge'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import Avatar from '@/packages/avatar'

interface T {
  '8ab98966': string
  '1e7a2282': string
  '781b07fd': string
  '1c730245': string
  '915d7b01': string
  f1089312: string
}
const BadgeDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
    },
    'zh-TW': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
    },
    'en-US': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
    },
  })

  return (
    <>
      <div className="demo">
        <h2>{translated['8ab98966']}</h2>
        <CellGroup>
          <Cell>
            <Badge value={8}>
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value={76}>
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value="NEW">
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge dot>
              <Avatar icon="my" shape="square" />
            </Badge>
          </Cell>
        </CellGroup>

        <h2>{translated['1e7a2282']}</h2>
        <CellGroup>
          <Cell>
            <Badge value={200} max={9}>
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value={200} max={20}>
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value={200} max={99}>
              <Avatar icon="my" shape="square" />
            </Badge>
          </Cell>
        </CellGroup>

        <h2>{translated['781b07fd']}</h2>
        <CellGroup>
          <Cell>
            <Badge
              value={8}
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge
              value={76}
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge
              value="NEW"
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge
              dot
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon="my" shape="square" />
            </Badge>
          </Cell>
        </CellGroup>

        <h2>{translated['1c730245']}</h2>
        <CellGroup>
          <Cell>
            <Badge icons="checklist">
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge icons="link">
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge icons="download">
              <Avatar icon="my" shape="square" />
            </Badge>
          </Cell>
        </CellGroup>

        <h2>{translated['915d7b01']}</h2>
        <CellGroup>
          <Cell>
            <Badge value={8} top="5" right="5">
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value={76} top="10" right="10">
              <Avatar icon="my" shape="square" />
            </Badge>
            <Badge value="NEW">
              <Avatar icon="my" shape="square" />
            </Badge>
          </Cell>
        </CellGroup>

        <h2>{translated.f1089312}</h2>
        <CellGroup>
          <Cell>
            <Badge value={8} />
            <Badge value={76} />
            <Badge value="NEW" />
          </Cell>
        </CellGroup>
      </div>
    </>
  )
}

export default BadgeDemo
