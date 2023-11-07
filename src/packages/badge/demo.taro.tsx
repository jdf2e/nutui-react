import React from 'react'
import Taro from '@tarojs/taro'
import {
  Checklist,
  Download,
  My,
  Link as LinkIcon,
} from '@nutui/icons-react-taro'
import { useTranslate } from '@/sites/assets/locale/taro'
import {
  Avatar,
  Badge,
  Cell,
  ConfigProvider,
} from '@/packages/nutui.react.taro'
import Header from '@/sites/components/header'

interface T {
  '8ab98966': string
  '1e7a2282': string
  '781b07fd': string
  '1c730245': string
  '1c730248': string
  '915d7b01': string
  f1089312: string
}

const customTheme = {
  nutuiBadgeBorderRadius: '12px 12px 12px 0',
}

const customTheme2 = {
  nutuiBadgeDotWidth: '10px',
  nutuiBadgeBorder: '2px solid #fff',
}
const BadgeDemo = () => {
  const [translated] = useTranslate<T>({
    'zh-CN': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
    },
    'zh-TW': {
      '8ab98966': '默认用法',
      '1e7a2282': '最大值',
      '781b07fd': '自定义颜色',
      '1c730245': '自定义徽标内容',
      '1c730248': '自定义徽标样式',
      '915d7b01': '自定义位置',
      f1089312: '独立展示',
    },
    'en-US': {
      '8ab98966': 'Basic usage',
      '1e7a2282': 'Max Size',
      '781b07fd': 'Custom Color',
      '1c730245': ' Custom Context',
      '1c730248': 'Custom CSS',
      '915d7b01': 'Custom Position',
      f1089312: 'Display Alone',
    },
  })
  return (
    <>
      <Header />
      <div className={`demo ${Taro.getEnv() === 'WEB' ? 'web' : ''}`}>
        <h2>{translated['8ab98966']}</h2>
        <Cell.Group>
          <Cell>
            <Badge style={{ marginRight: '40px' }} value={8}>
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} value={76}>
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} value="NEW">
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} dot>
              <Avatar icon={<My />} shape="square" />
            </Badge>
          </Cell>
        </Cell.Group>

        <h2>{translated['1e7a2282']}</h2>
        <Cell.Group>
          <Cell>
            <Badge style={{ marginRight: '40px' }} value={200} max={9}>
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} value={200} max={20}>
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} value={200} max={99}>
              <Avatar icon={<My />} shape="square" />
            </Badge>
          </Cell>
        </Cell.Group>

        <h2>{translated['781b07fd']}</h2>
        <Cell.Group>
          <Cell>
            <Badge
              style={{ marginRight: '40px' }}
              value={8}
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              value={76}
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              value="NEW"
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              dot
              color="linear-gradient(315deg, rgba(73,143,242,1) 0%,rgba(73,101,242,1) 100%)"
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
          </Cell>
        </Cell.Group>

        <h2>{translated['1c730245']}</h2>
        <Cell.Group>
          <Cell>
            <Badge
              style={{ marginRight: '40px' }}
              value={<Checklist color="#fff" size={12} />}
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              value={<LinkIcon color="#fff" size={12} />}
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              value={<Download color="#fff" size={12} />}
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
          </Cell>
        </Cell.Group>

        <h2>{translated['1c730248']}</h2>
        <Cell.Group>
          <Cell>
            <ConfigProvider theme={customTheme}>
              <Badge style={{ marginRight: '40px' }} value="NEW">
                <Avatar icon={<My />} shape="square" />
              </Badge>
            </ConfigProvider>

            <ConfigProvider theme={customTheme2}>
              <Badge style={{ marginRight: '40px' }} dot top="2" right="8">
                <Avatar icon={<My />} shape="square" />
              </Badge>
            </ConfigProvider>
          </Cell>
        </Cell.Group>

        <h2>{translated['915d7b01']}</h2>
        <Cell.Group>
          <Cell>
            <Badge style={{ marginRight: '40px' }} value={8} top="5" right="5">
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge
              style={{ marginRight: '40px' }}
              value={76}
              top="10"
              right="10"
            >
              <Avatar icon={<My />} shape="square" />
            </Badge>
            <Badge style={{ marginRight: '40px' }} value="NEW">
              <Avatar icon={<My />} shape="square" />
            </Badge>
          </Cell>
        </Cell.Group>

        <h2>{translated.f1089312}</h2>
        <Cell.Group>
          <Cell style={{ height: '80px' }}>
            <Badge style={{ marginRight: '40px' }} value={8} />
            <Badge style={{ marginRight: '40px' }} value={76} />
            <Badge style={{ marginRight: '40px' }} value="NEW" />
          </Cell>
        </Cell.Group>
      </div>
    </>
  )
}

export default BadgeDemo
