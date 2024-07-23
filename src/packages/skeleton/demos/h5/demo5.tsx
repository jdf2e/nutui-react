import { Avatar, Image, Skeleton, Switch } from '@nutui/nutui-react'
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
    <div style={{ width: '100%' }}>
      <Switch
        onChange={(value, event) => changeStatus(value, event)}
        style={{ display: 'flex', marginBottom: '8px' }}
      />
      <Skeleton title animated avatar rows={3} visible={checked}>
        <div className="nut-skeleton-content">
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
          <div>
            <span>NutUI-React</span>
            <div>
              一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
            </div>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}
export default Demo5
