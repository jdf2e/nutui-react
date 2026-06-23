import React, { useState } from 'react'
import { Popover, Button, Space } from '@nutui/nutui-react-taro'
import { Tips, Close } from '@nutui/icons-react-taro'

const Demo = () => {
  const [statusVisible, setStatusVisible] = useState(false)
  const [descriptionVisible, setDescriptionVisible] = useState(false)
  const [lightVisible, setLightVisible] = useState(false)
  const [autoVisible, setAutoVisible] = useState(false)
  const statusList = [
    {
      key: 'key1',
      name: '主要文案内容',
      icon: <Tips />,
      action: {
        icon: <Close />,
        onClick: (e: any) => {
          e.stopPropagation()
          setStatusVisible(false)
        },
      },
    },
  ]
  const descriptionList = [
    {
      key: 'key1',
      name: '主要文案内容',
    },
  ]
  return (
    <Space>
      <Popover
        visible={statusVisible}
        type="status"
        list={statusList}
        location="bottom-left"
        onClick={() => {
          statusVisible ? setStatusVisible(false) : setStatusVisible(true)
        }}
        onOpen={() => {
          console.log('打开菜单时触发')
        }}
        onClose={() => {
          console.log('关闭菜单时触发')
        }}
      >
        <Button type="primary">状态型</Button>
      </Popover>
      <Popover
        visible={descriptionVisible}
        type="description"
        list={descriptionList}
        location="bottom-left"
        onClick={() => {
          descriptionVisible
            ? setDescriptionVisible(false)
            : setDescriptionVisible(true)
        }}
      >
        <Button type="primary">说明型</Button>
      </Popover>
      <Popover
        visible={lightVisible}
        type="status"
        theme="light"
        list={statusList}
        location="bottom-left"
        onClick={() => {
          lightVisible ? setLightVisible(false) : setLightVisible(true)
        }}
      >
        <Button type="primary">明亮风格</Button>
      </Popover>
      <Popover
        autoShow
        duration={5000}
        visible={autoVisible}
        type="description"
        list={descriptionList}
        location="bottom-left"
        onOpen={() => setAutoVisible(true)}
        onClose={() => setAutoVisible(false)}
        onClick={() => {
          autoVisible ? setAutoVisible(false) : setAutoVisible(true)
        }}
      >
        <Button type="primary">自动弹出</Button>
      </Popover>
    </Space>
  )
}

export default Demo
