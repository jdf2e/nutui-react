import React, { useState } from 'react'
import * as iconfonts from '@nutui/icons-react-taro'
import { Cell, Toast } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { camelCase } from '../camel-case'

// 上游 IconFontConfig.data 目录列出的部分图标在当前版本已重命名或移除，
// 直接渲染会得到 undefined 导致 React 报 "type is invalid"。这里做一层校正。
const RENAMED_ICONS: Record<string, string> = {
  checked: 'check-checked',
  'heart-fill': 'heart-f',
  'star-fill': 'star-f',
  'triangle-down': 'triangle-down-f',
  'triangle-up': 'triangle-up-f',
  'image-error': 'image-error-f',
  'qr-code': 'qrcode',
}
const REMOVED_ICONS = new Set([
  'instocks',
  'share-2',
  'star-2',
  'always-buy',
  'share-f',
  'star-3',
])
const normalizeIcons = (icons: string[]) =>
  icons
    .filter((name) => !REMOVED_ICONS.has(name))
    .map((name) => RENAMED_ICONS[name] || name)

// 上游 catalog 未收录、但包里已导出的图标（多为新增基础图标）。
// 动态计算：排除非图标导出与 I/F/E 变体（其基础图标已在 catalog 中），
// 这样后续升级新增的图标会自动出现，无需手工维护名单。
const NON_ICON_EXPORTS = new Set([
  'IconFontConfig',
  'IconFont',
  'SVG_IconProps',
])
const collectExtraIcons = () => {
  const config = (iconfonts as any).IconFontConfig
  const cataloged = new Set<string>()
  config?.data?.forEach((group: any) => {
    normalizeIcons(group.icons || []).forEach((name: string) =>
      cataloged.add(camelCase(name, { pascalCase: true }))
    )
  })
  const exportNames = Object.keys(iconfonts).filter((key) => /^[A-Z]/.test(key))
  const exportSet = new Set(exportNames)
  const isVariant = (name: string) =>
    /[IFE]$/.test(name) && exportSet.has(name.slice(0, -1))
  return exportNames
    .filter(
      (name) =>
        !cataloged.has(name) &&
        !NON_ICON_EXPORTS.has(name) &&
        !isVariant(name) &&
        typeof (iconfonts as any)[name] !== 'undefined'
    )
    .sort()
}

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
    content: '',
    visible: false,
  })

  const catalogGroups = (iconfonts as any).IconFontConfig.data.map(
    (group: any) => ({
      name: group.name,
      icons: normalizeIcons(group.icons || []),
    })
  )
  const extraIcons = collectExtraIcons()
  const iconGroups = extraIcons.length
    ? [...catalogGroups, { name: '其他图标 / Others', icons: extraIcons }]
    : catalogGroups

  return (
    <>
      <Toast visible={state.visible} content={state.content} />
      {iconGroups.map((item: any) => {
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
                      key={Math.random()}
                      onClick={() => {
                        copyTag(generateCopyText(icon))
                        setState({
                          ...state,
                          visible: true,
                          content: generateCopyText(icon),
                        })
                      }}
                      style={{
                        maxWidth: '25%',
                        height: 60,
                        display: 'flex',
                        flex: '0 0 25%',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      {React.createElement(
                        iconfonts[camelCase(icon, { pascalCase: true })]
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

export default Demo6
