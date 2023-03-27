import React from 'react'
import { AtIndexes } from 'taro-ui'
import { Dialog, Button } from '@nutui/nutui-react-taro'

import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import mockData from '../../navigation/indexes/mock-data'
import './index.scss'

interface ModalPageState {
  [key: string]: boolean
}

export default class ModalPage extends React.Component<{}, ModalPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
      isOpened4: false,
      isOpened5: false,
    }
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true,
    })
  }

  private closeModal = (type: string, msg: string): void => {
    this.setState({
      [`isOpened${type}`]: false,
    })
    Taro.showToast({
      icon: 'none',
      title: msg,
    })
  }

  private closeModalConfirm = (type: string, msg: string): void => {
    this.setState({
      [`isOpened${type}`]: false,
    })

    Taro.showToast({
      icon: 'none',
      title: msg,
    })
  }

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3, isOpened4, isOpened5 } = this.state

    return (
      <View className="page">
        <DocsHeader title="Modal 模态框" />

        <View className="doc-body">
          {/* 基础模态框 */}
          <View className="panel">
            <View className="panel__title">基础模态框</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 1)}>
                  打开基础模态框
                </Button>
              </View>
            </View>
          </View>

          {/* 单个按钮 */}
          <View className="panel">
            <View className="panel__title">单个按钮</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 2)}>
                  打开单个按钮模态框
                </Button>
              </View>
            </View>
          </View>

          {/* 无标题 */}
          <View className="panel">
            <View className="panel__title">无标题</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 3)}>
                  打开无标题模态框
                </Button>
              </View>
            </View>
          </View>

          {/* 简化使用 */}
          <View className="panel">
            <View className="panel__title">简化使用</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 4)}>
                  打开简化使用模态框
                </Button>
              </View>
            </View>
          </View>

          {/* 城市索引 */}
          <View className="panel">
            <View className="panel__title">城市索引</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={this.handleClick.bind(this, 5)}>
                  打开城市索引
                </Button>
              </View>
            </View>
          </View>
        </View>

        {/* 基础模态框 */}
        <Dialog
          title="标题"
          visible={isOpened1}
          onClosed={this.closeModal.bind(this, 1, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 1, '点击了取消')}
          onOk={this.closeModal.bind(this, 1, '点击了确定')}
        >
          <View className="modal-content">
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
            这里是正文内容，欢迎加入京东凹凸实验室
          </View>
        </Dialog>

        {/* 单个按钮 */}
        <Dialog
          title="标题"
          visible={isOpened2}
          noCancelBtn={true}
          onClosed={this.closeModal.bind(this, 2, 'Modal被关闭了')}
          onOk={this.closeModal.bind(this, 1, '点击了确定')}
        >
          <View className="modal-content">
            这里是正文内容，欢迎加入京东凹凸实验室
          </View>
        </Dialog>

        {/* 无标题 */}
        <Dialog
          visible={isOpened3}
          onClosed={this.closeModal.bind(this, 3, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 3, '点击了取消')}
          onConfirm={this.closeModalConfirm.bind(this, 3, '点击了确认')}
          cancelText="取消"
          okText="确认"
        >
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
          这里是正文内容，欢迎加入京东凹凸实验室
        </Dialog>

        {/* 简化使用 */}
        <Dialog
          visible={isOpened4}
          title="标题"
          cancelText="取消"
          okText="确认"
          content={`欢迎加入京东凹凸实验室\n欢迎加入京东凹凸实验室`}
          onClosed={this.closeModal.bind(this, 4, 'Modal被关闭了')}
          onCancel={this.closeModal.bind(this, 4, '点击了取消')}
          onConfirm={this.closeModalConfirm.bind(this, 4, '点击了确认')}
        />

        <Dialog
          visible={isOpened5}
          noFooter={true}
          noOkBtn={true}
          noCancelBtn={true}
        >
          <AtIndexes
            list={mockData}
            topKey="Top"
            customStyle={{ height: '400px' }}
          >
            <View className="custom-area">用户自定义内容</View>
          </AtIndexes>
        </Dialog>
      </View>
    )
  }
}
