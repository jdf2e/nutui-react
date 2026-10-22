import React from 'react'
import { ArrowLeft, Photograph, More, Close, Star } from '@nutui/icons-react'
import { SearchBar, Cell } from '@nutui/nutui-react'

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
