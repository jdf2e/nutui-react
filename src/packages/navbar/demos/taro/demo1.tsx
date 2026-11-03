import React from 'react'
import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { NavBar, Space } from '@nutui/nutui-react-taro'
import { ArrowLeftI, CloseI, ShareI } from '@nutui/icons-react-taro'
import { MaterialView } from '../../../materialview/materialview.taro'

const Demo1 = () => {
  return (
    <>
      <Space direction="vertical">
        <NavBar
          title={
            <View className="navbar-title-twoline">
              <Text>灰色背景</Text>
              <Text>毛玻璃</Text>
            </View>
          }
          back={
            <MaterialView className="navbar-iOS26-button" scene="top-solid">
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView className="navbar-iOS26-button" scene="top-solid">
              <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
            </MaterialView>
          }
          onBackClick={() => Taro.showToast({ title: '返回' })}
          className="navbar-iOS26"
          zIndex={0}
        />
        <NavBar
          title={
            <View className="navbar-title-twoline">
              <Text>白色背景</Text>
              <Text>高透</Text>
            </View>
          }
          back={
            <MaterialView className="navbar-iOS26-button" scene="top-plain">
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView className="navbar-iOS26-button" scene="top-plain">
              <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
            </MaterialView>
          }
          onBackClick={() => Taro.showToast({ title: '返回' })}
          className="navbar-iOS26 nut-navbar-white"
          zIndex={0}
        />
        <NavBar
          title="浅色换肤"
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-fair"
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-fair"
            >
              <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
            </MaterialView>
          }
          onBackClick={() => Taro.showToast({ title: '返回' })}
          className="navbar-iOS26 navbar-iOS26-skin-light"
          zIndex={0}
        />
        <NavBar
          title="深色换肤"
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-deep"
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-deep"
            >
              <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
            </MaterialView>
          }
          onBackClick={() => Taro.showToast({ title: '返回' })}
          className="navbar-iOS26 navbar-iOS26-skin-deep"
          zIndex={0}
        />
        <View className="navbar-topbar-wrapper">
          <Space direction="vertical">
            <NavBar
              title="通栏吸顶"
              back={
                <MaterialView className="navbar-iOS26-button" scene="top-plain">
                  <ArrowLeftI />
                  <CloseI />
                </MaterialView>
              }
              right={
                <MaterialView className="navbar-iOS26-button" scene="top-plain">
                  <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
                </MaterialView>
              }
              onBackClick={() => Taro.showToast({ title: '返回' })}
              className="navbar-iOS26 nut-navbar-sticky"
              zIndex={10}
            />
            <NavBar
              title="沉浸式"
              back={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="immersive"
                  darkMode
                >
                  <ArrowLeftI />
                  <CloseI />
                </MaterialView>
              }
              right={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="immersive"
                  darkMode
                >
                  <ShareI onClick={() => Taro.showToast({ title: 'icon' })} />
                </MaterialView>
              }
              onBackClick={() => Taro.showToast({ title: '返回' })}
              className="navbar-iOS26 navbar-iOS26-immersive"
              zIndex={0}
            />
          </Space>
        </View>
      </Space>
    </>
  )
}
export default Demo1
