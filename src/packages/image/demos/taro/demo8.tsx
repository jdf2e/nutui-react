import React from 'react'
import { Image } from '@nutui/nutui-react-taro'
import { ScrollView } from '@tarojs/components'

const Demo8 = () => {
  const src =
    'https://storage.360buyimg.com/imgtools/e067cd5b69-07c864c0-dd02-11ed-8b2c-d7f58b17086a.png'
  return (
    <>
      <ScrollView style={{ height: '350px' }} scrollY>
        {[
          ...new Array(3).fill(src),
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
        ].map((_) => {
          return <Image key={_} src={_} lazyLoad width="100%" height="150" />
        })}
      </ScrollView>
    </>
  )
}
export default Demo8
