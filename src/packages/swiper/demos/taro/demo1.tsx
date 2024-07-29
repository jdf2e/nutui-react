import React from 'react'
import { Swiper } from '@nutui/nutui-react-taro'
import {
  CommonEventFunction,
  SwiperProps as TaroSwiperProps,
} from '@tarojs/components'

const list = [
  'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
  'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
  'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
  'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
]
const Demo1 = () => {
  const onChange: CommonEventFunction<TaroSwiperProps.onChangeEventDetail> = (
    e
  ) => {
    console.log(`onChange is trigger ${e}`)
  }
  return (
    <Swiper defaultValue={1} autoPlay indicator onChange={onChange}>
      {list.map((item, index) => (
        <Swiper.Item key={item}>
          <img
            width="100%"
            height="100%"
            onClick={() => console.log(index)}
            src={item}
            alt=""
          />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo1
