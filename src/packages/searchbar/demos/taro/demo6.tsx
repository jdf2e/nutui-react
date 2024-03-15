import React from "react";
import { SearchBar, PopOver } from '@nutui/nutui-react-taro';
import {  ArrowDown } from '@nutui/icons-react-taro'

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
            <ArrowDown size={8}/>
          </div>
        </PopOver>
      }
    />
  </>
}
export default Demo6;