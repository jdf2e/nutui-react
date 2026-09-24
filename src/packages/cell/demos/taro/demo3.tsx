import React from 'react'
import { Image, Text, View } from '@tarojs/components'
import { Cell, Checkbox, pxTransform } from '@nutui/nutui-react-taro'
import { Tips } from '@nutui/icons-react-taro'

const iconLarge =
  'https://img30.360buyimg.com/img/jfs/t1/526019/31/8316/531/6ab2789eF8aa57258/0276028028153f64.png'

const tagStyle: React.CSSProperties = {
  fontSize: pxTransform(10),
  lineHeight: pxTransform(14),
  color: 'var(--nutui-color-primary, #ff0f23)',
  border: `${pxTransform(0.5)} solid rgba(255, 173, 190, 1)`,
  borderRadius: 'var(--nutui-radius-xs, 2px)',
  padding: `${pxTransform(2)} ${pxTransform(4)}`,
}

const Demo3 = () => {
  const titleNode = (
    <View
      style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
    >
      <Text>标题文案</Text>
      <Tips
        size={pxTransform(12)}
        color="var(--nutui-color-text-help, #888b94)"
        style={{ marginLeft: pxTransform(4) }}
      />
    </View>
  )

  const descriptionNode = (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          marginTop: pxTransform(4),
          marginBottom: pxTransform(4),
        }}
      >
        <View style={tagStyle}>立减5元+再返18元支付券</View>
      </View>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Text>二级信息</Text>
        <Tips size={pxTransform(12)} style={{ marginLeft: pxTransform(4) }} />
      </View>
    </View>
  )

  return (
    <Cell
      align="center"
      style={{
        '--nutui-cell-description-margin': '0px',
        '--nutui-cell-icon-align-self': 'flex-start',
      }}
      icon={
        <Image
          src={iconLarge}
          style={{ width: pxTransform(20), height: pxTransform(20) }}
        />
      }
      title={titleNode}
      description={descriptionNode}
      extra={
        <Checkbox
          style={{ marginRight: 'calc(-8px * var(--nut-scale-f, 1))' }}
        />
      }
    />
  )
}
export default Demo3
