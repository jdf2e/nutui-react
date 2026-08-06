import React, { useState } from 'react'
import { Button, Divider, Input } from '@nutui/nutui-react-taro'

const Demo17 = () => {
  const [value, setValue] = useState('')
  const [hasError, setHasError] = useState(false)

  return (
    <>
      <Divider>容器型</Divider>
      <Input
        value={value}
        status={hasError ? 'error' : 'default'}
        placeholder="请输入用户名"
        description={hasError ? '请输入用户名' : undefined}
        onChange={(nextValue) => {
          setValue(nextValue)
          setHasError(false)
        }}
      />
      <Button
        block
        type="primary"
        style={{ marginTop: 12 }}
        onClick={() => setHasError(value.trim().length === 0)}
      >
        校验输入内容
      </Button>

      <Divider>纯文本型</Divider>
      <Input
        plain
        status="error"
        defaultValue="京东多快好省"
        description="错误提示信息"
      />
    </>
  )
}

export default Demo17
