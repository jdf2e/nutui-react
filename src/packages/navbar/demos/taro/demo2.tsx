import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavBar, Space } from '@nutui/nutui-react-taro'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react-taro'
import { harmony } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo2 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
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
      <Space direction="vertical">
        <View style={{ background: '#fff' }}>
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
        </View>
        <View style={{ background: '#fff' }}>
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
        </View>
        <View style={{ background: '#fff' }}>
          <NavBar
            right={
              <View onClick={(e) => Taro.showToast({ title: '清空' })}>
                清空
              </View>
            }
            left={<Close style={harmony() ? { marginLeft: 16 } : {}} />}
            back={<ArrowLeft />}
            onBackClick={(e) => Taro.showToast({ title: '返回' })}
          >
            <View>
              <View style={{ ...styles.flexCenter, flexDirection: 'column' }}>
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
        </View>
        <View style={{ background: '#fff' }}>
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
        </View>
      </Space>
    </>
  )
}
export default Demo2
