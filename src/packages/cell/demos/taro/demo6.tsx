import React from 'react'
import { Cell } from '@nutui/nutui-react-taro'
// import { ArrowRight, User } from '@nutui/icons-react-taro'
import { redirectTo, navigateTo } from '@tarojs/taro'
import { ITouchEvent, View } from '@tarojs/components'

const Demo6 = () => {
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
              <View style={{ marginRight: 5 }}>/pages/index/index</View>
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
                alignItems: 'flex-end',
                flexDirection: 'row',
              }}
            >
              <View style={{ fontWeight: '500' }}>我是标题</View>
              <View
                style={{
                  color: '#8C8C8C',
                  fontSize: 10,
                  marginLeft: 5,
                  lineHeight: 1.5,
                }}
              >
                我是描述
              </View>
            </View>
          }
          extra={
            <View
              style={{
                display: 'inline-flex',
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
          <View style={{ minHeight: 50 }}>自定义内容</View>
        </Cell>
        <Cell
          align="center"
          title={
            <View
              style={{
                color: '#8C8C8C',
                fontSize: 12,
              }}
            >
              我是描述
            </View>
          }
          extra="Action按钮"
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
          <View style={{ minHeight: 50 }}>自定义内容</View>
        </Cell>
        <Cell align="center" extra="Action按钮" />
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
