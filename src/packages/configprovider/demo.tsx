import React from 'react'
import { ConfigProvider } from './configprovider'

const ConfigProviderDemo = () => {
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <ConfigProvider></ConfigProvider>
      </div>
    </>
  )
}

export default ConfigProviderDemo
