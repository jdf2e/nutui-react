import React from 'react'
import { Button, Notify } from '@nutui/nutui-react-taro'

import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

type MessageType = 'info' | 'success' | 'error' | 'warning'

export default class ToastPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private handleClick(type: MessageType): void {
    Taro.atMessage({
      message: '消息通知',
      type,
    })
  }

  public render(): JSX.Element {
    return (
      <View className="page toast-page">
        {/* S Header */}
        <DocsHeader title="Message 消息通知" />
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          <View className="panel">
            <View className="panel__title">基本案例</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, '')}>
                  普通消息
                </Button>
              </View>
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 'success')}>
                  成功消息
                </Button>
              </View>
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 'error')}>
                  错误消息
                </Button>
              </View>
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 'warning')}>
                  警告消息
                </Button>
              </View>
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 'info')}>
                  提示消息
                </Button>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
        <Notify />
      </View>
    )
  }
}
