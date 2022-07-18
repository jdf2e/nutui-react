import React, { useEffect, useState } from 'react'
import './demo-preview.scss'
import { useHistory, useLocation } from 'react-router-dom'

const DemoPreview = () => {
  const history = useHistory()
  const location = useLocation()
  const [URL, setURL] = useState(history.location.pathname)

  useEffect(() => {
    setURL(location.pathname)
  }, [location])

  return (
    <div className="doc-demo-preview">
      <iframe src={`/react/demo.html#${URL}`} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
