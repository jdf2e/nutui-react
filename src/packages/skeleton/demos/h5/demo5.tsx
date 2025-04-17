import { Avatar, Cell, Image, Skeleton, Switch } from '@nutui/nutui-react'
import React, { useState } from 'react'

const Demo5 = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <Cell>
      <div style={{ width: '100%' }}>
        <Switch
          onChange={(value, event) => changeStatus(value, event)}
          style={{ marginBottom: '8px' }}
        />

        <div style={{ display: 'flex' }}>
          <Skeleton visible={checked} width={50} height={50} shape="circle">
            <Avatar
              className="nut-skeleton-content-avatar"
              size="50"
              icon={
                <Image
                  loading={false}
                  src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
                />
              }
            />
          </Skeleton>
          <div style={{ flexGrow: 1, marginLeft: 8 }}>
            <Skeleton
              visible={checked}
              size="large"
              width="30%"
              style={{ marginBottom: 8 }}
            >
              <span>NutUI-React</span>
            </Skeleton>
            <Skeleton visible={checked} size="small" rows={2}>
              <div>
                一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
              </div>
            </Skeleton>
          </div>
        </div>
      </div>
    </Cell>
  )
}
export default Demo5
