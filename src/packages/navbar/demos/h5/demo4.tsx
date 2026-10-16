import React from 'react'
import { NavBar, Toast, Space } from '@nutui/nutui-react'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react'
import { MaterialView } from '../../../materialview/materialview'
import { useAppTheme } from '@/sites/mobile/theme-context'

const subBarData = [
  {
    icon: 'https://img10.360buyimg.com/img/jfs/t1/533282/19/6137/1741/6abb63a4F641617b0/027602e02e213bbf.png',
    title: '会话',
  },
  {
    icon: 'https://img12.360buyimg.com/img/jfs/t1/532014/35/7258/1619/6abb63e2Ff618d2b0/027603003099f9df.png',
    title: '物流',
  },
  {
    icon: 'https://img11.360buyimg.com/img/jfs/t1/528558/31/10904/1404/6abb63efF3c871ddf/0276030030ebce6d.png',
    title: '提醒',
  },
  {
    icon: 'https://img30.360buyimg.com/img/jfs/t1/531341/18/8252/1460/6abb63feF5c5123e0/027603003083f264.png',
    title: '优惠',
    active: true,
  },
  {
    icon: 'https://img14.360buyimg.com/img/jfs/t1/525760/23/13203/2133/6abb6409Feea7d676/0276030030076299.png',
    title: '互动',
  },
]

const Demo4 = () => {
  const { darkMode } = useAppTheme()
  return (
    <Space direction="vertical">
      <NavBar
        title={
          <div className="navbar-title-twoline">
            <span>默认样式</span>
            <span>背景透明</span>
          </div>
        }
        left={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <ArrowLeft />
            <Close />
          </MaterialView>
        }
        right={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <Share onClick={(e) => Toast.show('icon')} />
          </MaterialView>
        }
        className="navbar-iOS26"
        zIndex={0}
      />
      <NavBar
        back={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <ArrowLeft />
          </MaterialView>
        }
        right={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <Share onClick={(e) => Toast.show('icon')} />
          </MaterialView>
        }
        onBackClick={(e) => Toast.show('返回')}
        className="navbar-iOS26 nut-navbar-sticky"
        zIndex={0}
      >
        <div className="navbar-title-twoline">
          <span>吸顶样式</span>
          <span>有背景色</span>
        </div>
      </NavBar>
      <NavBar
        right={
          <MaterialView
            className="navbar-iOS26-button"
            scene="top-solid"
            darkMode={darkMode}
          >
            <span>清除未读</span>
            <More onClick={(e) => Toast.show('icon')} />
          </MaterialView>
        }
        onBackClick={(e) => Toast.show('返回')}
        className="navbar-iOS26 nut-navbar-sticky"
        subBar={
          <div className="navbar-subbar">
            {subBarData.map((item) => (
              <div
                className={`navbar-subbar-item ${item.active ? 'navbar-subbar-item-active' : ''}`}
                key={item.title}
              >
                <div>
                  {item.icon && <img src={item.icon} alt={item.title} />}
                </div>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        }
        zIndex={0}
      >
        二级楼层
      </NavBar>
    </Space>
  )
}

export default Demo4
