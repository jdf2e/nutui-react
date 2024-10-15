import React from 'react'
import { Cell, Tag } from '@nutui/nutui-react-taro'
import { Image, Text, View } from '@tarojs/components'
import Taro from '@tarojs/taro'

const Demo4 = () => {
  const convertSize = (size: number) => {
    if (Taro.getEnv() === Taro.ENV_TYPE.RN) {
      return size
    }
    return `${size}px`
  }
  return (
    <>
      <Cell
        title="image-text"
        extra={
          <Tag type="info">
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                width: 'auto',
              }}
            >
              <Image
                style={{
                  height: convertSize(10),
                  width: convertSize(10),
                }}
                src="https://img13.360buyimg.com/imagetools/jfs/t1/249078/11/8928/559/6641c6f6F823e1c5e/a90a3b3cab20caaa.png"
              />
              <Text
                style={{
                  fontSize: convertSize(10),
                  color: 'white',
                }}
              >
                标签
              </Text>
            </View>
          </Tag>
        }
      />
    </>
  )
}
export default Demo4
