import React from 'react'
import { MaterialView } from '../../materialview'

const TABS = ['首页', '分类', '京东', '购物车', '我的']
const ICONS = ['🏠', '☰', '🛒', '🛍️', '👤']

// scene="bottom-bar" 底部导航背板
const Demo2 = () => (
  <div
    style={{
      position: 'relative',
      height: 200,
      overflow: 'hidden',
      borderRadius: 12,
    }}
  >
    <div style={{ position: 'absolute', inset: 0 }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          background: 'linear-gradient(160deg, #667eea 0%, #764ba2 100%)',
          display: 'flex',
          flexWrap: 'wrap',
          padding: 8,
          gap: 4,
          alignContent: 'flex-start',
        }}
      >
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            style={{
              width: 'calc(25% - 3px)',
              height: 40,
              borderRadius: 6,
              background: 'rgba(255,255,255,0.15)',
            }}
          />
        ))}
      </div>
    </div>
    <MaterialView
      scene="bottom-bar"
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: 64,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {TABS.map((tab, i) => (
        <div
          key={tab}
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
          }}
        >
          <span style={{ fontSize: 20, lineHeight: 1 }}>{ICONS[i]}</span>
          <span
            style={{
              fontSize: 10,
              color: i === 0 ? '#e02020' : '#666',
              fontWeight: i === 0 ? 700 : 400,
            }}
          >
            {tab}
          </span>
        </div>
      ))}
    </MaterialView>
  </div>
)

export default Demo2
