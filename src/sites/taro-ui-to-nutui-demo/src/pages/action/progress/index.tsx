import React from 'react'
import { Progress, Button, Icon } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

const OFFSET = 15

interface ProgressPageState {
  percentage: number
}

export default class ProgressPage extends React.Component<
  {},
  ProgressPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      percentage: 0,
    }
  }

  private reduce = (): void => {
    let { percentage } = this.state
    if (percentage === 0) {
      return
    }

    percentage = percentage - OFFSET < 0 ? 0 : percentage - OFFSET

    this.setState({
      percentage,
    })
  }

  private increase = (): void => {
    let { percentage } = this.state
    if (percentage === 100) {
      return
    }

    percentage = percentage + OFFSET > 100 ? 100 : percentage + OFFSET

    this.setState({
      percentage,
    })
  }

  public render(): JSX.Element {
    const { percentage } = this.state
    return (
      <View className="page progress-page">
        {/* S Header */}
        <DocsHeader title="Progress 进度条" />
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 基础进度条 */}
          <View className="panel">
            <View className="panel__title">基础进度条</View>
            <View className="panel__content">
              <View className="example-item">
                <Progress percentage={25} />
              </View>
              <View className="example-item">
                <Progress percentage={50} />
              </View>
              <View className="example-item">
                <Progress percentage={75} />
              </View>
            </View>
          </View>

          {/* 隐藏进度文案 */}
          <View className="panel">
            <View className="panel__title">隐藏进度文案</View>
            <View className="panel__content">
              <View className="example-item">
                <Progress percentage={25} showText={false} />
              </View>
              <View className="example-item">
                <Progress percentage={75} showText={false} />
              </View>
            </View>
          </View>

          {/* 自定义进度条线宽 */}
          <View className="panel">
            <View className="panel__title">自定义进度条线宽</View>
            <View className="panel__content">
              <View className="example-item">
                <Progress percentage={25} strokeWidth={`6`} />
              </View>
              <View className="example-item">
                <Progress percentage={50} strokeWidth={`8`} />
              </View>
              <View className="example-item">
                <Progress percentage={75} strokeWidth={`10`} />
              </View>
            </View>
          </View>

          {/* 自定义颜色 */}
          <View className="panel">
            <View className="panel__title">自定义颜色</View>
            <View className="panel__content">
              <View className="example-item">
                <Progress percentage={25} strokeColor="#FF4949" />
              </View>
              <View className="example-item">
                <Progress percentage={50} strokeColor="#13CE66" />
              </View>
              <View className="example-item">
                <Progress percentage={75} strokeColor="#FFC82C" />
              </View>
            </View>
          </View>

          {/* 不同的状态 */}
          <View className="panel">
            <View className="panel__title">不同的状态</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="example-item__desc">暂停</View>
                <Progress percentage={25} />
              </View>
              <View className="example-item">
                <View className="example-item__desc">进行中</View>
                <Progress percentage={50} />
              </View>
              <View className="example-item">
                <View className="example-item__desc">错误</View>
                <Progress
                  percentage={75}
                  textType="icon"
                  iconName="circle-close"
                />
              </View>
              <View className="example-item">
                <View className="example-item__desc">已完成</View>
                <Progress percentage={100} textType="icon" />
              </View>
            </View>
          </View>

          {/* 实际案例 */}
          <View className="panel">
            <View className="panel__title">实际案例</View>
            <View className="panel__content">
              <View className="example-item">
                <Progress percentage={percentage} />
                <View className="example-item__buttons">
                  <View className="btn">
                    <Button size="small" onClick={this.reduce}>
                      <Icon name="minus" size={12} />
                    </Button>
                  </View>
                  <View className="btn">
                    <Button size="small" onClick={this.increase}>
                      <Icon name="plus" size={12} />
                    </Button>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        {/* E Body */}
      </View>
    )
  }
}
