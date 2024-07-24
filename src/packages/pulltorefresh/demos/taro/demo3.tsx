import React, { useState } from 'react'
import { Image, Text, View } from '@tarojs/components'
import { PullToRefresh } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import pxTransform from '@/utils/px-transform'

const Demo1 = () => {
  const [list] = useState([1, 2, 3, 4, 5, 6, 7])
  return (
    <>
      <PullToRefresh
        type="primary"
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
                  src="https://img12.360buyimg.com/imagetools/jfs/t1/232373/2/15010/432/65fab02fF99afdb71/0457cdfa268f92df.png"
                />
              )}
              {(status === 'canRelease' || status === 'refreshing') && (
                <Image
                  style={{ height: pxTransform(26), width: pxTransform(36) }}
                  src="https://img14.360buyimg.com/imagetools/jfs/t1/186707/25/42738/223/65fab272F0965554b/eae33de2f17909b8.png"
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
            <Text style={{ color: '#ffffff' }}>{item}</Text>
          </View>
        ))}
      </PullToRefresh>
    </>
  )
}

export default Demo1
