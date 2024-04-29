import React from 'react'
import { IconFontConfig, IconFont } from '@nutui/icons-react'
import { Cell, Toast } from '@nutui/nutui-react'
import { camelCase } from '@/utils/camel-case'

const generateAMCopyText = (icon: any) => {
  return `<${camelCase(icon.name, {
    pascalCase: true,
  })} className="${`nut-icon-${icon['animation-name']} nut-icon-${icon['animation-time']}`}" />`
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

const Demo7 = () => {
  return (
    <>
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
                        className={`nut-icon-${icon['animation-name']} nut-icon-${icon['animation-time']}`}
                      />
                    </li>
                  )
                })}
              </ul>
            </Cell>
          </Cell.Group>
        )
      })}
    </>
  )
}

export default Demo7
