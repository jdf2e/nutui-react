import { TaroImage, TaroText, TaroView, TaroIcon, TaroForm, TaroLabel, TaroInput, TaroVideo, TaroButton, TaroPicker, TaroSlider, TaroSwitch, TaroSwiper, TaroWebView, TaroTextArea, TaroRichText, TaroProgress, TaroInnerHtml, TaroScrollView, TaroMovableArea, TaroMovableView, TaroRadio, TaroCanvas, TaroRadioGroup, TaroCheckboxGroup, TaroCheckbox, TaroPageMeta, TaroNavigationBar, TaroScrollList, TaroListView, TaroStickySection, TaroWaterFlowView, TaroWaterFlow, TaroList } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/components'
import { Current, NodeType } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime'
import type { TaroAny, TaroElement, TaroOtherElement, TaroViewElement, TaroScrollViewElement, TaroImageElement, TaroButtonElement, TaroTextElement, TaroFormElement, TaroIconElement, TaroLabelElement, TaroPickerElement, TaroInputElement, TaroTextAreaElement, TaroCheckboxGroupElement, TaroCheckboxElement, TaroRadioGroupElement, TaroRadioElement, TaroRichTextElement, TaroVideoElement, TaroProgressElement, TaroMovableAreaElement, TaroMovableViewElement, TaroSwiperElement, TaroSwitchElement, TaroSliderElement, TaroCanvasElement, TaroWebViewElement, TaroInnerHtmlElement, TaroPageMetaElement, TaroNavigationBarElement } from '@jd-oh/taro_library/src/main/ets/npm/@tarojs/runtime'



@Builder
function createChildItem (item: TaroElement, createLazyChildren?: (node: TaroElement, layer?: number) => void) {
  if (item.tagName === 'LIST') {
    TaroList({ node: item as TaroAny, createLazyChildren, createChildItem })
  } else if (item.tagName === 'WATER-FLOW') {
    TaroWaterFlow({ node: item as TaroAny, createLazyChildren, createChildItem })
  } else if (item.tagName === 'WATER-FLOW-VIEW') {
    TaroWaterFlowView({ node: item as TaroAny, createLazyChildren, createChildItem })
  } else if ((item.tagName === 'SCROLL-VIEW' || item._st?.hmStyle.overflow === 'scroll') && item.getAttribute('type') === 'custom') {
    TaroScrollList({ node: item as TaroScrollViewElement, createLazyChildren })
  } else if (item.tagName === 'SCROLL-VIEW' || item._st?.hmStyle.overflow === 'scroll') {
    TaroScrollView({ node: item as TaroScrollViewElement, createLazyChildren })
  } else if (item.tagName === 'VIEW') {
    TaroView({ node: item as TaroViewElement, createLazyChildren })
  } else if (item.tagName === 'TEXT' || item.nodeType === NodeType.TEXT_NODE) {
    TaroText({ node: item as TaroTextElement, createLazyChildren })
  } else if (item.tagName === 'IMAGE') {
    TaroImage({ node: item as TaroImageElement, createLazyChildren })
  } else if (item.tagName === 'BUTTON') {
    TaroButton({ node: item as TaroButtonElement, createLazyChildren })
  } else if (item.tagName === 'SLIDER') {
    TaroSlider({ node: item as TaroSliderElement, createLazyChildren })
  } else if (item.tagName === 'SWITCH') {
    TaroSwitch({ node: item as TaroSwitchElement, createLazyChildren })
  } else if (item.tagName === 'INPUT') {
    TaroInput({ node: item as TaroInputElement, createLazyChildren })
  } else if (item.tagName === 'SWIPER') {
    TaroSwiper({ node: item as TaroSwiperElement, createLazyChildren })
  } else if (item.tagName === 'SWIPER-ITEM') {
    TaroView({ node: item as TaroViewElement, createLazyChildren })
  } else if (item.tagName === 'INNER-HTML') {
    TaroInnerHtml({ node: item as TaroInnerHtmlElement, createChildItem })
  } else if (item.tagName === 'RICH-TEXT') {
    TaroRichText({ node: item as TaroRichTextElement, createLazyChildren })
  } else if (item.tagName === 'ICON') {
    TaroIcon({ node: item as TaroIconElement, createLazyChildren })
  } else if (item.tagName === 'TEXT-AREA') {
    TaroTextArea({ node: item as TaroTextAreaElement, createLazyChildren })
  } else if (item.tagName === 'CHECKBOX-GROUP') {
    TaroCheckboxGroup({ node: item as TaroCheckboxGroupElement, createLazyChildren })
  } else if (item.tagName === 'CHECKBOX') {
    TaroCheckbox({ node: item as TaroCheckboxElement, createLazyChildren })
  } else if (item.tagName === 'RADIO-GROUP') {
    TaroRadioGroup({ node: item as TaroRadioGroupElement, createLazyChildren })
  } else if (item.tagName === 'RADIO') {
    TaroRadio({ node: item as TaroRadioElement, createLazyChildren })
  } else if (item.tagName === 'PROGRESS') {
    TaroProgress({ node: item as TaroProgressElement, createLazyChildren })
  } else if (item.tagName === 'MOVABLE-VIEW') {
    TaroMovableView({ node: item as TaroMovableViewElement, createLazyChildren })
  } else if (item.tagName === 'MOVABLE-AREA') {
    TaroMovableArea({ node: item as TaroMovableAreaElement, createLazyChildren })
  } else if (item.tagName === 'CANVAS') {
    TaroCanvas({ node: item as TaroAny as TaroCanvasElement })
  } else if (item.tagName === 'LABEL') {
    TaroLabel({ node: item as TaroLabelElement, createLazyChildren })
  } else if (item.tagName === 'PICKER') {
    TaroPicker({ node: item as TaroPickerElement, createLazyChildren })
  } else if (item.tagName === 'FORM') {
    TaroForm({ node: item as TaroFormElement, createLazyChildren })
  } else if (item.tagName === 'VIDEO') {
    TaroVideo({ node: item as TaroVideoElement, createLazyChildren })
  } else if (item.tagName === 'WEB-VIEW') {
    TaroWebView({ node: item as TaroWebViewElement, createLazyChildren })
  } else if (item.tagName === 'PAGE-META') {
    TaroPageMeta({ node: item as TaroPageMetaElement, createLazyChildren })
  } else if (item.tagName === 'NAVIGATION-BAR') {
    TaroNavigationBar({ node: item as TaroNavigationBarElement, createLazyChildren })
  } else if (item.tagName === 'STICKY-SECTION') {
    TaroStickySection({ node: item as TaroViewElement, createLazyChildren })
  } else if (item.tagName === 'LIST-VIEW') {
    TaroListView({ node: item as TaroViewElement, createLazyChildren }).reuseId(item._nid.toString())
  } else {
    TaroView({ node: item as TaroViewElement, createLazyChildren })
  }
}

@Builder
function createLazyChildren (node: TaroElement, layer = 0) {
  LazyForEach(node, (item: TaroElement) => {
    if (!item._nodeInfo || item._nodeInfo.layer === layer) {
      createChildItem(item, createLazyChildren)
    }
  }, (item: TaroElement) => `${item._nid}-${item._nativeUpdateTrigger}-${item._nodeInfo?.layer || 0}`)
}

export { createChildItem, createLazyChildren }
