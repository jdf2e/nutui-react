import React, { useState } from 'react'
import { Popover, Button } from '@nutui/nutui-react-taro'
import {
  Home,
  Cart,
  Location,
  Service,
  Notice,
  Category,
} from '@nutui/icons-react-taro'

const Demo3 = () => {
  const [customized, setCustomized] = useState(false)
  const selfContent = [
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
    {
      key: 'key4',
      name: <Category />,
      description: 'option4',
    },
    {
      key: 'key5',
      name: <Cart />,
      description: 'option5',
    },
    {
      key: 'key6',
      name: <Home />,
      description: 'option6',
    },
  ]

  const selfContentStyle = {
    width: '195px',
    display: 'flex',
    flexWrap: 'wrap',
  } as any
  const selfContentItem = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as any
  const selfContentDesc = {
    marginTop: '5px',
    width: '60px',
    fontSize: '10px',
    textAlign: 'center',
  } as any

  return (
    <>
      <Popover
        visible={customized}
        onClick={() => {
          customized ? setCustomized(false) : setCustomized(true)
        }}
        location="top-start"
        className="customClass"
      >
        <Button type="primary" shape="square">
          自定义内容
        </Button>
        {customized ? (
          <div className="self-content" style={selfContentStyle}>
            {selfContent.map((item: any) => {
              return (
                <div
                  className="self-content-item"
                  key={item.key}
                  style={selfContentItem}
                >
                  {item.name ? item.name : null}
                  <div
                    className="self-content-description"
                    style={selfContentDesc}
                  >
                    {item.description}
                  </div>
                </div>
              )
            })}
          </div>
        ) : null}
      </Popover>
    </>
  )
}

export default Demo3
