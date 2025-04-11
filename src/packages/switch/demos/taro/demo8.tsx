import React, { useState } from 'react'
import { Cell, Switch, Toast } from '@nutui/nutui-react-taro'

const Demo8 = () => {
  const [checkedAsync, setCheckedAsync] = useState(true)
  const [value, setValue] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [externalLoading, setExternalLoading] = useState(false)
  const mockRequest = (): Promise<void> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve()
      }, 2000)
    })
  }

  const onChangeAsync = async (value: boolean) => {
    setValue(value)
    setShowToast(true)
    await mockRequest()
    setCheckedAsync(value)
    // setExternalLoading(false)
  }
  return (
    <>
      <Cell>
        <Switch
          loading={externalLoading}
          onLoadingChange={async (loading: boolean) => {
            setExternalLoading(loading)
          }}
          checked={checkedAsync}
          onChange={(value) => onChangeAsync(value)}
        />
      </Cell>
      <Toast
        content={`2秒后异步触发 ${value}`}
        visible={showToast}
        onClose={() => {
          setShowToast(false)
        }}
      />
    </>
  )
}
export default Demo8
