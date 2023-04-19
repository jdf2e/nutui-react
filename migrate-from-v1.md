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
- 增加 afterClose和afterShow，用于完全关闭后触发的回调和完全展示后触发的回调
- 完善overlay的demo示例
#### Popup

### 布局组件
#### Divider
- 删除 `dashed`, 通过 style 属性实现
- 删除 `hairline`, 默认为true
- `styles` 重命名为 `style`
#### Grid
#### Layout
#### Sticky
- 删除 top 和 bottom，改为 threshold
### 导航组件
#### Elevator
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
#### NavBar
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
#### Tabs

### 数据录入
#### Calendar
#### Cascader
#### Checkbox
#### DatePicker
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
#### Picker
#### Radio
#### Range
#### Rate
- minimizeValue 重命名为 min
- readonly 重命名为 readOnly
- 删除 spacing，通过 css 样式变量实现
- 移除 activeColor、voidColor、iconSize，通过 checkedIcon、uncheckedIcon 实现
- 增加受控 value 与非受控 defaultValue，移除 modelValue
#### SearchBar
#### ShortPassword
#### TextArea
#### Uploader

### 操作反馈
#### ActionSheet
#### BackTop
- elId 重命名为 target
- 移除 right、bottom，通过 style 传入，增加支持 left、top
- distance 重命名为 threshold
- 移除 isAnimation，通过 duration 设置 0 实现无动画效果
#### Dialog
#### Drag
#### Infiniteloading
#### Notify
#### PullToRefresh
#### Swipe
#### Switch
#### Toast

### 展示组件
#### Animate
#### AnimatingNumbers
#### Audio
#### Avatar
#### Badge
#### CircleProgress
#### Collapse
#### CountDown
#### Ellipsis
#### Empty
#### ImagePreview
#### NoticeBar
#### Popover
#### Price
#### Progress
#### Skeleton
#### Steps
#### Swiper
#### Table
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
