# 从 v1 升级到 v2

## 介绍

## 升级步骤

## 不兼容更新

## NutUI Icons 调整

## 组件名称调整

## 组件 API 调整

### 基础组件
#### Button
- 删除 plain，通过 fill="outline" 实现
- 增加 ref，对外暴露组件内 button 元素
- `xxx` 重命名为 `yyy`
- 删除 `x`, 通过 `z` 实现
- 优化 `x` 类型为 ReactNode
- 增加 `x`, 用于某个功能
#### Cell
- `subTitle` 重命名为 `description`
- 删除 `desc` 重命名为 `extra`, 改为 `React.Node` 类型
- 删除 `icon`、 `isLink`、`url`、`linkSlot`、`replace`, 暴露自定义节点, demo示例展示
- 删除 `descTextAlign`, 通过css变量实现
- 删除 `roundRadius` 重命名为 `radius`
- 删除 `center` 改为 `align`，默认值为`flex-start`, 可选 `center`、`flex-end`
#### CellGroup
- `desc` 重命名为 `description`
- `title`、`description` 改为 `React.Node` 类型
- 删除 `titleSlot` 和 `descSlot`
- 增加 `divider`, 单元格之间是否有分割线
#### ConfigProvider
#### Icon
#### Image
- 删除 round，通过 radius 实现圆或圆角
- 删除 loadingImg 和 slotLoading，通过 loading 属性实现，当 loading 属性设置为 ReactNode 或 true 时，表示展示 loading 状态
- 删除 showError 和 slotError，通过 error 属性实现，当 error 属性设置为 ReactNode 或 true 时，表示展示 error 状态
- 删除 loadingImg，可通过 loading 设置 ReactNode
- 删除 errorImg，可通过 error 设置 ReactNode
- showError 重命名为 error，类型修改为 boolean｜ReactNode
- showLoading 重命名为 loading，类型修改为 boolean｜ReactNode
#### Overlay
- `overlayClass` 重命名为 `className`
- `overlayStyle` 重命名为 `style`
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`
- 纠正 `lockScroll` 文档说明，默认值应为 `true`
- 增加 `afterClose` 和 `afterShow`，用于完全关闭后触发的回调和完全展示后触发的回调
- 完善 `Overlay` 的 demo 示例
#### Popup
- `popClass` 重命名为 `className`，统一将组件的样式类名使用 `className`，不再指定特殊名字，减轻用户使用的记忆成本
- `overlayClass` 重命名为 `OverlayClassName`，继承自`Overlay`
- `closeOnClickOverlay` 重命名为 `closeOnOverlayClick`
- `onOpened` 和 `onClosed` 改为 `afterShow` 和 `afterClose`，继承自`Overlay`，用于完全关闭后触发的回调和完全展示后触发的回调 
- `destroyOnClose` 的描述进行了修订，改为：“组件不可见时，卸载内容”，并把其默认值改为了`false`
- `onClickCloseIcon` 和 `onClickOverlay` 两个方法，增加布尔判断，如返回false 或 未定义返回值时，将不再关闭 Popup；默认值为true；在demo中已增加相应示例

### 布局组件
#### Divider
- 删除 `dashed`, 通过 style 属性实现
- 删除 `hairline`, 默认为true
#### Grid
#### Layout
#### Sticky
- 删除 top 和 bottom，改为 threshold
### 导航组件
#### Elevator
- `acceptKey` 重命名为 `floorKey`
- `indexList` 重命名为 `list`
- `isSticky` 重命名为 `sticky`
- 新增`showKeys`, 是否展示右侧导航
#### FixedNav
- 删除 fixednavClass，通过 className 实现
- unActiveText 重命名为 inactiveText
- navList 重命名为 list
- slotBtn 重命名为 content
- 删除 slotList，通过 children 实现
- onSelected 重命名为 onSelect
#### Indicator
- 删除 `block`，暴露自定义节点
- 删除 `align`，暴露自定义节点
- 删除 `vertical`，改为 `direction`，默认值为 `horizontal`，可选 `vertical` 
- 删除 `fillZero`，暴露自定义节点
- 删除 `size`， 改为 `total`
- 增加非数字展示，并设置为默认状态
#### Menu
- 删除 fontClassName
- 删除 iconClassPrefix
- closeOnClickOverlay 重命名为 closeOnOverlayClick
- titleIcon 重命名为 icon
- optionsIcon 重命名为 icon
- 增加 closeOnClickAway
#### NavBar
- 删除`title`, 改为`children`实现
- 删除`desc`, 改为`right`, 类型为 `React.Node` 类型
- 增加 `left`，改为 `React.Node` 类型
- 删除`leftText` `leftShow`, 改为`back`, 类型为 `React.Node` 
- `safeAreaInsetTop`重命名为 `safeArea`
- 删除`border` 
- 删除 `onClickTitle` `onClickRight` `onClickIcon`, 暴露自定义节点, demo示例展示
#### Pagination
- modelValue 改为 value，受控值
- 增加 defaultValue 非受控值
- prevText 重命名为 prev，改为 ReactNode
- nextText 重命名为 next，改为 ReactNode
- forceEllipses 重命令为 ellipse
- showPageSize 重命名为 itemSize
- itemsPerpage 重命名为 pageSize
- totalitems 重命名为 total
- pageNodeRender 重命名为 itemRender
- 移除 pageCount，通过 total 与 pageSize 实现
#### SideNavBar
#### Tabbar
- unactiveColor 重命名为 inactiveColor
- tabTitle 重命名为 title，改为 ReactNode
- icon 类型改为 ReactNode，移除其他 icon 关联属性
- bottom 重命名为 fixed
- safeAreaInsetBottom 重命名为 safeArea
- visible 重命名为 defaultValue，非受控
- activeVisible 重命名为 value，受控
- 移除 num，支持传入所有 Badge Props
- TabbarItem 使用方式修改为 Tabbar.Item
- 移除 href，通过 onSwitch 事件控制链接与路由跳转
#### Tabs
- 删除 background，通过 className 或 style 控制
- 删除 titleScroll
- 删除 ellipsis，默认 flex：1
- 删除 size，通过 css 变量 --nutui-tabs-titles-item-font-size 实现
- animatedTime 重命名为 duration
- titleGutter 重命名为 css 样式变量实现
- titleNode 重命名为 title
- color 重命名为 activeColor
- type 重命名为 activeType
- leftAlign 重命名为 align
- onClick 类型改为 (index: string | number) => void
- onChange 类型改为 (index: string | number) => void
- 增加 defaultValue
#### Tabs.Tabpane
- paneKey 重命名为 value
### 数据录入
#### Calendar
#### Cascader
- 新增 `defaultValue`，其中 `defaultValue` 用于非受控，原 `value` 用于受控。两者的类型都改为 `(number | string | undefined)[]`
- `checkedIcon` 重命名为 `activeIcon`
- `poppable` 重命名为 `popup`
- `lazyLoad` 重命名为 `onLoad`，当启动懒加载 `lazy` 时，动态加载数据
- `convertConfig` 重命名为 `format`，配置转换规则
- 合并 `textKey` `valueKey` `childrenKey` 三个属性为对象属性 `optionKey`
- 删除 `tabsColor`， 该属性为设置 `Tabs` 当前选中的 `tab` 的下划线色值，但该值最好与文字部分搭配使用，统一处理 CSS 变量。

#### Checkbox
- 新增 defaultChecked，用于非受控，checked 用于受控
- 新增 value，用于 group 模式 
- textPosition 重命名为 labelPosition
- iconName 重命名为 icon，类型为 ReactNode
- iconAcitveName 重命名为 activeIcon
- iconIndeterminateName 重命名为 iconIndeterminateIcon
- 移除 iconSize
#### Checkbox.Group
- 新增 defaultValue，用于非受控，value 用于受控
- textPosition 重命名为 labelPosition
- toggleAll 重命名为 toggle
- toggleReverse 重命名为 reverse
#### DatePicker
- 因为依赖组件`Picker`的变更，方法 `onConfirmDatePicker`、`onChange`的参数进行了调整，从`(selectedValue, selectedOptions)` 改为 `(selectedOptions, selectedValue)`。
#### Form
#### Input
#### InputNumber
- 增加 `allowEmpty`, 是否允许内容为空
- 优化新增 `value`和 `defaultValue` , 增加默认值和受控
- `decimalPlaces` 重命名为 `digits`
- `isAsync` 重命名为 `async`
- 删除 `inputWidth` 和 `buttonSize`, 通过css变量实现
- 新增taro的`formatter`属性开发
#### NumberKeyboard
- randomKeys 重命名为 random
- customKey 重命名为 custom
- title 类型变更为 ReactNode
- 新增 onConfirm 事件
- 移除 popClass 定义，默认支持透传 Popup 属性
#### Picker
- `isVisible` 重命名为 `visible`
- `listData` 重命名为 `options`
- `defaultValueData` 重命名为 `defaultValue`
- 增加受控 `value`
- `swipeDuration` 重命名为 `duration`
- `onCloseUpdate` 重命名为 `afterClose`
- 方法 `onConfirm`、`onClose`、`afterClose`、`onChange`的参数进行了调整，从`(selectedValue, selectedOptions)` 改为 `(selectedOptions, selectedValue)`。
#### Radio
- 移除 iconSize，可通过 Icon 的 css 变量设置
- iconName 重命名为 icon，类型修改为 ReactNode
- 增加 labelPosition，用于设置 label 的位置
- 增加 checked 和 defaultChecked ，用于受控和非受控
- onChange 类型修改为 `(checked: boolean) => void`
### Radio.Group
- textPosition 重命名为 labelPosition 
- 增加 defaultValue ，用于非受控
- onChange 类型修改为 `(value: string| number) => void`
#### Range
- maxDesc 重命名为 maxDescription，类型改为 ReactNode
- minDesc 重命名为 minDescription，类型改为 ReactNode
- curValueDesc 重命名为 currentDescription，类型改为 (value) => ReactNode
- 移除 hiddenRange，通过 max/minDescription 传 null 实现
- 移除 hiddenTag，通过 currentDescription 传 null 实现
- 移除 activeColor、inactiveColor、buttonColor，通过 css 变量实现
- onDragStart 重命名为 onStart
- onDragEnd 重命名为 onEnd
- modelValue 重命为 value，增加 defaultValue 非受控方式
#### Rate
- minimizeValue 重命名为 min
- readonly 重命名为 readOnly
- 删除 spacing，通过 css 样式变量实现
- 移除 activeColor、voidColor、iconSize，通过 checkedIcon、uncheckedIcon 实现
- 增加受控 value 与非受控 defaultValue，移除 modelValue
#### SearchBar
#### ShortPassword
#### TextArea
- maxlength 重命名为 maxLength
- readonly 重命名为 readOnly
- limitShow 重命名为 showCount
- autosize 重命名为 autoSize
- 移除 textAlign，可通过 style 传入
- defaultValue 改为非受控，增加受控值 value
#### Uploader

- `maximize` 重命名为 `maxFileSize`
- `maximum` 重命名为 `maxCount`
- `listType ` 重命名为 `previewType`
- `isDeletable ` 重命名为 `deletable`
- `isPreview` 重命名为 ` preview`
- `defaultImg` 重命名为 ` previewUrl`
- `defaultFileList` 重命名为 ` defaultValue`
- `uploadIconTip` 重命名为 `uploadLabel`
- `onBeforeUpload` 重命名为 `beforeUpload`
- `onBeforeXhrUpload` 重命名为 `beforeXhrUpload`
- `onBeforeDelete` 重命名为 `beforeDelete`
- `onRemove` 重命名为 `onDelete`
- 增加 `imageFit`, 用于图片填充模式
- 增加 `value`, 用于受控传值
- 删除 `uploadIconSize`, 通过自定义icon来实现


### 操作反馈
#### ActionSheet
#### BackTop
- elId 重命名为 target
- 移除 right、bottom，通过 style 传入，增加支持 left、top
- distance 重命名为 threshold
- 移除 isAnimation，通过 duration 设置 0 实现无动画效果
#### Dialog
- 修改 okText 为 confirmText，规范命名。
- 修改 mask 为 overlay，组件库中统一使用 Overlay 组件作为遮罩层，并使用 overlay 作为是否展示遮罩层的属性值。
- 修改 closeOnClickOverlay 为 closeOnOverlayClick，组件库统一到该属性。
- 修改 noOkBtn 为 hideConfirmButton，初始值不变，依然表示是否隐藏确认按钮，主要是为了语义化更强。
- 修改 noCancelBtn 为 hideCancelButton，初始值不变，依然表示是否隐藏取消按钮，主要是为了语义化更强。
- 修改 okBtnDisabled 为 disableConfirmButton，初始值不变，依然表示是否禁用确认按钮，主要是为了语义化更强。
- 删除 noFooter，使用 footer 统一处理，当 footer 为空时，及可替代该值。目前 noFooter 也需要手动声明是否为 noFooter；修改后需手动指出 footer={null}
- 删除 textAlign，改用样式变量 --nutui-dialog-content-text-align 或 SCSS 变量 $dialog-content-text-align 控制，默认值为 center。
- 删除 `cancelAutoClose`，改为 `beforeCancel` 和 `beforeClose` 来实现，在点击关闭或取消时，可先触发这两个方法，以确定是否要关闭弹框，如返回true，则关闭；否则不关闭。
- 修改 onOk 为 onConfirm，规范命名。
- 修改 onClosed 为 onClose，规范命名，关闭时触发。
- 修改 onClickSelf 为 onClick，语义不变，仍表示点击弹框自身时触发事件。
- 增加 overlayStyle 和 overlayClassName，用来配置 Overlay 组件样式。
- 增加 onClickOverlay，支持点击overlay时，触发事件。

#### Drag
#### Infiniteloading
#### Notify
- 删除 `color` 和 `background`, 通过css变量实现
- 修改 onClosed 为 onClose，规范命名，关闭时触发。
#### PullToRefresh
#### Swipe

- 移除 `leftWidth` ，通过 `leftAction` 实现
- 移除 `rightWidth` ，通过 `rightAction` 实现

#### Switch
- 删除 `isAsync`, 优化新增 `checked`和 `defaultChecked` , 增加默认值和受控
- 删除 `activeColor` 和 `inactiveColor`, 通过css变量实现
#### Toast

### 展示组件
#### Animate
- `className` 属性通过继承实现
- `style` 属性通过继承实现
#### AnimatingNumbers
#### Audio
- url 重命名为 src
- autoplay 重命名为 autoPlay
- onFastBack 重命名为 onBack
- onPlayEnd 重命名为 onEnd
#### Avatar
- Avatar `url` 重命名为 `src`
- Avatar `onActiveAvatar` 重命名为 `onClick`
- AvatarGroup `maxCount` 重命名为 `max`
- AvatarGroup `span` 重命名为 `gap`
- AvatarGroup `zIndex` 重命名为 `level`
- 新增fit属性，图片填充模式
- 图片加兜底
#### Badge
- 删除zIndex，目前没有用到，也不生效，直接去掉。
- 删除icon，自定义icon可放在 value 中实现，扩充了value的类型。
- 修改 max 的最大值为99（之前为10000），比较贴合实际场景。
- 主题定制的css变量中，去掉和dot有关的其他值，只保留 width。其他值由width计算而来。

#### CircleProgress
- h5
  - `progress` 重命名为 `percent`
  - `strokeWidth` 改用 css变量控制
  - `circleColor` 重名为 `color`
  - `pathColor` 改用 css变量控制

- taro
  - `progress` 重命名为 `percent`
  - `circleColor` 重名为 `color`
  - `pathColor` 重名为 `background`
#### Collapse
#### CountDown
#### Ellipsis
- 新增className和style属性的支持
- 优化H5的代码，去掉useEffect渲染改用useLayoutEffect
#### Empty
- 新增status属性,默认图片错误类型
- 优化代码逻辑，包括status和image的逻辑，渲染问题修复以及文档优化
- 1）渲染问题修复：之前的description的ReactNode节点存在引入错误，导致传入元素标签失效，2.0版本进行了一个修复。
- 2）代码逻辑优化：因新增status属性，对一些无用的代码进行了一个精简优化
#### ImagePreview
- paginationVisible 重命名为 indicator
#### NoticeBar
#### Popover

#### Price

- `decimalDigits` 重命名为 `digits`
- 删除`needSymbol`, 利用 `symbol` 判断是否需要加上 symbol 符号
- 增加`line`, 用于划线价展示
  
#### Progress
- percentage 重命名为 percent，受控
- 移除 isShowPercentage，可以自定义传入文案
- 移除 textWidth，可以自定义传入内容的宽度
- strokeColor 重命名为 color
- fillColor 重命名为 background
- 移除 size，通过 strokeWidth、css 变量实现尺寸自定义
- status 重命名为 animated，表示是否展示动画效果
- 移除 textBackground，通过 css 实现
- 移除 textColor，通过 css 实现
- 移除 textInside，仅保留内显功能
- 移除 textType、icon，通过 children 传入自定义 ReactNode，不再区分类型
- 新增 lazy 属性，支持每次进入可视区时展示进度条动画
- 新增 delay 属性，表示延迟数据加载时长
#### Skeleton
#### Steps
- current 重命名为 value
- onClickStep 重命名为 onStepClick
- progressDot 重命名为 dot
#### Step
- 移除 iconColor，可通过 icon 属性传入自定义 icon 或借助 CSS Variables 修改 icon 颜色
- 移除 size，可通过 icon 属性传入自定义 icon 或借助 CSS Variables 修改 icon 大小
- 移除 renderContent ，可通过 description 实现
- title 类型修改为 ReactNode
- content 重命名为 description，类型改为 ReactNode
- icon 类型修改为 ReactNode
- activeIndex 重命名为 value
#### Swiper
- h5
  - 移除 paginationColor，通过 indicator 的 CSS 变量控制
  - 移除 paginationBgColor，通过 indicator 的 CSS 变量控制
  - 移除 pageContent，通过 indicator 实现
  - autoplay 重命名为 autoplay
  - initPage 重命名为 defaultValue
  - paginationVisible 重命名为 indicator，类型改为 ReactNode
  - isPreventDefault 重命名为 preventDefault
  - isStopPropagation 重命名为 stopPropagation
  - isCenter 重命名为 center
- taro
  - 通过封装 Taro 的 Swiper 和 SwiperItem 实现，支持的属性可参考 Taro Swiper 文档。 
#### Table
- `onSorter` 重命名为 `onSort`
- 合并 `summary` 与 `noData` 的样式处理
#### Tag
#### TrendArrow
#### Video
#### VirtualList
#### WaterMark

### 特色组件
#### Address
#### Barrage
#### Card
#### Signature
#### TimeSelect
