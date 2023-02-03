import React, { useRef, useState } from 'react'
import { Button, Icon, Popover, Cell } from '@/packages/nutui.react.taro'
import '@/packages/popover/demo.scss'
import Header from '@/sites/components/header'
import Taro from '@tarojs/taro'

interface List {
  name: string
  icon?: string
  disabled?: boolean
}

interface List {
  name: string
  icon?: string
  disabled?: boolean
}

const BadgeDemo = () => {
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
      name: '选项一',
    },
    {
      name: '选项二',
    },
    {
      name: '选项三',
    },
  ]
  const iconItemList = [
    {
      name: '选项一',
      icon: 'my2',
    },
    {
      name: '选项二',
      icon: 'cart2',
    },
    {
      name: '选项三',
      icon: 'location2',
    },
  ]
  const itemListDisabled = [
    {
      name: '选项一',
      disabled: true,
    },
    {
      name: '选项二',
      disabled: true,
    },
    {
      name: '选项三',
    },
  ]
  const selfContent = [
    {
      name: 'service',
      desc: '选项一',
    },
    {
      name: 'notice',
      desc: '选项二',
    },
    {
      name: 'location',
      desc: '选项三',
    },
    {
      name: 'category',
      desc: '选项四',
    },
    {
      name: 'scan2',
      desc: '选项五',
    },
    {
      name: 'message',
      desc: '选项六',
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

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>
        <Cell>
          <Popover
            visible={lightTheme}
            onClick={() => {
              lightTheme ? setLightTheme(false) : setLightTheme(true)
            }}
            list={itemList}
            style={{ marginRight: '30px' }}
          >
            <Button type="primary" shape="square">
              明朗风格
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
              暗黑风格
            </Button>
          </Popover>
        </Cell>
        <h2>选项配置</h2>
        <Cell>
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
              展示图标
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
              禁用选项
            </Button>
          </Popover>
        </Cell>
        <h2>自定义内容</h2>
        <Cell>
          <Popover
            visible={customized}
            onClick={() => {
              customized ? setCustomized(false) : setCustomized(true)
            }}
            location="bottom-start"
            className="customContent"
          >
            <Button type="primary" shape="square">
              自定义内容
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
                      <div
                        className="self-content-desc"
                        style={selfContentDesc}
                      >
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
        </Cell>
        <h2 className="demoClass">位置自定义</h2>

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

        <Cell className="demo-cell-popover">
          <div className="customButtonBox">
            {customLocation.current.map((location, i) => {
              const k = Object.keys(location)[0] as any
              const v = Object.values(location)[0]
              return (
                <Button
                  key={i}
                  type="primary"
                  shape="square"
                  style={{ width: '140px', marginBottom: '8px' }}
                  onClick={() => {
                    setCustomLocationName(k)
                    setCustomLocationShow(!customLocationShow)
                  }}
                >
                  {k}
                </Button>
              )
            })}
          </div>
        </Cell>
      </div>
    </>
  )
}

export default BadgeDemo
