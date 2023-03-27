import React from 'react'
import { AtFab, AtForm } from 'taro-ui'
import { Button } from '@nutui/nutui-react-taro'
import { Form, Text, View } from '@tarojs/components'
import { CommonEvent } from '@tarojs/components/types/common'
import Taro, { ShareAppMessageReturn } from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

interface ButtonPageState {
  isWEAPP: boolean
  isALIPAY: boolean
}

export default class ButtonPage extends React.Component<{}, ButtonPageState> {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public constructor(props: any) {
    super(props)
    this.state = {
      isWEAPP: Taro.getEnv() === Taro.ENV_TYPE.WEAPP,
      isALIPAY: Taro.getEnv() === Taro.ENV_TYPE.ALIPAY,
    }
  }

  private onButtonClick(): void {
    const content = [...arguments].find((item) => typeof item === 'string')
    const ENV = Taro.getEnv()
    if (ENV === 'WEAPP') {
      Taro.showModal({
        content: content || '您点击了按钮！',
        showCancel: false,
      })
    }
    if (ENV === 'WEB') {
      alert(content || '您点击了按钮！')
    }
  }

  public onShareAppMessage(): ShareAppMessageReturn {
    return {
      title: 'Taro UI',
      path: '/pages/index/index',
      imageUrl: 'http://storage.360buyimg.com/mtd/home/share1535013100318.jpg',
    }
  }

  private onContact(event: CommonEvent): void {
    Taro.showToast({
      title: `呼起客服回调: ${event.detail}`,
    })
  }

  private onSubmit(event: CommonEvent): void {
    Taro.showModal({
      content: `submit event detail: ${JSON.stringify(event.detail)}`,
      showCancel: false,
    })
  }

  private onReset(event: CommonEvent): void {
    Taro.showModal({
      content: `reset event detail: ${JSON.stringify(
        event.detail || '无数据'
      )}`,
      showCancel: false,
    })
  }

  private onGetUserInfo(event: CommonEvent): void {
    Taro.showModal({
      content: `getUserInfo event detail: ${JSON.stringify(event.detail)}`,
    })
  }

  private onOpenSetting(event: CommonEvent): void {
    Taro.showToast({
      title: `onOpenSetting: ${event.detail}`,
    })
  }

  public render(): JSX.Element {
    const { isWEAPP, isALIPAY } = this.state

    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Button 按钮"></DocsHeader>
        {/* E Header */}
        {/* S Body */}
        <View className="doc-body">
          {/* 主操作 */}
          <View className="panel">
            <View className="panel__title">主操作</View>
            <View className="panel__content">
              <View className="btn-item">
                <Button type="primary" onClick={this.onButtonClick.bind(this)}>
                  主操作按钮
                </Button>
              </View>
              <View className="btn-item">
                <Button
                  type="primary"
                  loading
                  onClick={this.onButtonClick.bind(this)}
                >
                  Loading
                </Button>
              </View>
              <View className="btn-item">
                <Button type="primary" disabled>
                  不可操作
                </Button>
              </View>
            </View>
          </View>

          {/* 次要操作 */}
          <View className="panel">
            <View className="panel__title">次要操作</View>
            <View className="panel__content">
              <View className="btn-item">
                <Button type="secondary">次操作按钮</Button>
              </View>
              <View className="btn-item">
                <Button type="secondary" loading>
                  Loading
                </Button>
              </View>
              <View className="btn-item">
                <Button type="secondary" disabled>
                  不可操作
                </Button>
              </View>
            </View>
          </View>

          {/* 次次要操作 */}
          <View className="panel">
            <View className="panel__title">次次要操作</View>
            <View className="panel__content">
              <View className="btn-item">
                <Button>次次要操作按钮</Button>
              </View>
              <View className="btn-item">
                <Button loading>Loading</Button>
              </View>
              <View className="btn-item">
                <Button disabled>不可操作</Button>
              </View>
            </View>
          </View>

          {/* 通栏 */}
          <View className="panel">
            <View className="panel__title">通栏按钮</View>
            <View className="panel__content" style="padding:0">
              <View className="btn-item">
                <Button type="primary" full>
                  主操作按钮
                </Button>
              </View>
              <View className="btn-item">
                <Button type="secondary" full>
                  次操作按钮
                </Button>
              </View>
              <View className="btn-item">
                <Button full>次次要操作按钮</Button>
              </View>
              <View className="btn-item">
                <Button disabled full>
                  不可操作
                </Button>
              </View>
            </View>
          </View>

          {/* 小按钮 */}
          <View className="panel">
            <View className="panel__title">小按钮</View>
            <View className="panel__content">
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small">
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small">
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button size="small">按钮</Button>
                </View>
              </View>
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small" loading></Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small" loading></Button>
                </View>
                <View className="subitem">
                  <Button size="small" loading></Button>
                </View>
              </View>
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small" disabled>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small" disabled>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button size="small" disabled>
                    按钮
                  </Button>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角按钮 */}
          <View className="panel">
            <View className="panel__title">圆角按钮</View>
            <View className="panel__content">
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small" circle>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small" circle>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button size="small" circle>
                    按钮
                  </Button>
                </View>
              </View>
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small" loading circle></Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small" loading circle></Button>
                </View>
                <View className="subitem">
                  <Button size="small" loading circle></Button>
                </View>
              </View>
              <View className="btn-item">
                <View className="subitem">
                  <Button type="primary" size="small" disabled circle>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button type="secondary" size="small" disabled circle>
                    按钮
                  </Button>
                </View>
                <View className="subitem">
                  <Button size="small" disabled circle>
                    按钮
                  </Button>
                </View>
              </View>
            </View>
          </View>

