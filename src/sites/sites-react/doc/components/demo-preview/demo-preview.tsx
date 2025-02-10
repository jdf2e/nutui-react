import React, { useEffect, useState } from 'react'
import './demo-preview.scss'
import { useLocation } from 'react-router-dom'
declare const __DEMO_PATH__: string
const DemoPreview = (props: any) => {
  const location = useLocation()
  const [URL, setURL] = useState(location.pathname)

  useEffect(() => {
    setURL(location.pathname)
  }, [location])

  return (
    <div className={`doc-demo-preview ${props.className}`}>
      <iframe title="demos" src={`${__DEMO_PATH__}${URL}`}></iframe>
    </div>
  )
}

export default DemoPreview
