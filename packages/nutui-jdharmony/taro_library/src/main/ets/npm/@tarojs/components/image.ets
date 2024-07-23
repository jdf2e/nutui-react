import hiTraceMeter from '@ohos.hiTraceMeter'
import { eventHandler, getComponentEventCallback, AREA_CHANGE_EVENT_NAME, VISIBLE_CHANGE_EVENT_NAME } from '../runtime'
import { shouldBindEvent, getNodeThresholds, commonStyleModify } from './'

import type { TaroImageElement, TaroAny } from '../runtime'
import { ImageController } from '@jd-oh/image'

let isFirstImageLoaded = false

export function getImageMode (mode: string): ImageFit {
  switch (mode) {
    case 'aspectFit': return ImageFit.Contain
    case 'aspectFill': return ImageFit.Cover
    case 'scaleToFill': return ImageFit.Fill
    case 'widthFix': return ImageFit.Auto
    case 'heightFix': return ImageFit.Auto
    default: return ImageFit.Contain
  }
}

@Component
struct TaroImage {
  @Builder customBuilder() {}
  @BuilderParam createLazyChildren: (node: TaroImageElement, layer?: number) => void = this.customBuilder
  @ObjectLink @Watch('onNodeUpdated') node: TaroImageElement
  @State overwriteStyle: Record<string, TaroAny> = {}
  @State isError: boolean = false
  isImageComplete: boolean = false;

  //JdImage
  @State pixelMap: DrawableDescriptor | PixelMap | string | Resource | undefined = undefined;
  controller: ImageController = new ImageController();

  aboutToAppear(): void {
    if (this.node) {
      this.node._instance = this
    }
    this.imageRequest();
  }

  onNodeUpdated(){
    this.imageRequest();
  }

  private imageRequest() {
    this.controller.onComplete = ((pixelMap: DrawableDescriptor | string | undefined | Resource) => {
      this.pixelMap = pixelMap
    })
    this.controller.onError = ((message: string,defaultImage?: Resource) => {
      this.isError = true
      const node: TaroAny = this.node._attrs
      //有errorHolder，使用errorHolder
      if (node.errorHolder) {
        this.pixelMap = node.errorHolder;
      } else if (this.isImageComplete && node.placeHolder) {
        //之前已经渲染过且存在placeHolder，使用placeHolder
        this.pixelMap = node.placeHolder;
      } else if (this.isImageComplete && defaultImage) {
        //之前已经渲染过且不存在errorHolder和placeHolder，使用透明图片
        this.pixelMap = defaultImage;
      }
    })
    this.controller.start({
      src: this.getImageResource()
    })
  }

  aboutToDisappear(): void {
    this.controller.clean();
  }

  aboutToRecycle(): void {
    this.controller.clean();
  }

  getImageResource (): string | Resource {
    if (!this.node) return ''

    const node: TaroAny = this.node._attrs
    return node.src
  }

  build() {
    Image(this.pixelMap)
      .onClick(shouldBindEvent((e: ClickEvent) => { eventHandler(e, 'click', this.node) }, this.node, ['click']))
      .onAreaChange(getComponentEventCallback(this.node, AREA_CHANGE_EVENT_NAME, (res: TaroAny) => {
        this.node._nodeInfo.areaInfo = res[1]
      }))
      .objectFit(getImageMode(this.node.getAttribute('mode')))
      .attributeModifier(commonStyleModify.setNode(this.node).setAnimationStyle(this.overwriteStyle))
      .onComplete(e => {
        this.controller.complete();
        eventHandler(e, 'complete', this.node)
        this.isImageComplete = true;
        if (!isFirstImageLoaded) {
          isFirstImageLoaded = true
          hiTraceMeter.startTrace('TaroFirstImageLoaded', 1)
          hiTraceMeter.finishTrace('TaroFirstImageLoaded', 1)
        }
      })
      .onVisibleAreaChange(getNodeThresholds(this.node) || [0.0, 1.0], getComponentEventCallback(this.node, VISIBLE_CHANGE_EVENT_NAME))
        // TODO: 临时改为申明式，后续等鸿蒙修复modify设置失败的bug后删除该申明
      .borderRadius({
        topLeft: this.node._st.hmStyle.borderTopLeftRadius,
        topRight: this.node._st.hmStyle.borderTopRightRadius,
        bottomLeft: this.node._st.hmStyle.borderBottomLeftRadius,
        bottomRight: this.node._st.hmStyle.borderBottomRightRadius
      })
      .alt((this.node._attrs as TaroAny).placeHolder || '')
      .onError((error) => {
        this.controller.error(error);
      })
  }
}

export { TaroImage }
