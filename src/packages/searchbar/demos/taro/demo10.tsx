import React, { useState } from 'react'
import { SearchBar, Button } from '@nutui/nutui-react-taro'
import { Photograph, Category } from '@nutui/icons-react-taro'

const Demo = () => {
  const [value, setValue] = useState('醋溜土豆丝')
  const [value1, setValue1] = useState('西红柿,铁皮')
  return (
    <>
      <SearchBar
        backable
        leftIn={null}
        value={value1}
        tag
        onItemClick={(val: string) => {
          console.log('click', val)
          const arr = value1.split(',')
          const newArr = arr.filter((item: string) => item !== val)
          const newVal = newArr.length > 1 ? newArr.join(',') : newArr.join('')
          setValue1(newVal)
        }}
        onFocus={(val: string) => {
          console.log('focus value', val)
          setValue1(val.split(',').join(''))
        }}
        onChange={(val) => {
          console.log('onChange', val)
          setValue1(val)
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
        // autoFocus
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
export default Demo
