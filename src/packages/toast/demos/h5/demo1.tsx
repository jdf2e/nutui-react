import React from 'react'
import { Toast, Cell } from '@nutui/nutui-react'

const Demo1 = () => {
  return (
    <>
      <Cell
        title="文字提示"
        onClick={() => Toast.show('网络失败，请稍后再试~')}
      />
      <Cell
        title="标题提示"
        onClick={() =>
          Toast.show({
            title: '成功提示',
          })
        }
      />
      <Cell
        title="成功提示"
        onClick={() =>
          Toast.show({
            title: '成功提示',
            content: '简介表述最多展示十二个字',
            icon: 'success',
          })
        }
      />
      <Cell
        title="失败提示"
        onClick={() =>
          Toast.show({
            title: '失败提示',
            icon: 'fail',
          })
        }
      />
      <Cell
        title="警告提示"
        onClick={() =>
          Toast.show({
            title: '警告提示',
            icon: 'warn',
          })
        }
      />
      <Cell
        title="加载提示"
        onClick={() =>
          Toast.show({
            title: '加载提示',
            icon: 'loading',
          })
        }
      />
    </>
  )
}
export default Demo1
