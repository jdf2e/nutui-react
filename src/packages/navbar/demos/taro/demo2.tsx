import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavBar } from '@nutui/nutui-react-taro'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      aliginItems: 'center',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '26px',
    },
    description: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      lineHeight: '16px',
    },
  }
  return (
    <>
      <NavBar
        back={
          <>
            <ArrowLeft />
            返回
          </>
        }
        right={<Share onClick={(e) => Taro.showToast({ title: 'icon' })} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        页面标题
      </NavBar>
      <NavBar
        right={<Share onClick={(e) => Taro.showToast({ title: 'icon' })} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        页面标题
      </NavBar>
      <NavBar
        right={
          <View onClick={(e) => Taro.showToast({ title: '清空' })}>清空</View>
        }
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View style={{ ...styles.flexCenter, flexDirection: 'column' }}>
          <View
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '标题' })}
          >
            页面标题
          </View>
          <View style={styles.description}>副标题</View>
        </View>
      </NavBar>
      <NavBar
        back={<ArrowLeft />}
        right={
          <>
            <View onClick={(e) => Taro.showToast({ title: '编辑' })}>编辑</View>
            <More onClick={(e) => Taro.showToast({ title: 'icon' })} />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View onClick={(e) => Taro.showToast({ title: '页面标题' })}>
          页面标题
        </View>
      </NavBar>
    </>
  )
}
export default Demo2
