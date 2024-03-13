import React from 'react'
import '@nutui/icons-react/dist/style_iconfont.css'
import { IconFontConfig, IconFont } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import Cell from '../cell'
import Toast from '../toast'
import { camelCase } from '@/utils/camel-case'
import Demo1 from './demos/h5/demo1'
import Demo2 from './demos/h5/demo2'
import Demo3 from './demos/h5/demo3'
import Demo4 from './demos/h5/demo4'
import Demo5 from './demos/h5/demo5'

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
    Toast.show(`Copy: ${text}`)
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
  const [translated] = useTranslate({
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
      svg: 'SVG Import On Demand',
      dab8a74f: 'Image Link',
      '52c15454': 'IconFont Color',
      '7aeb5407': 'IconFont Size',
      f2e6c6d6: 'Base IconFont',
    },
  })

  return (
    <>
      <style>{style}</style>
      <div className="demo">
        <h2>{translated.svg}</h2>
        <Cell>
          <Demo1 />
        </Cell>
        <h2>{translated['84aa6bce']}</h2>
        <Cell>
          <Demo2 />
        </Cell>
        <h2>{translated.dab8a74f}</h2>
        <Cell>
          <Demo3 />
        </Cell>
        <h2>{translated['52c15454']}</h2>
        <Cell>
          <Demo4 />
        </Cell>
        <h2>{translated['7aeb5407']}</h2>
        <Cell style={{ alignItems: 'center' }}>
          <Demo5 />
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
                        onClick={() => copyTag(generateCopyText(icon))}
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
                        onClick={() => copyTag(generateAMCopyText(icon))}
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
