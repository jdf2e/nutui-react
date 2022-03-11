import React from 'react'
import { Cell } from './cell'
import { CellGroup } from '../cellgroup/cellgroup'
import { Switch } from '../switch/switch'

const CellDemo = () => {
  const testClick = (event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
    console.log('点击事件')
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Cell title="我是标题" desc="描述文字" />
        <Cell title="我是标题" subTitle="副标题描述" desc="描述文字" />
        <Cell
          title="点击测试"
          click={(event: React.MouseEvent<HTMLDivElement, globalThis.MouseEvent>) =>
            testClick(event)
          }
        />
        <h2>直接使用</h2>
        <Cell title="我是标题" desc="描述文字">
          <div>自定义内容</div>
        </Cell>
        <CellGroup title="链接 | 分组用法">
          <Cell title="链接" isLink />
          <Cell title="URL 跳转" desc="https://jd.com" isLink url="https://jd.com" />
          <Cell title="路由跳转 ’/‘ " to="/" />
        </CellGroup>

        <CellGroup title="自定义右侧箭头区域">
          <Cell title="Switch" extra={<Switch checked />} />
        </CellGroup>
        <h2>展示图标</h2>
        <Cell title="姓名" icon="my" desc="张三" isLink />
        <h2>只展示 desc ，可通过 desc-text-align 调整内容位置</h2>
        <Cell descTextAlign="left" desc="张三" />
      </div>
    </>
  )
}

export default CellDemo
