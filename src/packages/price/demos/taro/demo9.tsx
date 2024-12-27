import React from 'react'
import { Cell, CellGroup, Price } from '@nutui/nutui-react-taro'
import { Text } from '@tarojs/components'
import { harmony } from '@/utils/platform-taro'

const Demo9 = () => {
  const colorStyles = {
    color: harmony() ? '#ff0f23' : 'var(--nutui-color-primary)',
    fontSize: 12,
    lineHeight: 1,
  }
  const exclusivePriceStyles = {
    marginLeft: 4,
    marginRight: 8,
  }
  const priceStyles = {
    marginLeft: 2,
    marginRight: 4,
  }

  return (
    <CellGroup>
      <Cell align="baseline">
        <Price price={618.68} size="small" />
        <Text style={{ ...priceStyles, ...colorStyles }}>专享价</Text>
        <Price price={1080.68} color="gray" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="normal" />
        <Text style={{ ...priceStyles, ...colorStyles }}>粉丝到手价</Text>
        <Price price={1080.68} color="gray" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="large" />
        <Text style={{ ...exclusivePriceStyles, ...colorStyles }}>秒杀价</Text>
        <Price price={1080.68} color="gray" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="xlarge" />
        <Text style={{ ...exclusivePriceStyles, ...colorStyles }}>专享价</Text>
        <Price price={1080.68} color="gray" size="small" />
      </Cell>
    </CellGroup>
  )
}
export default Demo9
