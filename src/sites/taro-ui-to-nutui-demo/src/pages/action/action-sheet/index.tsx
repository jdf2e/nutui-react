import React from 'react'
import { ActionSheet, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ActionSheetPageState {
  isOpened1: boolean
  isOpened2: boolean
  isOpened3: boolean
  [key: string]: boolean
}

export default class ActionSheetPage extends React.Component<
  {},
  ActionSheetPageState
> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isOpened1: false,
      isOpened2: false,
      isOpened3: false,
    }
  }

  private handleClick = (type: string): void => {
    this.setState({
      [`isOpened${type}`]: true,
    })
  }

  private handleClose = (name: string): void => {
    this.setState({
      [`isOpened${name}`]: false,
    })
    Taro.showToast({
      title: `第 ${name} 个Action Sheet已经关闭`,
      icon: 'none',
    })
  }

  private handleCancel = (): void => {
    this.showToast('点击了取消按钮')
    this.handleClose(`3`)
  }

  private showToast = (name: string): void => {
    Taro.showToast({
      icon: 'none',
      title: name,
    })
  }

  public render(): JSX.Element {
    const { isOpened1, isOpened2, isOpened3 } = this.state

    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="ActionSheet 动作面板" />
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 无 Title */}
          <View className="panel">
            <View className="panel__title">无标题</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={() => this.handleClick(`1`)}>
                  打开 ActionSheet
                </Button>
              </View>
            </View>
          </View>

          {/* 含标题 */}
          <View className="panel">
            <View className="panel__title">含标题</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={() => this.handleClick(`2`)}>
                  打开 ActionSheet
                </Button>
              </View>
            </View>
          </View>

          {/* 自定义选项 */}
          <View className="panel">
            <View className="panel__title">自定义选项</View>
            <View className="panel__content">
              <View className="example-item">
                <Button onClick={() => this.handleClick(`3`)}>
                  打开 ActionSheet
                </Button>
              </View>
            </View>
          </View>
        </View>

        <ActionSheet
          cancelTxt="取消"
          visible={isOpened1}
          menuItems={[
            {
              name: '按钮一',
            },
            {
              name: '按钮二',
            },
            {
              name: '选项三',
            },
          ]}
          onChoose={(itemParams) => this.showToast(itemParams.name)}
          onCancel={() => this.handleClose(`1`)}
        ></ActionSheet>

        <ActionSheet
          cancelTxt="取消"
          visible={isOpened2}
          title="清除位置信息后， 别人将不能查看到你"
          menuItems={[
            {
              name: '按钮一',
            },
            {
              name: '按钮二',
            },
            {
              name: '选项三',
            },
          ]}
          onChoose={(itemParams) => this.showToast(itemParams.name)}
          onCancel={() => this.handleClose(`2`)}
        ></ActionSheet>

        <ActionSheet
          cancelTxt="取消"
          visible={isOpened3}
          onCancel={this.handleCancel}
          chooseTagValue="清除位置信息并退出"
          title="清除位置信息后， 别人将不能查看到你"
          menuItems={[
            {
              name: '按钮一',
            },
            {
              name: '按钮二',
            },
            {
              name: '清除位置信息并退出',
              tip: '成功清除位置',
            },
          ]}
          onChoose={(itemParams) =>
            this.showToast(itemParams.tip || itemParams.name)
          }
        ></ActionSheet>
      </View>
    )
  }
}
