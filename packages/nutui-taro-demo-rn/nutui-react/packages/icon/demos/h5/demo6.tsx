import React from 'react'
import { IconFontConfig, IconFont } from '@nutui/icons-react'
import { Cell, Toast } from '@nutui/nutui-react'
import { camelCase } from '@/utils/camel-case'

const generateCopyText = (name: string) => {
  return `<${camelCase(name, { pascalCase: true })} />`
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

const Demo6 = () => {
  return (
    <>
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
    </>
  )
}

export default Demo6
