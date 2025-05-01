import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'
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
    </>
  )
}
export default Demo5
