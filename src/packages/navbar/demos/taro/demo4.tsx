import React from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavBar, pxTransform, harmony, Space } from '@nutui/nutui-react-taro'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react-taro'

const Demo4 = () => {
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
    <Space direction="vertical">
      <NavBar
        title="页面标题"
        back={
          <>
            <ArrowLeft style={harmony() ? { marginRight: 16 } : {}} />
            返回
          </>
        }
        right={
          <View style={{ display: 'flex' }} ariaLabel="share">
            <Share onClick={(e) => Taro.showToast({ title: 'icon' })} />
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      />
      <NavBar
        title="页面标题"
        right={
          <View style={{ display: 'flex' }} ariaLabel="share">
            <Share onClick={(e) => Taro.showToast({ title: 'icon' })} />
          </View>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      />
      <NavBar
        title={
          <View style={{ ...styles.flexCenter, flexDirection: 'column' }}>
            <View
              style={styles.title}
              onClick={(e) => Taro.showToast({ title: '标题' })}
              ariaLabel="页面标题"
            >
              页面标题
            </View>
            <View style={styles.description} ariaLabel="副标题">
              副标题
            </View>
          </View>
        }
        right={
          <View
            onClick={(e) => Taro.showToast({ title: '清空' })}
            ariaLabel="清空"
          >
            清空
          </View>
        }
        left={
          <View style={{ display: 'flex' }} ariaLabel="close">
            <Close style={harmony() ? { marginRight: 16 } : {}} />
          </View>
        }
        back={<ArrowLeft />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      />
      <NavBar
        back={<ArrowLeft />}
        title={
          <View
            style={harmony() ? styles.title : {}}
            onClick={(e) => Taro.showToast({ title: '页面标题' })}
          >
            页面标题
          </View>
        }
        right={
          <>
            <View
              style={harmony() ? { marginRight: 16 } : {}}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
              ariaLabel="编辑"
            >
              编辑
            </View>
            <View style={{ display: 'flex' }} ariaLabel="More">
              <More onClick={(e) => Taro.showToast({ title: 'icon' })} />
            </View>
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      />
    </Space>
  )
}
export default Demo4
