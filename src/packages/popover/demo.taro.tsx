import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import {
  Cart2,
  Location2,
  My2,
  Category,
  Location,
  Message,
  Notice,
  Scan2,
  Service,
} from '@nutui/icons-react-taro'
import { Button, Popover, Cell, Picker } from '@/packages/nutui.react.taro'
import '@/packages/popover/demo.scss'
import Header from '@/sites/components/header'

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
      icon: <My2 color="rgba(250, 44, 25, 1)" style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key2',
      name: 'option2',
      icon: <Cart2 style={{ marginRight: '8px' }} />,
    },
    {
      key: 'key3',
      name: 'option3',
      icon: <Location2 style={{ marginRight: '8px' }} />,
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
      name: <Scan2 />,
      description: 'option5',
    },
    {
      key: 'key6',
      name: <Message />,
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

  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>基础用法</h2>

        <Popover
          visible={basic}
          list={itemList}
          location="bottom-start"
          style={{ marginRight: '30px' }}
          onClick={() => {
            basic ? setBasic(false) : setBasic(true)
          }}
          onOpen={() => {
            console.log('打开菜单时触发')
          }}
          onClose={() => {
            console.log('关闭菜单时触发')
          }}
        >
          <Button type="primary" shape="square">
            基础用法
          </Button>
        </Popover>

        <h2>选项配置</h2>
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
            展示图标
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
            禁用选项
          </Button>
        </Popover>

        <h2>自定义内容</h2>
        <Popover
          visible={customized}
          onClick={() => {
            customized ? setCustomized(false) : setCustomized(true)
          }}
          location="top-start"
          className="customClass"
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
          ) : (
            ''
          )}
        </Popover>
        <h2 className="demoClass">位置自定义</h2>

        <Cell
          title="点击查看更多方向"
          description={baseDesc}
          onClick={handlePicker}
        ></Cell>
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
            <div className="brick" id="pickerTarget"></div>
          </div>
        </Picker>
        <Popover
          className="custom-color"
          visible={customPositon}
          targetId="pickerTarget"
          list={positionList}
          location={curPostion}
        ></Popover>

        <h2>自定义目标元素</h2>
        <Popover
          visible={customTarget}
          targetId="popid"
          list={iconItemList}
          location="top-start"
          onClick={() => {
            setCustomTarget(false)
          }}
        ></Popover>
        <Button
          type="primary"
          shape="square"
          id="popid"
          onClick={clickCustomHandle}
        >
          自定义目标元素
        </Button>

        <h2>自定义颜色</h2>
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
            自定义颜色
          </Button>
        </Popover>
      </div>
    </>
  )
}

export default PopoverDemo
