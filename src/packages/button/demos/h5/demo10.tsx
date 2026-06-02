import React from 'react'
import { Button, Cell } from '@nutui/nutui-react'

const Demo10 = () => {
  const marginStyle = { margin: 8 }

  return (
    <>
      <h2>特定 48</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="48" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="48"
          type="primary"
          className="nut-button-active"
          style={marginStyle}
        >
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
        <Button size="48" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
      </Cell>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
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
          type="primary"
          description="辅助描述"
          className="nut-button-active"
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
          type="primary"
          description="辅助描述"
          disabled
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
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
          type="service"
          description="辅助描述"
          className="nut-button-active"
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
      </Cell>

      <h2>页面 44</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="44" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="44" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="44" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button
          size="44"
          type="primary"
          description="辅助描述"
          style={marginStyle}
        >
          操作按钮
        </Button>
      </Cell>

      <h2>区块 40</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="40" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="service" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="40" type="default" style={marginStyle}>
          操作按钮
        </Button>
      </Cell>

      <h2>常规 36</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="36" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="36" type="default" style={marginStyle}>
          操作按钮
        </Button>
      </Cell>

      <h2>属性 32</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="32" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="primary" fill="outline" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="default" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="32" type="default" fill="none" style={marginStyle}>
          操作按钮
        </Button>
      </Cell>

      <h2>标签 28 / 24</h2>
      <Cell style={{ flexWrap: 'wrap', alignItems: 'center' }}>
        <Button size="28" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="28" type="default" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="primary" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="primary" disabled style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="primary" fill="light" style={marginStyle}>
          操作按钮
        </Button>
        <Button size="24" type="default" style={marginStyle}>
          操作按钮
        </Button>
      </Cell>
    </>
  )
}
export default Demo10
