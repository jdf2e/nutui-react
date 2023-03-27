import React from 'react'
import { Steps, Step } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class TimelinePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    return (
      <View className="page">
        <DocsHeader title="Timeline 时间轴"></DocsHeader>

        <View className="doc-body">
          {/* 基础用法 */}
          <View className="panel">
            <View className="panel__title">基础用法</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps direction="vertical">
                  {[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐' },
                    { title: '上班' },
                    { title: '睡觉' },
                  ].map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        icon="check-normal"
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className="panel">
            <View className="panel__title">自定义颜色</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps direction="vertical" progressDot>
                  {[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐', color: 'green' },
                    { title: '上班', color: 'red' },
                    { title: '睡觉', color: 'yellow' },
                  ].map((item, index) => {
                    return (
                      <Step title={item.title} activeIndex={index + 1}></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 自定义图标 */}
          <View className="panel">
            <View className="panel__title">自定义图标</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps direction="vertical">
                  {[
                    { title: '刷牙洗脸', icon: 'checked' },
                    { title: '吃早餐', icon: 'clock' },
                    { title: '上班', icon: 'clock' },
                    { title: '睡觉', icon: 'clock' },
                  ].map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        icon={item.icon}
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 幽灵节点 */}
          <View className="panel">
            <View className="panel__title">幽灵节点</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps direction="vertical">
                  {[
                    { title: '刷牙洗脸' },
                    { title: '吃早餐' },
                    { title: '上班' },
                    { title: '睡觉' },
                  ].map((item, index) => {
                    return (
                      <Step title={item.title} activeIndex={index + 1}></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>

          {/* 丰富内容 */}
          <View className="panel">
            <View className="panel__title">丰富内容</View>
            <View className="panel__content">
              <View className="example-item">
                <Steps direction="vertical">
                  {[
                    {
                      title: '刷牙洗脸',
                      content: ['大概8:00'],
                      icon: 'checklist',
                    },
                    {
                      title: '吃早餐',
                      content: ['牛奶+面包', '餐后记得吃药'],
                      icon: 'clock',
                    },
                    {
                      title: '上班',
                      content: ['查看邮件', '写PPT', '发送PPT给领导'],
                      icon: 'clock',
                    },
                    { title: '睡觉', content: ['不超过23:00'], icon: 'clock' },
                  ].map((item, index) => {
                    return (
                      <Step
                        title={item.title}
                        activeIndex={index + 1}
                        icon={item.icon}
                        renderContent={() => {
                          return item.content.map((cont) => {
                            return <span>{cont}</span>
                          })
                        }}
                      ></Step>
                    )
                  })}
                </Steps>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
