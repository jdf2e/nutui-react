import './App.scss'
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import {
  HashRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import loadable from '@loadable/component'
import { ArrowLeft } from '@nutui/icons-react'
import routes from './router'
import Links from './Links'
import logo from '@/sites/assets/images/logo-red.png'
import useLocale, { getLocale } from '@/sites/assets/locale/uselocale'
import Configprovider, { useConfig } from '@/packages/configprovider'
import { getComponentName } from '@/sites/assets/util'
import zhTW from '@/locales/zh-TW'
import zhCN from '@/locales/zh-CN'
import enUS from '@/locales/en-US'
import { BaseLang } from '@/locales/base'

interface Languages {
  [key: string]: BaseLang
}

const languages: Languages = {
  zhTW,
  zhCN,
  enUS,
}

const defaultTheme = {}
const darkTheme = {
  nutuiColorPrimary: '#fa3725',
  nutuiColorPrimaryStop1: '#f54958',
  nutuiColorPrimaryStop2: '#fa3725',
  nutuiColorTextLink: '#0073FF',
  nutuiBrand1: '#403635',
  nutuiBrand2: '#665452',
  nutuiBrand3: '#99706b',
  nutuiBrand4: '#cc5f52',
  nutuiBrand5: '#f2503d',
  nutuiBrand6: '#fa3725',
  nutuiBrand7: '#f24130',
  nutuiBrand8: '#e55446',
  nutuiBrand9: '#f26e61',
  nutuiBrand10: '#e5928a',
  nutuiGray1: '#1f1f1f',
  nutuiGray2: '#141414',
  nutuiGray3: '#0a0a0a',
  nutuiGray4: '#666666',
  nutuiGray5: '#818181',
  nutuiGray6: '#999999',
  nutuiGray7: '#e6e6e6',
  nutuiBlack1: 'rgba(255, 255, 255, 0)',
  nutuiBlack2: 'rgba(20, 20, 20, 0.2)',
  nutuiBlack3: 'rgba(255, 255, 255, 0.06)',
  nutuiBlack4: 'rgba(20, 20, 20, 0.1)',
  nutuiBlack5: 'rgba(20, 20, 20, 0.2)',
  nutuiBlack6: 'rgba(20, 20, 20, 0.3)',
  nutuiBlack7: 'rgba(20, 20, 20, 0.4)',
  nutuiBlack8: 'rgba(20, 20, 20, 0.5)',
  nutuiBlack9: 'rgba(20, 20, 20, 0.6)',
  nutuiBlack10: 'rgba(20, 20, 20, 0.7)',
  nutuiWhite1: 'rgba(31, 31, 31, 0)',
  nutuiWhite7: 'rgba(31, 31, 31, 0.4)',
  nutuiWhite8: 'rgba(31, 31, 31, 0.5)',
  nutuiWhite12: 'rgba(31, 31, 31, 0.9)',
  nutuiColorTextDisable: '#666666',
  boxShadow: '0px 1px 7px 0px #141414',
  pickerMaskBgImg:
    'linear-gradient(180deg,rgba(31, 31, 31, 1),rgba(31, 31, 31, 0.4)),linear-gradient(0deg, rgba(31, 31, 31, 1), rgba(31, 31, 31, 0.4))',
  rowContentBgColor: '#0a0a0a',
  rowContentLightBgColor: 'rgba(0, 0, 0, 0.4)',
}

interface PostureContextType {
  posture: 'flat' | 'folded'
  togglePosture: () => void
  hasNativePosture: boolean
}

const PostureContext = createContext<PostureContextType>({
  posture: 'flat',
  togglePosture: () => {},
  hasNativePosture: false,
})

const defaultRoute =
  routes.find((item: any) => item.name.toLowerCase() === 'button') || routes[0]
const DefaultC = defaultRoute ? loadable(defaultRoute.component) : null

const WithNavRouter = ({ C, name }: any) => {
  const context = useConfig()
  const { posture, togglePosture, hasNativePosture } = useContext(PostureContext)
  const navigate = useNavigate()
  const handleSwitchLocale = () => {
    let locale = getLocale()
    let location = window.parent.location
    if (locale == 'zh-CN') {
      location.replace(location.href.replace('zh-CN', 'en-US'))
    } else {
      location.replace(location.href.replace('en-US', 'zh-CN'))
    }
  }

  const handleSwitchDarkModel = () => {
    context.changeTheme()
  }

  const componentInfo = getComponentName()
  const displayName = componentInfo?.name || name || ''

  return (
    <>
      <div id="nav">
        <div
          className="back"
          onClick={() => {
            if (
              window.parent !== window &&
              window.parent.location.pathname.includes('demo')
            ) {
              window.parent.history.back()
            } else if (window.history.length > 1) {
              window.history.back()
            } else {
              navigate('/')
            }
          }}
        >
          <ArrowLeft />
        </div>
        {displayName}
        <div className="translate">
          <span
            className="posture-toggle"
            title={
              hasNativePosture
                ? `当前为${posture === 'folded' ? '微弯' : '平整'}（硬件自动识别已生效）`
                : `当前为${posture === 'folded' ? '微弯' : '平整'}（浏览器未开放硬件姿态API，点击可手动模拟切换）`
            }
            onClick={togglePosture}
            style={{
              fontSize: '11px',
              padding: '2px 6px',
              borderRadius: '4px',
              cursor: 'pointer',
              background:
                posture === 'folded'
                  ? 'rgba(250, 55, 37, 0.12)'
                  : 'rgba(0, 0, 0, 0.05)',
              color: posture === 'folded' ? '#fa3725' : '#666',
              fontWeight: 500,
              userSelect: 'none',
              marginRight: '6px',
            }}
          >
            {posture === 'folded' ? '微弯' : '平整'}
          </span>
          <img
            className="dark-model"
            src="https://storage.360buyimg.com/imgtools/71a2689855-ba1f4000-80cb-11ed-aa68-651117499129.png"
            onClick={() => handleSwitchDarkModel()}
          />
          <img
            className="translate-icon"
            src="https://img14.360buyimg.com/imagetools/jfs/t1/135168/8/21387/6193/625fa81aEe07cc347/55ad5bc2580c53a6.png"
            onClick={() => handleSwitchLocale()}
          />
        </div>
      </div>
      <C />
    </>
  )
}
const AppSwitch = () => {
  const [locale] = useLocale()
  const [theme, setTheme] = useState({})
  const location = useLocation()

  const changeTheme = useCallback(() => {
    if (!theme || !Object.keys(theme).length) {
      setTheme(darkTheme)
      if (typeof document !== 'undefined') {
        document.body.classList.add('nut-theme-dark')
      }
    } else {
      setTheme(defaultTheme)
      if (typeof document !== 'undefined') {
        document.body.classList.remove('nut-theme-dark')
      }
    }
  }, [theme])

  const isRoot = location.pathname === '/' || location.pathname === ''
  const match = location.pathname.match(/\/component\/([^/]+)/)
  const activeName = match ? match[1].toLowerCase() : isRoot ? 'button' : ''

  useEffect(() => {
    const detailPane = document.querySelector('.nut-detail-pane')
    if (detailPane) {
      detailPane.scrollTop = 0
    }
    const demoEl = document.querySelector('.nut-detail-pane .demo')
    if (demoEl) {
      demoEl.scrollTop = 0
    }
  }, [location.pathname])

  const [posture, setPosture] = useState<'flat' | 'folded'>('flat')
  const [hasNativePosture, setHasNativePosture] = useState(false)

  useEffect(() => {
    // 清除可能残留的旧本地存储
    try {
      localStorage.removeItem('nutui-demo-posture')
    } catch (e) {}

    let isNative = false
    const cleanups: Array<() => void> = []

    // 1. 检测与响应标准/前缀媒体查询
    const queries = [
      '(device-posture: folded)',
      '(-webkit-device-posture: folded)',
      '(horizontal-viewport-segments: 2)',
      '(spanning: single-fold-vertical)',
    ]

    if (typeof window !== 'undefined' && window.matchMedia) {
      queries.forEach((q) => {
        try {
          const mql = window.matchMedia(q)
          if (mql.media !== 'not all') {
            isNative = true
          }
          const handleMql = (e: MediaQueryListEvent | MediaQueryList) => {
            if (e.matches) {
              setPosture('folded')
            } else {
              setPosture('flat')
            }
          }
          if (mql.matches) {
            setPosture('folded')
          }
          if (mql.addEventListener) {
            mql.addEventListener('change', handleMql)
            cleanups.push(() => mql.removeEventListener('change', handleMql))
          } else if ((mql as any).addListener) {
            ;(mql as any).addListener(handleMql)
            cleanups.push(() => (mql as any).removeListener(handleMql))
          }
        } catch (e) {}
      })
    }

    // 2. 响应 W3C Device Posture API (navigator.devicePosture)
    if (typeof navigator !== 'undefined' && 'devicePosture' in navigator) {
      isNative = true
      try {
        const dp = (navigator as any).devicePosture
        const handleDp = () => {
          if (dp.type === 'folded') {
            setPosture('folded')
          } else {
            setPosture('flat')
          }
        }
        if (dp.type === 'folded') {
          setPosture('folded')
        }
        dp.addEventListener?.('change', handleDp)
        cleanups.push(() => dp.removeEventListener?.('change', handleDp))
      } catch (e) {}
    }

    setHasNativePosture(isNative)

    // 3. 监听应用内或原生 Webview 注入的姿态联动事件
    const handleCustomPosture = (e: any) => {
      const newPosture = e.detail?.posture
      if (newPosture === 'flat' || newPosture === 'folded') {
        setPosture((prev) => (prev !== newPosture ? newPosture : prev))
      }
    }
    window.addEventListener('nutui-posture-change', handleCustomPosture)
    cleanups.push(() => {
      window.removeEventListener('nutui-posture-change', handleCustomPosture)
    })

    return () => {
      cleanups.forEach((c) => c())
    }
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-posture', posture)
    window.dispatchEvent(
      new CustomEvent('nutui-posture-change', { detail: { posture } })
    )
  }, [posture])

  const togglePosture = useCallback(() => {
    setPosture((prev) => (prev === 'folded' ? 'flat' : 'folded'))
  }, [])

  return (
    <PostureContext.Provider
      value={{ posture, togglePosture, hasNativePosture }}
    >
      <Configprovider
        locale={languages[((locale as string) || 'zh-CN').replace('-', '')]}
        theme={theme}
        changeTheme={changeTheme}
        portal={typeof document !== 'undefined' ? document.body : undefined}
      >
        <div className={`nut-split-container ${isRoot ? 'is-root' : ''}`}>
          <div className="nut-master-pane">
            <div className="index">
              <div className="index-header">
                <img src={logo} alt="" srcSet="" />
                <div className="info">
                  <h1>NutUI-React</h1>
                  <p>京东风格的轻量级移动端 React 组件库</p>
                </div>
              </div>
              <div className="index-components">
                <Links activeName={activeName} />
              </div>
            </div>
          </div>
          <div className="nut-detail-pane">
            <Routes>
              <Route
                path="/"
                element={
                  DefaultC ? (
                    <WithNavRouter C={DefaultC} name={defaultRoute.name} />
                  ) : null
                }
              />

              {routes.map((item: any) => {
                const C = loadable(item.component)
                return (
                  <Route
                    key={item.path}
                    path={`${item.path}`}
                    element={<WithNavRouter C={C} name={item.name} />}
                  />
                )
              })}
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </div>
      </Configprovider>
    </PostureContext.Provider>
  )
}
const App = () => {
  return (
    <>
      <HashRouter>
        <AppSwitch />
      </HashRouter>
    </>
  )
}
export default App
