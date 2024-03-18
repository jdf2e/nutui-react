import React, { useState } from 'react'
import { SearchBar } from '../../searchbar'
import PopOver from '../../../popover'
import { ArrowDown } from '@nutui/icons-react'

const itemList = [
  { name: 'option1' },
  { name: 'option2' },
  { name: 'option3' },
]
const [lightTheme, setLightTheme] = useState(false)

const Demo6 = () => {
  return <>
    <SearchBar
      leftIn={
        <PopOver
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
        </PopOver>
      }
    />
  </>
}
export default Demo6;