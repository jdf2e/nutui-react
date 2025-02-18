import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { Plus, Star } from '@nutui/icons-react-taro'
import { harmony } from '@/utils/platform-taro'

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
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          type="primary"
          fill="outline"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          type="primary"
          fill="dashed"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `var(--nutui-color-primary-light-pressed)`,
            borderColor: `var(--nutui-color-primary)`,
            color: `var(--nutui-color-primary)`,
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
            backgroundColor: `var(--nutui-gray-3)`,
            color: `var(--nutui-gray-7)`,
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
            backgroundColor: `var(--nutui-gray-1)`,
            color: `var(--nutui-gray-7)`,
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
          icon={<Plus size={10} />}
          style={{
            margin: 8,
          }}
        />
        <Button
          fill="outline"
          type="primary"
          icon={<Plus size={10} />}
          style={{
            margin: 8,
          }}
        />
        <Button
          type="primary"
          fill="dashed"
          icon={<Plus size={10} />}
          style={{
            margin: 8,
          }}
        />
        <Button
          shape="round"
          type="primary"
          size="large"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
        <Button
          shape="round"
          type="primary"
          size="xlarge"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Button
        </Button>
      </Cell>
    </>
  )
}
export default Demo4
