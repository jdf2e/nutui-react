import React, { useState } from 'react'
import './demo-preview.scss'
import { useHistory } from 'react-router-dom'

const DemoPreview = () => {
  const history = useHistory()
  const [URL, setURL] = useState(history.location.pathname)

  history.listen((location) => {
    setURL(location.pathname)
  })

  return (
    <div className="doc-demo-preview">
      <iframe src={`/react/demo.html#${URL}`} frameBorder="0"></iframe>
    </div>
  )
}

export default DemoPreview
