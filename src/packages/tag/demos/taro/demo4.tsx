import React from 'react'
import { Cell, Tag, pxTransform } from '@nutui/nutui-react-taro'
import { Image, Text, View } from '@tarojs/components'

const Demo4 = () => {
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
                  height: pxTransform(11),
                  width: pxTransform(10),
                  lineHeight: 1,
                }}
                src="https://img13.360buyimg.com/imagetools/jfs/t1/249078/11/8928/559/6641c6f6F823e1c5e/a90a3b3cab20caaa.png"
              />
              <Text
                style={{
                  fontSize: pxTransform(10),
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
