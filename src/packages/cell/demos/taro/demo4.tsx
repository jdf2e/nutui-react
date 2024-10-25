import { BadgePercent } from '@nutui/icons-react'
import { Cell, Image, Radio, Switch } from '@nutui/nutui-react-taro'
import React, { useState } from 'react'

const App = () => {
  const [radioChecked, setRadioChecked] = useState(false)
  const handleRadioClick = () => {
    setRadioChecked((v) => !v)
  }
  return (
    <Cell.Group>
      <Cell align="center" title="Switch" extra={<Switch defaultChecked />} />
      <Cell
        align="center"
        title="BadgePercent"
        extra={<BadgePercent color="red" />}
      />
      <Cell
        align="center"
        title="Image"
        extra={
          <Image
            width={20}
            height={20}
            src="https://img12.360buyimg.com/imagetools/jfs/t1/201375/12/18248/5407/61b0715dE35f02aa9/55eff706b7755414.png"
          />
        }
      />
      <Cell
        align="center"
        title="Radio"
        onClick={handleRadioClick}
        extra={<Radio checked={radioChecked} />}
      />
      <Cell align="center" title="Radio" extra={<Radio checked />} />
    </Cell.Group>
  )
}
export default App
