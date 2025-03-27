import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react'
import { Location, Service, Notice } from '@nutui/icons-react'

const Demo3 = () => {
  const [visible, setVisible] = useState(false)
  const list = [
    {
      key: 'key1',
      name: <Service />,
      description: 'option1',
    },
    {
      key: 'key2',
      name: <Notice />,
      description: 'option2',
    },
    {
      key: 'key3',
      name: <Location />,
      description: 'option3',
    },
  ]
  const contStyle = {
    width: '155px',
    display: 'flex',
  } as any
  const itemStyle = {
    marginTop: '10px',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    flex: 1,
  } as any
  const descStyle = {
    width: '50px',
    textAlign: 'center',
  } as any

  return (
    <>
      <Popover
        style={{
          '--nutui-popover-text-color': '#ff0f23',
          '--nutui-popover-content-background-color': '#FFEBF1',
        }}
        visible={visible}
        onClick={() => {
          visible ? setVisible(false) : setVisible(true)
        }}
        location="right"
      >
        <Button type="primary">自定义内容+颜色</Button>
        {visible && (
          <div style={contStyle}>
            {list.map((item: any) => {
              return (
                <div key={item.key} style={itemStyle}>
                  {item.name}
                  <div style={descStyle}>{item.description}</div>
                </div>
              )
            })}
          </div>
        )}
      </Popover>
    </>
  )
}

export default Demo3
