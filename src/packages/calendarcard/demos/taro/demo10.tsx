import React, { useState } from 'react'
import { View } from '@tarojs/components'
import {
  Cell,
  Popup,
  Button,
  CalendarCard,
  CalendarCardValue,
} from '@nutui/nutui-react-taro'

const Demo10 = () => {
  const [visible, setVisible] = useState(false)
  const [date, setDate] = useState<Date | null>(null)
  return (
    <>
      <Cell
        title="点击选择日期"
        description={String(date)}
        onClick={() => setVisible(true)}
      />
      <Popup
        title="选择日期"
        visible={visible}
        position="bottom"
        closeable
        onClose={() => setVisible(false)}
      >
        <CalendarCard
          value={date}
          onChange={(d: CalendarCardValue) => setDate(d as Date)}
        />
        <View style={{ padding: 10 }}>
          <Button block type="danger" onClick={() => setVisible(false)}>
            确定
          </Button>
        </View>
      </Popup>
    </>
  )
}
export default Demo10
