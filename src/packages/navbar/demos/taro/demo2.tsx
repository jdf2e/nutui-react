import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavBar, Space, pxTransform, harmony } from '@nutui/nutui-react-taro'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react-taro'

const Demo2 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      flex: 1,
      fontSize: pxTransform(18),
      fontWeight: 'bold',
    },
    description: {
      fontSize: pxTransform(12),
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      height: pxTransform(16),
    },
  }
  return (
    <>
      <Space direction="vertical">
        <NavBar
          back={
            <>
              <ArrowLeft style={harmony() ? { marginRight: 16 } : {}} />
              返回
            </>
          }
          right={<Share onClick={(e) => Taro.showToast({ title: 'icon' })} />}
          onBackClick={(e) => Taro.showToast({ title: '返回' })}
        >
          <View
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '页面标题' })}
          >
            页面标题
          </View>
        </NavBar>

        <NavBar
          right={<Share onClick={(e) => Taro.showToast({ title: 'icon' })} />}
          onBackClick={(e) => Taro.showToast({ title: '返回' })}
        >
          <View
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '页面标题' })}
          >
            页面标题
          </View>
        </NavBar>
        <NavBar
          right={
            <View onClick={(e) => Taro.showToast({ title: '清空' })}>清空</View>
          }
          left={<Close style={harmony() ? { marginLeft: 16 } : {}} />}
          back={<ArrowLeft />}
          onBackClick={(e) => Taro.showToast({ title: '返回' })}
        >
          <View>
            <View
              style={{
                ...styles.flexCenter,
                alignItems: 'flex-start',
                flexDirection: 'column',
              }}
            >
              <View
                style={styles.title}
                onClick={(e) => Taro.showToast({ title: '标题' })}
              >
                页面标题
              </View>
              <View style={styles.description}>副标题</View>
            </View>
          </View>
        </NavBar>
        <NavBar
          back={<ArrowLeft />}
          right={
            <>
              <View
                style={harmony() ? { marginRight: 16 } : {}}
                onClick={(e) => Taro.showToast({ title: '编辑' })}
              >
                编辑
              </View>
              <More onClick={(e) => Taro.showToast({ title: 'icon' })} />
            </>
          }
          onBackClick={(e) => Taro.showToast({ title: '返回' })}
        >
          <View
            style={styles.title}
            onClick={(e) => Taro.showToast({ title: '页面标题' })}
          >
            页面标题
          </View>
        </NavBar>
      </Space>
    </>
  )
}
export default Demo2
