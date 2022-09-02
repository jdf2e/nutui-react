import React, { useRef, useState } from 'react'
import { useTranslate } from '../../sites/assets/locale'
import { Popover } from './popover'
import Button from '@/packages/button'
import Icon from '@/packages/icon'

interface T {
  [props: string]: string
}
interface List {
  name: string
  icon?: string
  disabled?: boolean
}

const BadgeDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      title: '基础用法',
      title1: '选项配置',
      title2: '自定义内容',
      title3: '位置自定义',
      light: '明朗风格',
      dark: '暗黑风格',
      showIcon: '展示图标',
      disableAction: '禁用选项',
      content: '自定义内容',
      popup: '弹出',
    },
    'en-US': {
      title: 'Basic Usage',
      title1: 'Option Configuration',
      title2: 'Custom Content',
      title3: 'Custom Location',
      light: 'light',
      dark: 'dark',
      showIcon: 'show icon',
      disableAction: 'disabled',
      content: 'custom content',
      popup: '',
    },
    'zh-TW': {
      title: '基礎用法',
      title1: '選項配置',
      title2: '自定義內容',
      title3: '位置自定義',
      light: '明朗風格',
      dark: '暗黑風格',
      showIcon: '展示圖標',
      disableAction: '禁用選項',
      content: '自定義內容',
      popup: '彈出',
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
      name: 'option1',
    },
    {
      name: 'option2',
    },
    {
      name: 'option3',
    },
  ]
  const iconItemList = [
    {
      name: 'option1',
      icon: 'my2',
    },
    {
      name: 'option2',
      icon: 'cart2',
    },
    {
      name: 'option3',
      icon: 'location2',
    },
  ]
  const itemListDisabled = [
    {
      name: 'option1',
      disabled: true,
    },
    {
      name: 'option2',
      disabled: true,
    },
    {
      name: 'option3',
    },
  ]
  const selfContent = [
    {
      name: 'service',
      desc: 'option1',
    },
    {
      name: 'notice',
      desc: 'option2',
    },
    {
      name: 'location',
      desc: 'option3',
    },
    {
      name: 'category',
      desc: 'option4',
    },
    {
      name: 'scan2',
      desc: 'option5',
    },
    {
      name: 'message',
      desc: 'option6',
    },
  ]
  const [lightTheme, setLightTheme] = useState(false)
  const [darkTheme, setDarkTheme] = useState(false)
  const [showIcon, setShowIcon] = useState(false)
  const [disableAction, setDisableAction] = useState(false)
  const [customized, setCustomized] = useState(false)
  const customLocation = useRef([
    { bottom: false },
    { top: false },
    { left: false },
    { right: false },
    { 'top-start': false },
    { 'top-end': false },
    { 'bottom-start': false },
    { 'bottom-end': false },
    { 'left-start': false },
    { 'left-end': false },
    { 'right-start': false },
    { 'right-end': false },
  ])

  const [customLocationName, setCustomLocationName] = useState('top')
  const [customLocationShow, setCustomLocationShow] = useState(false)

  const chooseHandle = (item: List, index: number) => {
    console.log('选择')
  }

  const styles = `
    .customButtonBox {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
    }
    
    .brickBox {
      display: flex;
      justify-content: center;
      margin: 80px 0;
    }
    
    .brick {
      width: 60px;
      height: 60px;
      background: #1989fa;
      border-radius: 10px;
    }
    
    .popover-content {
      width: 100px;
    }
    
    .customContent .popover-content{
        width: 200px;
    }
  `

  return (
    <>
      <style>{styles}</style>
      <div className="demo">
        <h2>{translated.title}</h2>
        <Popover
          visible={lightTheme}
          onClick={() => {
            lightTheme ? setLightTheme(false) : setLightTheme(true)
          }}
          list={itemList}
          style={{ marginRight: '30px' }}
        >
          <Button type="primary" shape="square">
            {translated.light}
          </Button>
        </Popover>
        <Popover
          visible={darkTheme}
          theme="dark"
          onClick={() => {
            darkTheme ? setDarkTheme(false) : setDarkTheme(true)
          }}
          list={itemList}
        >
          <Button type="primary" shape="square">
            {translated.dark}
          </Button>
        </Popover>

        <h2>{translated.title1}</h2>
        <Popover
          visible={showIcon}
          theme="dark"
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
          onChoose={chooseHandle}
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
          location="bottom-start"
          className="customContent"
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
                    key={item.name}
                  >
                    <Icon name={item.name} size="15" />
                    <div className="self-content-desc" style={selfContentDesc}>
                      {item.desc}
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            ''
          )}
        </Popover>

        <h2 className="demoClass">{translated.title3}</h2>

        <Popover
          visible={customLocationShow}
          location={customLocationName}
          onClick={() => {
            setCustomLocationShow(false)
          }}
          list={iconItemList}
          onChoose={chooseHandle}
          className="brickBox"
        >
          <div className="brick" />
        </Popover>

        <div className="customButtonBox">
          {customLocation.current.map((location, i) => {
            const k = Object.keys(location)[0] as any
            const v = Object.values(location)[0]
            return (
              <Button
                key={i}
                type="primary"
                shape="square"
                style={{ width: '160px', marginBottom: '8px' }}
                onClick={() => {
                  setCustomLocationName(k)
                  setCustomLocationShow(!customLocationShow)
                }}
              >
                {k} {translated.popup}
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BadgeDemo
