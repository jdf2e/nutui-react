import React from 'react'
import { Cell, Button } from '@nutui/nutui-react'
import { ArrowRight, User } from '@nutui/icons-react'

const Demo6 = () => {
  const onJumpclick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    url: string
  ) => {
    const replace = false
    if (url) {
      replace ? window.location.replace(url) : (window.location.href = url)
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
              <span style={{ marginRight: '5px' }}>https://jd.com</span>
              <ArrowRight />
            </>
          }
          align="center"
          onClick={(
            event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>
          ) => onJumpclick(event, 'https://jd.com')}
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
              <ArrowRight
                width={12}
                height={12}
                style={{ marginLeft: '5px' }}
              />
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
          extra={<Button type="primary">Action</Button>}
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
        <Cell align="center" extra={<Button type="primary">Action</Button>} />
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
