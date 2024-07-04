import React from 'react'
import { Button, Cell } from '@nutui/nutui-react-taro'
import { navigateTo, redirectTo } from '@tarojs/taro'
import { ArrowRight, User } from '@nutui/icons-react-taro'
import { ITouchEvent, Text, View } from '@tarojs/components'
import pxTransform from '@/utils/px-transform'
import { harmonyAndRn } from '@/utils/platform-taro'
import '../../demo.scss'

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
          extra={harmonyAndRn() ? null : <ArrowRight />}
        />
        <Cell
          className="nutui-cell-clickable"
          title="URL 跳转"
          extra={
            <>
              <View
                className="nutui-cell-demo-text2"
                style={{ marginRight: pxTransform(5) }}
              >
                /pages/index/index
              </View>
              {harmonyAndRn() ? null : <ArrowRight />}
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
              <View
                className="nutui-cell-demo-text"
                style={{ fontWeight: pxTransform(500) }}
              >
                我是标题
              </View>
              <View
                style={{
                  color: '#888B94',
                  fontSize: pxTransform(10),
                  marginLeft: pxTransform(5),
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
              {harmonyAndRn() ? null : (
                <ArrowRight size={12} style={{ marginLeft: 5 }} />
              )}
            </View>
          }
        />
        <Cell>
          <View
            className="nutui-cell-demo-text"
            style={{ minHeight: pxTransform(50) }}
          >
            自定义内容
          </View>
        </Cell>
        <Cell
          align="center"
          title={
            <Text
              style={{
                color: '#888B94',
                fontSize: pxTransform(12),
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
              className="nutui-cell-demo-text"
              style={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              {harmonyAndRn() ? null : <User style={{ marginRight: 5 }} />}
              我是标题
            </View>
          }
          extra={harmonyAndRn() ? null : <ArrowRight />}
        />
        <Cell>
          <View
            className="nutui-cell-demo-text"
            style={{ minHeight: pxTransform(50) }}
          >
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
