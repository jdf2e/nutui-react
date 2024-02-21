import React, { FunctionComponent, useContext } from 'react'
import hljs from 'highlight.js'
import APPContext from '../../context'
import DemoBlock from './demoblock'
import './demoblock.scss'

const modules = import.meta.glob('@/packages/**/demos/*/*.tsx', {
  as: 'raw',
  eager: true,
})
console.log('modules', modules)
const CodeBlock: FunctionComponent = (props: { src?: string }) => {
  const regex = /import { ([^}]+) } from '(\.\.\/)+([^']+)'/g
  const regex2 = /import { ([^}]+) } from '(\.\.\/)+([^']+).taro'/g
  const replacement = "import { $1 } from '@nutui/nutui-react'"
  const replacement2 = "import { $1 } from '@nutui/nutui-react-taro'"
  // console.log(props)
  const ctx = useContext(APPContext)
  // /src/packages/button/demos/index.tsx
  let originCode = ''

  originCode = modules[`${ctx.path}/demos/${props.src}`]
    .replace(regex2, replacement2)
    .replace(regex, replacement)
  const highlightedCode = hljs.highlightAuto(originCode, ['jsx']).value
  console.log(highlightedCode)

  return (
    <DemoBlock text={originCode} scss="">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </DemoBlock>
  )
}

export default CodeBlock
