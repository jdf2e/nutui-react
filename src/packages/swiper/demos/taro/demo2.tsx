import React, { useEffect, useState } from 'react'
import { Swiper } from '@nutui/nutui-react-taro'

const Demo2 = () => {
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]

  const [asyncList, setAsyncList] = useState<string[]>([])
  useEffect(() => {
    setTimeout(() => {
      setAsyncList(list)
    }, 3000)
  }, [])
  return (
    <Swiper defaultValue={0} indicator>
      {asyncList.map((item, index) => (
        <Swiper.Item key={item}>
          <img width="100%" height="100%" src={item} alt="" />
        </Swiper.Item>
      ))}
    </Swiper>
  )
}
export default Demo2
