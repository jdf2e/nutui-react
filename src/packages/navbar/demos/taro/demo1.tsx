import React from 'react'
import { NavBar } from '@nutui/nutui-react-taro'
import { Share, More, Cart, ArrowLeft, Close } from '@nutui/icons-react-taro'
import Taro from '@tarojs/taro'

const Demo1 = () => {
  return (
    <>
      <NavBar
        back={
          <>
            <ArrowLeft size={14} />
            返回
          </>
        }
        right={
          <span
            className="flex-center"
            onClick={(e) => Taro.showToast({ title: 'icon' })}
          >
            <Share size={14} />
          </span>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>订单详情</span>
      </NavBar>
      <NavBar
        right={
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>清空</span>
        }
        left={<Close size={14} />}
        back={<ArrowLeft size={14} />}
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <div className="title">
          <span onClick={(e) => Taro.showToast({ title: '清空' })}>
            浏览记录
          </span>
          <span className="desc">浏览记录</span>
        </div>
      </NavBar>
      <NavBar
        back={<ArrowLeft size={14} />}
        right={
          <>
            <span
              style={{ marginRight: '5px' }}
              onClick={(e) => Taro.showToast({ title: '编辑' })}
            >
              编辑
            </span>
            <More
              size={20}
              onClick={(e) => Taro.showToast({ title: 'icon' })}
            />
          </>
        }
        onBackClick={(e) => Taro.showToast({ title: '返回' })}
      >
        <span onClick={(e) => Taro.showToast({ title: '标题' })}>购物车</span>
        <i
          style={{ marginLeft: '5px' }}
          className="flex-center"
          onClick={(e) => Taro.showToast({ title: 'icon' })}
        >
          <Cart size={14} />
        </i>
      </NavBar>
    </>
  )
}
export default Demo1
