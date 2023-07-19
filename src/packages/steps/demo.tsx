import React, { useState } from 'react'
import { Service, People, Location2 } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Steps } from './steps'
import Button from '@/packages/button'
import Step from '@/packages/step'
import ConfigProvider from '@/packages/configprovider'

import './demo.scss'

interface T {
  '74fc5d8a': string
  '74fc5d8b': string
  '606ae3f5': string
  '3c6225eb': string
  '979df428': string
  acfc4e74: string
  '0533b453': string
  db1b4ed6: string
  '0533b454': string
  '0533b455': string
  '0533b456': string
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

const customTheme = {
  nutuiStepsBaseLineWidth: '60%',
  nutuiStepsProcessIconBgColor: '#3768FA',
  nutuiStepsProcessIconColor: '#fff',
  nutuiStepsProcessTitleColor: '#3768FA',
  nutuiStepsProcessTitleFontSize: '15px',
  nutuiStepsProcessTitleFontWeight: '500',
  nutuiStepsFinishIconColor: '#3768FA',
  nutuiStepsFinishTitleColor: '#3768FA',
  nutuiStepsFinishLineBackground: '#3768FA',
}

const customTheme2 = {
  nutuiStepsBaseLineWidth: '80%',
  nutuiStepsBaseLineHeight: '2px',
  nutuiStepsFinishLineBackground: `linear-gradient(135deg,
    rgba(250, 250, 25, 1) 0%,
    rgba(250, 63, 25, 1) 45%,
    rgba(250, 89, 25, 1) 83%,
    rgba(250, 100, 25, 1) 100%)`,
}

const customTheme3 = {
  nutuiStepsDotHeadMargin: '0 0 12px 0',
  nutuiBrandColorEnd: 'var(--nutui-gray-0)',
  nutuiStepsDotIconBorder: '0',
  nutuiStepsBaseIconWidth: '6px',
  nutuiStepsBaseIconHeight: '6px',
  nutuiStepsBaseLineBackground: `var(--nutui-gray-3)`,
  nutuiStepsFinishIconBgColor: 'var(--nutui-gray-6)',
  nutuiStepsFinishIconColor: 'var(--nutui-gray-6)',
  nutuiStepsProcessIconBgColor: 'var(--nutui-gray-0)',
  nutuiStepsWaitIconBgColor: 'var(--nutui-gray-3)',
  nutuiStepsBaseLineWidth: '45px',
  nutuiStepsBaseLineHeight: '1px',
  nutuiStepsFinishLineBackground: `var(--nutui-gray-6)`,
}

const StepsDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '74fc5d8a': '基础用法',
      '74fc5d8b': '基础用法：点状',
      '606ae3f5': '步骤一',
      '3c6225eb': '步骤二',
      '979df428': '步骤三',
      acfc4e74: '下一步',
      '0533b453': '标题和描述信息',
      db1b4ed6: '步骤描述',
      '0533b454': '自定义步骤条',
      '0533b455': '自定义步骤条：点状',
      '0533b456': '自定义步骤条：点状 + icon',
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
      '74fc5d8a': '基础用法',
      '74fc5d8b': '基础用法：点状',
      '606ae3f5': '步驟一',
      '3c6225eb': '步驟二',
      '979df428': '步驟三',
      acfc4e74: '下一步',
      '0533b453': '標題和描述信息',
      db1b4ed6: '步驟描述',
      '0533b454': '自定義步驟条',
      '0533b455': '自定義步驟条：点状',
      '0533b456': '自定義步驟条：点状+icon',
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
      '74fc5d8b': 'Basic usage: Dot',
      '606ae3f5': 'step one',
      '3c6225eb': 'Step 2',
      '979df428': 'Step 3',
      acfc4e74: 'Next step',
      '0533b453': 'Title and description information',
      db1b4ed6: 'Step Description',
      '0533b454': 'Custom Step Bar',
      '0533b455': 'Custom Step Bar: Dot',
      '0533b456': 'Custom Step Bar: Dot+icon',
      '70ffa5d8': 'custom Icon',
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
          <Steps
            value={stepState.current1}
            onStepClick={() => handleStep('current2')}
          >
            <Step value={1} title={translated['606ae3f5']}>
              1
            </Step>
            <Step value={2} title={translated['3c6225eb']}>
              2
            </Step>
            <Step value={3} title={translated['979df428']}>
              3
            </Step>
          </Steps>
          <div className="steps-button">
            <Button
              type="primary"
              size="small"
              onClick={() => handleStep('current1')}
            >
              {translated.acfc4e74}
            </Button>
          </div>
        </div>

