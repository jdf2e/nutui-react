import { eventHandler, getComponentEventCallback, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME, createTaroEvent } from '../runtime'

import commonStyleModify, { rowModify, columnModify } from './style'
import * as themeDefault from './theme'
import { TOUCH_EVENT_MAP } from './utils/constant/event'
import { FlexManager } from './utils/flexManager'
import { shouldBindEvent, getNodeThresholds } from './utils/helper'

import { TaroEvent, TaroAny, HarmonyType, TaroRadioGroupElement, TaroRadioElement } from '../runtime'
import { isUndefined } from '../shared'

@Component
export struct TaroRadio {
  @Builder customBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroRadioElement, layer?: number) => void = this.customBuilder
  @ObjectLink node: TaroRadioElement
  @State overwriteStyle: Record<string, TaroAny> = {}
  getRadioBackground() {
    let bgColor = themeDefault.gray1
    if (this.node.checked) {
      bgColor = this.node._attrs.disabled ? themeDefault.brand2 : themeDefault.brand6
    } else {
      if (this.node._attrs.disabled) {
        // @TODO 待更新为样式变量 themeDefault.contentGray1
        bgColor = '#BFBFBF'
      }
    }

    return bgColor
  }
  getRadioBorder() {
    let bdColor = '#BFBFBF'
    if (this.node.checked) {
      bdColor = this.node._attrs.disabled ? themeDefault.brand2 : themeDefault.brand6
    }

    return bdColor
  }

  aboutToAppear () {
    if (this.node && !this.node._isInit) {
      this.node._isInit = true
      this.node._instance = this
      this.node._reset = this.node.checked || false
    }
  }

  build () {
    Stack() {
      Row() {
        Stack({ alignContent: Alignment.Center }) {
          Radio({
            group: this.node.group || this.node.parentNode?._nid.toString() || '',
            value: this.node.value || '',
          })
            .width(0)
            .height(0)
            .checked(this.node.checked)
            .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
            .onChange((value: boolean) => {
              if (this.node) {
                if (!!this.node?._attrs.disabled) {
                  this.node.updateComponent()
                } else {
                  this.node.updateCheckedValue(value)

                  if (value) {
                    const event: TaroEvent =
                      createTaroEvent('change', { detail: { value: this.node?._attrs.value } }, this.node)
                    eventHandler(event, 'change', this.node)
                  }
                }
              }
            })
            .onClick(shouldBindEvent((e: ClickEvent) => eventHandler(e, 'click', this.node), this.node, ['click']))
            .onAreaChange(getComponentEventCallback(this.node, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
              if (this.node) {
                this.node._nodeInfo.areaInfo = res[1]
              }
            }))
            .onVisibleAreaChange(getNodeThresholds(this.node) || [0.0, 1.0],
              getComponentEventCallback(this.node, VISIBLE_CHANGE_EVENT_NAME))

          // 底部图标
          Circle({ width: 18, height: 18 })
            .fill(this.getRadioBackground())
            .borderWidth(1)
            .borderColor(this.getRadioBorder())
            .borderRadius(9)

          // 未选中-禁用 图标
          Rect({ width: 8, height: 2, radius: 1 })
            .fill(themeDefault.gray1)
            .opacity(!this.node.checked && this.node._attrs.disabled ? 1 : 0)

          // 选中 图标
          Circle({ width: 9, height: 9 })
            .fillOpacity(0)
            .stroke(themeDefault.gray1)
            .strokeWidth(2)
            .opacity(this.node.checked ? 1 : 0)
        }
        Text(this.node.textContent)
          .textAlign(TextAlign.Center)
          // @TODO 待跟进 V13 设计稿
          .opacity(!!this.node?._attrs.disabled ? 0.4 : 1)
      }
      .onClick(() => {
        if (this.node) {
          if (!this.node._checked && !this.node?._attrs.disabled) {
            this.node.checked = !this.node.checked
          }
        }
      })
    }
  }
}


@Component
export struct TaroRadioGroup {
  @Builder customBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroRadioGroupElement, layer?: number) => void = this.customBuilder
  @ObjectLink node: TaroRadioGroupElement
  @State overwriteStyle: Record<string, TaroAny> = {}

  @Styles visibleChangeEvent () {
    .onVisibleAreaChange(getNodeThresholds(this.node) || [0.0, 1.0], getComponentEventCallback(this.node, VISIBLE_CHANGE_EVENT_NAME))
  }

  aboutToAppear () {
    if (this.node) {
      this.node._instance = this
      const childList = this.node.getElementsByTagName<TaroRadioElement>('RADIO')
      childList.forEach(element => {
        element.group = this.node?._attrs.name || this.node?._nid.toString()
      })
      // 阻止事件冒泡传递上去
      this.node.addEventListener('change', (e: TaroEvent) => e.stopPropagation())
    }
  }

  @Styles defaultEvent () {
    .onClick(shouldBindEvent((e: ClickEvent) => eventHandler(e, 'click', this.node), this.node, ['click']))
    .onTouch(shouldBindEvent((e: TouchEvent) => eventHandler(e, TOUCH_EVENT_MAP.get(e.type), this.node), this.node, TOUCH_EVENT_MAP.values()))
    .onAreaChange(getComponentEventCallback(this.node, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
      if (this.node) {
        this.node._nodeInfo.areaInfo = res[1]
      }
    }))
  }

  build() {
    if (FlexManager.useFlexLayout(this.node)) {
      Flex(FlexManager.flexOptions(this.node)) {
        this.createLazyChildren(this.node, 0)
      }
      .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
      .defaultEvent()
      .visibleChangeEvent()
    } else if (FlexManager.isFlexNode(this.node) && FlexManager.direction(this.node) !== FlexDirection.Column) {
      Row() {
        this.createLazyChildren(this.node, 0)
      }
      .attributeModifier(rowModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
      .defaultEvent()
      .visibleChangeEvent()
    } else {
      Column() {
        this.createLazyChildren(this.node, 0)
      }
      .attributeModifier(columnModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
      .defaultEvent()
      .visibleChangeEvent()
    }
  }
}
