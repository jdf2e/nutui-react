var nameLc = 'test'
var demoModel = function (name) {
  var temp = {
    demo: `import React from 'react'
import { ${name} } from './${name.toLowerCase()}'

const ${name}Demo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <${name}></${name}>
      </div>
    </>
  )
}

export default ${name}Demo
`,
    index: `import {${name}} from './${name.toLowerCase()}'
export default ${name}
`,
    react: `import React, { FunctionComponent } from 'react'
import './${name.toLowerCase()}.scss'
import { useConfig } from '@/packages/configprovider'

export interface ${name}Props {

}
const defaultProps = {} as ${name}Props
export const ${name}: FunctionComponent<Partial<${name}Props> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { locale } = useConfig()
  const { children } = { ...defaultProps, ...props }
  return <div className="nut-${name.toLowerCase()}">${name}</div>
}

${name}.defaultProps = defaultProps
${name}.displayName = 'Nut${name}'
`,
    doc: `#  ${name}组件

### 介绍

基于 xxxxxxx

### 安装

${''}

## 代码演示

### 基础用法1



## API

### Props

| 参数         | 说明                             | 类型   | 默认值           |
|--------------|----------------------------------|--------|------------------|
| name         | 图标名称或图片链接               | String | -                |
| color        | 图标颜色                         | String | -                |
| size         | 图标大小，如 '20px' '2em' '2rem' | String | -                |
| class-prefix | 类名前缀，用于使用自定义图标     | String | 'nutui-iconfont' |
| tag          | HTML 标签                        | String | 'i'              |

### Events

| 事件名 | 说明           | 回调参数     |
|--------|----------------|--------------|
| click  | 点击图标时触发 | event: Event |
`,
  }

  return temp
}
module.exports = demoModel
