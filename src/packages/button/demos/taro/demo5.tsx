import React from 'react'
import { Button, Cell, harmony } from '@nutui/nutui-react-taro'
import { Plus, Star } from '@nutui/icons-react-taro'

const Demo5 = () => {
  const marginStyle = {
    width: harmony() ? 140 : 'auto',
    margin: 8,
  }
  return (
    <>
      <Cell style={{ flexWrap: 'wrap' }}>
        <Button
          disabled
          type="primary"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="primary"
          fill="outline"
          icon={<Star color="var(--nutui-brand-3, #ff91a5)" />}
          rightIcon={<Star color="var(--nutui-brand-3, #ff91a5)" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Star color="var(--nutui-brand-3, #ff91a5)" />}
          rightIcon={<Star color="var(--nutui-brand-3, #ff91a5)" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          fill="solid"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="default"
          fill="none"
          icon={<Star color="var(--nutui-color-text-help, #999999)" />}
          rightIcon={<Star color="var(--nutui-color-text-help, #999999)" />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `var(--nutui-color-background, #f7f8fa)`,
            color: `var(--nutui-color-text-help, #999999)`,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="default"
          fill="none"
          icon={<Star color="var(--nutui-color-text-help, #999999)" />}
          rightIcon={<Star color="var(--nutui-color-text-help, #999999)" />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#ffffff`,
            color: `var(--nutui-color-text-help, #999999)`,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          shape="square"
          fill="outline"
          type="primary"
          icon={<Plus size={10} color="rgb(255, 173, 190)" />}
          style={{
            margin: 8,
          }}
        />
        <Button
          disabled
          type="primary"
          icon={<Plus size={10} color="#ffffff" />}
          style={{
            margin: 8,
            backgroundColor: 'var(--nutui-brand-3, #ff91a5)',
            borderColor: 'var(--nutui-brand-3, #ff91a5)',
          }}
        />
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Plus size={10} color="var(--nutui-brand-3, #ff91a5)" />}
          style={{
            margin: 8,
          }}
        />
        <Button
          disabled
          shape="round"
          type="primary"
          size="large"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          shape="round"
          type="primary"
          size="xlarge"
          icon={<Star color="#ffffff" />}
          rightIcon={<Star color="#ffffff" />}
          style={marginStyle}
        >
          Disabled
        </Button>
      </Cell>
    </>
  )
}
export default Demo5
