import React, { useState } from 'react'
import { IconFontConfig, IconFont } from '@nutui/icons-react-taro'
import { Cell } from '@/packages/nutui.react.taro'
import { camelCase } from '@/utils/camel-case'

const Demo6 = () => {
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
    }
    document.body.removeChild(input)
  }
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
      {(IconFontConfig as any).data.map((item: any) => {
        return (
          <Cell.Group key={item.name} title={item.name}>
            <Cell>
              <ul
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0',
                  width: '100%',
                }}
              >
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
                      style={{
                        maxWidth: '25%',
                        height: '60px',
                        display: 'flex',
                        flex: '0 0 25%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
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
    </>
  )
}

export default Demo6
