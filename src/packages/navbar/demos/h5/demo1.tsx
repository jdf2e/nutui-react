import React from 'react'
import { NavBar, Toast } from '@nutui/nutui-react'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react'

const Demo1 = () => {
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
    <>
      <NavBar
        title="页面标题"
        back={
          <>
            <ArrowLeft />
            返回
          </>
        }
        right={<Share onClick={(e) => Toast.show('icon')} />}
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        title="页面标题"
        right={<Share onClick={(e) => Toast.show('icon')} />}
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        title={
          <div style={{ ...styles.flexCenter, flexDirection: 'column' }}>
            <span style={styles.title} onClick={(e) => Toast.show('标题')}>
              页面标题
            </span>
            <span style={styles.description}>副标题</span>
          </div>
        }
        right={<span onClick={(e) => Toast.show('清空')}>清空</span>}
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show('返回')}
      />
      <NavBar
        back={<ArrowLeft />}
        title={<span onClick={(e) => Toast.show('页面标题')}>页面标题</span>}
        right={
          <>
            <span onClick={(e) => Toast.show('编辑')}>编辑</span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show('返回')}
      />
    </>
  )
}
export default Demo1
