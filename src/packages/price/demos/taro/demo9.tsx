import React from 'react'
import { Cell, CellGroup, Price } from '@nutui/nutui-react-taro'
import { harmony } from '@/utils/platform-taro'

const Demo9 = () => {
  const colorStyles = {
    color: harmony() ? '' : 'var(--nutui-color-primary)',
    fontSize: '12px',
    lineHeight: '16px',
  }
  const exclusivePriceStyles = {
    margin: '0 8px 0 4px',
  }
  const seckillPriceStyles = {
    margin: '0 8px 0 4px',
  }
  const priceStyles = {
    margin: '0 4px 0 2px',
  }

  return (
    <CellGroup>
      <Cell align="baseline">
        <Price price={618.68} size="small" />
        <span style={{ ...priceStyles, ...colorStyles }}>专享价</span>
        <Price price={1080.68} type="default" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="normal" />
        <span style={{ ...priceStyles, ...colorStyles }}>粉丝到手价</span>
        <Price price={1080.68} type="default" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="large" />
        <span style={{ ...seckillPriceStyles, ...colorStyles }}>秒杀价</span>
        <Price price={1080.68} type="default" size="small" />
      </Cell>
      <Cell align="baseline">
        <Price price={618.68} size="xlarge" />
        <span style={{ ...exclusivePriceStyles, ...colorStyles }}>专享价</span>
        <Price price={1080.68} type="default" size="small" />
      </Cell>
    </CellGroup>
  )
}
export default Demo9
