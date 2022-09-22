import React from 'react'
import Taro from '@tarojs/taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import icons from '@/styles/font/config.json'
import { Icon, Cell, CellGroup } from '@/packages/nutui.react.taro'
import '@/packages/icon/demo.scss'

interface T {
  '84aa6bce': string
  dab8a74f: string
  '52c15454': string
  '7aeb5407': string
  f2e6c6d6: string
}
const generateCopyText = (name: string) => {
  return `<Icon name="${name}"></Icon>`
}
const generateAMCopyText = (icon: any) => {
  return `
  <Icon name="${icon.name}"
    className="${`nut-icon-${icon['animation-name']}  nut-icon-${icon['animation-time']}`}"/>`
}
const copyTag = (text: string) => {
  const input = document.createElement('input')
  document.body.appendChild(input)
  input.setAttribute('value', text)
  input.select()
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    Taro.showToast({ title: `Copy: ${text}` })
  }
  document.body.removeChild(input)
}

const style = `
.nut-cell > .nutui-iconfont {
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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
ul li  span {
  height: 40px;
  font-size: 12px;
  text-align: center;
}
ul li span .nutui-iconfont {
  margin: 16px 0 16px;
}
`

const IconDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '84aa6bce': '基础用法',
      dab8a74f: '图片链接',
      '52c15454': '图标颜色',
      '7aeb5407': '图标大小',
      f2e6c6d6: '基础图标',
    },
    'zh-TW': {
      '84aa6bce': '基礎用法',
      dab8a74f: '圖片連結',
      '52c15454': '圖示顏色',
      '7aeb5407': '圖示大小',
      f2e6c6d6: '基礎圖示',
    },
    'en-US': {
      '84aa6bce': 'Basic Usage',
      dab8a74f: 'Image link',
      '52c15454': 'Icon color',
      '7aeb5407': 'Icon size',
      f2e6c6d6: 'Base Icon',
    },
  })

  return (
    <>
      <style>{style}</style>
      <div className="demo">
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Icon name="dongdong" />
          <Icon name="JD" />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <Icon
            size="40"
            name="https://img11.360buyimg.com/imagetools/jfs/t1/137646/13/7132/1648/5f4c748bE43da8ddd/a3f06d51dcae7b60.png"
          />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <Icon name="dongdong" color="#fa2c19" />
          <Icon name="dongdong" color="#64b578" />
          <Icon name="JD" color="#fa2c19" />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell>
          <Icon name="dongdong" />
          <Icon name="dongdong" size="24" />
          <Icon name="dongdong" size="16" />
        </Cell>
        {icons.data.map((item, index) => {
          return (
            <CellGroup key={index} title={item.name}>
              <Cell>
                <ul>
                  {item.icons.map((icon) => {
                    return (
                      <li
                        key={icon}
                        onClick={() => copyTag(generateCopyText(icon))}
                      >
                        <Icon name={icon} />
                        <span>{icon}</span>
                      </li>
                    )
                  })}
                </ul>
              </Cell>
            </CellGroup>
          )
        })}
        {icons.style.map((item, index) => {
          return (
            <CellGroup key={index} title={item.name}>
              <Cell>
                <ul>
                  {item.icons.map((icon) => {
                    return (
                      <li
                        key={icon.name}
                        onClick={() => copyTag(generateAMCopyText(icon))}
                      >
                        <Icon
                          name={icon.name}
                          className={`nut-icon-${icon['animation-name']}  nut-icon-${icon['animation-time']}`}
                        />
                        <span>{icon['animation-name']}</span>
                      </li>
                    )
                  })}
                </ul>
              </Cell>
            </CellGroup>
          )
        })}
      </div>
    </>
  )
}

export default IconDemo
