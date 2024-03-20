import React, { FunctionComponent, useContext } from 'react'
import hljs from 'highlight.js'
import APPContext from '../../context'
import DemoBlock from './demoblock'
import './demoblock.scss'

const modules = import.meta.glob('@/packages/**/demos/*/*.tsx', {
  as: 'raw',
  eager: true,
})
// console.log('modules', modules)
const CodeBlock: FunctionComponent = (props: { src?: string }) => {
  const ctx = useContext(APPContext)

  const originCode = modules[`${ctx.path}/demos/${props.src}`]

  const highlightedCode = hljs.highlightAuto(originCode, ['jsx']).value

  return (
    <DemoBlock text={originCode} scss="">
      <pre>
        <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
      </pre>
    </DemoBlock>
  )
}

export default CodeBlock
