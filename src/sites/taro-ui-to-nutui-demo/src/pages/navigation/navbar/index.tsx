import React from 'react'
import { NavBar, Icon } from '@nutui/nutui-react-taro'

import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class Index extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private handleClick(title: string): void {
    Taro.showToast({
      title,
      duration: 2000,
      icon: 'success',
    })
  }

  private clickReturn(): void {
    Taro.showToast({
      title: '返回',
      duration: 2000,
      icon: 'success',
    })
  }

  private clickMy(): void {
    Taro.showToast({
      title: '我的',
      duration: 2000,
      icon: 'success',
    })
  }

  private clickList(): void {
    Taro.showToast({
      title: '功能列表',
      duration: 2000,
      icon: 'success',
    })
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        <DocsHeader title="NavBar 导航栏"></DocsHeader>

        <View className="doc-body">
          {/* 基础用法 */}
          <View className="panel">
            <View className="panel__title">基础用法</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <NavBar
                  onClickBack={this.handleClick.bind(this, '返回')}
                  title="NavBar 导航栏示例"
                />
              </View>
              <View className="example-item">
                <NavBar
                  onClickBack={this.handleClick.bind(this, '返回')}
                  title="NavBar 导航栏示例"
                >
                  <Icon name="category" slot="right"></Icon>
                </NavBar>
              </View>
              <View className="example-item">
                <NavBar
                  onClickBack={this.handleClick.bind(this, '返回')}
                  title="NavBar 导航栏示例"
                >
                  <Icon name="my2" slot="right"></Icon>
                  <Icon name="my2" slot="right"></Icon>
                </NavBar>
              </View>
            </View>
          </View>

          {/* 自定义左上角文案 */}
          <View className="panel">
            <View className="panel__title">自定义左上角文案</View>
            <View className="panel__content no-padding">
              <View className="example-item">
                <NavBar
                  onClickBack={this.handleClick.bind(this, '返回')}
                  title="NavBar 导航栏示例"
                  leftText="返回"
                />
              </View>
              <View className="example-item">
                <NavBar
                  onClickBack={this.handleClick.bind(this, '返回')}
                  title="NavBar 导航栏示例"
                  leftShow={false}
                  leftText="返回"
                />
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className="panel">
            <View className="panel__title">自定义颜色</View>
            <View className="panel__content no-padding">
              <NavBar
                onClickIcon={this.clickList.bind(this)}
                onClickRight={this.clickMy.bind(this)}
                onClickBack={this.clickReturn.bind(this)}
                title="NavBar 导航栏示例"
                leftText="返回"
                desc="编辑"
                className="navbar-custom"
              >
                <Icon name="my2" slot="right"></Icon>
              </NavBar>
            </View>
          </View>

          {/* 自定义图标样式 */}
          <View className="panel">
            <View className="panel__title">自定义图标样式</View>
            <View className="panel__content no-padding">
              <NavBar
                onClickIcon={this.clickList.bind(this)}
                onClickRight={this.clickMy.bind(this)}
                onClickBack={this.clickReturn.bind(this)}
                title="NavBar 导航栏示例"
                leftText="返回"
              />
            </View>
          </View>

          {/* 无下划线 */}
          <View className="panel">
            <View className="panel__title">无下划线</View>
            <View className="panel__content no-padding">
              <NavBar
                border={false}
                onClickIcon={this.clickList.bind(this)}
                onClickRight={this.clickMy.bind(this)}
                onClickBack={this.clickReturn.bind(this)}
                title="NavBar 导航栏示例"
                leftText="返回"
              />
            </View>
          </View>
        </View>
      </View>
    )
  }
}
