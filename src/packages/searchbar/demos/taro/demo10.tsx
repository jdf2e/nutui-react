import React, { useState } from 'react'
import { SearchBar, Button } from '@nutui/nutui-react-taro'
import { Photograph, Category } from '@nutui/icons-react-taro'

const Demo = () => {
  const [dvalue, setDvalue] = useState('西红柿,铁皮')
  const [value, setValue] = useState('西红柿')
  const [value1, setValue1] = useState('')
  return (
    <>
      <SearchBar
        backable
        leftIn={null}
        defaultValue={dvalue}
        value={value1}
        onItemClick={(value: string) => {
          console.log('click', value)
          if (dvalue) {
            const arr = dvalue.split(',')
            const newArr = arr.filter((item: string) => item !== value)
            const newVal = newArr.length > 1 ? newArr.join(',') : newArr[0]
            setValue1(newVal)
            setDvalue(newVal)
          }
        }}
        onFocus={() => {
          console.log('focus dvalue', dvalue)
          if (dvalue) {
            setValue1(dvalue)
            setDvalue('')
          }
        }}
        onChange={(val) => {
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
export default Demo
