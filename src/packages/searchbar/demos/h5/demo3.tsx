import React from "react";
import { SearchBar, ConfigProvider } from '@nutui/nutui-react';

const Demo3 = () => {
  return <>
    <ConfigProvider
      theme={{
        nutuiSearchbarBackground: 'var(--nutui-color-primary)',
        nutuiSearchbarInputBackground: '#eee',
        nutuiSearchbarInputTextAlign: 'right',
      }}
    >
      <SearchBar onSearch={(value) => Toast.text(value)} />
    </ConfigProvider>
  </>
}
export default Demo3;