import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import { Rate } from '@nutui/nutui-react-taro'

const ratings = [
  {
    icon: 'https://img12.360buyimg.com/img/jfs/t1/545549/10/4475/6281/6ad1c000Fd1d65774/0276054054f9918d.png',
    checkedIcon:
      'https://img13.360buyimg.com/img/jfs/t1/536582/36/9593/18110/6ad1c297Fe74c29d4/0276090090527741.png',
    label: '非常不满',
  },
  {
    icon: 'https://img12.360buyimg.com/img/jfs/t1/539287/40/12793/6472/6ad1c06dFc25ce73d/0276054054da9eb7.png',
    checkedIcon:
      'https://img20.360buyimg.com/img/jfs/t1/549822/40/494/17904/6ad1c2aeFf6e7e9a8/0276090090a745c1.png',
    label: '不满意',
  },
  {
    icon: 'https://img30.360buyimg.com/img/jfs/t1/542250/40/7404/5751/6ad1c081F29c0a406/0276054054d713f4.png',
    checkedIcon:
      'https://img10.360buyimg.com/img/jfs/t1/545718/6/5156/14546/6ad1c2bdF3a9eae49/02760900904be046.png',
    label: '一般',
  },
  {
    icon: 'https://img13.360buyimg.com/img/jfs/t1/533631/40/6307/6272/6ad1c098F400613a1/02760540546cac65.png',
    checkedIcon:
      'https://img13.360buyimg.com/img/jfs/t1/535073/13/11913/17140/6ad1c2ccF4784827c/02760900900cd502.png',
    label: '满意',
  },
  {
    icon: 'https://img20.360buyimg.com/img/jfs/t1/536319/12/15684/5836/6ad1c0acF2be71621/02760540546a32ef.png',
    checkedIcon:
      'https://img20.360buyimg.com/img/jfs/t1/541642/34/9376/16165/6ad1c2d9Fcd1d0daf/0276090090ff2061.png',
    label: '非常满意',
  },
]

const Demo16 = () => {
  // Keep one selected score and let each one-item Rate render its own custom icon.
  const [score, setScore] = useState(0)

  return (
    <View style={{ display: 'flex', width: '100%' }}>
      {ratings.map((item, index) => {
        const selected = score === index + 1
        const uncheckedIcon = (
          <Image
            src={item.icon}
            style={{
              width: '28px',
              height: '28px',
            }}
          />
        )
        const checkedIcon = (
          <Image
            src={item.checkedIcon}
            style={{ width: '28px', height: '28px' }}
          />
        )

        return (
          <View key={item.label} style={{ flex: 1 }}>
            <Rate
              direction="vertical"
              size="large"
              count={1}
              value={selected ? 1 : 0}
              checkedIcon={checkedIcon}
              uncheckedIcon={uncheckedIcon}
              label={item.label}
              onChange={() => setScore(index + 1)}
            />
          </View>
        )
      })}
    </View>
  )
}

export default Demo16
