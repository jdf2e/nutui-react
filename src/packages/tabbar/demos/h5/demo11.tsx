import React, { useState } from 'react'
import { Cart, Home, Message, User } from '@nutui/icons-react'
import { Tabbar } from '@nutui/nutui-react'
import promotionImage from '../assets/promotion-red-envelope.png'

const joyImage =
  'https://img11.360buyimg.com/img/jfs/t1/535270/25/4911/39037/6abb699eF4fefba06/02760f00f05076ee.png'

const scenes = [
  {
    label: '常规商品',
    variant: 'regular' as const,
    icon: '🍼',
    text: '鲜奶定期购',
    subtitle: '续订有礼',
    color: '#f0f2f7',
    textColor: '#11141a',
  },
  {
    label: '运营活动',
    variant: 'regular' as const,
    icon: '🛒',
    text: '抢5折商品',
    subtitle: '京东超市',
    color: '#ddffcc',
    textColor: '#019508',
  },
  {
    label: '大促活动',
    variant: 'promotion' as const,
    icon: '🧧',
    text: '领取专属福利',
    subtitle: '抢万元红包',
    color: '#ffeaeb',
    textColor: '#ff0f23',
  },
]

const Demo11 = () => {
  const [sceneIndex, setSceneIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const [value, setValue] = useState(0)
  const scene = scenes[sceneIndex]
  const imageSize = scene.variant === 'promotion' ? 34 : 32

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: 8,
          marginBottom: 12,
          paddingLeft: 17,
        }}
      >
        {scenes.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={sceneIndex === index}
            onClick={() => {
              setSceneIndex(index)
              setExpanded(item.variant === 'promotion')
            }}
            style={{
              padding: '4px 8px',
              border: 0,
              borderRadius: 8,
              background:
                sceneIndex === index
                  ? 'var(--nutui-color-primary-light, #ffebed)'
                  : 'var(--nutui-color-background-overlay, #fff)',
              color:
                sceneIndex === index
                  ? 'var(--nutui-color-primary, #ff0f23)'
                  : 'var(--nutui-color-title, #1a1a1a)',
              cursor: 'pointer',
            }}
          >
            {item.label}
          </button>
        ))}
      </div>
      <Tabbar
        value={value}
        onSwitch={setValue}
        islandVariant={scene.variant}
        islandExpanded={expanded}
        agent={
          <button
            type="button"
            aria-label="Agent"
            onClick={() => setExpanded((current) => !current)}
            style={{
              width: 52,
              height: 52,
              padding: 0,
              border: 0,
              background: 'transparent',
              cursor: 'pointer',
            }}
          >
            <img src={joyImage} alt="" style={{ width: 52, height: 52 }} />
          </button>
        }
        island={
          <button
            type="button"
            aria-label={`${scene.label}，${expanded ? '收起' : '展开'}`}
            onClick={() => setExpanded((current) => !current)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4,
              width: '100%',
              height: '100%',
              padding: '0 6px',
              border: 0,
              borderRadius: scene.variant === 'promotion' ? 20 : 14,
              background: scene.color,
              color: scene.textColor,
              cursor: 'pointer',
            }}
          >
            <span
              aria-hidden="true"
              style={{
                display: 'grid',
                placeItems: 'center',
                flex: `0 0 ${imageSize}px`,
                height: imageSize,
                fontSize: 22,
              }}
            >
              {scene.variant === 'promotion' ? (
                <img
                  src={promotionImage}
                  alt=""
                  style={{
                    display: 'block',
                    width: imageSize,
                    height: imageSize,
                  }}
                />
              ) : (
                scene.icon
              )}
            </span>
            <span
              style={{
                minWidth: 0,
                fontSize: 10,
                lineHeight: '13px',
                fontWeight: 600,
                textAlign: 'left',
              }}
            >
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                {scene.text}
              </span>
              <span style={{ display: 'block', whiteSpace: 'nowrap' }}>
                {scene.subtitle}
              </span>
            </span>
          </button>
        }
      >
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="消息" icon={<Message />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </div>
  )
}

export default Demo11
