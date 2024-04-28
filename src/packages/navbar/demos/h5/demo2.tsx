import React from 'react'
import { NavBar, Toast } from '@nutui/nutui-react'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react'

const Demo2 = () => {
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
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
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
          <span className="flex-center" onClick={(e) => Toast.show('icon')}>
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
        <div className="title">
          <span onClick={(e) => Toast.show('标题')}>浏览记录</span>
          <span className="desc">浏览记录</span>
        </div>
      </NavBar>
      <NavBar
        titleAlign="left"
        back={<ArrowLeft />}
        right={
          <>
            <span onClick={(e) => Toast.show('编辑')}>编辑</span>
            <More onClick={(e) => Toast.show('icon')} />
          </>
        }
        onBackClick={(e) => Toast.show('返回')}
      >
        <span onClick={(e) => Toast.show('标题')}>购物车</span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Toast.show('icon')}
        >
          <Cart />
        </i>
      </NavBar>
    </>
  )
}
export default Demo2
