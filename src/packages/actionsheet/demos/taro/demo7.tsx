import React, { useState } from 'react'
import { ActionSheet, Cell, Swiper, pxTransform } from '@nutui/nutui-react-taro'
import { Image, ScrollView, View } from '@tarojs/components'

const icon =
  'https://img11.360buyimg.com/img/jfs/t1/507123/33/12779/9964/6a9a601cFbad350ca/0276060060ce38e1.png'

const firstRow = Array.from({ length: 10 }, () => ({ name: '素材名称', icon }))
const secondRow = Array.from({ length: 7 }, () => ({ name: '素材名称', icon }))
const swipeOptions = Array.from({ length: 20 }, () => ({
  name: '素材名称',
  icon,
}))
const swipePages = [swipeOptions.slice(0, 10), swipeOptions.slice(10)]

const scrollListStyle: React.CSSProperties = {
  display: 'inline-flex',
  flexDirection: 'row',
  boxSizing: 'border-box',
  columnGap: pxTransform(36),
  paddingLeft: pxTransform(16),
  paddingRight: pxTransform(16),
}

const scrollItemStyle: React.CSSProperties = {
  display: 'flex',
  flexShrink: 0,
  flexDirection: 'column',
  alignItems: 'center',
}

const scrollIconStyle: React.CSSProperties = {
  width: pxTransform(48),
  height: pxTransform(48),
}

const scrollNameStyle: React.CSSProperties = {
  marginTop: pxTransform(8),
  color: 'var(--nutui-actionsheet-grid-text-color, #666)',
  fontSize: pxTransform(12),
  lineHeight: pxTransform(18),
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
    <View className="nut-actionsheet-grid" style={swipeGridStyle}>
      {list.map((item, index) => (
        <View
          className="nut-actionsheet-grid-item"
          key={index}
          onClick={() => setIsSwipeTop(false)}
        >
          <View className="nut-actionsheet-grid-icon">
            <Image className="nut-actionsheet-grid-icon-img" src={item.icon} />
          </View>
          <View className="nut-actionsheet-grid-name">{item.name}</View>
        </View>
      ))}
    </View>
  )

  const renderScrollRow = (list: { name: string; icon: string }[]) => (
    <ScrollView scrollX enableFlex showScrollbar={false}>
      <View style={scrollListStyle}>
        {list.map((item, index) => (
          <View
            style={scrollItemStyle}
            key={index}
            onClick={() => {
              setScrollVal(item.name)
              setIsScrollBottom(false)
            }}
          >
            <Image style={scrollIconStyle} src={item.icon} />
            <View style={scrollNameStyle}>{item.name}</View>
          </View>
        ))}
      </View>
    </ScrollView>
  )

  return (
    <>
      <Cell onClick={() => setIsVisible(!isVisible)}>
        <View>顶部弹出+网格布局</View>
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
        <View>顶部弹出+横向滑动</View>
      </Cell>
      <ActionSheet
        visible={isSwipeTop}
        position="top"
        cancelText="点击收起"
        onCancel={() => setIsSwipeTop(false)}
      >
        <Swiper indicator={false} loop={false} height={pxTransform(200)}>
          {swipePages.map((page, index) => (
            <Swiper.Item key={index}>{renderSwipeGrid(page)}</Swiper.Item>
          ))}
        </Swiper>
      </ActionSheet>
      <Cell onClick={() => setIsGridBottom(!isGridBottom)}>
        <View>底部弹出+网格布局</View>
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
        <View>底部弹出+横向滚动</View>
        <View style={{ marginLeft: pxTransform(10), color: '#999' }}>
          {scrollVal}
        </View>
      </Cell>
      <ActionSheet
        visible={isScrollBottom}
        cancelText="取消"
        onCancel={() => setIsScrollBottom(false)}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: pxTransform(16),
            paddingTop: pxTransform(16),
            paddingBottom: pxTransform(16),
          }}
        >
          {renderScrollRow(firstRow)}
          {renderScrollRow(secondRow)}
        </View>
      </ActionSheet>
    </>
  )
}
export default Demo7
