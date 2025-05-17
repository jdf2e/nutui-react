import React, { useState } from 'react'
import { ArrowDown } from '@nutui/icons-react'
import { SearchBar, Popover } from '@nutui/nutui-react'

const Demo6 = () => {
  const itemList = [
    { name: 'option1' },
    { name: 'option2' },
    { name: 'option3' },
  ]
  const [lightTheme, setLightTheme] = useState(false)
  return (
    <>
      <SearchBar
        leftIn={
          <Popover
            visible={lightTheme}
            onClick={() => {
              lightTheme ? setLightTheme(false) : setLightTheme(true)
            }}
            list={itemList}
          >
            <div style={{ fontSize: '12px', width: '50px', display: 'flex' }}>
              更多
              <ArrowDown />
            </div>
          </Popover>
        }
      />
    </>
  )
}
export default Demo6
