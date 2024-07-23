import { shouldBindEvent, getNodeThresholds } from './'
import { eventHandler, createTaroEvent, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME } from '../runtime'
import { TOUCH_EVENT_MAP } from '../plugin-platform-harmony-ets/dist/components-harmony-ets/utils/constant/event'
import commonStyleModify from '../plugin-platform-harmony-ets/dist/components-harmony-ets/style'

import type { TaroEvent, TaroOtherElement, TaroAny, TaroScrollViewElement } from '../runtime'

interface ScrollViewCurrentOffset {
  xOffset: number
  yOffset: number
}
interface ScrollViewEvent {
  deltaX: number
  deltaY: number
  scrollLeft: number
  scrollTop: number
  scrollWidth: number
  scrollHeight: number
}
function handleScrollEvent (node: TaroScrollViewElement, eventName = 'scroll', scroller: Scroller, xOffset?: number, yOffset?: number) {
  const currentOffset = scroller.currentOffset() as ScrollViewCurrentOffset
  const currentXOffset = currentOffset.xOffset
  const currentYOffset = currentOffset.yOffset
  const value: ScrollViewEvent = {
    deltaX: vp2px(xOffset),
    deltaY: vp2px(yOffset),
    scrollLeft: vp2px(currentXOffset),
    scrollTop: vp2px(currentYOffset),
    scrollWidth: vp2px(Number(node._nodeInfo?._scroll?.width)),
    scrollHeight: vp2px(Number(node._nodeInfo?._scroll?.height)),
  }
  const event: TaroEvent = createTaroEvent(eventName, { detail: value }, node)

  eventHandler(event, eventName, node)
}

@Component
export struct TaroWaterFlow {
  @Builder customBuilder() {}
  @Builder customItemBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroAny, layer?: number) => void = this.customBuilder
  @BuilderParam createChildItem: (node: TaroAny, fn: (node: TaroAny) => void) => void = this.customItemBuilder
  @ObjectLink node: TaroOtherElement
  @State overwriteStyle: Record<string, TaroAny> = {}

  scroller: Scroller = new Scroller()

  aboutToAppear(): void {
    if (this.node) {
      this.node._instance = this
    }
  }

  handleScroll = (scrollOffset: number) => { 
    handleScrollEvent(this.node as TaroScrollViewElement, 'scroll', this.scroller, scrollOffset)
  }

  build() {
    WaterFlow({
      scroller: this.scroller
    }) {
      this.createLazyChildren(this.node, 0)
    }
    .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
    .cachedCount(6)
    .columnsTemplate("1fr 1fr")
    .columnsGap(10)
    .rowsGap(5)
    .width('100%')
    .height('100%')
    .nestedScroll({
      scrollForward: NestedScrollMode.PARENT_FIRST,
      scrollBackward: NestedScrollMode.SELF_FIRST
    })
    .edgeEffect(EdgeEffect.None)
    .scrollBar(BarState.Off)
    .onReachEnd(shouldBindEvent(() => { handleScrollEvent(this.node as TaroScrollViewElement, 'scrolltolower', this.scroller) }, this.node, ['scrolltolower']))
    .onClick(shouldBindEvent((e: ClickEvent) => { eventHandler(e, 'click', this.node) }, this.node, ['click']))
    .onTouch(shouldBindEvent((e: TouchEvent) => { eventHandler(e, TOUCH_EVENT_MAP.get(e.type), this.node) }, this.node, TOUCH_EVENT_MAP.values()))
  }
}
