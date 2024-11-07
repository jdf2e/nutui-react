import React from 'react'
import { SearchBar } from '@nutui/nutui-react-taro'
import {
  ArrowLeft,
  Photograph,
  More,
  Close,
  Star,
} from '@nutui/icons-react-taro'

const Demo5 = () => {
  return (
    <>
      <SearchBar
        left={
          <>
            <ArrowLeft size={20} />
            <Close size={20} />
          </>
        }
        right={
          <>
            <Star
              size={20}
              style={{
                color: 'var(--nutui-color-primary)',
              }}
            />
            <More size={20} />
          </>
        }
        rightIn={
          <Photograph
            size={16}
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
