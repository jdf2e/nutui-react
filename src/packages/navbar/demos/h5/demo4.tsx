import React from 'react'
import { NavBar, Toast, Space } from '@nutui/nutui-react'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react'

const Demo4 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '26px',
    },
    description: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      lineHeight: '16px',
    },
  }
  return (
    <Space direction="vertical">
      <NavBar
        title="页面标题"
        back={
          <>
            <ArrowLeft />
            返回
          </>
        }
        right={
          <span style={{ display: 'flex' }} aria-label="Share">
            <Share onClick={(e) => Toast.show('icon')} />
          </span>
        }
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        title="页面标题"
        right={
          <span style={{ display: 'flex' }} aria-label="Share">
            <Share onClick={(e) => Toast.show('icon')} />
          </span>
        }
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        title={
          <div style={{ ...styles.flexCenter, flexDirection: 'column' }}>
            <span
              style={styles.title}
              onClick={(e) => Toast.show('标题')}
              aria-label="页面标题"
            >
              页面标题
            </span>
            <span style={styles.description} aria-label="副标题">
              副标题
            </span>
          </div>
        }
        right={
          <span onClick={(e) => Toast.show('清空')} aria-label="清空">
            清空
          </span>
        }
        left={
          <span style={{ display: 'flex' }} aria-label="close">
            <Close />
          </span>
        }
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        back={<ArrowLeft />}
        title={<span onClick={(e) => Toast.show('页面标题')}>页面标题</span>}
        right={
          <>
            <span onClick={(e) => Toast.show('编辑')} aria-label="编辑">
              编辑
            </span>
            <span style={{ display: 'flex' }} aria-label="more">
              <More onClick={(e) => Toast.show('icon')} />
            </span>
          </>
        }
        onBackClick={(e) => Toast.show('返回')}
      />
    </Space>
  )
}
export default Demo4
