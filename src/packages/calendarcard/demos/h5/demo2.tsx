import React, { useState } from 'react'
import {
  Space,
  Tag,
  CalendarCard,
  type CalendarCardValue,
} from '@nutui/nutui-react'

const Demo2 = () => {
  const [val, setVal] = useState(() => {
    // return [];
    return [new Date('2023-01-01'), new Date('2023-01-03')]
  })
  const onChange = (val: CalendarCardValue) => {
    setVal(val as Date[])
    console.log(val)
  }
  return (
    <>
      <Space wrap>
        {val.map((d) => {
          return (
            <Tag key={d.getTime()} type="info">
              {`${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`}
            </Tag>
          )
        })}
      </Space>
      <CalendarCard type="multiple" value={val} onChange={onChange} />
    </>
  )
}
export default Demo2
