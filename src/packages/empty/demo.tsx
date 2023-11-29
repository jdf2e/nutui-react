import React, { useState } from 'react'
import { Refresh } from '@nutui/icons-react'
import { Empty } from './empty'
import { Button } from '@/packages/button/button'
import { Tabs } from '@/packages/tabs/tabs'
import { TabPane } from '@/packages/tabpane/tabpane'
import { useTranslate } from '../../sites/assets/locale'

interface T {
  ce5c5446: string
  c38a08ee: string
  c38a08ef: string
  b840c88f: string
  a74a1fd4: string
  '8dab2f66': string
  cfbdc782: string
  cfbdc784: string
  cfbdc781: string
  c3a3a1d2: string
  e51e4582: string
  adb1a8b2: string
  a52bef0c: string
  d04fcbda: string
  b8a453e3: string
}

const EmptyDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ee: 'Size 为 small 时，可用于半屏',
      c38a08ef: '自定义内容大小',
      b840c88f: '图片类型，内置3个',
      a74a1fd4: '自定义图片',
      '8dab2f66': '底部内容',
      cfbdc782: '标题',
      cfbdc784: '操作按钮',
      cfbdc781: '无数据',
      c3a3a1d2: '无内容',
      e51e4582: '加载失败/错误',
      adb1a8b2: '无网络',
      a52bef0c: '无优惠券',
      d04fcbda: '加载失败',
      b8a453e3: '重试',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ee: 'Size 为 small 时，可用于半屏',
      c38a08ef: '自定義內容大小',
      b840c88f: '圖片類型，內置3個',
      a74a1fd4: '自定義圖片',
      '8dab2f66': '底部內容',
      cfbdc782: '标题',
      cfbdc784: '操作按钮',
      cfbdc781: '無數據',
      c3a3a1d2: '無內容',
      e51e4582: '加載失敗/錯誤',
      adb1a8b2: '無網絡',
      a52bef0c: '無優惠券',
      d04fcbda: '加載失敗',
      b8a453e3: '重試',
    },
    'en-US': {
      ce5c5446: 'Basic usage',
      c38a08ee: 'Size is small',
      c38a08ef: 'Custom content size',
      b840c88f: 'Picture type, built-in 3',
      a74a1fd4: 'Custom image',
      '8dab2f66': 'Bottom content',
      cfbdc782: 'Title',
      cfbdc784: 'Operation Button',
      cfbdc781: 'No Data',
      c3a3a1d2: 'No Content',
      e51e4582: 'Load Failed',
      adb1a8b2: 'No Network',
      a52bef0c: 'No Coupon',
      d04fcbda: 'Failed to load',
      b8a453e3: 'Retry',
    },
  })
  const [tabvalue, setTabvalue] = useState<any>('')

  return (
    <>
      <div className="demo">
        <h2>{translated.ce5c5446}</h2>
        <Empty
          title={translated.cfbdc782}
          description={translated.cfbdc781}
          actions={[
            { text: translated.cfbdc784 },
            { text: translated.cfbdc784 },
          ]}
        />
        <Empty
          description={translated.cfbdc781}
          actions={[{ text: translated.cfbdc784 }]}
          style={{ marginTop: '10px' }}
        />
        <Empty
          description={translated.cfbdc781}
          style={{ marginTop: '10px' }}
        />
        <h2>{translated.c38a08ee}</h2>
        <Empty description={translated.cfbdc781} size="small" />
        <h2>{translated.c38a08ef}</h2>
        <Empty description={translated.cfbdc781} imageSize={80} />
        <h2>{translated.b840c88f}</h2>
        <Tabs
          value={tabvalue}
          onChange={(paneKey) => {
            setTabvalue(paneKey)
          }}
        >
          <TabPane title={translated.c3a3a1d2} value="0">
            <Empty status="empty" title={translated.c3a3a1d2} />
          </TabPane>
          <TabPane title={translated.e51e4582} value="1">
            <Empty status="error" title={translated.e51e4582} />
          </TabPane>
          <TabPane title={translated.adb1a8b2} value="2">
            <Empty status="network" title={translated.adb1a8b2} />
          </TabPane>
        </Tabs>
        <h2>{translated.a74a1fd4}</h2>
        <Empty
          description={translated.a52bef0c}
          image={
            <img
              src="https://static-ftcms.jd.com/p/files/61a9e3313985005b3958672e.png"
              alt=""
            />
          }
        />

        <h2>{translated['8dab2f66']}</h2>
        <Empty
          status="error"
          description={translated.d04fcbda}
          style={{ marginBottom: '20px' }}
        >
          <div style={{ marginTop: '10px' }}>
            <Button icon={<Refresh />} type="primary">
              {translated.b8a453e3}
            </Button>
          </div>
        </Empty>
      </div>
    </>
  )
}

export default EmptyDemo
