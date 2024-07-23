import React from 'react'
import { View, Text } from '@tarojs/components'
import { SafeArea } from '@nutui/nutui-react-taro'

function generateRandomTextArray(count: number) {
  const characters = 'abcdefghijklmnopqrstuvwxyz'
  const textArray = []
  for (let j = 0; j < count; j++) {
    const randomLength = Math.floor(Math.random() * 5) + 4 // 随机生成长度在4到8之间的数
    let randomText = ''
    for (let i = 0; i < randomLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length)
      randomText += characters.charAt(randomIndex)
    }
    textArray.push(randomText)
  }
  return textArray
}

const Demo1 = () => {
  return (
    <View>
      <Text>{generateRandomTextArray(900).join(' ')}</Text>
      <SafeArea position="bottom" />
    </View>
  )
}

export default Demo1
