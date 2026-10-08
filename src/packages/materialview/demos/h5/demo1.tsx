import React from 'react'
import { MaterialView } from '../../materialview'

type Scene = 'top-solid' | 'top-plain' | 'immersive' | 'top-bar'
type RowConfig = {
  scene: Scene
  label: string
  color: string
  darkMode?: boolean
}

const ROWS: RowConfig[] = [
  { scene: 'top-solid', label: '纯白-常规', color: '#11141a' },
  { scene: 'immersive', label: '暗黑-常规', color: '#e1e6eb' },
  { scene: 'top-plain', label: '高透-换肤场景', color: '#11141a' },
  {
    scene: 'top-bar',
    label: '吸顶背板（纯白）',
    color: '#11141a',
    darkMode: false,
  },
  {
    scene: 'top-bar',
    label: '吸顶背板（暗黑）',
    color: '#e1e6eb',
    darkMode: true,
  },
]

const ROW_H = 70
const NAV_TOTAL_H = ROWS.length * ROW_H + 8

const SearchIcon = ({ c }: { c: string }) => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 13.966 13.966"
    fill="none"
    style={{ flexShrink: 0, opacity: 0.7 }}
  >
    <path
      d="M6.418 0a6.418 6.418 0 0 1 4.738 10.525l2.505 2.505a.583.583 0 0 1-.828.828l-2.505-2.505A6.418 6.418 0 1 1 6.418 0Zm0 1.167a5.251 5.251 0 1 0 0 10.502 5.251 5.251 0 0 0 0-10.502Z"
      fill={c}
    />
  </svg>
)

const BackIcon = ({ c }: { c: string }) => (
  <svg
    fill="none"
    height="13.68"
    version="1.1"
    viewBox="0 0 13.68 13.68"
    width="13.68"
    xmlns="http://www.w3.org/2000/svg"
    style={{ opacity: 0.7 }}
  >
    <path
      d="M1.6670001 7.9229999L1.6670001 0.542C1.6670001 0.243 1.424 0 1.125 0L0.542 0C0.243 0 0 0.243 0 0.542L0 9.1309996C0 9.4300003 0.243 9.6730003 0.542 9.6730003L9.1309996 9.6730003C9.4300003 9.6730003 9.6730003 9.4300003 9.6730003 9.1309996L9.6730003 8.5480003C9.6730003 8.2489996 9.4300003 8.0059996 9.1309996 8.0059996L1.75 8.0059996C1.704 8.0059996 1.6670001 7.9689999 1.6670001 7.9229999Z"
      fill={c}
      fillRule="evenodd"
      transform="matrix(0.707107,0.707107,-0.707107,0.707107,6.839844,0)"
    />
  </svg>
)

const HomeIcon = ({ c }: { c: string }) => (
  <svg
    width="20"
    height="19"
    viewBox="0 0 19.822 18.689"
    fill="none"
    style={{ opacity: 0.7 }}
  >
    <path
      d="M16.995 7.604 10.46 1.874a1.167 1.167 0 0 0-1.098 0L2.827 7.604v7.752c0 .46.163.853.488 1.178.326.326.719.489 1.179.489h4.583v-4.459c0-.299.243-.542.542-.542h.584c.299 0 .542.243.542.542v4.459h4.584c.46 0 .853-.163 1.178-.489.326-.325.489-.718.489-1.178V7.604Zm1.667 1.435a.542.542 0 0 0 .308-.131l.384-.438a.542.542 0 0 0-.065-.763L11.559.621A2.335 2.335 0 0 0 9.911 0c-.627 0-1.177.207-1.649.621L.185 7.705a.542.542 0 0 0-.066.763l.384.438a.542.542 0 0 0 .641.124v6.326c0 .92.326 1.706.976 2.357.651.651 1.437.976 2.358.976h10.834c.92 0 1.706-.325 2.357-.976.651-.651.976-1.437.976-2.357V9.039Z"
      fill={c}
      fillRule="evenodd"
    />
  </svg>
)

const cap: React.CSSProperties = {
  borderRadius: 12,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}

