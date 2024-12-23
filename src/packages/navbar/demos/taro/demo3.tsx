import React, { useState } from 'react'
import { NavBar, Tabs, TabPane } from '@nutui/nutui-react-taro'
import Taro from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { ArrowLeft, More } from '@nutui/icons-react-taro'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'

const Demo3 = () => {
  const [tab1value, setTab1value] = useState<string | number>('0')
  const [tab2value, setTab2value] = useState<string | number>('0')

  const isRnAndHarmony = harmonyAndRn()
  return (
    <>
      <NavBar
        back={<ArrowLeft size={20} />}
        right={
          <>
            <View
              style={{ marginRight: pxTransform(5) }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </View>

            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View style={{ width: '100%' }}>
          {isRnAndHarmony ? null : (
            <Tabs
              value={tab1value}
              onChange={(paneKey) => {
                setTab1value(paneKey)
              }}
              style={{
                background: 'transparent',
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
              <TabPane title="Tab 4"> Tab 4 </TabPane>
            </Tabs>
          )}
        </View>
      </NavBar>

      <NavBar
        titleAlign="left"
        back={<ArrowLeft size={20} />}
        right={
          <>
            <Text
              style={{ marginRight: pxTransform(5) }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </Text>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <View>
          {isRnAndHarmony ? null : (
            <Tabs
              className="navbar-tabs"
              align="left"
              activeType="simple"
              value={tab2value}
              onChange={(paneKey) => {
                setTab2value(paneKey)
              }}
            >
              <TabPane title="Tab 1"> Tab 1 </TabPane>
              <TabPane title="Tab 2"> Tab 2 </TabPane>
              <TabPane title="Tab 3"> Tab 3 </TabPane>
            </Tabs>
          )}
        </View>
      </NavBar>
    </>
  )
}
export default Demo3
