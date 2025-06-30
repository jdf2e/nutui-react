import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavBar, TabPane, Tabs, harmony, Space } from '@nutui/nutui-react-taro'
import { ArrowLeft, More } from '@nutui/icons-react-taro'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')
  const marginStyle = harmony() ? { marginRight: 16 } : {}
  return (
    <Space direction="vertical">
      <NavBar
        style={{ '--nutui-navbar-background': 'transparent' }}
        back={<ArrowLeft />}
        right={
          <>
            <View
              onClick={(e) => Taro.showToast({ title: '编辑' })}
              style={marginStyle}
            >
              编辑
            </View>
            <More onClick={(e) => Taro.showToast({ title: 'icon' })} />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-gap': 0,
              '--nutui-tabs-titles-background-color': 'transparent',
            }}
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
            <TabPane title="Tab 3"> Tab 3 </TabPane>
          </Tabs>
        </View>
      </NavBar>
      <NavBar
        style={{
          '--nutui-navbar-background': '#ff0f23',
          '--nutui-navbar-color': '#fff',
        }}
        back={<ArrowLeft />}
        right={
          <>
            <View
              onClick={(e) => Taro.showToast({ title: '编辑' })}
              style={marginStyle}
            >
              编辑
            </View>
            <More onClick={(e) => Taro.showToast({ title: 'icon' })} />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View>
          <Tabs
            style={{
              '--nutui-tabs-titles-gap': 0,
              '--nutui-tabs-titles-background-color': 'transparent',
              '--nutui-tabs-titles-item-color': '#fff',
              '--nutui-color-title': 'white',
            }}
            align="left"
            activeType="simple"
            value={tab2value}
            onChange={(paneKey) => {
              setTab2value(paneKey)
            }}
          >
            <TabPane title="Tab1"> Tab1 </TabPane>
            <TabPane title="Tab2"> Tab2 </TabPane>
          </Tabs>
        </View>
      </NavBar>
    </Space>
  )
}
export default Demo3
