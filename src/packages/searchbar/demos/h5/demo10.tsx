import React, { useState } from 'react'
import { Category, Photograph } from '@nutui/icons-react'
import { SearchBar } from '../../searchbar'
import Button from '@/packages/button'

const Demo1 = () => {
  const [dvalue, setDvalue] = useState('西红柿,铁皮')
  const [value, setValue] = useState('西红柿')
  return (
    <>
      <SearchBar
        backable
        leftIn={null}
        defaultValue={dvalue}
        onItemClick={(value: string) => {
          console.log('click', value)
          setDvalue('黄瓜')
        }}
        rightIn={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Photograph color="#505259" />
          </div>
        }
        right={<Category />}
      />
      <SearchBar
        backable
        leftIn={null}
        value={value}
        onChange={(val) => {
          setValue(val)
        }}
        autoFocus
        rightIn={
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Photograph color="#505259" style={{ marginRight: '12px' }} />
            <Button type="primary" size="mini">
              搜索
            </Button>
          </div>
        }
      />
    </>
  )
}
export default Demo1
