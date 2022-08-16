import React, { useState } from 'react'
import { Collapse } from './collapse'
import CollapseItem from '../collapseitem'
import { Button } from '../button/button'

const oldDate = [
  {
    title: '标题1',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题12',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题13',
    name: '3',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]
const newDate = [
  {
    title: '标题21',
    name: '1',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题22',
    name: '2',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
  {
    title: '标题23',
    name: '3',
    data: '京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府',
  },
]
const CollapseDemo = () => {
  const [currIndex, setCurrIndex] = useState(2)
  const [domData, setDomData] = useState(oldDate)
  const changeEnv = (isOpen: boolean, name: string) => {
    console.log(isOpen, name)
  }
  const changeNewData = () => {
    setDomData(newDate)
    setCurrIndex(3)
  }
  const changeOldData = () => {
    setDomData(oldDate)
    setCurrIndex(2)
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Collapse
          activeName={['1', '2']}
          icon="arrow-down"
          iconSize="16"
          iconColor="#999"
        >
          <CollapseItem title="标题1" name="1">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" disabled>
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>无icon样式，绑定点击事件</h2>
        <Collapse
          activeName={['1', '2']}
          change={(isOpen, name) => changeEnv(isOpen, name)}
        >
          <CollapseItem title="标题1" name="1">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>手风琴</h2>
        <Collapse activeName={['1']} accordion icon="arrow-down">
          <CollapseItem title="标题1" name="1" subTitle="文本内容">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>自定义折叠图标</h2>
        <Collapse activeName={['1']} accordion icon="arrow-right2" rotate={90}>
          <CollapseItem title="标题1" name="1" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题2" name="2" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>
        <h2>自定义title图标</h2>
        <Collapse activeName={['1']} accordion icon="arrow-down">
          <CollapseItem
            title="标题1"
            name="1"
            titleIcon="checked"
            titleIconSize="16"
            titleIconColor="red"
            titleIconPosition="left"
          >
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem
            title="标题2"
            name="2"
            titleIcon="heart-fill"
            titleIconColor="red"
            titleIconPosition="right"
          >
            京东“厂直优品计划”首推“政府优品馆” 3年覆盖80%镇级政府
          </CollapseItem>
          <CollapseItem title="标题3" name="3" icon="arrow-down">
            京东“厂直优品计划”首推“政府优品馆”
          </CollapseItem>
        </Collapse>

        <h2>动态改变数据</h2>
        <Collapse activeName={currIndex} accordion>
          {domData.map((item, index) => {
            return (
              <CollapseItem title={item.title} name={item.name} key={index}>
                {item.data}
              </CollapseItem>
            )
          })}
        </Collapse>
        {/* eslint-disable-next-line react/button-has-type */}
        <Button type="primary" size="small" onClick={() => changeNewData()}>
          改变数据
        </Button>
        <Button type="info" size="small" onClick={() => changeOldData()}>
          还原数据
        </Button>
      </div>
    </>
  )
}

export default CollapseDemo
