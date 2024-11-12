import React, { useState } from 'react'
import { Cell, Indicator } from '@nutui/nutui-react'

const Demo1 = () => {
  const [current, setCurrent] = useState(0)
  // useEffect(() => {
  //   setTimeout(() => {
  //     setCurrent(current + 1 >= 3 ? 0 : current + 1)
  //   }, 1000)
  // })
  return (
    <>
      <Cell>
        <Indicator total={3} current={0} />
      </Cell>
      <Cell>
        <Indicator total={3} current={current} type="line" />
      </Cell>
      <Cell>
        <Indicator
          total={3}
          current={current}
          type="line"
          direction="vertical"
        />
      </Cell>
      <Cell>
        <Indicator total={3} current={0} color="white" />
      </Cell>
      <Cell>
        <Indicator total={3} current={0} type="line" color="white" />
      </Cell>
      <Cell>
        <Indicator total={3} current={0} color="white" direction="vertical" />
      </Cell>
      <Cell>
        <Indicator
          total={3}
          current={0}
          type="line"
          color="white"
          direction="vertical"
        />
      </Cell>
      <Cell>
        <Indicator total={3} current={1} />
      </Cell>
      <Cell>
        <Indicator total={3} current={2} />
      </Cell>
    </>
  )
}
export default Demo1
