import { Avatar, Image, Skeleton, Switch } from '@nutui/nutui-react-taro'
import React, { useState } from 'react'

type Props = {
  description: string
  log: string
}
const Demo5 = (props: Props) => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (
    value: boolean,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(`${props.log}：${value}`)
    setChecked(value)
  }
  return (
    <div className="content" style={{ width: '100%' }}>
      <Switch onChange={(value, event) => changeStatus(value, event)} />
      <Skeleton title animated avatar rows={3} visible={checked}>
        <div className="nut-skeleton-content">
          <Avatar
            size="50"
            icon={
              <Image
                loading={false}
                src="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              />
            }
          />
          <div className="right-content">
            <span className="title">NutUI-React</span>
            <div className="description">{props.description}</div>
          </div>
        </div>
      </Skeleton>
    </div>
  )
}
export default Demo5
