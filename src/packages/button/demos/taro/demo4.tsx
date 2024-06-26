import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { Star, Plus } from '@nutui/icons-react-taro'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo4 = () => {
  const marginStyle = {
    marginRight: pxTransform(8),
    marginTop: pxTransform(8),
    marginLeft: pxTransform(8),
    marginBottom: pxTransform(8),
  }
  return (
    <>
      {!harmonyAndRn() ? (
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
        </Cell>
      ) : (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            type="primary"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="outline"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            type="primary"
            fill="dashed"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffebf1`,
                borderColor: `#ff0f23`,
                color: `#ff0f23`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#f5f6fa`,
                color: `#1a1a1a`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffffff`,
                color: `#1a1a1a`,
              },
              ...marginStyle,
            }}
          >
            Button
          </Button>
          <Button
            type="default"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={marginStyle}
          >
            Button
          </Button>
          <Button
            shape="square"
            fill="outline"
            type="primary"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            fill="outline"
            type="primary"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            type="primary"
            fill="dashed"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            shape="round"
            type="primary"
            size="large"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(100), ...marginStyle }}
          >
            Button
          </Button>
          <Button
            shape="round"
            type="primary"
            size="xlarge"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(200), ...marginStyle }}
          >
            Button
          </Button>
        </Cell>
      )}
    </>
  )
}
export default Demo4
