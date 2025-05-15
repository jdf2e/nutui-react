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
          icon={<Star color="#ffadbe" />}
          rightIcon={<Star color="#ffadbe" />}
          style={marginStyle}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Star color="#ffadbe" />}
          rightIcon={<Star color="#ffadbe" />}
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
          icon={<Star color="#888b94" />}
          rightIcon={<Star color="#888b94" />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#f2f3f5`,
            color: `#888b94`,
          }}
        >
          Disabled
        </Button>
        <Button
          disabled
          type="default"
          fill="none"
          icon={<Star color="#888b94" />}
          rightIcon={<Star color="#888b94" />}
          style={{
            margin: 8,
            width: harmony() ? 140 : 'auto',
            backgroundColor: `#ffffff`,
            color: `#888b94`,
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
            backgroundColor: '#ffadbe',
            borderColor: '#ffadbe',
          }}
        />
        <Button
          disabled
          type="primary"
          fill="dashed"
          icon={<Plus size={10} color="#ffadbe" />}
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
