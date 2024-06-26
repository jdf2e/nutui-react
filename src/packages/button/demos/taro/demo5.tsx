import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { Star, Plus } from '@nutui/icons-react-taro'
import { harmonyAndRn, harmony } from '@/utils/platform-taro'
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
      {!harmonyAndRn() ? (
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
      ) : (
        <Cell style={{ flexWrap: 'wrap' }}>
          <Button
            disabled
            type="primary"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="outline"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="primary"
            fill="dashed"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            fill="solid"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#f6f6f6`,
                color: `#888b94`,
                width: pxTransform(harmony() ? 100 : 80),
              },
              ...marginStyle,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            type="default"
            fill="none"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{
              ...{
                backgroundColor: `#ffffff`,
                color: `#888b94`,
                width: pxTransform(harmony() ? 100 : 80),
              },
              ...marginStyle,
            }}
          >
            Disabled
          </Button>
          <Button
            disabled
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(harmony() ? 100 : 80), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="square"
            fill="outline"
            type="primary"
            // icon={<Plus size="20" />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            type="primary"
            // icon={<Plus size="20" />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            type="primary"
            fill="dashed"
            // icon={<Plus />}
            style={{ width: pxTransform(32), ...marginStyle }}
          />
          <Button
            disabled
            shape="round"
            type="primary"
            size="large"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(120), ...marginStyle }}
          >
            Disabled
          </Button>
          <Button
            disabled
            shape="round"
            type="primary"
            size="xlarge"
            // icon={<Star />}
            // rightIcon={<Star />}
            style={{ width: pxTransform(200), ...marginStyle }}
          >
            Disabled
          </Button>
        </Cell>
      )}
    </>
  )
}
export default Demo5
