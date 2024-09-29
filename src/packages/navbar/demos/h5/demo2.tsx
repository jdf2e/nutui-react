import React from 'react'
import { NavBar, Toast } from '@nutui/nutui-react'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react'

const Demo2 = () => {
  const styles = {
    flexCenter: {
      display: 'flex',
      aliginItems: 'center',
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
        titleAlign="left"
        back={
          <>
            <ArrowLeft />
            返回
          </>
        }
        right={
          <span style={styles.flexCenter} onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show('返回')}
      >
        订单详情
      </NavBar>
      <NavBar
        titleAlign="left"
        right={
          <span style={styles.flexCenter} onClick={(e) => Toast.show('icon')}>
            <Share />
          </span>
        }
        onBackClick={(e) => Toast.show('返回')}
      >
        订单详情
      </NavBar>
      <NavBar
        titleAlign="left"
        right={<span onClick={(e) => Toast.show('清空')}>清空</span>}
        left={<Close />}
        back={<ArrowLeft />}
        onBackClick={(e) => Toast.show('返回')}
      >
        <div style={{ ...styles.flexCenter, flexDirection: 'column' }}>
          <span style={styles.title} onClick={(e) => Toast.show('标题')}>
            浏览记录
          </span>
          <span style={styles.description}>浏览记录</span>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Toast.show('编辑')}
            >
              编辑
            </span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show('返回')}
      >
        <span onClick={(e) => Toast.show('标题')}>购物车</span>
        <i
          style={{ ...styles.flexCenter, margin: '0 5px' }}
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
    </>
  )
}
export default Demo2
