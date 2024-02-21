import React from 'react'
import { Star, Plus } from '@nutui/icons-react'
import { Button } from '../../button'

const Demo3 = () => {
  const marginStyle = { margin: 8 }
  return (
    <>
      <Button
        type="primary"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按钮
      </Button>
      <Button
        type="primary"
        fill="outline"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按钮
      </Button>
      <Button
        type="primary"
        fill="dashed"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按钮
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
        操作按钮
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
        操作按钮
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
        操作按钮
      </Button>
      <Button
        type="default"
        icon={<Star />}
        rightIcon={<Star />}
        style={marginStyle}
      >
        操作按钮
      </Button>
      <Button
        shape="square"
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        fill="outline"
        type="primary"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        fill="dashed"
        icon={<Plus width="20" />}
        style={marginStyle}
      />
      <Button
        type="primary"
        size="large"
        icon={<Star width={20} height={20} />}
        rightIcon={<Star width={20} height={20} />}
        style={marginStyle}
      >
        操作按钮
      </Button>
    </>
  )
}
export default Demo3
