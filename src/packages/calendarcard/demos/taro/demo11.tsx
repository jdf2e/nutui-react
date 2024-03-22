import React, { useRef } from 'react'
import {
  Space,
  Button,
  CalendarCard,
  type CalendarCardRef,
} from '@nutui/nutui-react-taro'

const Demo11 = () => {
  const CalendarCardRef = useRef<CalendarCardRef>(null)
  return (
    <>
      <Space>
        <Button onClick={() => CalendarCardRef.current?.jump(1)}>+ 1</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(12)}>+ 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jump(-12)}>- 12</Button>
        <Button onClick={() => CalendarCardRef.current?.jumpTo(2023, 1)}>
          2023 01
        </Button>
      </Space>
      <CalendarCard ref={CalendarCardRef} />
    </>
  )
}
export default Demo11
