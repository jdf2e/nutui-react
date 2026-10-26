import React from 'react'
import { SearchBar, Cell } from '@nutui/nutui-react-taro'
import {
  ArrowLeft,
  Close,
  More,
  Photograph,
  Star,
} from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <>
      <Cell>
        <SearchBar
          left={
            <>
              <ArrowLeft />
              <Close />
            </>
          }
          right={
            <>
              <Star
                style={{
                  color: 'var(--nutui-color-primary)',
                }}
              />
              <More />
            </>
          }
          rightIn={
            <Photograph
              onClick={() => {
                console.log('Photograph right in')
              }}
            />
          }
        />
      </Cell>
    </>
  )
}
export default Demo5
