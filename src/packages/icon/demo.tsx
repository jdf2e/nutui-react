import React from 'react'
import { Icon } from './icon'
import Cell from '../cell'
import CellGroup from '../cellgroup'
import icons from '@/styles/font/iconfont.json'

const IconDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell>
          <Icon name="dongdong"></Icon>
          <Icon name="JD"></Icon>
        </Cell>
        <h2>图片链接</h2>
        <Cell>
          <Icon
            size="40"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          ></Icon>
        </Cell>
        <h2>图标颜色</h2>
        <Cell>
          <Icon name="dongdong" color="#fa2c19"></Icon>
          <Icon name="dongdong" color="#64b578"></Icon>
          <Icon name="JD" color="#fa2c19"></Icon>
        </Cell>
        <h2>图标大小</h2>
        <Cell>
          <Icon name="dongdong"></Icon>
          <Icon name="dongdong" size="24"></Icon>
          <Icon name="dongdong" size="16"></Icon>
        </Cell>
        <h2>基础图标</h2>
        <CellGroup>
          {icons.glyphs.map((item) => {
            return (
              <Cell key={item.font_class}>
                <Icon name={item.font_class}></Icon>
                <span>{item.name}</span>
              </Cell>
            )
          })}
        </CellGroup>
      </div>
    </>
  )
}

export default IconDemo
