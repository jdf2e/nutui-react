import React, { useState } from 'react'
import { ActionSheet, Cell } from '@nutui/nutui-react'

const Demo7 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isGridBottom, setIsGridBottom] = useState(false)
  const icon =
    'https://img11.360buyimg.com/img/jfs/t1/507123/33/12779/9964/6a9a601cFbad350ca/0276060060ce38e1.png'
  const options = [
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
  ]
  const gridOptions = [
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
    { name: '素材名称', icon },
  ]

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>顶部弹出</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        position="top"
        options={options}
        cancelText="点击收起"
        onSelect={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      />
      <Cell onClick={() => setIsGridBottom(!isGridBottom)}>
        <span>底部网格</span>
      </Cell>
      <ActionSheet
        visible={isGridBottom}
        layout="grid"
        columns={4}
        options={gridOptions}
        title="标题名称"
        closeable
        onSelect={() => setIsGridBottom(false)}
        onCancel={() => setIsGridBottom(false)}
      />
    </>
  )
}
export default Demo7
