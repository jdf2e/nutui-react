import React, { useEffect, useState } from 'react'
import './demo-preview.scss'
import { useLocation } from 'react-router-dom'

const DemoPreview = (props: any) => {
  const location = useLocation()
  const [URL, setURL] = useState(location.pathname)

  useEffect(() => {
    setURL(location.pathname)
  }, [location])

  return (
    <div className={`doc-demo-preview ${props.className}`}>
      <iframe src={`/react/demo.html#${URL}`} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
