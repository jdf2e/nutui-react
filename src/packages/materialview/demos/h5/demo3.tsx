import React from 'react'
import { MaterialView } from '../../materialview'

// scene="immersive" 沉浸式暗色场景 + scene="top-solid" 悬浮购买栏
const Demo3 = () => (
  <div
    style={{
      position: 'relative',
      height: 260,
      overflow: 'hidden',
      borderRadius: 12,
    }}
  >
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background:
          'linear-gradient(180deg, #1a1a2e 0%, #16213e 40%, #0f3460 100%)',
      }}
    >
      {/* 模拟商品图 */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-60%)',
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 60 }}>👟</div>
        <div
          style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14, marginTop: 4 }}
        >
          Air Max 270
        </div>
        <div
          style={{
            color: '#e02020',
            fontSize: 18,
            fontWeight: 700,
            marginTop: 2,
          }}
        >
          ¥559
        </div>
      </div>
    </div>

    {/* 顶部导航 - immersive 暗色 */}
    <MaterialView
      scene="immersive"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 48,
        display: 'flex',
        alignItems: 'center',
        padding: '0 14px',
        gap: 10,
      }}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M9 2L4 7L9 12"
          stroke="#e1e6eb"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span style={{ flex: 1, color: 'rgba(255,255,255,0.85)', fontSize: 13 }}>
        商品详情
      </span>
      <span style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18 }}>⋯</span>
    </MaterialView>

    {/* 底部购买栏 - top-solid 纯白 */}
    <MaterialView
      scene="top-solid"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 60,
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: 8,
      }}
    >
      <div
        style={{
          flex: 1,
          height: 38,
          background: '#ff4e00',
          borderRadius: 19,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 700 }}>
          立即购买
        </span>
      </div>
      <div
        style={{
          flex: 1,
          height: 38,
          background: 'rgba(224,32,32,0.12)',
          borderRadius: 19,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span style={{ color: '#e02020', fontSize: 14, fontWeight: 700 }}>
          加入购物车
        </span>
      </div>
    </MaterialView>
  </div>
)

export default Demo3
