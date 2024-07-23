import { eventHandler, getComponentEventCallback, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME, createTaroEvent } from '../runtime'

import commonStyleModify from './style'
import { getNodeThresholds, getFontAttributes, shouldBindEvent, parseStyles } from './utils/helper'

import type { TaroAny, TaroStyleType, TaroTextStyleType, TaroTextAreaElement, TaroEvent } from '../runtime'
import * as themeDefault from './theme'

interface TextareaAttrs extends TaroTextStyleType {
  autoFocus?: boolean
}

interface DefaultTextStyleInterface {
  color: string
  placeholderColor: string
  disabledColor: string
  size: number
  weight: number
}

const DefaultTextStyle: DefaultTextStyleInterface = {
  // @TODO 待替换为样式变量 themeDefault.contentGray4
  color: themeDefault.gray7,
  // @TODO 待替换为样式变量 themeDefault.contentGray1
  placeholderColor: themeDefault.gray4,
  // @TODO 待替换为样式变量 themeDefault.contentGray2
  disabledColor: themeDefault.gray5,
  size: 14,
  weight: 400,
}

@Extend(TextArea)
function textStyle (style: TaroStyleType, node: TaroTextAreaElement) {
  .fontColor(node?._attrs.disabled ? DefaultTextStyle.disabledColor : (style.color || DefaultTextStyle.color))
  .fontSize(style.fontSize || DefaultTextStyle.size)
  .fontWeight(style.fontWeight || DefaultTextStyle.weight)
  .fontStyle(style.fontStyle)
  .fontFamily(style.fontFamily)
}

@Extend(TextArea)
function textAttr(attr: TextareaAttrs) {
  .textAlign(attr.textAlign)
  .maxLines(attr.WebkitLineClamp)
  .defaultFocus(attr.autoFocus)
}

function getAttributes(node: TaroTextAreaElement): TextareaAttrs {
  const attrs: TaroAny = getFontAttributes(node)
  attrs.autoFocus = node._attrs.autoFocus || node._attrs.focus || false
  return attrs
}

function getPlaceholderColor (node: TaroTextAreaElement): string {
  const placeholderStyle: string = node._attrs.placeholderStyle || ''

  return parseStyles(placeholderStyle)?.color || DefaultTextStyle.placeholderColor
}

function getPlaceholderFont (node: TaroTextAreaElement): Font {
  const placeholderStyle: string = node._attrs.placeholderStyle || ''
  const styles = parseStyles(placeholderStyle)
  let style: FontStyle = styles.style === 'Italic' ? FontStyle.Italic : FontStyle.Normal

  return {
    size: styles?.size || DefaultTextStyle.size,
    weight: styles?.weight || DefaultTextStyle.weight,
    family: styles?.family,
    style,
  }
}

@Component
export struct TaroTextArea {
  @State value: string = ''

  @Builder customBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroTextAreaElement) => void = this.customBuilder
  @ObjectLink node: TaroTextAreaElement
  @State overwriteStyle: Record<string, TaroAny> = {}
  @State isFocused: boolean = false
  @Styles backgroundColorStyle() {
    // @TODO 待替换为样式变量 backgroundGray2
    .backgroundColor(this.node.isFocused ? '#FFFFFF' : '#F7F8FC')
    .borderWidth(0.5)
    .borderColor(this.node.isFocused ? 'rgba(0,0,0,0.06)' : '#F7F8FC')
    .shadow({ radius: 10, color: '#F7F8FC' })
  }

  aboutToAppear () {
    if (this.node) {
      this.value = this.node.value
      this.node._instance = this

      if (!this.node._isInit) {
        this.node._isInit = true
        this.node._reset = this.node.value || ''
      }
    }
  }

  build () {
    TextArea({ text: this.value, placeholder: this.node._attrs?.placeholder || '', controller: this.node.controller })
      .key(this.node._nid.toString())
      .maxLength(Number(this.node._attrs?.maxlength) || null)
      .padding(themeDefault.spacing12)
        // @TODO 待替换为样式变量 radiusL
      .borderRadius(themeDefault.radius12)
      // @TODO 待替换为样式变量 colorDanger
      .caretColor(themeDefault.brand6)
      .backgroundColorStyle()
      .placeholderFont(getPlaceholderFont(this.node))
      .placeholderColor(getPlaceholderColor(this.node))
      .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
      .textStyle(this.node?.hmStyle, this.node)
      .textAttr(getAttributes(this.node))
      .showCounter(this.node?._attrs.showCount, { highlightBorder: true })
      .maxLength(this.node?._attrs.maxlength)
      .onChange((value: string) => {
        const event: TaroEvent = createTaroEvent('input', { detail: { value } }, this.node)

        this.value = value
        this.node?.updateFormWidgetValue(value)
        eventHandler(event, 'input', this.node)
      })
      .onClick(shouldBindEvent((e: ClickEvent) => {
          if (this.node?._attrs.disabled) return
          eventHandler(e, 'click', this.node)
        }, this.node, ['click']))
      .onBlur(() => {
        const event: TaroEvent = createTaroEvent('blur', { detail: { value: this.value } }, this.node)

        this.node.isFocused = false
        eventHandler(event, 'blur', this.node)
      })
      .onFocus(() => {
        const event: TaroEvent = createTaroEvent('focus', { detail: { value: this.value, height: this.node?._height } }, this.node)

        this.node.isFocused = true
        eventHandler(event, 'focus', this.node)
      })
      .onAreaChange(getComponentEventCallback(this.node, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        if (this.node) {
          this.node._nodeInfo.areaInfo = res[1]
        }
      }))
      .onVisibleAreaChange(getNodeThresholds(this.node) || [0.0, 1.0], getComponentEventCallback(this.node, VISIBLE_CHANGE_EVENT_NAME))
  }
}
