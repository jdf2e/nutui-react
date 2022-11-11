import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import {
  store,
  useThemeEditor,
} from '@/sites/theme/components/theme-setting/helpers'
import './theme-setting.scss'
import '@/packages/button/button.scss'
import '@/packages/input/input.scss'
import Button from '@/packages/button'
import Input from '@/packages/input'
import { useHistory } from 'react-router-dom'
import ColorPicker from '@/sites/theme/components/theme-setting/color-picker'

function download(content: string, filename: string) {
  const eleLink = document.createElement('a')
  eleLink.download = filename
  eleLink.style.display = 'none'

  const blob = new Blob([content])
  eleLink.href = URL.createObjectURL(blob)

  document.body.appendChild(eleLink)
  eleLink.click()
  document.body.removeChild(eleLink)
}

export const ThemeSetting: React.FC<unknown> = observer((props) => {
  useThemeEditor()
  const history = useHistory()
  const [componentName, setComponentName] = useState('Base')
  console.log('componentName', componentName)
  history.listen((location) => {
    // const name = location.pathname.replace('/', '')
    const path = location.pathname.split('/')
    console.log(location.pathname, path)
    const name = path[path.length - 1]
    console.log(name, store.formItems)
    setComponentName(name || 'Base')
  })

  const handleChange = (val: any, variableItem: any) => {
    variableItem.value = val
    store.updateVariablesByItem(variableItem)
  }

  const downloadScssVariables = () => {
    if (!store.variables.length) {
      return
    }

    let temp = ''
    const variablesText = store.variables
      .map(({ name, key, value }) => {
        let comment = ''
        if (temp !== name) {
          temp = name
          comment = `\n// ${name}\n`
        }
        return comment + `${key}: ${value};`
      })
      .join('\n')
    download(`// NutUI主题定制\n${variablesText}`, 'custom_theme.scss')
  }

  return (
    <>
      <div className="theme-setting">
        <div>
          <div className={'outline-btn'}>
            主题定制：{componentName.replace('/', '')}组件
          </div>
          <Button
            shape={'square'}
            type={'info'}
            onClick={downloadScssVariables}
          >
            下载主题变量
          </Button>
        </div>
        <ul>
          {store.formItems.map((item) => (
            <li key={`${Math.random()}${item.name}${item.key}`}>
              <p>
                {item.key_zh}
                {item.name}
              </p>
              <p>
                <b>{item.key}</b>:{item.value} (<del>{item.rawValue}</del>)
              </p>
              <div>
                {['hex', 'rgb'].includes(item.inputType) ? (
                  <ColorPicker
                    type={item.inputType}
                    color={item.value}
                    onChange={(val) => handleChange(val, item)}
                  ></ColorPicker>
                ) : (
                  <Input
                    className={'theme-input'}
                    defaultValue={item.value}
                    clearable={false}
                    labelWidth={0}
                    change={(val) => handleChange(val, item)}
                  ></Input>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
})
