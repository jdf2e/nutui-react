/**
 * JDRN 端最佳实践
 */
import React, { useRef, useState } from 'react'
import { ScrollView, View, Icon } from '@tarojs/components'
import { BackTop } from '@nutui/nutui-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmony, rn } from '@/utils/platform-taro'
import { BasicComponent } from '@/utils/typings'
// @TODO 暂不支持
// import { Top } from '@nutui/icons-react-taro'

const Demo5 = (props: BasicComponent) => {
  const { children } = props
  const [scrollRes, setScrollRes] = useState<any>(null)
  const sv = useRef<any>(null)

  return (
    // @TODO 待 taro 侧支持获取视窗尺寸后调整
    <View
      style={{
        position: 'relative',
        width: '100%',
        height: rn() ? pxTransform(710) : '100%',
      }}
    >
      <ScrollView
        onScroll={(res) => {
          setScrollRes(res.detail)
        }}
        ref={sv}
        // @TODO RN 端暂不支持
        // trapScroll={true}
        style={{ height: 'auto' }}
      >
        {children}
      </ScrollView>
      <BackTop
        threshold={200}
        scrollRes={scrollRes}
        onClick={() => {
          if (harmony()) {
            if (!sv.current?.scroller?.scrollEdge) return
            // @ts-ignore
            sv.current.scroller.scrollEdge(Edge.Top)
          }
          if (rn()) {
            if (!sv.current?.scrollToOffset) return
            sv.current.scrollToOffset({ offset: 0 })
          }
        }}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Icon size={12} type="search" />
          {/* <Top size={12} /> */}
          <View style={{ fontSize: pxTransform(12) }}>顶部</View>
        </View>
      </BackTop>
    </View>
  )
}
export default Demo5
