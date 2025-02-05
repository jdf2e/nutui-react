import React, { FunctionComponent, useContext } from 'react'
import hljs from 'highlight.js'
import APPContext from '../../context'
import DemoBlock from './demoblock'
import './demoblock.scss'

const modules = import.meta.glob(`@/packages/**/demos/**/*.tsx`, {
  query: '?raw',
  import: 'default',
  eager: true,
})

const CodeBlock: FunctionComponent = (props: { src?: string }) => {
  const ctx = useContext(APPContext)
  const path = `${ctx.path}/doc.md`
  const originCode = modules[`${ctx.path}/demos/${props.src}`]
  try {
    const highlightedCode = hljs.highlightAuto(originCode, ['jsx']).value
    return (
      <DemoBlock text={originCode} scss="">
        <pre>
          <code dangerouslySetInnerHTML={{ __html: highlightedCode }} />
        </pre>
      </DemoBlock>
    )
  } catch (e) {
    console.log('e', e)
    return <></>
  }
}

export default CodeBlock