        <h2>{translated['74fc5d8b']}</h2>
        <div className="steps-wrapper">
          <Steps value={stepState.current1} dot onStepClick={handleClickStep}>
            <Step value={1}>1</Step>
            <Step value={2}>2</Step>
            <Step value={3}>3</Step>
          </Steps>
          <div className="steps-button">
            <Button
              type="primary"
              size="small"
              onClick={() => handleStep('current1')}
            >
              {translated.acfc4e74}
            </Button>
          </div>
        </div>
        <h2>{translated['0533b453']}</h2>
        <div className="steps-wrapper">
          <Steps value={stepState.current2}>
            <Step
              value={1}
              title={translated['606ae3f5']}
              description={translated.db1b4ed6}
            >
              1
            </Step>
            <Step
              value={2}
              title={translated['3c6225eb']}
              description={translated.db1b4ed6}
            />
            <Step
              value={3}
              title={translated['979df428']}
              description={translated.db1b4ed6}
            />
          </Steps>
          <div className="steps-button" style={{ marginTop: '10px' }}>
            <Button
              type="primary"
              size="small"
              onClick={() => handleStep('current2')}
            >
              {translated.acfc4e74}
            </Button>
          </div>
        </div>

        <h2>{translated['0533b454']}</h2>
        <div className="steps-wrapper">
          <ConfigProvider theme={customTheme}>
            <Steps
              value={stepState.current2}
              onStepClick={() => handleStep('current2')}
            >
              <Step
                value={1}
                title={translated['606ae3f5']}
                description={translated.db1b4ed6}
              >
                1
              </Step>
              <Step
                value={2}
                title={translated['3c6225eb']}
                description={translated.db1b4ed6}
              />
              <Step
                value={3}
                title={translated['979df428']}
                description={translated.db1b4ed6}
              />
            </Steps>
          </ConfigProvider>
          <div className="steps-button" style={{ marginTop: '10px' }}>
            <Button
              type="primary"
              size="small"
              onClick={() => handleStep('current2')}
            >
              {translated.acfc4e74}
            </Button>
          </div>
        </div>

        <h2>{translated['0533b455']}</h2>
        <div className="steps-wrapper">
          <ConfigProvider theme={customTheme2}>
            <Steps value={stepState.current1} dot onStepClick={handleClickStep}>
              <Step value={1}>1</Step>
              <Step value={2}>2</Step>
              <Step value={3}>3</Step>
            </Steps>
          </ConfigProvider>
          <div className="steps-button">
            <Button
              type="primary"
              size="small"
              onClick={() => handleStep('current1')}
            >
              {translated.acfc4e74}
            </Button>
          </div>
        </div>

        <h2>{translated['0533b456']}</h2>
        <div className="steps-wrapper">
          <ConfigProvider theme={customTheme3}>
            <Steps dot value={2}>
              <Step value={1} title={translated.f28461bb}>
                1
              </Step>
              <Step
                value={2}
                title={translated.dc9591e5}
                icon={
                  <People
                    width={20}
                    height={20}
                    style={{ color: 'red', flex: 'none' }}
                  />
                }
              >
                2
              </Step>
              <Step value={3} title={translated.f6e0d691}>
                3
              </Step>
            </Steps>
          </ConfigProvider>
        </div>

        <h2>{translated['70ffa5d8']}</h2>
        <div className="steps-wrapper">
          <Steps value={1}>
            <Step
              value={1}
              title={translated.f28461bb}
              icon={<Service width={12} height={12} />}
            >
              1
            </Step>
            <Step
              value={2}
              title={translated.dc9591e5}
              icon={<People width={12} height={12} />}
            >
              2
            </Step>
            <Step
              value={3}
              title={translated.f6e0d691}
              icon={<Location2 width={12} height={12} />}
            >
              3
            </Step>
          </Steps>
        </div>
        <h2>{translated['7605ff3d']}</h2>
        <div
          className="steps-wrapper"
          style={{ height: '300px', padding: '15px 30px' }}
        >
          <Steps direction="vertical" value={2}>
            <Step
              value={1}
              title={translated.f28461bb}
              description={translated.da71e1e5}
            >
              1
            </Step>
            <Step
              value={2}
              title={translated.dc9591e5}
              description={translated['2e60dc8f']}
            >
              2
            </Step>
            <Step
              value={3}
              title={translated.f6e0d691}
              description={`${translated['8bf37ba9']}${translated['34c1d5cc']}`}
            >
              3
            </Step>
          </Steps>
        </div>
        <h2>{translated.d98503f5}</h2>
        <div
          className="steps-wrapper"
          style={{ height: '300px', padding: '15px 40px' }}
        >
          <Steps direction="vertical" dot value={2}>
            <Step
              value={1}
              title={translated.f28461bb}
              description={translated.da71e1e5}
            >
              1
            </Step>
            <Step
              value={2}
              title={translated.dc9591e5}
              description={translated['2e60dc8f']}
            >
              2
            </Step>
            <Step
              value={3}
              title={translated.f6e0d691}
              description={
                <>
                  <p>{translated['8bf37ba9']}</p>
                  <p>{translated['34c1d5cc']}</p>
                </>
              }
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
