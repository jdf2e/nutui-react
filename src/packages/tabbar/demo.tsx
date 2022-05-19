import React from 'react'
import { Tabbar } from './tabbar'
import TabbarItem from '../tabbaritem'

const TabbarDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Tabbar
          tabSwitch={(child, idx) => {
            console.log(idx);
          }}
        >
          <TabbarItem tabTitle="首页" icon="home" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
          <TabbarItem tabTitle="购物车" icon="cart" />
          <TabbarItem tabTitle="我的" icon="my" />
        </Tabbar>

        <h2>自定义选中</h2>
        <Tabbar visible={2}>
          <TabbarItem tabTitle="首页" icon="home" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
          <TabbarItem tabTitle="购物车" icon="cart" />
          <TabbarItem tabTitle="我的" icon="my" />
        </Tabbar>

        <h2>徽标提示</h2>
        <Tabbar>
          <TabbarItem tabTitle="首页" icon="home" num="11" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
          <TabbarItem tabTitle="购物车" icon="cart" num="110" />
          <TabbarItem tabTitle="我的" icon="my" />
        </Tabbar>

        <h2>自定义颜色</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle="首页" icon="home" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
          <TabbarItem tabTitle="购物车" icon="cart" />
          <TabbarItem tabTitle="我的" icon="my" />
        </Tabbar>

        <h2>三个icon的tabbar</h2>
        <Tabbar unactiveColor="#7d7e80" activeColor="#1989fa">
          <TabbarItem tabTitle="首页" icon="home" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
        </Tabbar>

        <h2>固定底部，可自由跳转</h2>
        <Tabbar bottom>
          <TabbarItem tabTitle="首页" href="" icon="home" />
          <TabbarItem tabTitle="分类" icon="category" />
          <TabbarItem tabTitle="发现" icon="find" />
          <TabbarItem tabTitle="购物车" href="https://m.jd.com" icon="cart" />
          <TabbarItem tabTitle="我的" to="/" icon="my" />
        </Tabbar>
      </div>
    </>
  )
}

export default TabbarDemo
