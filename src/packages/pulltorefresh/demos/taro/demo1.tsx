import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import { PullToRefresh } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])

  return (
    <>
      <PullToRefresh
        style={{
          backgroundColor: `var(--nutui-gray-3)`,
          color: 'var(--nutui-gray-7)',
        }}
        onRefresh={() =>
          new Promise((resolve) => {
            Taro.showToast({
              title: '😊',
              icon: 'none',
            })
            resolve('done')
          })
        }
        renderIcon={(status) => {
          return (
            <>
              {(status === 'pulling' || status === 'complete') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img13.360buyimg.com/imagetools/jfs/t1/219180/19/37902/438/65fa8cbbF5278d022/5eabe69b64bba791.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img10.360buyimg.com/imagetools/jfs/t1/230454/20/14523/223/65fab2d1F379c3968/ac35992443abab0c.png"
                />
              )}
            </>
          )
        }}
      >
        {list.map((item) => (
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: pxTransform(50),
            }}
            key={item}
          >
            {item}
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
