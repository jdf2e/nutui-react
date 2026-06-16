import React from 'react'
import { Cell, Empty, Toast } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  return (
    <>
      <Cell>
        <Empty
          size="half"
          status="cart"
          title="小购物车大容量"
          description="把喜欢的商品都加进来吧"
          actions={[
            {
              text: '逛逛秒杀',
              onClick: () =>
                Toast.show('empty-demo2', { title: '逛逛秒杀', icon: 'none' }),
            },
            {
              text: '看看关注',
              type: 'primary',
              onClick: () =>
                Toast.show('empty-demo2', { title: '看看关注', icon: 'none' }),
            },
          ]}
        />
      </Cell>
      <Toast id="empty-demo2" />
    </>
  )
}
export default Demo2
