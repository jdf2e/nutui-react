import { shouldBindEvent, getNodeThresholds } from './'
import { eventHandler, createTaroEvent, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME } from '../runtime'

import type { TaroEvent, TaroElement, TaroOtherElement, TaroAny, TaroScrollViewElement } from '../runtime'

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
export struct TaroList {
  @Builder customBuilder() {}
  @Builder customItemBuilder() {}
  @BuilderParam createChildItem: (node: TaroAny, fn: (node: TaroAny) => void) => void = this.customItemBuilder
  @BuilderParam createLazyChildren: (node: TaroAny, layer?: number) => void = this.customBuilder
  @ObjectLink node: TaroOtherElement
  @State overwriteStyle: Record<string, TaroAny> = {}

  scroller: Scroller = new Scroller()

  build() {
    WaterFlow({
      scroller: this.scroller
    }) {
      LazyForEach(this.node, (item: TaroElement) => {
        FlowItem() {
          this.createChildItem(item, this.createLazyChildren)
        }
      }, (item: TaroElement) => `${item._nid}-${item._nodeInfo?.layer || 0}`)
    }
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
  }
}
