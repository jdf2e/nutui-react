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
