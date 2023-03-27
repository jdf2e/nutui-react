import React from 'react'
import { NoticeBar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class NoticebarPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  private onGotoMore(): void {
    if (Taro.getEnv() === Taro.ENV_TYPE.WEB) {
      alert('您点击了更多!')
      return
    }

    Taro.showModal({
      content: '点击了更多!',
      cancelText: '取消',
    })
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="NoticeBar 通告栏"></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 文字 */}
          <View className="panel">
            <View className="panel__title">文字</View>
            <View className="panel__content">
              <View className="bar-item">
                <NoticeBar leftIcon="close" scrollable={false}>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar leftIcon="close" scrollable={false} wrapable>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
            </View>
          </View>

          {/* 跑马灯 */}
          <View className="panel">
            <View className="panel__title">跑马灯</View>
            <View className="panel__content">
              <View className="bar-item">
                <NoticeBar leftIcon="close">
                  [纯文字]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png">
                  [带icon]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar leftIcon="close">
                  [超长文本]这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏[结束]
                </NoticeBar>
              </View>
            </View>
          </View>

          {/* 图标 */}
          <View className="panel">
            <View className="panel__title">图标</View>
            <View className="panel__content">
              <View className="bar-item">
                <NoticeBar scrollable={false}>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar scrollable={false} wrapable>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
            </View>
          </View>

          {/* 查看更多 */}
          <View className="panel">
            <View className="panel__title">查看更多</View>
            <View className="panel__content">
              <View className="bar-item">
                <NoticeBar showMore onGotoMore={this.onGotoMore.bind(this)}>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar showMore onGotoMore={this.onGotoMore.bind(this)}>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar
                  showMore
                  moreText="更多内容"
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar
                  showMore
                  moreText="更多内容"
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
            </View>
          </View>

          {/* 关闭按钮 */}
          <View className="panel">
            <View className="panel__title">关闭按钮</View>
            <View className="panel__content">
              <View className="bar-item">
                <NoticeBar closeMode>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar closeMode>
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar
                  closeMode
                  onGotoMore={this.onGotoMore.bind(this)}
                  showMore
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar
                  closeMode
                  showMore
                  onGotoMore={this.onGotoMore.bind(this)}
                >
                  [单行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar closeMode wrapable>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar closeMode wrapable>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
              <View className="bar-item">
                <NoticeBar closeMode wrapable>
                  [多行]
                  这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏，这是NoticeBar通告栏
                </NoticeBar>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
