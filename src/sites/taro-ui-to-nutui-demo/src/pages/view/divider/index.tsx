import React from 'react'
import { Divider, Icon } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class LoadMorePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Divider 分隔线"></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 文字 */}
          <View className="panel">
            <View className="panel__title">一般用法</View>
            <View className="panel__content no-padding">
              <Divider>分割线</Divider>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className="panel">
            <View className="panel__title">自定义颜色</View>
            <View className="panel__content no-padding">
              <Divider style={{ color: '#ed3f14', borderColor: '#ed3f14' }}>
                没有更多了
              </Divider>
              <Divider style={{ color: '#ff9900', borderColor: '#ff9900' }}>
                没有更多了
              </Divider>
              <Divider style={{ color: '#2d8cf0', borderColor: '#2d8cf0' }}>
                没有更多了
              </Divider>
            </View>
          </View>

          {/* 自定义内容 */}
          <View className="panel">
            <View className="panel__title">自定义内容</View>
            <View className="panel__content no-padding">
              <Divider>
                <Icon name="checked"></Icon>
              </Divider>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