const NavRow = ({ scene, label, color, darkMode }: RowConfig) => {
  if (scene === 'top-bar') {
    return (
      <div style={{ padding: '8px 8px 0' }}>
        <span
          style={{
            display: 'inline-block',
            marginBottom: 4,
            fontSize: 10,
            fontWeight: 700,
            color: '#333',
            background: '#fff',
            padding: '1px 5px',
            borderRadius: 2,
          }}
        >
          {label}
        </span>
        <MaterialView
          scene={scene}
          darkMode={darkMode}
          style={{
            display: 'flex',
            gap: 8,
            alignItems: 'center',
            height: 60,
            padding: '0 12px',
          }}
        />
      </div>
    )
  }

  return (
    <div style={{ padding: '8px 8px 0' }}>
      <span
        style={{
          display: 'inline-block',
          marginBottom: 4,
          fontSize: 10,
          fontWeight: 700,
          color: '#333',
          background: '#fff',
          padding: '1px 5px',
          borderRadius: 2,
        }}
      >
        {label}
      </span>
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <MaterialView
          scene={scene}
          darkMode={darkMode}
          style={{ ...cap, width: 44, height: 44, flexShrink: 0 }}
        >
          <BackIcon c={color} />
        </MaterialView>
        <MaterialView
          scene={scene}
          darkMode={darkMode}
          style={{
            ...cap,
            flex: 1,
            height: 44,
            justifyContent: 'flex-start',
            padding: '0 10px',
            gap: 6,
          }}
        >
          <SearchIcon c={color} />
          <span
            style={{
              color,
              opacity: 0.7,
              fontSize: 12,
              whiteSpace: 'nowrap',
            }}
          >
            搜搜感兴趣的商品吧
          </span>
        </MaterialView>
        <MaterialView
          scene={scene}
          darkMode={darkMode}
          style={{ ...cap, width: 44, height: 44, flexShrink: 0 }}
        >
          <HomeIcon c={color} />
        </MaterialView>
      </div>
    </div>
  )
}

