import React, { useState } from 'react'
import { Popup, Cell } from '@nutui/nutui-react-taro'
import { ScrollView } from '@tarojs/components'

const Demo8 = () => {
  const [scrollPenetration, setScrollPenetration] = useState(false)

  return (
    <>
      <Cell
        title="禁止滚动穿透"
        onClick={() => {
          setScrollPenetration(true)
        }}
      />
      <Popup
        visible={scrollPenetration}
        position="bottom"
        lockScroll
        onOpen={() => {
          // @ts-ignore
          Taro.getEnv().toLowerCase() === 'weapp' &&
            wx.setPageStyle({
              complete: console.log,
              style: { overflow: 'hidden' },
            })
        }}
      >
        <ScrollView scrollY style={{ height: '200px' }}>
          {Array.from({ length: 200 })
            .fill('')
            .map((_, i) => (
              <Cell key={i}>禁止滚动穿透-{i}</Cell>
            ))}
        </ScrollView>
      </Popup>
    </>
  )
}
export default Demo8
