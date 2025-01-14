import React, { FunctionComponent, useContext } from 'react'
import hljs from 'highlight.js'
import APPContext from '../../context'
import DemoBlock from './demoblock'
import './demoblock.scss'
import replacePlaceholders from './replace'
import { useLocation } from 'react-router-dom';
const modules = import.meta.glob(`@/packages/**/demos/h5/*.tsx`, {
  query: '?raw',
  import: 'default',
  eager: true,
})


const CodeBlock: FunctionComponent = (props: { src?: string }) => {
  const ctx = useContext(APPContext)
  const fullPath = `${ctx.path}/demos/${props.src}`
  const filename = fullPath.substring(fullPath.lastIndexOf('/') + 1)
  const location = useLocation();
  const lang = location.pathname.includes('zh-CN') ? 'zh-CN' : 'en-US';
  const originCode = replacePlaceholders(modules[fullPath], filename, lang)
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
