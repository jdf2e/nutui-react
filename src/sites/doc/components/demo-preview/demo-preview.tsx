import React, { useEffect, useState } from 'react'
import './demo-preview.scss'
import { useHistory, useLocation } from 'react-router-dom'

const DemoPreview = (props: any) => {
  const history = useHistory()
  const location = useLocation()
  const [URL, setURL] = useState(history.location.pathname)

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