          {/* 浮动按钮 */}
          {!isALIPAY && (
            <View className="panel">
              <View className="panel__title">浮动按钮</View>
              <View className="panel__content">
                <View className="at-article__p">右侧是浮动操作按钮👉</View>
                <View className="btn-demo-fab">
                  <AtFab onClick={this.onButtonClick.bind(this)}>
                    <Text className="at-fab__icon at-icon at-icon-menu"></Text>
                  </AtFab>
                </View>
              </View>
            </View>
          )}

          {/* 微信小程序 button 属性（仅部分支持） */}
          {isWEAPP && (
            <View className="panel">
              <View className="panel__title">微信小程序 button 属性</View>
              <View className="panel__content">
                <View className="btn-item">
                  <Button openType="share" type="primary">
                    分享
                  </Button>
                </View>
                <View className="btn-item">
                  <Button
                    openType="getUserInfo"
                    onGetUserInfo={this.onGetUserInfo.bind(this)}
                    type="primary"
                  >
                    登录授权
                  </Button>
                </View>
                <View className="btn-item">
                  <Button
                    openType="contact"
                    onContact={this.onContact.bind(this)}
                    type="secondary"
                  >
                    联系 Taro UI 客服
                  </Button>
                </View>
                <View className="btn-item">
                  <Button
                    openType="openSetting"
                    onOpenSetting={this.onOpenSetting.bind(this)}
                    type="secondary"
                  >
                    打开设置
                  </Button>
                </View>
                <View className="btn-item">
                  <Form
                    reportSubmit
                    onSubmit={this.onSubmit.bind(this)}
                    onReset={this.onReset.bind(this)}
                  >
                    <View className="btn-item">
                      <Button type="primary" formType="submit">
                        form submit
                      </Button>
                    </View>
                    <View className="btn-item">
                      <Button type="secondary" formType="reset">
                        form reset
                      </Button>
                    </View>
                  </Form>
                </View>
              </View>
            </View>
          )}

          {/* 支付宝小程序 button 属性（仅部分支持） */}
          {isALIPAY && (
            <View className="panel">
              <View className="panel__title">支付宝小程序 button 属性</View>
              <View className="panel__content demo-button">
                <View className="btn-item">
                  <Button openType="share" type="primary">
                    分享
                  </Button>
                </View>
                <View className="btn-item">
                  <Button openType="getAuthorize" type="primary">
                    登录授权
                  </Button>
                </View>
                <AtForm
                  onSubmit={this.onSubmit.bind(this)}
                  onReset={this.onReset.bind(this)}
                >
                  <View className="btn-item">
                    <Button formType="submit" type="primary">
                      form submit
                    </Button>
                  </View>
                  <View className="btn-item">
                    <Button formType="reset" type="primary">
                      form reset
                    </Button>
                  </View>
                </AtForm>
              </View>
            </View>
          )}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
