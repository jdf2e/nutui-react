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
        title="禁止滚动穿透"
        position="bottom"
        lockScroll
      >
        <ScrollView scrollY style={{ height: '300px' }}>
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
