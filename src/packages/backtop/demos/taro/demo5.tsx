/**
 * JDRN 端最佳实践
 */
import React, { useRef, useState } from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { BackTop, Cell } from '@nutui/nutui-react-taro'
import { Top } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmony, rn } from '@/utils/platform-taro'

const Demo5 = () => {
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
        className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}
        style={{ height: 'auto' }}
      >
        <View className="h2">基础用法</View>
        {new Array(24).fill(0).map((_, index) => {
          return <Cell key={index}>我是测试数据{index}</Cell>
        })}
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
          <Top size={12} />
        </View>
      </BackTop>
    </View>
  )
}
export default Demo5
