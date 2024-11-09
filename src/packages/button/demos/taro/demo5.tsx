import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { Plus, Star } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'

const Demo5 = () => {
  const marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Button
          disabled
          type="primary"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="primary"
          fill="outline"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          fill="solid"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="default"
          fill="none"
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
            backgroundColor: `var(--nutui-gray-3)`,
            color: `var(--nutui-gray-5)`,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="default"
          fill="none"
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
            backgroundColor: `var(--nutui-gray-1)`,
            color: `var(--nutui-gray-5)`,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          icon={<Star />}
          rightIcon={<Star />}
          style={{
            margin: 8,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          shape="square"
          fill="outline"
          type="primary"
          icon={<Plus size="20" />}
          style={marginStyle}
        />
        <Button
          disabled
          type="primary"
          icon={<Plus size="20" />}
          style={marginStyle}
        />
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Plus />}
          style={marginStyle}
        />
        <Button
          disabled
          shape="round"
          type="primary"
          size="large"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          shape="round"
          type="primary"
          size="xlarge"
          icon={<Star />}
          rightIcon={<Star />}
          style={marginStyle}
        >
          Disabled
        </Button>
      </Cell>
    </>
  )
}
export default Demo5
