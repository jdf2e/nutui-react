import React, { useState } from 'react'
import { Skeleton } from './skeleton'
import Switch from '@/packages/switch'
import Avatar from '@/packages/avatar'
import './demo.scss'

const SkeletonDemo = () => {
  const [checked, setChecked] = useState(false)
  const changeStatus = (value: boolean, event: React.MouseEvent<Element, MouseEvent>) => {
    console.log(`触发了change事件，开关状态：${value}`)
    setChecked(value)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Skeleton width="250px" height="15px" animated />
        <Skeleton width="250px" height="15px" />

        <h2>传入多行</h2>
        <Skeleton width="250px" height="15px" row={3} title animated />

        <h2>显示头像</h2>
        <Skeleton width="250px" height="15px" row={3} title animated avatar avatarSize="100px" />

        <h2>标题段落圆角风格</h2>
        <Skeleton width="250px" height="15px" animated round />

        <h2>图片组合</h2>
        <div className="pic-compose">
          <Skeleton width="250px" height="15px" title animated row={3} className="item" />
          <Skeleton width="250px" height="15px" title animated row={3} className="item" />
        </div>

        <h2>显示子组件</h2>
        <div className="content">
          <Switch size="15px" change={(value, event) => changeStatus(value, event)} />
          <Skeleton width="250px" height="15px" title animated avatar row={3} loading={checked}>
            <div className="container">
              <Avatar
                size="50"
                icon="https://img14.360buyimg.com/imagetools/jfs/t1/167902/2/8762/791358/603742d7E9b4275e3/e09d8f9a8bf4c0ef.png"
              />
              <div className="right-content">
                <span className="title">NutUI-React</span>
                <div className="desc">
                  一套京东风格的轻量级移动端React组件库，提供丰富的基础组件和业务组件，帮助开发者快速搭建移动应用。
                </div>
              </div>
            </div>
          </Skeleton>
        </div>
      </div>
    </>
  )
}

export default SkeletonDemo
