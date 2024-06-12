import React, { useState } from 'react'
import { Text, ScrollView } from '@tarojs/components'
import { Popup, Cell } from '@nutui/nutui-react-taro'

const Demo6 = () => {
  const [scrollPenetration, setScrollPenetration] = useState(false)

  return (
    <>
      <Cell
        title="禁止滚动穿透"
        onClick={() => {
          setScrollPenetration(true)
        }}
      />
      <Popup visible={scrollPenetration} position="bottom" lockScroll>
        <ScrollView scrollY style={{ height: '200px' }}>
          {Array.from({ length: 200 })
            .fill('')
            .map((_, i) => (
              <Text key={i}>禁止滚动穿透-{i}</Text>
            ))}
        </ScrollView>
      </Popup>
    </>
  )
}
export default Demo6
