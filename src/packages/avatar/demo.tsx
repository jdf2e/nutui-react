import React from 'react'
import { User } from '@nutui/icons-react'
import { useTranslate } from '../../sites/assets/locale'
import { Avatar } from './avatar'
import Cell from '@/packages/cell'
import Badge from '@/packages/badge'
import Toast from '@/packages/toast'
import './demo.scss'

interface T {
  b040e71e: string
  '67f78db5': string
  '3928b17e': string
  '049b6a97': string
  a304dabf: string
  '89bca4e7': string
  e981579e: string
  f645fc65: string
  '43f00872': string
  f645fc66: string
  f645fc67: string
  f645fc68: string
}

const AvatarDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      b040e71e: '触发点击头像',
      '67f78db5': '支持三种尺寸：small、normal、large',
      '3928b17e': '支持两种形状：square、round',
      '049b6a97': '支持三种类型：图片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定义图标颜色及背景色',
      '89bca4e7': '带徽标的头像',
      e981579e: '头像组合展现',
      f645fc65: '组合头像可控制层级方向',
      '43f00872': '点击头像触发事件',
      f645fc66: '列表展示',
      f645fc67: '标题',
      f645fc68: '描述信息',
    },
    'zh-TW': {
      b040e71e: '觸發點擊頭像',
      '67f78db5': '支持三種尺寸：small、normal、large',
      '3928b17e': '支持兩種形狀：square、round',
      '049b6a97': '支持三種類型：圖片、Icon 以及字符',
      a304dabf: 'Icon和字符型可以自定義圖標顏色及背景色',
      '89bca4e7': '帶徽標的頭像',
      e981579e: '頭像組合展現',
      f645fc65: '組合頭像可控制層級方向',
      '43f00872': '點擊頭像觸發事件',
      f645fc66: '列表展示',
      f645fc67: '標題',
      f645fc68: '描述信息',
    },
    'en-US': {
      b040e71e: 'Trigger click on avatar',
      '67f78db5': 'Support three sizes: small, normal, large',
      '3928b17e': 'Two shapes are supported: square, round',
      '049b6a97': 'Three types are supported: Picture, Icon and Character',
      a304dabf:
        'Icon and character type can customize icon color and background color',
      '89bca4e7': 'Avatar with logo',
      e981579e: 'Avatar combination display',
      f645fc65: 'Combining avatars to control hierarchy direction',
      '43f00872': 'Click on the avatar to trigger the event',
      f645fc66: 'list',
      f645fc67: 'Title',
      f645fc68: 'Description',
    },
  })

  const activeAvatar = () => {
    Toast.show(translated.b040e71e)
  }
  return (
    <>
      <div className="demo full avatar-demo">
        <h2>{translated['67f78db5']}</h2>
        <Cell align="flex-end">
          <Avatar
            size="large"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar
            size="normal"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <Avatar
            size="small"
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
        </Cell>

        <h2>{translated['3928b17e']}</h2>
        <Cell>
          <Avatar icon={<User />} shape="square" />
          <Avatar icon={<User />} shape="round" />
        </Cell>
        <h2>{translated['049b6a97']}</h2>
        <Cell>
          <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png" />
          <Avatar icon={<User />} />
          <Avatar>N</Avatar>
        </Cell>
        <h2>{translated.a304dabf}</h2>
        <Cell>
          <Avatar
            className="demo-avatar"
            color="#fff"
            background="var(--nutui-color-primary)"
            icon={<User />}
          />
          <Avatar
            color="var(--nutui-color-primary)"
            background="var(--nutui-color-primary-light)"
          >
            U
          </Avatar>
        </Cell>
        <h2>{translated['89bca4e7']}</h2>
        <Cell>
          <Badge value="8">
            <Avatar icon={<User />} shape="square" />
          </Badge>
          <Badge dot>
            <Avatar icon={<User />} shape="square" />
          </Badge>
        </Cell>
        <h2>{translated.e981579e}</h2>
        <Cell>
          <Avatar.Group gap="-4">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background="var(--nutui-brand-2)"
            >
              U
            </Avatar>
          </Avatar.Group>
        </Cell>
        <Cell>
          <Avatar.Group max="3" maxColor="#fff" maxBackground="#498ff2">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background="var(--nutui-brand-2)"
            >
              U
            </Avatar>
            <Avatar icon={<User />} />
          </Avatar.Group>
        </Cell>
        <h2>{translated.f645fc65}</h2>
        <Cell>
          <Avatar.Group max="3" level="right" maxContent="...">
            <Avatar src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png" />
            <Avatar icon={<User />} />
            <Avatar
              color="var(--nutui-color-primary)"
              background="var(--nutui-brand-2)"
            >
              U
            </Avatar>
            <Avatar icon={<User />} />
          </Avatar.Group>
        </Cell>
        <h2>{translated['43f00872']}</h2>
        <Cell>
          <Avatar icon={<User />} onClick={activeAvatar} />
        </Cell>
        <h2>{translated.f645fc66}</h2>
        <Cell>
          <Avatar
            size="normal"
            style={{ marginInlineEnd: 0 }}
            src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
          />
          <div style={{ marginInlineStart: '10px' }}>
            <div style={{ fontSize: '16px' }}>{translated.f645fc67}</div>
            <div style={{ fontSize: '12px' }}>{translated.f645fc68}</div>
          </div>
        </Cell>
      </div>
    </>
  )
}

export default AvatarDemo
