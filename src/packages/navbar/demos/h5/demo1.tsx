import React from 'react'
import { NavBar, Space, Toast } from '@nutui/nutui-react'
import { ArrowLeftI, CloseI, ShareI } from '@nutui/icons-react'
import { MaterialView } from '../../../materialview/materialview'
import { useAppTheme } from '@/sites/mobile/theme-context'

const Demo1 = () => {
  const { darkMode } = useAppTheme()
  return (
    <>
      <Space direction="vertical">
        <NavBar
          title={
            <div className="navbar-title-twoline">
              <span>灰色背景</span>
              <span>毛玻璃</span>
            </div>
          }
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="top-solid"
              darkMode={darkMode}
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="top-solid"
              darkMode={darkMode}
            >
              <ShareI onClick={() => Toast.show('icon')} />
            </MaterialView>
          }
          onBackClick={() => Toast.show('返回')}
          className="navbar-iOS26"
          zIndex={0}
        />
        <NavBar
          title={
            <div className="navbar-title-twoline">
              <span>白色背景</span>
              <span>高透</span>
            </div>
          }
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="top-plain"
              darkMode={darkMode}
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="top-plain"
              darkMode={darkMode}
            >
              <ShareI onClick={() => Toast.show('icon')} />
            </MaterialView>
          }
          onBackClick={() => Toast.show('返回')}
          className="navbar-iOS26 nut-navbar-white"
          zIndex={0}
        />
        <NavBar
          title="浅色换肤"
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-fair"
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-fair"
            >
              <ShareI onClick={() => Toast.show('icon')} />
            </MaterialView>
          }
          onBackClick={() => Toast.show('返回')}
          className="navbar-iOS26 navbar-iOS26-skin-light"
          zIndex={0}
        />
        <NavBar
          title="深色换肤"
          back={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-deep"
            >
              <ArrowLeftI />
            </MaterialView>
          }
          right={
            <MaterialView
              className="navbar-iOS26-button"
              scene="promotion-deep"
            >
              <ShareI onClick={() => Toast.show('icon')} />
            </MaterialView>
          }
          onBackClick={() => Toast.show('返回')}
          className="navbar-iOS26 navbar-iOS26-skin-deep"
          zIndex={0}
        />
        <div className="navbar-topbar-wrapper">
          <Space direction="vertical">
            <NavBar
              title="通栏吸顶"
              back={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="top-plain"
                  darkMode={darkMode}
                >
                  <ArrowLeftI />
                  <CloseI />
                </MaterialView>
              }
              right={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="top-plain"
                  darkMode={darkMode}
                >
                  <ShareI onClick={() => Toast.show('icon')} />
                </MaterialView>
              }
              onBackClick={() => Toast.show('返回')}
              className="navbar-iOS26 nut-navbar-sticky"
              zIndex={10}
            />
            <NavBar
              title="沉浸式"
              back={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="immersive"
                  darkMode
                >
                  <ArrowLeftI />
                  <CloseI />
                </MaterialView>
              }
              right={
                <MaterialView
                  className="navbar-iOS26-button"
                  scene="immersive"
                  darkMode
                >
                  <ShareI onClick={() => Toast.show('icon')} />
                </MaterialView>
              }
              onBackClick={() => Toast.show('返回')}
              className="navbar-iOS26 navbar-iOS26-immersive"
              zIndex={0}
            />
          </Space>
        </div>
      </Space>
    </>
  )
}
export default Demo1
