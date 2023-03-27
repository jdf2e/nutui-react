import React from 'react'
import { AtAvatar } from 'taro-ui'
import { Avatar } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class AvatarPage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    const avatarImg =
      'http://storage.360buyimg.com/mtd/home/32443566_635798770100444_2113947400891531264_n1533825816008.jpg'

    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Avatar 头像"></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 圆形头像 */}
          <View className="panel">
            <View className="panel__title">圆形头像</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Avatar circle size="small" url={avatarImg}></Avatar>
                </View>
                <View className="subitem">
                  <Avatar circle url={avatarImg}></Avatar>
                </View>
                <View className="subitem">
                  <Avatar circle size="large" url={avatarImg}></Avatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像 */}
          <View className="panel">
            <View className="panel__title">圆角矩形头像</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Avatar size="small" url={avatarImg}></Avatar>
                </View>
                <View className="subitem">
                  <Avatar url={avatarImg}></Avatar>
                </View>
                <View className="subitem">
                  <Avatar size="large" url={avatarImg}></Avatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆形头像（支持文本） */}
          <View className="panel">
            <View className="panel__title">圆形头像（支持文本）</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Avatar circle size="small" text="凹"></Avatar>
                </View>
                <View className="subitem">
                  <Avatar circle text="凹"></Avatar>
                </View>
                <View className="subitem">
                  <Avatar circle size="large" text="凹"></Avatar>
                </View>
              </View>
            </View>
          </View>

          {/* 圆角矩形头像（支持文本） */}
          <View className="panel">
            <View className="panel__title">圆角矩形头像（支持文本）</View>
            <View className="panel__content">
              <View className="example-item">
                <View className="subitem">
                  <Avatar size="small" text="凹">
                    凹
                  </Avatar>
                </View>
                <View className="subitem">
                  <Avatar text="凹">凹</Avatar>
                </View>
                <View className="subitem">
                  <Avatar size="large" text="凹">
                    凹
                  </Avatar>
                </View>
              </View>
            </View>
          </View>

          {/* openData 头像（仅微信小程序支持） */}
          {Taro.getEnv() === Taro.ENV_TYPE.WEAPP && (
            <View className="panel">
              <View className="panel__title">
                openData 头像（仅微信小程序支持）
              </View>
              <View className="panel__content">
                <View className="example-item">
                  <View className="subitem">
                    <Avatar
                      openData={{ type: 'userAvatarUrl' }}
                      size="small"
                    ></Avatar>
                  </View>
                  <View className="subitem">
                    <Avatar openData={{ type: 'userAvatarUrl' }}></Avatar>
                  </View>
                  <View className="subitem">
                    <Avatar
                      size="large"
                      openData={{ type: 'userAvatarUrl' }}
                    ></Avatar>
                  </View>
                  <View className="subitem">
                    <Avatar
                      size="large"
                      circle
                      openData={{ type: 'userAvatarUrl' }}
                    ></Avatar>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
        {/* E Body */}
      </View>
    )
  }
}
