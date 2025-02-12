import React, { useEffect, useState } from 'react'
import './demo-preview.scss'
import { nav } from '../../../../config/index'
import { useLocation } from 'react-router-dom'

declare const __DEMO_PATH__: string
const DemoPreview = (props: any) => {
  const location = useLocation()
  const [iframeSrc, setIframeSrc] = useState('')
  const taroComponentPath: any = {}
  nav.forEach((n: any) => {
    n.packages.forEach((p: any) => {
      taroComponentPath[p.name.toLowerCase()] =
        `${n.enName}/pages/${p.name.toLowerCase()}/index`
    })
  })
  useEffect(() => {
    const c = location.pathname
      .slice(location.pathname.lastIndexOf('/') + 1)
      .toLocaleLowerCase()
    const path = __DEMO_PATH__.includes('taro')
      ? `${__DEMO_PATH__}/${taroComponentPath[c]}`
      : `${__DEMO_PATH__}${location.pathname}`
    setIframeSrc(path)
  }, [location])

  return (
    <div className={`doc-demo-preview ${props.className}`}>
      <iframe title="demos" src={iframeSrc}></iframe>
    </div>
  )
}

export default DemoPreview
