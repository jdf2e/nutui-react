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
#### Popup

### 布局组件
#### Divider
#### Grid
#### Layout
#### Sticky

### 导航组件
#### Elevator
#### FixedNav
#### Indicator
#### Menu
#### NavBar
#### Pagination
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
#### NumberKeyboard
#### Picker
#### Radio
#### Range
#### Rate
#### SearchBar
#### ShortPassword
#### TextArea
#### Uploader

### 操作反馈
#### ActionSheet
#### BackTop
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
