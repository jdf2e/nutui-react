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
- modelValue 改为 current，受控值
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