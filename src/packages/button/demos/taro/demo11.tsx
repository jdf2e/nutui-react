import React from 'react'
import { Button, Cell, harmony } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { Star } from '@nutui/icons-react-taro'

const Demo11 = () => {
  const marginStyle = { width: harmony() ? 120 : 'auto', margin: 8 }

  return (
    <>
      <View className="h2">特定 48</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="48" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="48" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="48"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="48" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="48" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="48" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="48"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="48" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="48"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="48" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="48"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          type="primary"
          description="辅助描述"
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          type="service"
          description="辅助描述"
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          type="primary"
          fill="light"
          description="辅助描述"
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          description="辅助描述"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          type="service"
          description="辅助描述"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button
          size="48"
          type="primary"
          description="带icon"
          style={marginStyle}
          icon={<Star />}
          rightIcon={<Star />}
        >
          操作按钮
        </Button>
      </Cell>

      <View className="h2">页面 44</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="44" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="44" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="44"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="44" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="44" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="44" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="44"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="44" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="44"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="44" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="44"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>

      <View className="h2">区块 40</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="40" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="40"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="40" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="40"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="40" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="40"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="40" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="40"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>

      <View className="h2">常规 36</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="36" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="36"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="36" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="36"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="36" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="36"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="36" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="36"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>

      <View className="h2">属性 32</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="32" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="32"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="32" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="32"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="32" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="32"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="32" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="32"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="32" type="primary" fill="outline" style={marginStyle}>
          操作按钮
        </Button>
      </Cell>

      <View className="h2">标签 28</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="28" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="28"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="28" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="28"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="28" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="28"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="28" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="28"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>

      <View className="h2">标签 24</View>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="24" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="24"
          className="nut-button-disabled-gray"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="24" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="service" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="24"
          type="primary"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="24" type="default" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="24"
          type="default"
          fill="light"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
        <Button size="24" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="24"
          type="default"
          fill="none"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>
    </>
  )
}
export default Demo11
