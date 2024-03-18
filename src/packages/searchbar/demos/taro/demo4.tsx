import React, { useState } from 'react';
import { SearchBar, Toast } from '@nutui/nutui-react-taro';

const [show, SetShow] = useState(false)
const toastShow = () => {
  SetShow(true)
}

const Demo4 = () => {
  return <>
    <SearchBar left="文本" right="测试" onSearch={() => toastShow()} />
    <Toast
      type="text"
      visible={show}
      content="search callback"
      onClose={() => {
        SetShow(false)
      }}
    />
  </>
}
export default Demo4;