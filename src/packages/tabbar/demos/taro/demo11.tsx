import React, { useState } from 'react'
import { Image, View } from '@tarojs/components'
import { Cart, Home, Message, User } from '@nutui/icons-react-taro'
import { Tabbar } from '@nutui/nutui-react-taro'
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
    <View>
      <View
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '12px',
          paddingLeft: '10px',
        }}
      >
        {scenes.map((item, index) => (
          <View
            key={item.label}
            role="button"
            aria-pressed={sceneIndex === index}
            onClick={() => {
              setSceneIndex(index)
              setExpanded(item.variant === 'promotion')
            }}
            style={{
              padding: '4px 8px',
              borderRadius: '8px',
              background:
                sceneIndex === index
                  ? 'var(--nutui-color-primary-light, #ffebed)'
                  : 'var(--nutui-color-background-overlay, #fff)',
              color:
                sceneIndex === index
                  ? 'var(--nutui-color-primary, #ff0f23)'
                  : 'var(--nutui-color-title, #1a1a1a)',
            }}
          >
            {item.label}
          </View>
        ))}
      </View>
      <Tabbar
        value={value}
        onSwitch={setValue}
        islandVariant={scene.variant}
        islandExpanded={expanded}
        agent={
          <View
            role="button"
            aria-label="Agent"
            onClick={() => setExpanded((current) => !current)}
            style={{ width: '52px', height: '52px' }}
          >
            <Image
              src={joyImage}
              mode="scaleToFill"
              style={{ width: '52px', height: '52px' }}
            />
          </View>
        }
        island={
          <View
            role="button"
            aria-label={`${scene.label}，${expanded ? '收起' : '展开'}`}
            onClick={() => setExpanded((current) => !current)}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '100%',
              height: '100%',
              padding: '0 6px',
              boxSizing: 'border-box',
              borderRadius: scene.variant === 'promotion' ? '20px' : '14px',
              background: scene.color,
              color: scene.textColor,
            }}
          >
            <View
              style={{
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                fontSize: '22px',
                textAlign: 'center',
              }}
            >
              {scene.variant === 'promotion' ? (
                <Image
                  src={promotionImage}
                  mode="scaleToFill"
                  style={{ width: `${imageSize}px`, height: `${imageSize}px` }}
                />
              ) : (
                scene.icon
              )}
            </View>
            <View
              style={{
                marginLeft: '4px',
                fontSize: '10px',
                lineHeight: '13px',
                fontWeight: 600,
                textAlign: 'left',
              }}
            >
              <View>{scene.text}</View>
              <View>{scene.subtitle}</View>
            </View>
          </View>
        }
      >
        <Tabbar.Item title="首页" icon={<Home />} />
        <Tabbar.Item title="消息" icon={<Message />} />
        <Tabbar.Item title="购物车" icon={<Cart />} />
        <Tabbar.Item title="我的" icon={<User />} />
      </Tabbar>
    </View>
  )
}

export default Demo11