const Demo1 = () => (
  <div
    style={{
      height: 560,
      overflowY: 'scroll',
      borderRadius: 16,
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 20px rgba(0,0,0,0.06)',
    }}
  >
    <div style={{ position: 'sticky', top: 0, zIndex: 10, paddingBottom: 8 }}>
      {ROWS.map((row, idx) => (
        <NavRow key={`${row.scene}-${idx}`} {...row} />
      ))}
    </div>

    <div style={{ marginTop: -NAV_TOTAL_H }}>
      <div
        style={{
          height: 480,
          background:
            'linear-gradient(135deg, #ff0f7b 0%, #f89b29 50%, #ff4b2b 100%)',
          position: 'relative',
          overflow: 'hidden',
          padding: '20px 16px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 120,
            left: -50,
            width: 180,
            height: 180,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, #ff007f 0%, rgba(255,0,127,0) 70%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 80,
            right: 30,
            width: 90,
            height: 90,
            borderRadius: 16,
            transform: 'rotate(25deg)',
            background:
              'linear-gradient(45deg, rgba(255,255,255,0.25), rgba(255,255,255,0.05))',
            border: '1px solid rgba(255,255,255,0.4)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: 220,
            left: 40,
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'rgba(255,230,0,0.3)',
            filter: 'blur(20px)',
          }}
        />

        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <div
            style={{
              display: 'inline-block',
              padding: '4px 10px',
              background: 'rgba(0,0,0,0.3)',
              borderRadius: 20,
              fontSize: 11,
              fontWeight: 700,
              marginBottom: 8,
              backdropFilter: 'blur(4px)',
            }}
          >
            🔥 京东超级品牌日 · 限时特惠
          </div>
          <div
            style={{
              fontSize: 28,
              fontWeight: 900,
              lineHeight: 1.2,
              textShadow: '0 2px 10px rgba(0,0,0,0.3)',
            }}
          >
            年中狂欢 · 爆款直降
          </div>
          <div
            style={{
              fontSize: 13,
              opacity: 0.95,
              marginTop: 6,
              fontWeight: 500,
            }}
          >
            每满 300 减 50 ｜ 跨店满减可叠券 ｜ 爆款领券立减
          </div>
          <div style={{ marginTop: 12, display: 'flex', gap: 8 }}>
            <span
              style={{
                padding: '6px 14px',
                background: '#fff',
                color: '#ff2a2a',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 800,
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
              }}
            >
              立即抢购
            </span>
            <span
              style={{
                padding: '6px 14px',
                background: 'rgba(255,255,255,0.2)',
                color: '#fff',
                borderRadius: 20,
                fontSize: 12,
                border: '1px solid rgba(255,255,255,0.4)',
              }}
            >
              查看主会场
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          height: 480,
          background:
            'radial-gradient(at 10% 20%, rgb(147, 51, 234) 0px, transparent 50%), radial-gradient(at 90% 10%, rgb(59, 130, 246) 0px, transparent 50%), radial-gradient(at 50% 80%, rgb(236, 72, 153) 0px, transparent 50%), radial-gradient(at 80% 80%, rgb(16, 185, 129) 0px, transparent 50%), #0f172a',
          position: 'relative',
          padding: '24px 16px',
          boxSizing: 'border-box',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          color: '#fff',
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 800,
            marginBottom: 8,
            background: 'linear-gradient(to right, #60a5fa, #f472b6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          多色弥散光影 (Mesh Gradient)
        </div>
        <div
          style={{
            fontSize: 13,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.6,
          }}
        >
          复杂多色光影穿透时，能完美展现毛玻璃在不同明暗色相交汇处的渐变融合与内发光。
        </div>
      </div>

      <div
        style={{
          minHeight: 520,
          background: '#f4f5f7',
          padding: '20px 12px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            fontSize: 16,
            fontWeight: 800,
            color: '#11141a',
            marginBottom: 12,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <span>精选商品推荐 (图文卡片穿透)</span>
          <span style={{ fontSize: 12, color: '#ff4142', fontWeight: 600 }}>
            全部 &gt;
          </span>
        </div>

        <div
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}
        >
          {[
            {
              title: 'Apple iPhone 16 Pro 256G',
              tag: '自营秒杀',
              price: '¥7999',
              orig: '¥8999',
              bg: 'linear-gradient(135deg, #1e293b, #0f172a)',
              icon: '📱',
            },
            {
              title: 'Sony WH-1000XM5 无线降噪',
              tag: '限时直降',
              price: '¥2199',
              orig: '¥2699',
              bg: 'linear-gradient(135deg, #475569, #334155)',
              icon: '🎧',
            },
            {
              title: 'Nike Air Max 旗舰复古跑鞋',
              tag: '新品热卖',
              price: '¥699',
              orig: '¥899',
              bg: 'linear-gradient(135deg, #ea580c, #c2410c)',
              icon: '👟',
            },
            {
              title: 'SK-II 神仙水护肤精华露 230ml',
              tag: '官方正品',
              price: '¥1390',
              orig: '¥1690',
              bg: 'linear-gradient(135deg, #be123c, #9f1239)',
              icon: '✨',
            },
            {
              title: 'Nintendo Switch OLED 日版',
              tag: '游戏爆款',
              price: '¥1850',
              orig: '¥2199',
              bg: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              icon: '🎮',
            },
            {
              title: 'Dyson 戴森吹风机 HD15 礼盒',
              tag: '奢宠优选',
              price: '¥2899',
              orig: '¥3399',
              bg: 'linear-gradient(135deg, #831843, #701a75)',
              icon: '💨',
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                background: '#fff',
                borderRadius: 12,
                padding: 10,
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                border: '1px solid #edf0f2',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  height: 90,
                  borderRadius: 8,
                  background: item.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 36,
                  marginBottom: 8,
                  color: '#fff',
                }}
              >
                {item.icon}
              </div>
              <div
                style={{
                  fontSize: 12,
                  fontWeight: 700,
                  color: '#1a1a1a',
                  lineHeight: 1.3,
                  marginBottom: 4,
                  height: 32,
                  overflow: 'hidden',
                }}
              >
                {item.title}
              </div>
              <span
                style={{
                  fontSize: 10,
                  color: '#ff4142',
                  background: 'rgba(255,65,66,0.08)',
                  padding: '2px 6px',
                  borderRadius: 4,
                  width: 'fit-content',
                  fontWeight: 600,
                  marginBottom: 6,
                }}
              >
                {item.tag}
              </span>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 4,
                  marginTop: 'auto',
                }}
              >
                <span
                  style={{ fontSize: 14, fontWeight: 800, color: '#ff4142' }}
                >
                  {item.price}
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: '#999',
                    textDecoration: 'line-through',
                  }}
                >
                  {item.orig}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        style={{
          height: 440,
          background: '#090a0f',
          padding: '24px 16px',
          boxSizing: 'border-box',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 20,
            left: 16,
            right: 16,
            height: 160,
            background:
              'repeating-linear-gradient(45deg, #181b22, #181b22 15px, #0e1015 15px, #0e1015 30px)',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        />
        <div style={{ position: 'relative', zIndex: 1, color: '#fff' }}>
          <div style={{ fontSize: 20, fontWeight: 800, color: '#00e5ff' }}>
            深色高对比纹理区
          </div>
          <div
            style={{
              fontSize: 12,
              color: 'rgba(255,255,255,0.7)',
              marginTop: 4,
            }}
          >
            在高对比黑夜背景与条纹几何图形下，暗黑模式与亮色模式高光边缘清晰可见。
          </div>
        </div>
      </div>

      <div
        style={{
          height: 360,
          background:
            'linear-gradient(180deg, #10b981 0%, #06b6d4 50%, #6366f1 100%)',
          padding: '24px 16px',
          boxSizing: 'border-box',
          display: 'flex',
          alignItems: 'flex-end',
          color: '#fff',
        }}
      >
        <div>
          <div style={{ fontSize: 18, fontWeight: 800 }}>
            🌿 蓝绿自然渐变光谱
          </div>
          <div style={{ fontSize: 12, opacity: 0.9, marginTop: 4 }}>
            连续色彩平滑过渡下的毛玻璃色相穿透
          </div>
        </div>
      </div>

      <div
        style={{
          padding: '20px 16px 8px',
          background: '#eef1f5',
          borderTop: '2px dashed #ccd3dc',
        }}
      >
        <div style={{ fontSize: 15, fontWeight: 800, color: '#333' }}>
          🎨 标准纯色背景测试区
        </div>
        <div style={{ fontSize: 11, color: '#666', marginTop: 2 }}>
          以下为 7 种经典纯色，向下滑动可查看纯色背景的穿透表现
        </div>
      </div>

      {[
        {
          bg: '#ffffff',
          label: '1. 白色背景 (#ffffff)',
          labelColor: 'rgba(0,0,0,0.3)',
        },
        {
          bg: '#b0b0b0',
          label: '2. 灰色背景 (#b0b0b0)',
          labelColor: 'rgba(255,255,255,0.7)',
        },
        {
          bg: '#14171a',
          label: '3. 黑色背景 (#14171a)',
          labelColor: 'rgba(255,255,255,0.7)',
        },
        {
          bg: '#ff6b1a',
          label: '4. 橘色背景 (#ff6b1a)',
          labelColor: 'rgba(255,255,255,0.8)',
        },
        {
          bg: '#f760a5',
          label: '5. 粉色背景 (#f760a5)',
          labelColor: 'rgba(255,255,255,0.8)',
        },
        {
          bg: '#ffe0cc',
          label: '6. 浅橘背景 (#ffe0cc)',
          labelColor: 'rgba(0,0,0,0.35)',
        },
        {
          bg: '#fce4ec',
          label: '7. 浅粉背景 (#fce4ec)',
          labelColor: 'rgba(0,0,0,0.35)',
        },
      ].map(({ bg, label, labelColor }, idx, arr) => (
        <div
          key={bg}
          style={{
            background: bg,
            height: idx === arr.length - 1 ? 720 : 520,
            display: 'flex',
            alignItems: 'flex-end',
            padding: '0 16px 20px',
            boxSizing: 'border-box',
          }}
        >
          <span style={{ fontSize: 12, color: labelColor, fontWeight: 700 }}>
            {label}
          </span>
        </div>
      ))}
    </div>
  </div>
)

export default Demo1
