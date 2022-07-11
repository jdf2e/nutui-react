import React, { useEffect, useState } from 'react'
import { Empty } from './empty'
import { Button } from '@/packages/button/button'
import { Tabs } from '@/packages/tabs/tabs'
import { TabPane } from '@/packages/tabpane/tabpane'
import './demo.scss'

const EmptyDemo = () => {
  const [tabvalue, setTabvalue] = useState()

  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <div className="show">
          <Empty description="无数据"></Empty>
        </div>
        <h2>自定义内容大小</h2>
        <div className="show">
          <Empty description="无数据" imageSize={100}></Empty>
        </div>
        <h2>图片类型，内置3个</h2>
        <div className="show">
          <Tabs
            value={tabvalue}
            onChange={({ paneKey }) => {
              setTabvalue(paneKey)
            }}
          >
            <TabPane title="无内容">
              <Empty image="empty" description="无内容"></Empty>
            </TabPane>
            <TabPane title="加载失败/错误">
              <Empty image="error" description="加载失败/错误"></Empty>
            </TabPane>
            <TabPane title="无网络">
              <Empty image="network" description="无网络"></Empty>
            </TabPane>
          </Tabs>
        </div>
        <h2>自定义图片</h2>
        <div className="show">
          <Empty
            description="无优惠券"
            image={<img src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png" />}
          ></Empty>
        </div>

        <h2>底部内容</h2>
        <div className="show">
          <Empty image="error" description="加载失败">
            <div style={{ marginTop: '10px' }}>
              <Button icon="refresh" type="primary">
                重试
              </Button>
            </div>
          </Empty>
        </div>
      </div>
    </>
  )
}

export default EmptyDemo
