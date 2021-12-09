import React, { useState } from 'react'
import { Swiperitem } from '../swiperitem/swiperitem'
import { Swiper } from './swiper'
import Button from '@/packages/button'
import Step from '@/packages/step'
import './demo.scss'

const StepsDemo = () => {
  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const list = [
    'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
    'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
    'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
    'https://storage.360buyimg.com/jdc-article/fristfabu.jpg',
  ]
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  return (
    <div className="demo padding">
      <h2>基本用法</h2>
      <Swiper autoPlay="500">
        {list.map((item) => {
          return (
            <Swiperitem key={item}>
              <img src={item} alt="" />
            </Swiperitem>
          )
        })}
      </Swiper>
    </div>
  )
}

export default StepsDemo
