import React, { useRef, useState } from 'react'
import { Popover } from './popover'
import Button from '@/packages/button'
import Icon from '@/packages/icon'

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
        <h2>基础用法</h2>
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

        <h2>选项配置</h2>
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

        <h2>自定义内容</h2>
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
                {k} 弹出
              </Button>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default BadgeDemo
