import React, { useRef, useState } from 'react'
import { Menu, Button } from '@nutui/nutui-react-taro'

const Demo3 = () => {
  const [options] = useState([
    { text: '全部商品', value: 0 },
    { text: '新款商品', value: 1 },
    { text: '活动商品', value: 2 },
  ])
  const itemRef = useRef(null)
  return (
    <Menu
      onClose={(a, f) => {
        console.log(a, f)
      }}
    >
      <Menu.Item options={options} defaultValue={0} />
      <Menu.Item title="筛选" ref={itemRef}>
        <div
          style={{
            width: '50%',
            lineHeight: '28px',
            padding: '0 30px',
          }}
        >
          自定义内容
        </div>
        <Button
          size="small"
          onClick={() => {
            ;(itemRef.current as any)?.toggle(false)
          }}
        >
          确认
        </Button>
      </Menu.Item>
    </Menu>
  )
}
export default Demo3
