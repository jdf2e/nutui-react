import React from 'react'
import { Text } from '@tarojs/components'
import { Button, Cell, harmony } from '@nutui/nutui-react-taro'
import { Plus, Star } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const marginStyle = {
    width: harmony() ? 140 : 'auto',
    margin: 8,
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Button
          type="primary"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          type="primary"
          fill="outline"
          icon={<Star color="#ff0f23" />}
          rightIcon={<Star color="#ff0f23" />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          type="primary"
          fill="dashed"
          icon={<Star color="#ff0f23" />}
          rightIcon={<Star color="#ff0f23" />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          icon={<Star color="#ff0f23" />}
          rightIcon={<Star color="#ff0f23" />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#ffebf1`,
            borderColor: `#ff0f23`,
            color: `#ff0f23`,
          }}
        >
          <Text style={{ color: '#ff0f23' }}>Button</Text>
        </Button>
        <Button
          type="default"
          fill="none"
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#f2f3f5`,
            color: `#1a1a1a`,
          }}
        >
          Button
        </Button>
        <Button
          type="default"
          fill="none"
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#ffffff`,
            color: `#1a1a1a`,
          }}
        >
          Button
        </Button>
        <Button
          type="default"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          shape="square"
          fill="outline"
          type="primary"
          icon={<Plus size={10} color="#ff0f23" />}
          style={{
            margin: 8,
          }}
        />
        <Button
          fill="outline"
          type="primary"
          icon={<Plus size={10} color="#ff0f23" />}
          style={{
            margin: 8,
          }}
        />
        <Button
          type="primary"
          fill="dashed"
          icon={<Plus size={10} color="#ff0f23" />}
          style={{
            margin: 8,
          }}
        />
        <Button
          shape="round"
          type="primary"
          size="large"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          shape="round"
          type="primary"
          size="xlarge"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Button
        </Button>
      </Cell>
    </>
  )
}
export default Demo4
