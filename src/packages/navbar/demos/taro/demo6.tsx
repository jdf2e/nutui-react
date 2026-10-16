import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import { Text, View } from '@tarojs/components'
import { NavBar, TabPane, Tabs, Space } from '@nutui/nutui-react-taro'
import { ArrowLeft, More } from '@nutui/icons-react-taro'
import { MaterialView } from '../../../materialview/materialview.taro'

const Demo6 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  return (
    <Space direction="vertical">
      <NavBar
        back={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <ArrowLeft />
          </MaterialView>
        }
        right={
          <MaterialView className="navbar-iOS26-button" scene="top-solid">
            <Text onClick={() => Taro.showToast({ title: '编辑' })}>编辑</Text>
            <More onClick={() => Taro.showToast({ title: 'icon' })} />
          </MaterialView>
        }
        onBackClick={() => Taro.showToast({ title: '返回' })}
        className="navbar-iOS26"
        zIndex={0}
      >
        <View style={{ width: '100%' }}>
          <Tabs
            value={tab1value}
            onChange={(paneKey) => {
              setTab1value(paneKey)
            }}
            style={{
              '--nutui-tabs-titles-background-color': 'transparent',
              '--nutui-tabs-titles-item-active-font-size':
                'calc(18px * var(--nut-scale-font, var(--nut-scale-f, 1)))',
            }}
            align="left"
          >
            <TabPane title="Tab 1"> Tab 1 </TabPane>
            <TabPane title="Tab 2"> Tab 2 </TabPane>
          </Tabs>
        </View>
      </NavBar>
    </Space>
  )
}
export default Demo6
