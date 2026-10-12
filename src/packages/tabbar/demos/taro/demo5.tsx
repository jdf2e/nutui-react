import React from 'react'
import { Tabbar, Image, harmony, pxTransform } from '@nutui/nutui-react-taro'
import { Cart, Hi, Home, User } from '@nutui/icons-react-taro'

const Demo = () => {
  const image =
    'https://storage.360buyimg.com/imgtools/cadd649d79-8de544e0-0a11-11f0-9f55-9901c75f24a0.png'
  const marketingImage = (src: string) => (
    <Image
      width={harmony() ? pxTransform(38) : '38px'}
      height={harmony() ? pxTransform(38) : '38px'}
      src={src}
    />
  )

  return (
    <Tabbar>
      <Tabbar.Item
        title={(active: boolean) => (active ? '' : '首页')}
        icon={(active: boolean) =>
          active ? (
            marketingImage(
              'https://storage.360buyimg.com/imgtools/ba40719add-025fcd20-0618-11f0-8bdb-aba55e067ea2.png'
            )
          ) : (
            <Home />
          )
        }
        badgeAnchor={(active: boolean) => (active ? 'image' : 'icon')}
        dot
      />
      <Tabbar.Item
        icon={(active: boolean) => (active ? <Hi /> : marketingImage(image))}
        badgeAnchor={(active: boolean) => (active ? 'icon' : 'image')}
        title={(active: boolean) => (active ? '逛' : '')}
        value={8}
      />
      <Tabbar.Item
        title=""
        icon={marketingImage(image)}
        badgeAnchor="image"
        value="最多四字"
      />
      <Tabbar.Item title="购物车" icon={<Cart />} />
      <Tabbar.Item title="我的" icon={<User />} />
    </Tabbar>
  )
}

export default Demo
