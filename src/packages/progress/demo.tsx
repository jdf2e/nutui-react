import React, { useState } from 'react'
import { Checked, Issue } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Progress } from './progress'
import { Cell } from '@/packages/cell/cell'
import { Image } from '@/packages/image/image'
import { Button } from '@/packages/button/button'
import Toast from '../toast'

interface T {
  basic: string
  customStyle: string
  noShowPercentage: string
  customContent: string
  customSize: string
  statusDisplay: string
  dynamicChange: string
  reduce: string
  add: string
  lazy: string
}

const ProgressDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '设置颜色与宽度',
      noShowPercentage: '显示百分比',
      customContent: '自定义显示内容',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      reduce: '减少',
      add: '增加',
      lazy: '延迟加载数据',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '設置顏色與寛度',
      noShowPercentage: '顯示百分比',
      customContent: '自定義顯示內容',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      reduce: '減少',
      add: '增加',
      lazy: '延迟加载数据',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Show Percentage',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      reduce: 'reduce',
      add: 'add',
      lazy: 'Delay time',
    },
  })

  const [value, setValue] = useState(0)

  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell>
          <Progress percent={30} />
        </Cell>
        <h2>{translated.customStyle}</h2>
        <Cell>
          <Progress
            percent={30}
            background="rgba(250,44,25,0.2)"
            color="rgba(250,44,25,0.9)"
            strokeWidth="15"
          />
        </Cell>
        <h2>{translated.noShowPercentage}</h2>
        <Cell>
          <Progress percent={50} showText />
        </Cell>
        <h2>{translated.customContent}</h2>
        <Cell>
          <Progress percent={60} showText>
            <Image
              width="30px"
              height="30px"
              src="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            />
          </Progress>
        </Cell>
        <h2>{translated.customSize}</h2>
        <Cell>
          <Progress percent={30} strokeWidth="5" showText />
        </Cell>
        <Cell>
          <Progress percent={50} strokeWidth="10" showText />
        </Cell>
        <Cell>
          <Progress percent={70} strokeWidth="15" showText />
        </Cell>
        <h2>{translated.statusDisplay}</h2>
        <Cell>
          <Progress
            percent={30}
            color="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            animated
          />
        </Cell>
        <Cell align="center">
          <Progress percent={100} />
          <Checked color="green" style={{ margin: '0 5px' }} />
        </Cell>
        <Cell align="center">
          <Progress
            percent={100}
            color="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
            strokeWidth="15"
          />
          <Issue color="red" style={{ margin: '0 5px' }} />
        </Cell>
        <h2>{translated.dynamicChange}</h2>
        <Cell.Group>
          <Cell align="center">
            <Progress percent={value} />
            <span style={{ margin: '0 5px' }}>{value}%</span>
          </Cell>
          <Cell align="center">
            <Button
              type="default"
              style={{ margin: 8 }}
              onClick={() => {
                if (value <= 0) {
                  Toast.show('进度已为0')
                }
                setValue(Math.max(0, value - 10))
              }}
            >
              {translated.reduce}
            </Button>
            <Button
              type="primary"
              style={{ margin: 8 }}
              onClick={() => {
                if (value >= 100) {
                  Toast.show('进度已为100%')
                }
                setValue(Math.min(100, value + 10))
              }}
            >
              {translated.add}
            </Button>
          </Cell>
        </Cell.Group>
        <h2>{translated.lazy}</h2>
        <Cell align="center">
          <Progress percent={30} lazy delay={500} />
        </Cell>
      </div>
    </>
  )
}

export default ProgressDemo
