import { JDRouterStack, JDRouter, JDRouterAsyncCallback, JDRouterError } from '@jd-oh/base-router';
import promptAction from '@ohos.promptAction';
import { display, window } from '@kit.ArkUI';
import Index from 'nutui_jdharmony_library/src/main/ets/pages/index'
  
/* -----106a6c 开始----- */
/* -----router 生成代码 用于懒加载组件或页面----- */
export function get_106a6c_wrapper(): WrappedBuilder<[Object]> {
  return wrapBuilder(HomeLazyBuilder);
}

@Builder
function HomeLazyBuilder(params: Object) {
  Home({ params: params });
}

/* -----106a6c 结束----- */      
@Entry({ routeName: "home" })
@Component
export struct Home {
  @State title: string = 'dongdesignComponent';
  @Prop params: Object;
  @State statusBarHeight: number = 20;

  aboutToAppear(): void {
    const fullScreen = JDRouter.getWindowStage().getMainWindowSync().getWindowProperties().isLayoutFullScreen;
    if (fullScreen) {
      this.statusBarHeight = 20 + JDRouter.getWindowStage()
        .getMainWindowSync()
        .getWindowAvoidArea(window.AvoidAreaType.TYPE_CUTOUT)
        .topRect
        .height / display.getDefaultDisplaySync().densityPixels;
    }
  }

  build() {
    Scroll() {
      this.buildList()
    }.width('100%').height('100%').scrollable(ScrollDirection.Vertical)  // 滚动方向纵向
  }

  @Builder
  buildList() {
    Index()
  }
}
