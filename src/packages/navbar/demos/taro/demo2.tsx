import React from 'react'
import { NavBar } from '@nutui/nutui-react-taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo2 = () => {
  const isRnAndHarmony = harmonyAndRn()
  const styles = {
    flexCenter: {
      display: 'flex',
      aliginItems: 'center',
    },
    title: {
      fontSize: pxTransform(18),
      fontWeight: 'bold',
      lineHeight: pxTransform(26),
    },
    description: {
      fontSize: pxTransform(12),
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      lineHeight: pxTransform(16),
    },
  }
  return (
    <>
      <NavBar
        titleAlign="left"
        back={
          <>
            {!isRnAndHarmony ? <ArrowLeft size={20} /> : <Text>《 </Text>}
            <Text>返回</Text>
          </>
        }
        right={
          <View
            style={styles.flexCenter}
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            {!isRnAndHarmony ? <Share size={20} /> : <Text> 》</Text>}
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text style={styles.title}>订单详情</Text>
      </NavBar>
      <NavBar
        titleAlign="left"
        right={
          <View
            style={styles.flexCenter}
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            {!isRnAndHarmony ? <Share size={20} /> : <Text> 》</Text>}
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text style={styles.title}>订单详情</Text>
      </NavBar>
      <NavBar
        titleAlign="left"
        right={
          <Text onClick={(e) => Taro.showToast({ title: '清空' })}>清空</Text>
        }
        left={!isRnAndHarmony ? <Close size={20} /> : <Text>×</Text>}
        back={!isRnAndHarmony ? <ArrowLeft size={20} /> : <Text>《 </Text>}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '标题' })}
          >
            浏览记录
          </Text>
          <Text style={styles.description}>浏览记录</Text>
        </View>
      </NavBar>
      <NavBar
        back={!isRnAndHarmony ? <ArrowLeft size={20} /> : <Text>《 </Text>}
        right={
          <>
            <Text
              style={{ marginRight: pxTransform(5) }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </Text>
            {!isRnAndHarmony ? (
              <More
                size={20}
                onClick={(e) => Taro.showToast({ title: 'icon' })}
              />
            ) : (
              <Text onClick={(e) => Taro.showToast({ title: 'icon' })}>…</Text>
            )}
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <Text
          style={styles.title}
          onClick={(e) => Taro.showToast({ title: '标题' })}
        >
          购物车
        </Text>
        <View
          style={{
            ...styles.flexCenter,
            marginLeft: pxTransform(5),
            marginRight: pxTransform(5),
          }}
          onClick={(e) => Taro.showToast({ title: 'icon' })}
        >
          {!isRnAndHarmony ? (
            <Cart size={20} />
          ) : (
            <Icon type="search" size={20} />
          )}
        </View>
      </NavBar>
    </>
  )
}
export default Demo2
