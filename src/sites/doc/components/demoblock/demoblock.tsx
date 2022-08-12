import React, { useEffect, useState } from 'react'
import { compressText, copyCodeHtml, decompressText } from './basedUtil'
interface A {
  text: string
  scss: string
  children?: React.ReactNode
}
const DemoBlock: React.FunctionComponent<A> = (props) => {
  const [onlineUrl, setOnlineUrl] = useState('')
  useEffect(() => {
    const sourceMainReactJsStr = `//import VConsole from "vconsole";
//var vConsole = new VConsole();
import React from "react";
import ReactDOM from "react-dom";
import '@nutui/nutui-react/dist/style.css'
import App from "./app.tsx";
import "./app.scss";
ReactDOM.render(
  <App/>,
  document.getElementById("app")
);`

    const sourceMainReactJs = compressText(sourceMainReactJsStr)
    const sourceReactJs = compressText(props.text)
    const sourceScss = compressText(props.scss || '')
    const onlineUrl = `https://codehouse.jd.com/?source=share&type=react&mainJs=${sourceMainReactJs}&appValue=${sourceReactJs}&scssValue=${sourceScss}`
    setOnlineUrl(onlineUrl)
  }, [])
  const copyCode = () => {
    const sourceValue = props.text
    copyCodeHtml(sourceValue, () => {
      alert('复制成功')
    })
  }
  return (
    <>
      {props.children}
      <div className="online-code nutui-react--demo-button">
        <div className="online-part">
          <a className="list" target="_blank" href={onlineUrl} rel="noreferrer">
            <img
              className="online-icon"
              src="https://img12.360buyimg.com/imagetools/jfs/t1/214225/34/8715/7002/61c31bf1E69324ee9/7a452063eba88be4.png"
            />
            <div className="online-tips">在线调试</div>
          </a>
          <div className="list" onClick={copyCode}>
            <img
              className="online-icon"
              src="https://img10.360buyimg.com/imagetools/jfs/t1/142615/10/25537/3671/61c31e6eE3ba7fb90/d1953e2b47e40e86.png"
            />
            <div className="online-tips">复制代码</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default DemoBlock
