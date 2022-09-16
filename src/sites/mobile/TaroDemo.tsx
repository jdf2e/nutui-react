import React from 'react'
import './TaroDemo.scss'

const TaroDemo = () => {
  return (
    <div className="index">
      <div className="index-header">
        <img src="../assets/images/logo-red.png" alt="" srcSet="" />
        <div className="info">
          <h1>NutUI-React</h1>
          <p>请使用微信扫描下方二维码体验</p>
        </div>
      </div>
      <div className="index-wxcode">
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/174054/4/15968/66201/60d0028dE590f0aa8/752ecef62e4f1cbe.jpg"
          width="200"
        />
        <img
          src="https://img12.360buyimg.com/imagetools/jfs/t1/205124/1/15643/30360/62aad730Ea5734bf9/703bb91a0b73282f.png"
          width="250"
        />
      </div>
    </div>
  )
}

export default TaroDemo
