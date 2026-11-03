import React from 'react'
import { Scan } from '@nutui/icons-react'
import { SearchBar, Cell } from '@nutui/nutui-react'

const Demo = () => {
  return (
    <>
      <Cell style={{ flexDirection: 'column' }}>
        <SearchBar
          placeholder="使用inputProps扩展属性"
          inputProps={{
            autoComplete: 'off',
            autoCapitalize: 'none',
            spellCheck: false,
          }}
        />
        <SearchBar
          leftIn={<Scan />}
          placeholder="自定义input类型和属性"
          inputProps={{
            type: 'search',
            autoComplete: 'on',
          }}
        />
        <SearchBar
          placeholder="设置自定义属性"
          inputProps={{
            'aria-label': '搜索输入框',
          }}
        />
      </Cell>
    </>
  )
}
export default Demo
