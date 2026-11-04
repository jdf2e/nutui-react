import React, { useState } from 'react'
import { ActionSheet, Cell, Swiper } from '@nutui/nutui-react'

const icon =
  'https://img11.360buyimg.com/img/jfs/t1/507123/33/12779/9964/6a9a601cFbad350ca/0276060060ce38e1.png'

const firstRow = Array.from({ length: 10 }, () => ({ name: '素材名称', icon }))
const secondRow = Array.from({ length: 7 }, () => ({ name: '素材名称', icon }))
const swipeOptions = Array.from({ length: 20 }, () => ({
  name: '素材名称',
  icon,
}))
const swipePages = [swipeOptions.slice(0, 10), swipeOptions.slice(10)]

const scrollRowStyle: React.CSSProperties = {
  display: 'flex',
  boxSizing: 'border-box',
  columnGap: 36,
  padding: '0 16px',
  overflowX: 'auto',
  overflowY: 'hidden',
}

const scrollItemStyle: React.CSSProperties = {
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
  cursor: 'pointer',
}

const scrollIconStyle: React.CSSProperties = {
  width: 48,
  height: 48,
  objectFit: 'contain',
}

const scrollNameStyle: React.CSSProperties = {
  marginTop: 8,
  color: 'var(--nutui-actionsheet-grid-text-color, #666)',
  fontSize: 12,
  lineHeight: '18px',
  whiteSpace: 'nowrap',
}

const swipeGridStyle: React.CSSProperties = {
  columnGap:
    'calc((100% - 5 * var(--nutui-actionsheet-grid-item-width, calc(50px * var(--nut-scale-f, 1)))) / 4)',
}

const Demo7 = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isSwipeTop, setIsSwipeTop] = useState(false)
  const [isGridBottom, setIsGridBottom] = useState(false)
  const [isScrollBottom, setIsScrollBottom] = useState(false)
  const [scrollVal, setScrollVal] = useState('')
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

  const renderSwipeGrid = (list: { name: string; icon: string }[]) => (
    <div className="nut-actionsheet-grid" style={swipeGridStyle}>
      {list.map((item, index) => (
        <div
          className="nut-actionsheet-grid-item"
          key={index}
          onClick={() => setIsSwipeTop(false)}
        >
          <div className="nut-actionsheet-grid-icon">
            <img
              className="nut-actionsheet-grid-icon-img"
              src={item.icon}
              alt=""
            />
          </div>
          <div className="nut-actionsheet-grid-name">{item.name}</div>
        </div>
      ))}
    </div>
  )

  const renderScrollRow = (list: { name: string; icon: string }[]) => (
    <div style={scrollRowStyle}>
      {list.map((item, index) => (
        <div
          style={scrollItemStyle}
          key={index}
          onClick={() => {
            setScrollVal(item.name)
            setIsScrollBottom(false)
          }}
        >
          <img style={scrollIconStyle} src={item.icon} alt="" />
          <div style={scrollNameStyle}>{item.name}</div>
        </div>
      ))}
    </div>
  )

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <span>顶部弹出+网格布局</span>
      </Cell>
      <ActionSheet
        visible={isVisible}
        position="top"
        options={options}
        cancelText="点击收起"
        onSelect={() => setIsVisible(false)}
        onCancel={() => setIsVisible(false)}
      />
      <Cell onClick={() => setIsSwipeTop(!isSwipeTop)}>
        <span>顶部弹出+横向滑动</span>
      </Cell>
      <ActionSheet
        visible={isSwipeTop}
        position="top"
        cancelText="点击收起"
        onCancel={() => setIsSwipeTop(false)}
      >
        <Swiper indicator={false} loop={false} style={{ height: 200 }}>
          {swipePages.map((page, index) => (
            <Swiper.Item key={index}>{renderSwipeGrid(page)}</Swiper.Item>
          ))}
        </Swiper>
      </ActionSheet>
      <Cell onClick={() => setIsGridBottom(!isGridBottom)}>
        <span>底部弹出+网格布局</span>
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
      <Cell onClick={() => setIsScrollBottom(!isScrollBottom)}>
        <span>底部弹出+横向滚动</span>
        <div style={{ marginInlineStart: '10px', color: '#999' }}>
          {scrollVal}
        </div>
      </Cell>
      <ActionSheet
        visible={isScrollBottom}
        cancelText="取消"
        onCancel={() => setIsScrollBottom(false)}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: 16,
            padding: '16px 0',
          }}
        >
          {renderScrollRow(firstRow)}
          {renderScrollRow(secondRow)}
        </div>
      </ActionSheet>
    </>
  )
}
export default Demo7
