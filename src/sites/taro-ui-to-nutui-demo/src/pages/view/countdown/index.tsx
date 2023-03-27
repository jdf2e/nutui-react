import React from 'react'
import { CountDown } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class CountDownPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private onTimeUp(): void {
    Taro.showToast({
      title: '时间到',
      icon: 'success',
      duration: 2000,
    })
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="CountDown 倒计时"></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className="doc-body">
          {/* 一般用法 */}
          <View className="panel">
            <View className="panel__title">一般用法</View>
            <View className="panel__content">
              <CountDown endTime={Date.now() + 70000} />
            </View>
            <View className="panel__content">
              <CountDown />
            </View>
            <View className="panel__content">
              <CountDown />
            </View>
            <View className="panel__content">
              <CountDown />
            </View>
          </View>

          {/* 自定义格式化 */}
          <View className="panel">
            <View className="panel__title">自定义格式化</View>
            <View className="panel__content">
              <CountDown />
            </View>
          </View>

          {/* 卡片式 */}
          <View className="panel">
            <View className="panel__title">卡片式</View>
            <View className="panel__content">
              <CountDown />
            </View>
            <View className="panel__content">
              <CountDown />
            </View>
          </View>

          {/* 自定义倒计时回调事件 */}
          <View className="panel">
            <View className="panel__title">自定义倒计时回调事件</View>
            <View className="panel__content">
              <CountDown />
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
