import React from 'react'
import { Badge, Button } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import DocsHeader from '../../components/doc-header'
import './index.scss'

export default class BadgePage extends React.Component {
  public config: Taro.PageConfig = {
    navigationBarTitleText: 'Taro UI',
  }

  public render(): JSX.Element {
    const dot = '···'

    return (
      <View className="page">
        {/* S Header */}
        <DocsHeader title="Badge 徽标"></DocsHeader>
        {/* E Header */}

        {/* S Body */}
        <View className="doc-body">
          {/* 数字 */}
          <View className="panel">
            <View className="panel__title">数字</View>
            <View className="panel__content">
              <View className="badge-item">
                <View className="subitem">
                  <Badge value={10} max={99}>
                    <Button size="large" circle>
                      按钮
                    </Button>
                  </Badge>
                </View>
                <View className="subitem">
                  <Badge value={100} max={99}>
                    <Button size="normal">按钮</Button>
                  </Badge>
                </View>
              </View>
            </View>
          </View>

          {/* 小红点 */}
          <View className="panel">
            <View className="panel__title">小红点</View>
            <View className="panel__content">
              <View className="badge-item">
                <View className="subitem">
                  <Badge dot>
                    <Button size="normal" circle>
                      按钮
                    </Button>
                  </Badge>
                </View>
                <View className="subitem">
                  <Badge dot>
                    <Button size="normal">按钮</Button>
                  </Badge>
                </View>
              </View>
            </View>
          </View>

          {/* 文本 */}
          <View className="panel">
            <View className="panel__title">文本</View>
            <View className="panel__content">
              <View className="badge-item">
                <View className="subitem">
                  <Badge value="NEW">
                    <Button size="normal" circle>
                      按钮
                    </Button>
                  </Badge>
                </View>
                <View className="subitem">
                  <Badge value="NEW">
                    <Button size="normal">按钮</Button>
                  </Badge>
                </View>
              </View>
            </View>
          </View>

          {/* 省略号 */}
          <View className="panel">
            <View className="panel__title">省略号</View>
            <View className="panel__content">
              <View className="badge-item">
                <View className="subitem">
                  <Badge value={dot}>
                    <Button size="normal" circle>
                      按钮
                    </Button>
                  </Badge>
                </View>
                <View className="subitem">
                  <Badge value={dot}>
                    <Button size="normal">按钮</Button>
                  </Badge>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
