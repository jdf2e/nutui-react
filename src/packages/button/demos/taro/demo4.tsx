import React from 'react'
import { Button } from '@nutui/nutui-react-taro'
import { Star, Plus } from '@nutui/icons-react-taro'

const Demo4 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
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
          backgroundColor: `var(--nutui-color-primary-light)`,
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
        style={{
          margin: 8,
        }}
      >
        Button
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus />}
        style={marginStyle}
      />
      <Button
        fill="outline"
        type="primary"
        icon={<Plus />}
        style={marginStyle}
      />
      <Button
        type="primary"
        fill="dashed"
        icon={<Plus />}
        style={marginStyle}
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
    </>
  )
}
export default Demo4
