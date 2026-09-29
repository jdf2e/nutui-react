import React, { useRef, useState } from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'
import Demo6 from './demos/h5/demo6'
import Demo7 from './demos/h5/demo7'
import Demo8 from './demos/h5/demo8'
import Demo9 from './demos/h5/demo9'
import Demo10 from './demos/h5/demo10'
import Demo11 from './demos/h5/demo11'
import Demo15 from './demos/h5/demo15'

const TabbarDemo = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollTop, setScrollTop] = useState(0)
  const [translated] = useTranslate({
    'zh-CN': {
      ce5c5446: '基础用法',
      c38a08ef: '首坑品牌+营销态',
      ce5c5448: '只配图标',
      ce5c5440: '只配文字',
      b840c88f: '徽标提示',
      customColor: '自定义颜色+数量',
      cfbdc781: '固定底部与返顶',
      c9e6df49: '受控',
      c9e6df48: '再次点击当前项',
      agent: 'Agent 组合入口',
      island: '灵动岛与 Agent 联动',
      material: '普通与暗色背板材质',
    },
    'zh-TW': {
      ce5c5446: '基礎用法',
      c38a08ef: '首坑品牌+營銷態',
      ce5c5448: '只配圖標',
      ce5c5440: '只配文字',
      b840c88f: '徽標提示',
      customColor: '自定義顏色+數量',
      cfbdc781: '固定底部與返頂',
      c9e6df49: '受控',
      c9e6df48: '再次點擊目前項目',
      agent: 'Agent 組合入口',
      island: '靈動島與 Agent 聯動',
      material: '一般與暗色背板材質',
    },
    'en-US': {
      ce5c5446: 'Basic Usage',
      c38a08ef: 'Custom',
      ce5c5448: 'Only Icon',
      ce5c5440: 'Only Text',
      b840c88f: 'Logo Tips',
      customColor: 'Custom Color and Size',
      cfbdc781: 'Fixed Bottom and Back to Top',
      c9e6df49: 'With Controled',
      c9e6df48: 'Click Active Item Again',
      agent: 'Agent Entry',
      island: 'Dynamic Island and Agent',
      material: 'Light and Dark Backing Material',
    },
  })

  return (
    <>
      <div
        className="demo full"
        ref={scrollRef}
        style={{ height: '100vh', minHeight: 0 }}
        onScroll={(event) => setScrollTop(event.currentTarget.scrollTop)}
      >
        <h2>{translated.ce5c5446}</h2>
        <Demo1 />
        <h2>{translated.b840c88f}</h2>
        <Demo2 />
        <h2>{translated.ce5c5448}</h2>
        <Demo3 />
        <h2>{translated.ce5c5440}</h2>
        <Demo4 />
        <h2>{translated.c38a08ef}</h2>
        <Demo5 />
        <h2>{translated.customColor}</h2>
        <Demo6 />
        <h2>{translated.c9e6df49}</h2>
        <Demo7 />
        <h2>{translated.c9e6df48}</h2>
        <Demo8 />
        <h2>{translated.agent}</h2>
        <Demo10 />
        <h2>{translated.island}</h2>
        <Demo11 />
        <h2>{translated.material}</h2>
        <Demo15 />
        <h2 style={{ marginBottom: 100 }}>{translated.cfbdc781}</h2>
        <Demo9
          scrollTop={scrollTop}
          onBackToTop={() =>
            scrollRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
          }
        />
      </div>
    </>
  )
}

export default TabbarDemo
