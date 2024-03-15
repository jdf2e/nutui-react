import React from "react";
import { SearchBar, PopOver } from '@nutui/nutui-react';
import {  ArrowDown } from '@nutui/icons-react'

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