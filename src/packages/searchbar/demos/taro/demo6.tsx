import React, { useState } from 'react'
import { View } from '@tarojs/components'
import { SearchBar, Popover } from '@nutui/nutui-react-taro'
import { ArrowDown } from '@nutui/icons-react-taro'

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
            <View
              style={{
                fontSize: '12px',
                width: '50px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              更多
              <ArrowDown size={12} style={{ marginLeft: '5px' }} />
            </View>
          </Popover>
        }
      />
    </>
  )
}
export default Demo6
