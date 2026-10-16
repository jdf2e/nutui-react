import React, { useState, useEffect, CSSProperties } from 'react'
import { Cell, InfiniteLoading, pxTransform } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const sleep = (time: number): Promise<unknown> =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
const InfiniteUlStyle: CSSProperties = {
  height: pxTransform(200),
  width: '100%',
  padding: '0',
  overflowY: 'auto',
  overflowX: 'hidden',
}

const InfiniteLiStyle: CSSProperties = {
  marginTop: pxTransform(10),
  fontSize: pxTransform(14),
  color: 'rgba(100, 100, 100, 1)',
  textAlign: 'center',
}
const Demo1 = () => {
  const [defaultList, setDefaultList] = useState<string[]>([])
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    init()
  }, [])

  const loadMore = async () => {
    await sleep(2000)
    const curLen = defaultList.length
    for (let i = curLen; i < curLen + 10; i++) {
      defaultList.push(`${i}`)
    }
    if (defaultList.length >= 30) {
      setHasMore(false)
    } else {
      setDefaultList([...defaultList])
    }
  }

  const init = () => {
    for (let i = 0; i < 10; i++) {
      defaultList.push(`${i}`)
    }
    setDefaultList([...defaultList])
  }

  return (
    <>
      <Cell>
        <View style={InfiniteUlStyle} id="scroll">
          <InfiniteLoading
            target="scroll"
            hasMore={hasMore}
            onLoadMore={loadMore}
            onScroll={() => {
              console.log('onScroll')
            }}
            onScrollToUpper={() => {
              console.log('onScrollToUpper')
            }}
          >
            {defaultList.map((item, index) => {
              return (
                <View style={InfiniteLiStyle} key={index}>
                  {item}
                </View>
              )
            })}
          </InfiniteLoading>
        </View>
      </Cell>
    </>
  )
}
export default Demo1
