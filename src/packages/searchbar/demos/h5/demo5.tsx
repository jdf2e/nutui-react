import React from 'react'
import { ArrowLeft, Photograph, More, Close, Star } from '@nutui/icons-react'
import { SearchBar } from '../../searchbar'

const Demo5 = () => {
  return (
    <>
      <SearchBar
        left={
          <>
            <ArrowLeft width={20} height={20} />
            <Close width={20} height={20} />
          </>
        }
        right={
          <>
            <Star
              width={20}
              height={20}
              style={{
                color: 'var(--nutui-color-primary)',
              }}
            />
            <More width={20} height={20} />
          </>
        }
        rightIn={
          <Photograph
            width={16}
            height={16}
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
