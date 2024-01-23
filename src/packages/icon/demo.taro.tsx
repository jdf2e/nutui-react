import React, { useState } from 'react'
import Taro from '@tarojs/taro'
import '@nutui/icons-react-taro/dist/style_iconfont.css'
import {
  Add,
  IconFontConfig,
  IconFont,
  Dongdong,
  UserAdd,
} from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import { Cell, Toast } from '@/packages/nutui.react.taro'
import '@/packages/icon/demo.scss'
import Header from '@/sites/components/header'
import { camelCase } from '@/utils/camel-case'

interface T {
  '84aa6bce': string
  dab8a74f: string
  svg: string
  '52c15454': string
  '7aeb5407': string
  f2e6c6d6: string
}

const generateCopyText = (name: string) => {
  return `<${camelCase(name, { pascalCase: true })} />`
}
const generateAMCopyText = (icon: any) => {
  return `<${camelCase(icon.name, {
    pascalCase: true,
  })} className="${`nut-icon-${icon['animation-name']}  nut-icon-${icon['animation-time']}`}" />`
}
const copyTag = (text: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', text)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
  }
  document.body.removeChild(input)
}

const style = `
.nut-cell > .nutui-iconfont, .nut-icon {
  margin-right: 10px;
}
ul {
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  width: 100%;
}
ul li {
    flex: 0 0 25%;
    max-width: 25%;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
ul li  .nut-icon {
  margin-right: 0;
}
ul li span .nutui-iconfont {
  margin: 16px 0 16px;
}
`

const IconDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      svg: 'SVG 按需使用',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
      f2e6c6d6: '基础图标',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      svg: 'SVG 按需使用',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
      f2e6c6d6: '基礎圖示',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      svg: 'SVG import on demand',
      dab8a74f: 'Image link',
      '52c15454': 'IconFont color',
      '7aeb5407': 'IconFont size',
      f2e6c6d6: 'Base IconFont',
    },
  })

  const [state, setState] = useState({
    msg: '',
    type: 'text',
    cover: false,
    visible: false,
    duration: 2,
    closeOnOverlayClick: false,
    title: '',
    bottom: '',
    icon: '',
    center: true,
  })

  return (
    <>
      <Header />
      <style>{style}</style>
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <Toast
          msg={state.msg}
          visible={state.visible}
          type={state.type}
          duration={state.duration}
          icon={state.icon}
          closeOnOverlayClick={state.closeOnOverlayClick}
          onClose={() => {
            setState({
              ...state,
              visible: false,
            })
          }}
        />
        <h2>{translated.svg}</h2>
        <Cell>
          <Add color="red" />
          <UserAdd />
          <Dongdong />
        </Cell>
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <IconFont name="dongdong" />
          <IconFont name="add" />
          <IconFont name="minus" />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <IconFont
            size="40"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <IconFont name="dongdong" color="#fa2c19" />
          <IconFont name="dongdong" color="#64b578" />
          <IconFont name="dongdong" color="#ffd700" />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell style={{ alignItems: 'center' }}>
          <IconFont name="dongdong" size="16" />
          <IconFont name="dongdong" size="20" />
          <IconFont name="dongdong" size="24" />
        </Cell>
        {(IconFontConfig as any).data.map((item: any) => {
          return (
            <Cell.Group key={item.name} title={item.name}>
              <Cell>
                <ul>
                  {item.icons.map((icon: any) => {
                    return (
                      <li
                        key={Math.random()}
                        onClick={() => {
                          copyTag(generateCopyText(icon))
                          setState({
                            ...state,
                            visible: true,
                            msg: generateCopyText(icon),
                          })
                        }}
                      >
                        <IconFont name={icon} />
                      </li>
                    )
                  })}
                </ul>
              </Cell>
            </Cell.Group>
          )
        })}
        {(IconFontConfig as any).style.map((item: any) => {
          return (
            <Cell.Group key={item.name} title={item.name}>
              <Cell>
                <ul>
                  {item.icons.map((icon: any) => {
                    return (
                      <li
                        key={icon.name}
                        onClick={() => {
                          copyTag(generateAMCopyText(icon))
                          setState({
                            ...state,
                            visible: true,
                            msg: generateCopyText(icon),
                          })
                        }}
                      >
                        <IconFont
                          name={icon.name}
                          className={`nut-icon-${icon['animation-name']}  nut-icon-${icon['animation-time']}`}
                        />
                      </li>
                    )
                  })}
                </ul>
              </Cell>
            </Cell.Group>
          )
        })}
      </div>
    </>
  )
}

export default IconDemo
