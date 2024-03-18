import React, { useState } from 'react'
import { FixedNav } from '@nutui/nutui-react-taro'
import { Retweet } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const [visible, setVisible] = useState(false)
  const change = (value: boolean) => {
    setVisible(value)
  }
  const selected = (
    item: any,
    event: React.MouseEvent<Element, MouseEvent>
  ) => {
    console.log(item, event)
  }
  return (
    <>
      <FixedNav
        position={{ top: '280px' }}
        type="left"
        visible={visible}
        onChange={change}
        onSelect={selected}
        content={
          <>
            <Retweet color="#fff" />
            <span className="text">{visible ? '自定义开' : '自定义关'}</span>
          </>
        }
      >
        <ul className="nut-fixednav-list">
          <li className="nut-fixednav-list-item">1</li>
          <li className="nut-fixednav-list-item">2</li>
          <li className="nut-fixednav-list-item">3</li>
          <li className="nut-fixednav-list-item">4</li>
          <li className="nut-fixednav-list-item">5</li>
        </ul>
      </FixedNav>
    </>
  )
}
export default Demo4
