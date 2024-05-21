import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import Taro, { pxTransform, redirectTo, navigateTo } from '@tarojs/taro'
// import { ArrowRight, User } from '@nutui/icons-react-taro'
import { ITouchEvent, View, Text } from '@tarojs/components'

const Demo6 = () => {
  const isHarmony = [
    Taro.ENV_TYPE.HARMONY,
    Taro.ENV_TYPE.HARMONYHYBRID,
  ].includes(Taro.getEnv())
  const onJumpclick = (
    event: ITouchEvent | React.MouseEvent<HTMLDivElement, MouseEvent>,
    link: string
  ) => {
    const replace = false
    if (link) {
      replace ? redirectTo({ url: link }) : navigateTo({ url: link })
    }
  }
  return (
    <>
      <Cell.Group>
        <Cell
          className="nutui-cell-clickable"
          title="链接"
          align="center"
          //   extra={<ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title="URL 跳转"
          extra={
            <>
              <View style={{ marginRight: isHarmony ? pxTransform(5) : 5 }}>
                /pages/index/index
              </View>
              {/* <ArrowRight /> */}
            </>
          }
          align="center"
          onClick={(event) => {
            onJumpclick(event, '/pages/index/index')
          }}
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'baseline',
                flexDirection: 'row',
              }}
            >
              <View style={{ fontWeight: isHarmony ? pxTransform(500) : 500 }}>
                我是标题
              </View>
              <View
                style={{
                  color: '#888B94',
                  fontSize: isHarmony ? pxTransform(10) : 10,
                  marginLeft: isHarmony ? pxTransform(5) : 5,
                }}
              >
                我是描述
              </View>
            </View>
          }
          extra={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              More
              {/* <ArrowRight size={12} style={{ marginLeft: 5 }} /> */}
            </View>
          }
        />
        <Cell>
          <View style={{ minHeight: isHarmony ? pxTransform(50) : 50 }}>
            自定义内容
          </View>
        </Cell>
        <Cell
          align="center"
          title={
            <Text
              style={{
                color: '#888B94',
                fontSize: isHarmony ? pxTransform(12) : 12,
              }}
            >
              我是描述
            </Text>
          }
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              {/* <User style={{ marginRight: 5 }} /> */}我是标题
            </View>
          }
          //   extra={<ArrowRight />}
        />
        <Cell>
          <View style={{ minHeight: isHarmony ? pxTransform(50) : 50 }}>
            自定义内容
          </View>
        </Cell>
        <Cell
          align="center"
          extra={
            <Button type="primary" size="small">
              Action
            </Button>
          }
        />
      </Cell.Group>

      <Cell.Group>
        <Cell
          title={
            <View
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                color: 'blue',
              }}
            >
              我是标题
            </View>
          }
        />
        <Cell>
          <View style={{ color: '#26bf26' }}>自定义内容</View>
        </Cell>
      </Cell.Group>
    </>
  )
}
export default Demo6
