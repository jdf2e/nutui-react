import { ces, UIAbilityOnForegroundEvent, UIAbilityOnBackgroundEvent } from '@jd-oh/common-event-service'
import { navigateBack, reportAddRecord } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro'
import { JDPerforModule } from '@jd-oh/perflibrary'
import { NavBar, TextParam } from '@jd-oh/base-ui/src/main/ets/components/navbar/NavBar'
import { JDRouter, JDRouterComponentDelegate } from '@jd-oh/base-router'
import type Taro from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro/types"
import type { TFunc } from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime/dist/runtime.esm"
import type common from "@ohos.app.ability.common"

import '@jd-oh/taro_library/src/main/ets/npm/@jdtaro/taro-platform-jdharmony/dist/runtime/runtime'

import router from "@ohos.router"
import { TaroView } from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/components"
import { getSystemInfoSync } from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/taro"
import { initHarmonyElement, bindFn, callFn, convertNumber2VP, Current, ObjectAssign, TaroAny, TaroElement, TaroObject, TaroNode, TaroViewElement, window, document } from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime"
import { eventCenter, PageInstance } from "@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime/dist/runtime.esm"
import { createLazyChildren } from "../../../render"
import createComponent, { config } from "./index_taro_comp"

const sysInfo: TaroAny = getSystemInfoSync()
/* -----e9537b 开始----- */
/* -----router 生成代码 用于懒加载组件或页面----- */
export function get_e9537b_wrapper(): WrappedBuilder<[Object]> {
  return wrapBuilder(IndexLazyBuilder);
}

@Builder
function IndexLazyBuilder(params: Object) {
  Index({ params: params });
}

/* -----e9537b 结束----- */      
@Entry({
  "routeName": "layout/pages/safearea/index"
})
@Component
export default struct Index {
  page?: PageInstance
  onReady?: TaroAny
  @State node: (TaroElement | null) = null
  @State layerNode: (TaroElement | null) = null
  @State navigationBarHomeBtn: boolean = true
  @State navigationBarLoading: boolean = false
  @State navigationBarBackgroundColor: string = config.navigationBarBackgroundColor
  @State navigationBarTextStyle: string = config.navigationBarTextStyle
  @State navigationBarTitleText: string = config.navigationBarTitleText
  @State pageBackgroundColor: string = config.backgroundColor
  @State pageBackgroundContentColor: string = config.backgroundColorContent
  @State props: TaroObject = {}
  @State params: TaroObject = {}
  @State statusBarHeight: number = px2vp(sysInfo.statusBarHeight)
  @StorageLink('layout/pages/safearea/index') @Watch('reportHomeAppear') cacheData: TaroObject | null = null
  isReported: boolean = false
  isShown: boolean = true

  reportHomeAppear () {
    const currentPath: TaroAny = 'layout/pages/safearea/index'
    const isHomePath = currentPath === 'pages/index/index'
    if (this.cacheData && !this.isReported && isHomePath) {
      this.isReported = true
      reportAddRecord('homeDidAppear')
    }
  }

  aboutToAppear () {
    Current.$r = (path: string): Resource => {
      return $r(path)
    }
    JDPerforModule.PerfMonitor.onPageLoadStart('layout/pages/safearea/index')
    const delegate: JDRouterComponentDelegate = {
      onShown: () => {
        this.isShown = true
        JDPerforModule.PerfMonitor.startMetric('layout/pages/safearea/index')
        callFn(this.page?.onShow, this)
      },
      onHidden: () => {
        this.isShown = false
        JDPerforModule.PerfMonitor.onPageInvisible('layout/pages/safearea/index')
        callFn(this.page?.onHide, this)
      }
    }
    JDRouter.setupComponentDelegate(delegate, this.params)
    initHarmonyElement()
    this.handlePageAppear()
  }

  aboutToDisappear () {
    callFn(this.page?.onUnload, this)
  }

  handlePageAppear () {
    const params = this.params
    this.page = createComponent()
    this.onReady = bindFn(this.page?.onReady, this.page)
    callFn(this.page?.onLoad, this, params, (instance: TaroElement) => {
      this.node = instance
    })
    callFn(this.page?.onReady, this, params)
  }

  handleNavigationStyle = (option: TaroObject) => {
    if (option.title) this.navigationBarTitleText = option.title
    if (option.backgroundColor) this.navigationBarBackgroundColor = option.backgroundColor || '#000000'
    if (option.frontColor) this.navigationBarTextStyle = option.frontColor || 'white'
    if (typeof option.home === 'boolean') this.navigationBarHomeBtn = option.home
    if (typeof option.loading === 'boolean') this.navigationBarLoading = option.loading
  }

  handlePageStyle = (option: TaroObject) => {
    if (option.backgroundColor) this.pageBackgroundColor = option.backgroundColor || '#FFFFFF'
    if (option.backgroundColorContext) this.pageBackgroundContentColor = option.backgroundColorContext || '#FFFFFF'
  }

  bindPageEvent () {
    eventCenter?.on('__taroNavigationStyle', this.handleNavigationStyle)
    eventCenter?.on('__taroPageStyle', this.handlePageStyle)
  }

  removePageEvent () {
    eventCenter?.off('__taroNavigationStyle', this.handleNavigationStyle)
    eventCenter?.off('__taroPageStyle', this.handlePageStyle)
  }

  @Builder
  renderTitle () {
    NavBar({
      isAutoDark: true,
      statusBarHeight: this.statusBarHeight,
      bgColor: this.navigationBarBackgroundColor || '#fff',
      mainTitleText: new TextParam(this.navigationBarTitleText || 'NutUI-React', null, this.navigationBarTextStyle || 'black', null),
      useBackIcon: true,
      onBackClick: () => {
        navigateBack()
        return true
      },
    })
  }

  build () {
    Navigation() {
      Stack() {
        if (this.cacheData) {
          TaroView({ node: this.cacheData as TaroViewElement, createLazyChildren })
        } else if (this.node) {
          TaroView({ node: this.node as TaroViewElement, createLazyChildren })
        }
        if (this.layerNode) {
          Stack() {
            createLazyChildren(this.layerNode as TaroElement, 1)
          }
          .position({ x: 0, y: 0 })
          .height('100%')
          .width('100%')
          .responseRegion({ x: 0, y: 0, width: 0, height: 0 })
          .align(Alignment.TopStart)
        }
      }
      .align(Alignment.TopStart)
      .backgroundColor(this.pageBackgroundContentColor || this.pageBackgroundColor || "#FFFFFF")
      .width("100%")
      .constraintSize({
        minHeight: "100%",
      })
    }
    .backgroundColor(this.pageBackgroundColor || '#FFFFFF')
    .height('100%')
    .width('100%')
    .title({ builder: this.renderTitle, height: 48 + this.statusBarHeight })
    .titleMode(NavigationTitleMode.Mini)
    .hideTitleBar(config.navigationStyle === 'custom')
    .hideBackButton(true)
    .expandSafeArea([SafeAreaType.SYSTEM])
  }
}
