import React from 'react'
import { Avatar } from './avatar'
import Cell from '@/packages/cell'
import Badge from '@/packages/badge'
import AvatarGroup from '@/packages/avatargroup'
import './demo.scss'

const AvatarDemo = () => {
  const activeAvatar = () => {
    console.log('触发点击头像')
  }
  return (
    <>
      <div className="demo full avatar-demo">
        <h2>支持三种尺寸：small、normal、large</h2>
        <Cell>
          <Avatar
            size="large"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar
            size="normal"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar
            size="small"
            url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </Cell>
        <h2>支持两种形状：square、round</h2>
        <Cell>
          <Avatar icon="my" shape="square" />
          <Avatar icon="my" shape="round" />
        </Cell>
        <h2>支持三种类型：图片、Icon 以及字符</h2>
        <Cell>
          <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          <Avatar icon="my" />
          <Avatar>N</Avatar>
        </Cell>
        <h2>Icon 和字符型可以自定义图标颜色及背景色</h2>
        <Cell>
          <Avatar className="demo-avatar" color="#fff" bgColor="#FA2C19" icon="my" />
          <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
            U
          </Avatar>
        </Cell>
        <h2>带徽标的头像</h2>
        <Cell>
          <Badge value="8">
            <Avatar icon="my" shape="square" />
          </Badge>
          <Badge dot>
            <Avatar icon="my" shape="square" />
          </Badge>
        </Cell>
        <h2>头像组合展现</h2>
        <Cell>
          <AvatarGroup span="-4">
            <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon="my" />
            <Avatar color="rgb(245, 106, 0)" bg-color="rgb(253, 227, 207)">
              U
            </Avatar>
          </AvatarGroup>
        </Cell>

        <Cell>
          <AvatarGroup maxCount="3" maxColor="#fff" maxBgColor="#498ff2">
            <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon="my" />
            <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
              U
            </Avatar>
            <Avatar icon="my" />
          </AvatarGroup>
        </Cell>
        <h2>组合头像可控制层级方向</h2>
        <Cell>
          <AvatarGroup maxCount="3" zIndex="right" maxContent="...">
            <Avatar url="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon="my" />
            <Avatar color="rgb(245, 106, 0)" bgColor="rgb(253, 227, 207)">
              U
            </Avatar>
            <Avatar icon="my" />
          </AvatarGroup>
        </Cell>
        <h2>点击头像触发事件</h2>
        <Cell>
          <Avatar icon="my" activeAvatar={activeAvatar} />
        </Cell>
      </div>
    </>
  )
}

export default AvatarDemo
