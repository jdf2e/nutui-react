import React, { useState } from 'react'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Cell,
  Icon,
  Progress,
  Button,
  Toast,
} from '@/packages/nutui.react.taro'

interface T {
  basic: string
  customStyle: string
  noShowPercentage: string
  showPercentage: string
  showInsidePercentage: string
  customContent: string
  customSize: string
  statusDisplay: string
  dynamicChange: string
  reduce: string
  add: string
}

const ProgressDemo = () => {
  const cellStyles = {
    paddingRight: '30px',
  }
  const [translated] = useTranslate<T>({
    'zh-CN': {
      basic: '基础用法',
      customStyle: '线形进度条-设置颜色高度',
      noShowPercentage: '百分比不显示',
      showPercentage: '百分比外显',
      showInsidePercentage: '百分比内显',
      customContent: '百分比内显自定义',
      customSize: '自定义尺寸',
      statusDisplay: '状态显示',
      dynamicChange: '动态改变',
      reduce: '减少',
      add: '增加',
    },
    'zh-TW': {
      basic: '基礎用法',
      customStyle: '線形進度條-設置顏色高度',
      noShowPercentage: '百分比不顯示',
      showPercentage: '百分比外顯',
      showInsidePercentage: '百分比內顯',
      customContent: '百分比內顯自定義',
      customSize: '自定義尺寸',
      statusDisplay: '狀態顯示',
      dynamicChange: '動態改變',
      reduce: '減少',
      add: '增加',
    },
    'en-US': {
      basic: 'Basic Usage',
      customStyle: 'Custom Style',
      noShowPercentage: 'Don’t Show Percentage',
      showPercentage: 'Percentage displayed outside',
      showInsidePercentage: 'Percentage displayed inside',
      customContent: 'Custom Content',
      customSize: 'Custom Size',
      statusDisplay: 'Status Display',
      dynamicChange: 'Dynamic Change',
      reduce: 'reduce',
      add: 'add',
    },
  })

  const [value, setValue] = useState(0)
  const [show, SetShow] = useState(false)
  const [toastMsg, SetToastMsg] = useState('')
  const toastShow = (msg: any) => {
    SetToastMsg(msg)
    SetShow(true)
  }
  return (
    <>
      <div className="demo">
        <h2>{translated.basic}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={30} />
        </Cell>
        <h2>{translated.customStyle}</h2>
        <Cell style={cellStyles}>
          <Progress
            percentage={30}
            strokeColor="rgba(250,44,25,0.47)"
            stroke-width="20"
            textColor="red"
          />
        </Cell>
        <h2>{translated.noShowPercentage}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={50} showText={false} />
        </Cell>
        <h2>{translated.showPercentage}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={30} />
        </Cell>
        <h2>{translated.showInsidePercentage}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={60} textInside />
        </Cell>
        <h2>{translated.customContent}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={60} textInside>
            <Icon
              size={30}
              name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
            />
          </Progress>
        </Cell>
        <h2>{translated.customSize}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={30} size="small" textInside />
        </Cell>
        <Cell style={cellStyles}>
          <Progress percentage={50} size="base" textInside />
        </Cell>
        <Cell style={cellStyles}>
          <Progress percentage={70} size="large" textInside />
        </Cell>
        <h2>{translated.statusDisplay}</h2>
        <Cell style={cellStyles}>
          <Progress
            percentage={30}
            strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
            status
          />
        </Cell>
        <Cell style={cellStyles}>
          <Progress percentage={100} textType="icon" />
        </Cell>
        <Cell style={cellStyles}>
          <Progress
            percentage={100}
            strokeColor="linear-gradient(90deg, rgba(180,236,81,1) 0%,rgba(66,147,33,1) 100%)"
            strokeWidth="15"
            textType="icon"
            iconName="issue"
            iconColor="red"
          />
        </Cell>
        <h2>{translated.dynamicChange}</h2>
        <Cell style={cellStyles}>
          <Progress percentage={value} />
        </Cell>
        <Cell style={cellStyles}>
          <Button
            type="default"
            style={{ margin: 8 }}
            // eslint-disable-next-line consistent-return
            onClick={() => {
              let num = value
              if (value <= 0) {
                // Toast.text('进度已为0')
                toastShow('进度已为0')
                return false
              }
              num -= 10
              setValue(num)
            }}
          >
            {translated.reduce}
          </Button>
          <Button
            type="primary"
            style={{ margin: 8 }}
            // eslint-disable-next-line consistent-return
            onClick={() => {
              let num = value
              if (value >= 100) {
                // Toast.text('进度已为100%')
                toastShow('进度已为100%')
                return false
              }
              num += 10
              setValue(num)
            }}
          >
            {translated.add}
          </Button>
        </Cell>
        <Toast
          type="text"
          visible={show}
          msg={toastMsg}
          onClose={() => {
            SetShow(false)
          }}
        />
      </div>
    </>
  )
}

export default ProgressDemo
