import React from 'react'
import { Badge } from './badge'
import Cell from '@/packages/cell'
import CellGroup from '@/packages/cellgroup'
import Avatar from '@/packages/avatar'

const BadgeDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>默认用法</h2>
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

        <h2>最大值</h2>
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

        <h2>自定义颜色</h2>
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

        <h2>自定义徽标内容</h2>
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

        <h2>自定义位置</h2>
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

        <h2>独立展示</h2>
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
