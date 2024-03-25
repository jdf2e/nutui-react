import React from 'react'
import { Cell, Button } from '@nutui/nutui-react-taro'
import { ArrowRight, User } from '@nutui/icons-react-taro'
import { redirectTo, navigateTo } from '@tarojs/taro'

const Demo6 = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: string
  ) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <>
      <Cell.Group>
        <Cell
          className="nutui-cell-clickable"
          title="链接"
          align="center"
          extra={<ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title="URL 跳转"
          extra={
            <>
              <span style={{ marginRight: '5px' }}>/pages/index/index</span>
              <ArrowRight />
            </>
          }
          align="center"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => {
            onJumpclick(event, '/pages/index/index')
          }}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
              <span style={{ fontWeight: '500' }}>我是标题</span>
              <span
                style={{
                  color: '#8C8C8C',
                  fontSize: '10px',
                  marginLeft: '5px',
                  lineHeight: 1.5,
                }}
              >
                我是描述
              </span>
            </div>
          }
          extra={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              More
              <ArrowRight size={12} style={{ marginLeft: '5px' }} />
            </div>
          }
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>自定义内容</div>
        </Cell>
        <Cell
          align="center"
          title={
            <div
              style={{
                color: '#8C8C8C',
                fontSize: '12px',
              }}
            >
              我是描述
            </div>
          }
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <User style={{ marginRight: '5px' }} /> 我是标题
            </div>
          }
          extra={<ArrowRight />}
        />
        <Cell>
          <div style={{ minHeight: '50px' }}>自定义内容</div>
        </Cell>
        <Cell
          align="center"
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <div
              style={{ display: 'flex', alignItems: 'center', color: 'blue' }}
            >
              我是标题
            </div>
          }
        />
        <Cell>
          <div style={{ color: '#26bf26' }}>自定义内容</div>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default Demo6
