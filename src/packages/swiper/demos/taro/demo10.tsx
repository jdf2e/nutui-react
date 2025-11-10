import React from 'react'
import { Image } from '@tarojs/components'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo10 = () => {
  console.log('10')
  const list = {
    label: ['NutUItaro34', 'NutUItaro2', 'welcomenutui', 'fristfabu'],
    src: [
      'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
      'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
      'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
      'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
    ],
  }

  return (
    <Swiper defaultValue={0} indicator ariaLabel={list.label}>
      {list.src.map((item, index) => (
        <Swiper.Item key={item} ariaLabel={list?.label[index]}>
          <Image style={{ width: '100%', height: '100%' }} src={item} />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo10
