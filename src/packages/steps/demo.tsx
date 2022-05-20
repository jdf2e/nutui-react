import React, { useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Steps } from './steps'
import Button from '@/packages/button'
import Step from '@/packages/step'
import './demo.scss'

interface T {
  '74fc5d8a': string
  '606ae3f5': string
  '3c6225eb': string
  '979df428': string
  acfc4e74: string
  '0533b453': string
  db1b4ed6: string
  '70ffa5d8': string
  f28461bb: string
  dc9591e5: string
  f6e0d691: string
  '7605ff3d': string
  da71e1e5: string
  '2e60dc8f': string
  '8bf37ba9': string
  '34c1d5cc': string
  d98503f5: string
}
const StepsDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基本用法',
      '606ae3f5': '步骤一',
      '3c6225eb': '步骤二',
      '979df428': '步骤三',
      acfc4e74: '下一步',
      '0533b453': '标题和描述信息',
      db1b4ed6: '步骤描述',
      '70ffa5d8': '自定义图标',
      f28461bb: '已完成',
      dc9591e5: '进行中',
      f6e0d691: '未开始',
      '7605ff3d': '竖向步骤条',
      da71e1e5: '您的订单已经打包完成，商品已发出',
      '2e60dc8f': '您的订单正在配送途中',
      '8bf37ba9': '收货地址为：',
      '34c1d5cc': '北京市经济技术开发区科创十一街18号院京东大厦',
      d98503f5: '点状步骤和垂直方向',
    },
    'zh-TW': {
      '74fc5d8a': '基本用法',
      '606ae3f5': '步驟一',
      '3c6225eb': '步驟二',
      '979df428': '步驟三',
      acfc4e74: '下一步',
      '0533b453': '標題和描述信息',
      db1b4ed6: '步驟描述',
      '70ffa5d8': '自定義圖標',
      f28461bb: '已完成',
      dc9591e5: '進行中',
      f6e0d691: '未開始',
      '7605ff3d': '豎向步驟條',
      da71e1e5: '您的訂單已經打包完成，商品已發出',
      '2e60dc8f': '您的訂單正在配送途中',
      '8bf37ba9': '收貨地址為：',
      '34c1d5cc': '北京市經濟技術開發區科創十一街18號院京東大廈',
      d98503f5: '點狀步驟和垂直方向',
    },
    'en-US': {
      '74fc5d8a': 'Basic usage',
      '606ae3f5': 'step one',
      '3c6225eb': 'Step 2',
      '979df428': 'Step 3',
      acfc4e74: 'Next step',
      '0533b453': 'Title and description information',
      db1b4ed6: 'Step description',
      '70ffa5d8': 'custom icon',
      f28461bb: 'completed',
      dc9591e5: 'in progress',
      f6e0d691: 'has not started',
      '7605ff3d': 'vertical step bar',
      da71e1e5: 'Your order has been packed and the item has been dispatched',
      '2e60dc8f': 'Your order is on the way',
      '8bf37ba9': 'The delivery address is:',
      '34c1d5cc':
        'Jingdong Building, No. 18, Kechuang 11th Street, Beijing Economic and Technological Development Zone',
      d98503f5: 'Dot Steps and Vertical Orientation',
    },
  })

  const [stepState, setStepState] = useState<any>({
    current1: 1,
    current2: 1,
    current3: 1,
    current4: 1,
    current5: 1,
  })
  const handleStep = (params: string) => {
    if (stepState[params] >= 3) {
      stepState[params] = 1
      setStepState({ ...stepState })
    } else {
      stepState[params] += 1
      setStepState({ ...stepState })
    }
  }
  const handleClickStep = (index: number) => {
    console.log(index)
  }
  return (
    <>
      <div className="demo padding">
        <h2>{translated['74fc5d8a']}</h2>
        <div className="steps-wrapper">
          <Steps current={stepState.current1} clickStep={handleClickStep}>
            <Step activeIndex={1} title={translated['606ae3f5']}>
              1
            </Step>
            <Step activeIndex={2} title={translated['3c6225eb']}>
              2
            </Step>
            <Step activeIndex={3} title={translated['979df428']}>
              3
            </Step>
          </Steps>
          <div className="steps-button">
            <Button type="danger" onClick={() => handleStep('current1')}>
              {translated.acfc4e74}
            </Button>
          </div>
        </div>
        <h2>{translated['0533b453']}</h2>
        <div className="steps-wrapper">
          <Steps current={stepState.current2}>
            <Step activeIndex={1} title={translated['606ae3f5']} content={translated.db1b4ed6}>
              1
            </Step>
            <Step activeIndex={2} title={translated['3c6225eb']} content={translated.db1b4ed6} />
            <Step activeIndex={3} title={translated['979df428']} content={translated.db1b4ed6} />
          </Steps>
          <div className="steps-button" style={{ marginTop: '10px' }}>
            <Button type="danger" onClick={() => handleStep('current2')}>
              {translated.acfc4e74}
            </Button>
          </div>
        </div>
        <h2>{translated['70ffa5d8']}</h2>
        <div className="steps-wrapper">
          <Steps current={1}>
            <Step activeIndex={1} title={translated.f28461bb} icon="service">
              1
            </Step>
            <Step activeIndex={2} title={translated.dc9591e5} icon="people">
              2
            </Step>
            <Step activeIndex={3} title={translated.f6e0d691} icon="location2">
              3
            </Step>
          </Steps>
        </div>
        <h2>{translated['7605ff3d']}</h2>
        <div className="steps-wrapper" style={{ height: '300px', padding: '15px 30px' }}>
          <Steps direction="vertical" current={2}>
            <Step activeIndex={1} title={translated.f28461bb} content={translated.da71e1e5}>
              1
            </Step>
            <Step activeIndex={2} title={translated.dc9591e5} content={translated['2e60dc8f']}>
              2
            </Step>
            <Step
              activeIndex={3}
              title={translated.f6e0d691}
              content={`${translated['8bf37ba9']}${translated['34c1d5cc']}`}
            >
              3
            </Step>
          </Steps>
        </div>
        <h2>{translated.d98503f5}</h2>
        <div className="steps-wrapper" style={{ height: '300px', padding: '15px 40px' }}>
          <Steps direction="vertical" progressDot current={2}>
            <Step activeIndex={1} title={translated.f28461bb} content={translated.da71e1e5}>
              1
            </Step>
            <Step activeIndex={2} title={translated.dc9591e5} content={translated['2e60dc8f']}>
              2
            </Step>
            <Step
              activeIndex={3}
              title={translated.f6e0d691}
              renderContent={() => (
                <>
                  <p>{translated['8bf37ba9']}</p>
                  <p>{translated['34c1d5cc']}</p>
                </>
              )}
            >
              3
            </Step>
          </Steps>
        </div>
      </div>
    </>
  )
}

export default StepsDemo
