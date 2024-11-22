import React, { useState } from 'react'
import * as iconfonts from '@nutui/icons-react-taro'
import { Cell, Toast } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { camelCase } from '@/utils/camel-case'

const Demo7 = () => {
  const generateAMCopyText = (icon: any) => {
    return `<${camelCase(icon.name, {
      pascalCase: true,
    })} className='${`nut-icon-${icon['animation-name']} nut-icon-${icon['animation-time']}`}' />`
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
    content: '',
    visible: false,
  })

  return (
    <>
      <Toast visible={state.visible} content={state.content} type="text" />
      {(iconfonts.IconFontConfig as any).style.map((item: any) => {
        return (
          <Cell.Group key={item.name} title={item.name}>
            <Cell>
              <View
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  padding: '0',
                  width: '100%',
                }}
              >
                {item.icons.map((icon: any) => {
                  return (
                    <View
                      key={icon.name}
                      onClick={() => {
                        copyTag(generateAMCopyText(icon))
                        setState({
                          ...state,
                          visible: true,
                          content: generateAMCopyText(icon),
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
                      {React.createElement(
                        iconfonts[camelCase(icon.name, { pascalCase: true })],
                        {
                          className: `nut-icon-${icon['animation-name']} nut-icon-${icon['animation-time']}`,
                        }
                      )}
                    </View>
                  )
                })}
              </View>
            </Cell>
          </Cell.Group>
        )
      })}
    </>
  )
}

export default Demo7
