import React, { useEffect, useState } from 'react'
import { copyCodeHtml } from './basedUtil'
import { getParameters } from 'codesandbox/lib/api/define'
import './demoblock.scss'
import codesandboxPackage from './codesandbox/package.json?raw'
import INDEX_HTML from './codesandbox/index.html?raw'
import INDEX_CSS from './codesandbox/index.css?raw'
interface A {
  text: string
  scss: string
  children?: React.ReactNode
}
const DemoBlock: React.FunctionComponent<A> = (props) => {
  const [onlineUrl, setOnlineUrl] = useState('')
  const [copyText, setCopyText] = useState('复制代码')
  useEffect(() => {
    const INDEX_TSX = `
import React from 'react'
import { createRoot } from 'react-dom/client'
import Demo from './demo';
import './index.css'
import '@nutui/nutui-react/dist/style.css'

createRoot(document.getElementById('container')).render(<Demo />);
`
    const sourceReactJs = props.text
    const parameters = getParameters({
      files: {
        'package.json': {
          content: codesandboxPackage as unknown as string,
          isBinary: false,
        },
        'index.css': {
          content: INDEX_CSS,
          isBinary: false,
        },
        'index.html': {
          content: INDEX_HTML,
          isBinary: false,
        },
        'index.tsx': {
          content: INDEX_TSX,
          isBinary: false,
        },
        'demo.tsx': {
          content: sourceReactJs,
          isBinary: false,
        },
      },
    })
    const onlineUrl = `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`
    setOnlineUrl(onlineUrl)
  }, [])
  const copyCode = () => {
    const sourceValue = props.text
    copyCodeHtml(sourceValue, () => {
      setCopyText('复制成功')
      setTimeout(() => {
        setCopyText('复制代码')
      }, 2000)
    })
  }
  return (
    <>
      <div className="demo-block">{props.children}</div>

      <div className="online-part">
        <a className="list" target="_blank" href={onlineUrl} rel="noreferrer">
          <img
            alt=""
            className="online-icon"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/214225/34/8715/7002/61c31bf1E69324ee9/7a452063eba88be4.png"
          />
          <div className="online-tips">在线调试</div>
        </a>
        <div className="list" onClick={copyCode}>
          <img
            alt=""
            className="online-icon"
            src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
          />
          <div className="online-tips">{copyText}</div>
        </div>
      </div>
    </>
  )
}
export default DemoBlock
