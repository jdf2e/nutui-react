import React, { useState } from 'react'
import {
  Home,
  Cart,
  Location,
  Service,
  Notice,
  Category,
} from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Popover } from './popover'
import Button from '@/packages/button'
import Cell from '@/packages/cell'
import Picker from '@/packages/picker'
import './demo.scss'

interface T {
  [props: string]: string
}

interface List {
  key?: string
  name: string
  icon?: React.ReactNode
  disabled?: boolean
  className?: string
}

interface PickerOption {
  text: string | number
  value: string | number
  disabled?: boolean
  children?: PickerOption[]
  className?: string | number
}

const PopoverDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容',
      title3: '位置自定义',
      title4: '自定义目标元素',
      dark: '暗黑风格',
      showIcon: '展示图标',
      disableAction: '禁用选项',
      content: '自定义内容',
      contentColor: '自定义颜色',
      showMoreDirection: '点击查看更多方向',
      scroll: '置于可滚动容器中',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content',
      title3: 'Custom Location',
      title4: 'Custom Target Element',
      dark: 'Dark',
      showIcon: 'Show Icon',
      disableAction: 'Disabled',
      content: 'Custom Content',
      contentColor: 'Custom Color',
      showMoreDirection: 'click show more direction',
      scroll: 'In scrollable contain',
    },
    'zh-TW': {
      title: '基礎用法',
      title1: '選項配置',
      title2: '自定義內容',
      title3: '位置自定義',
      title4: '自定義目標元素',
      dark: '暗黑風格',
      showIcon: '展示圖標',
      disableAction: '禁用選項',
      content: '自定義內容',
      contentColor: '自定義顏色',
      showMoreDirection: '點擊查看更多方向',
      scroll: '置於可滾動容器中',
    },
  })
  const selfContentStyle = {
    width: '195px',
    display: 'flex',
    flexWrap: 'wrap',
  } as any
  const selfContentItem = {
    marginTop: '10px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  } as any
  const selfContentDesc = {
    marginTop: '5px',
    width: '60px',
    fontSize: '10px',
    textAlign: 'center',
  } as any

  const itemList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  const iconItemList = [
    {
      key: 'key1',
      name: 'option1',
      icon: <Home color="rgba(250, 44, 25, 1)" />,
      action: {
        icon: <Home />,
        onClick: (e: any) => {
          console.log('onclick 1')
          e.stopPropagation()
        },
      },
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location />,
    },
  ]
  const itemListDisabled = [
    {
      key: 'key1',
      name: 'option1',
      disabled: true,
    },
    {
      key: 'key2',
      name: 'option2',
      disabled: true,
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  const selfContent = [
    {
      key: 'key1',
      name: <Service />,
      description: 'option1',
    },
    {
      key: 'key2',
      name: <Notice />,
      description: 'option2',
    },
    {
      key: 'key3',
      name: <Location />,
      description: 'option3',
    },
    {
      key: 'key4',
      name: <Category />,
      description: 'option4',
    },
    {
      key: 'key5',
      name: <Cart />,
      description: 'option5',
    },
    {
      key: 'key6',
      name: <Home />,
      description: 'option6',
    },
  ]
  const positionList = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
  ]

  const columns = [
    { text: 'top', value: 'top' },
    { text: 'top-start', value: 'top-start' },
    { text: 'top-end', value: 'top-end' },
    { text: 'right', value: 'right' },
    { text: 'right-start', value: 'right-start' },
    { text: 'right-end', value: 'right-end' },
    { text: 'bottom', value: 'bottom' },
    { text: 'bottom-start', value: 'bottom-start' },
    { text: 'bottom-end', value: 'bottom-end' },
    { text: 'left', value: 'left' },
    { text: 'left-start', value: 'left-start' },
    { text: 'left-end', value: 'left-end' },
  ]
  const [basic, setBasic] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const [customized, setCustomized] = useState(false)
  const [showPicker, setShowPicker] = useState(false)
  const [customPositon, setCustomPosition] = useState(false)
  const [customTarget, setCustomTarget] = useState(false)
  const [customColor, setCustomColor] = useState(false)
  const [curPostion, setCurPostion] = useState('')
  const [baseDesc, setBaseDesc] = useState('')

  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }

  const handlePicker = () => {
    setShowPicker(true)
    setTimeout(() => {
      setCustomPosition(true)
    }, 500)
  }

  const clickCustomHandle = () => {
    setCustomTarget(!customTarget)
  }
  const [visiblePopover, setVisiblePopover] = useState(false)
  const [visiblePopover1, setVisiblePopover1] = useState(false)
  const list = [
    {
      key: 'key1',
      name: 'option1',
    },
    {
      key: 'key2',
      name: 'option2',
    },
    {
      key: 'key3',
      name: 'option3',
    },
  ]
  return (
    <>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Popover
          visible={basic}
          list={itemList}
          location="bottom-start"
          style={{ marginRight: '30px' }}
          onClick={() => {
            basic ? setBasic(false) : setBasic(true)
          }}
        >
          <Button type="primary" shape="square">
            {translated.title}
          </Button>
        </Popover>

        <h2>{translated.title1}</h2>
        <Popover
          visible={showIcon}
          location="bottom-start"
          onClick={() => {
            showIcon ? setShowIcon(false) : setShowIcon(true)
          }}
          list={iconItemList}
          style={{ marginRight: '30px' }}
        >
          <Button type="primary" shape="square">
            {translated.showIcon}
          </Button>
        </Popover>
        <Popover
          visible={disableAction}
          onClick={() => {
            disableAction ? setDisableAction(false) : setDisableAction(true)
          }}
          list={itemListDisabled}
          location="right"
          onSelect={chooseHandle}
        >
          <Button type="primary" shape="square">
            {translated.disableAction}
          </Button>
        </Popover>

        <h2>{translated.content}</h2>
        <Popover
          visible={customized}
          onClick={() => {
            customized ? setCustomized(false) : setCustomized(true)
          }}
          location="top-start"
          className="customClass"
        >
          <Button type="primary" shape="square">
            {translated.content}
          </Button>
          {customized ? (
            <div className="self-content" style={selfContentStyle}>
              {selfContent.map((item: any) => {
                return (
                  <div
                    className="self-content-item"
                    style={selfContentItem}
                    key={item.key}
                  >
                    {item.name ? item.name : null}
                    <div
                      className="self-content-description"
                      style={selfContentDesc}
                    >
                      {item.description}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : null}
        </Popover>

        <h2>{translated.title3}</h2>
        <Cell
          title={translated.showMoreDirection}
          description={baseDesc}
          onClick={handlePicker}
        />
        <Picker
          visible={showPicker}
          options={columns}
          duration="500"
          title=""
          onConfirm={(list) => {
            let description = ''
            list.forEach((option: any) => {
              description += ` ${option.text}`
            })
            setBaseDesc(description)
          }}
          onChange={(options: PickerOption[]) => {
            if (options[0]?.value) {
              setCurPostion(options[0].value as string)
            }
          }}
          onClose={() => {
            setShowPicker(false)
            setCustomPosition(false)
          }}
        >
          <div className="brickBox">
            <div className="brick" id="pickerTarget" />
          </div>
        </Picker>
        <Popover
          className="custom-color"
          visible={customPositon}
          targetId="pickerTarget"
          list={positionList}
          location={curPostion}
        />

        <h2>{translated.title4}</h2>
        <Popover
          visible={customTarget}
          targetId="popid"
          list={iconItemList}
          location="top-start"
          onClick={() => {
            setCustomTarget(false)
          }}
        />
        <Button
          type="primary"
          shape="square"
          id="popid"
          onClick={clickCustomHandle}
        >
          {translated.title4}
        </Button>

        <h2>{translated.contentColor}</h2>
        <Popover
          className="custom-color"
          visible={customColor}
          list={itemList}
          location="right-start"
          onClick={() => {
            customColor ? setCustomColor(false) : setCustomColor(true)
          }}
        >
          <Button type="primary" shape="square">
            {translated.contentColor}
          </Button>
        </Popover>

        <h2>{translated.scroll}</h2>
        <div
          style={{
            height: '200px',
            overflowY: 'scroll',
            position: 'relative',
          }}
        >
          <div style={{ height: '100px' }} />
          <Popover
            visible={visiblePopover1}
            list={list}
            location="top"
            closeOnOutsideClick={false}
            style={{ marginRight: '30px' }}
            onClick={() => {
              visiblePopover
                ? setVisiblePopover1(false)
                : setVisiblePopover1(true)
            }}
          >
            <Button id="test" type="primary" shape="square">
              {translated.scroll}
            </Button>
          </Popover>
          <div style={{ height: '100px' }} />
        </div>

        <h2>{translated.fixed}</h2>
        <div
          style={{
            position: 'fixed',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Popover
            visible={visiblePopover}
            list={list}
            location="top"
            style={{ marginRight: '30px' }}
            closeOnOutsideClick={false}
            onClick={() => {
              visiblePopover
                ? setVisiblePopover(false)
                : setVisiblePopover(true)
            }}
          >
            <Button type="primary" shape="square">
              position: fixed
            </Button>
          </Popover>
        </div>
        <div style={{ height: '100px' }} />
      </div>
    </>
  )
}

export default PopoverDemo
