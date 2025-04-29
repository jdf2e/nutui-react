import React, { CSSProperties, useState } from 'react'
import { ActionSheet, Cell, Image } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'

const Demo6 = () => {
  const [isVisible, setIsVisible] = useState(false)

  const menuItems = [
    {
      imgUrl:
        'https://img30.360buyimg.com/img/jfs/t1/299968/23/743/5275/68109db2F9215132b/fbd319950809ce50.png',
      text: '付款码',
    },
    {
      imgUrl:
        'https://img20.360buyimg.com/img/jfs/t1/297408/33/1417/5099/6810a064F1f30bf4e/e9b3bbb0a45fdc14.png',
      text: '扫一扫',
    },
    {
      imgUrl:
        'https://img20.360buyimg.com/img/jfs/t1/245714/27/28464/4576/6810a07fFc4c1c1cc/48fcb0ea90ddeefd.png',
      text: '乘车码',
    },
    {
      imgUrl:
        'https://img20.360buyimg.com/img/jfs/t1/294415/36/1399/5281/6810a1b8Faa5feebe/f52259f67396db62.png',
      text: 'NFC',
    },
    {
      imgUrl:
        'https://img14.360buyimg.com/img/jfs/t1/280555/29/25424/4649/6810a0cfF2c4557bd/84ed54ecb9764107.png',
      text: '录入条码',
    },
    {
      imgUrl:
        'https://img20.360buyimg.com/img/jfs/t1/302991/1/742/5953/6810a0e6F2ed90b17/17744ec1d19e212d.png',
      text: '扫描历史',
    },
    {
      imgUrl:
        'https://img12.360buyimg.com/img/jfs/t1/270335/38/29480/5484/6810a0f8F5c08ea36/ff9ac40d01ffa1cc.png',
      text: 'AR扫描',
    },
  ]

  const itemStyle: CSSProperties = {
    width: 50,
    height: 72,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    margin: '0 16px 16px',
  }

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>自定义内容2</View>
      </Cell>
      <ActionSheet
        title="标题"
        position="top"
        visible={isVisible}
        onSelect={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      >
        <View style={{ padding: '0', display: 'flex', flexWrap: 'wrap' }}>
          {menuItems.map((item, index) => (
            <View key={index} style={itemStyle}>
              <Image src={item.imgUrl} width={50} height={50} />
              <View style={{ fontSize: 12, color: '#1a1a1a', marginTop: 10 }}>
                {item.text}
              </View>
            </View>
          ))}
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo6
