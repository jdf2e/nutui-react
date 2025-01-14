var demoModel = function (name, cName, desc) {
  var temp = {
    demoitem: `import React from 'react'
import { Cell, ${name} } from '@nutui/nutui-react'
import { Dongdong } from '@nutui/icons-react'

const Demo1 = () => {
  return (
    <Cell>
        <${name}></${name}>
    </Cell>
  )
}

export default Demo1
`,
    tarodemoitem: `import React from 'react'
import { Cell, ${name} } from '@nutui/nutui-react-taro'
import { Dongdong } from '@nutui/icons-react-taro'

const Demo1 = () => {
  return (
    <Cell>
        <${name}></${name}>
    </Cell>
  )
}

export default Demo1
`,
    demo: `import React from 'react'
import { useTranslate } from '@/sites/assets/locale'
import Demo1 from './demos/h5/demo1'

const ${name}Demo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
        title: '基础用法',
    },
    'en-US': {
        title: 'Basic Usage',
    },
    'zh-TW': {
        title: '基礎用法',
    },
  })
  return (
      <div className="demo">
        <h2>{translated.title}</h2>
        <Demo1 />
      </div>
  )
}

export default ${name}Demo
`,
    tarodemo: `import React from 'react'
import Taro from '@tarojs/taro'
import { ScrollView, View } from '@tarojs/components'
import { useTranslate } from '@/sites/assets/locale/taro'
import Header from '@/sites/components/header'
import Demo1 from './demos/taro/demo1'

const ${name}Demo = () => {
  const [translated] = useTranslate({
    'zh-CN': {
        title: '基础用法',
    },
    'en-US': {
        title: 'Basic Usage',
    },
    'zh-TW': {
        title: '基礎用法',
    },
  })
  return (
    <>
      <Header />
      <ScrollView className={\`demo \${Taro.getEnv() === 'WEB' ? 'web' : ''}\`}>
        <View className="h2">{translated.title}</View>
        <Demo1 />
        </ScrollView>
    </>
  )
}

export default ${name}Demo
`,
    index: `import {${name}} from './${name.toLowerCase()}'
export type { ${name}Props } from './types'
export default ${name}
`,

    taroindex: `import {${name}} from './${name.toLowerCase()}.taro'
export type { ${name}Props } from './types'
export default  ${name}
`,
    types: `import { BasicComponent } from '@/utils/typings'
export interface ${name}Props extends BasicComponent {

}
`,
    react: `import React, { FunctionComponent } from 'react'
import { ComponentDefaults } from '@/utils/typings'
import { ${name}Props } from './types'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider'
import { useRtl } from '@/packages/configprovider'

const defaultProps = {
    ...ComponentDefaults,
} as ${name}Props
export const ${name}: FunctionComponent<Partial<${name}Props> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { locale } = useConfig()
  const rtl = useRtl()
  const { className, style } = { ...defaultProps, ...props }
  const classPrefix = 'nut-${name.toLowerCase()}'
  const cls = classNames(classPrefix, className)
  return <div className={cls} style={style}>${name}</div>
}

${name}.displayName = 'Nut${name}'
`,
    taroreact: `import React, { FunctionComponent } from 'react'
import { ComponentDefaults } from '@/utils/typings'
import { ${name}Props } from './types'
import { View } from '@tarojs/components'
import classNames from 'classnames'
import { useConfig } from '@/packages/configprovider/configprovider.taro'
import { useRtl } from '@/packages/configprovider/index.taro'

const defaultProps = {
    ...ComponentDefaults,
} as ${name}Props
export const ${name}: FunctionComponent<Partial<${name}Props> & React.HTMLAttributes<HTMLDivElement>> = (props) => {
  const { locale } = useConfig()
  const rtl = useRtl()
  const { className, style } = { ...defaultProps, ...props }
  const classPrefix = 'nut-${name.toLowerCase()}'
  const cls = classNames(classPrefix, className)
  return <View className={cls} style={style}>${name}</View>
}

${name}.displayName = 'Nut${name}'
`,
    doc: `#  ${name} ${cName}

${desc}

## 引入

\`\`\`tsx
import { name } from '@nutui/nutui-react'
\`\`\`

## 示例代码

### 基础用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

## ${name}

### Props

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| name | 图标名 | String | - |

## 主题定制

### 样式变量

组件提供了下列 CSS 变量，可用于自定义样式，使用方法请参考 [ConfigProvider 组件](#/zh-CN/component/configprovider)。
| 名称 | 说明 | 默认值 |
| --- | --- | --- |
| \--nutui-${name.toLowerCase()}-height | badge 的高度 | \`14px\` |
`,
    test: `import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { ${name} } from '../${name.toLowerCase()}'

test('should match snapshot', () => {
  const { container } = render(
    <${name}></${name}>
  )
  expect(container).toMatchSnapshot()
})
`,
  }

  return temp
}
module.exports = demoModel
