import React from 'react'
import { Empty, Toast } from '@nutui/nutui-react'

const Demo2 = () => {
  return (
    <Empty
      size="half"
      status="cart"
      title="小购物车大容量"
      description="把喜欢的商品都加进来吧"
      actions={[
        {
          text: '逛逛秒杀',
          onClick: () => Toast.show('逛逛秒杀'),
        },
        {
          text: '看看关注',
          type: 'primary',
          onClick: () => Toast.show('看看关注'),
        },
      ]}
    />
  )
}
export default Demo2
