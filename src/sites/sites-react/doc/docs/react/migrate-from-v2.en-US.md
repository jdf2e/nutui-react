# Upgrade from v2 to v3

This document will assist you in upgrading from NutUI React 2.x to NutUI React 3.x.

## Upgrade Steps

1. H5 Installation of NutUI React 3.x Version

```shell
npm install @nutui/nutui-react
```

2. Taro Installation of NutUI React 3.x Version

```shell
npm install @nutui/nutui-react-taro
```

3. Handling Incompatible Updates

There are some incompatible updates from NutUI React 2.x to NutUI React 3.x. It is essential to carefully read the details of the incompatible updates and address them sequentially.

4. Theme variable renaming:

## Compatible updates

1. Component Style Handling

Support for on-demand importing of CSS files has been added, while retaining the ability to import SCSS files on demand. On-demand CSS importing can be achieved using the babel-import-plugin:

The H5 configuration is as follows:

```json
// Webpack .babelrc or babel.config.js
plugins: [
  [
    "import",
    {
      libraryName: "@nutui/nutui-react",
      libraryDirectory: "dist/esm",
      style: 'css',
      camel2DashComponentName: false,
      "customName": (name, file) => {
        return `@nutui/nutui-react/dist/es/packages/${name.toLowerCase()}`
      }
    },
    "nutui-react",
  ]
]
```

Taro config：

```json
// Webpack .babelrc or babel.config.js
plugins: [
  [
    "import",
    {
      libraryName: "@nutui/nutui-react-taro",
      libraryDirectory: "dist/esm",
      style: 'css',
      camel2DashComponentName: false,
      "customName": (name, file) => {
        return `@nutui/nutui-react-taro/dist/es/packages/${name.toLowerCase()}`
      }
    },
    "nutui-react-taro",
  ]
]
```

## New Components

- SideBar
- PickerView

## Incompatible Updates

If your project uses these components, please read the documentation carefully and proceed with the upgrade.

## Component API Adjustments

### Basic

#### Button

- Removed style variable `--nutui-button-default-font-weight`

[//]: # '#### Cell'
[//]: # '#### CellGroup'
[//]: # '#### ConfigProvider'
[//]: # '#### Icon'
[//]: # '#### Image'
[//]: # '#### Overlay'
[//]: # '#### Popup'

### Layout

[//]: # '#### Divider'

#### Grid

- The default value of the square attribute has been adjusted to true.
- Added new theme variables.
  - `--nutui-grid-border-width` Control border width.
  - `--nutui-grid-border-radius` Control corner radius.
  -

[//]: # '#### Layout'
[//]: # '#### Sticky'

### Navigation

[//]: # '#### Elevator'
[//]: # '#### FixedNav'

#### Indicator

- Added a new type attribute with optional values of 'anchor' or 'slide', defaulting to anchor.
- Added a new color attribute with optional values of primary or 'white', defaulting to primary.
- The default value of the total attribute has been adjusted to 2.

[//]: # '#### Menu'

#### NavBar

- Removed the titleAlign attribute; it can be replaced with title and children.
- Added a title attribute, which is displayed centered by default.
- If children is present in the component, it will adopt the left alignment layout specified by titleAlign.

#### Pagination

- The type of the itemRender attribute has been adjusted to: (page: any, index: number) => ReactNode.

#### SideNavBar

- Note: This component does not comply with mobile standards and has been deprecated. Please use SideBar instead.

[//]: # '#### Tabbar'
[//]: # '#### TabbarItem'
[//]: # '#### Tabs'
[//]: # '#### Tabs.Tabpane'

### Data

[//]: # '#### Calendar'

#### Cascader

- The lazy property indicates that automatic data loading is enabled. The Cascader internally implements the logic for automatic data loading through value and onLoad. The lazy property must be set together with the onLoad property.
- The data type returned by the onLoad method is CascaderOption[], which by default supports promises.
- Remove the built-in tree structure.
  [//]: # '#### Checkbox'
  [//]: # '#### Checkbox.Group'
  [//]: # '#### DatePicker'
  [//]: # '#### Form'
  [//]: # '#### Form.Item'
  [//]: # '#### Input'

#### InputNumber

- Remove async, which can be replaced by beforeChange
- Add beforeChange to handle asynchronous calls
  [//]: # '#### NumberKeyboard'
  [//]: # '#### Picker'
  [//]: # '#### Radio'
  [//]: # '### Radio.Group'
  [//]: # '#### Range'

#### Rate

- Added a size attribute to control the size of the icon.
- Added a showScore attribute to display the rating text.

[//]: # '#### SearchBar'
[//]: # '#### ShortPassword'

#### TextArea

- Added a plain attribute to mark it as a plain text type. The default value is false, indicating it is a container type.
- Added a status attribute, with possible values of default | error, to define the state of the input box.
- Removed some basic style variables and recommended using foundational style variables, such as $textarea-font, $textarea-limit-color, and $textarea-disabled-color.

#### Uploader

- Removed internal handling of AJAX-related network logic in the component.
- Removed network configuration-related props: url, headers, data, xhrState, withCredentials, and timeout.
- Removed trigger functions related props: onStart, onProgress, onFailure, and beforeXhrUpload.
- Added the onOverCount attribute to trigger when the file count exceeds the limit.
- Added the onUploadQueueChange attribute to trigger when the image upload queue changes.
- Simplified the use of the FileItem type, making all attributes optional except for url.
- Adjusted the default value of the maxCount attribute in multi-select mode to Number.MAX_VALUE.
- Introduced a new upload method.
- Changed the types of defaultValue and value from FileType to FileItem.
- listUploadRender allows customizing the upload area in list mode.

### Feedback

[//]: # '#### ActionSheet'

#### BackTop

- Taro
  - Provided HarmonyOS capabilities by adding the scrollRes attribute.

#### Dialog

- Modified the layout style of the operation buttons to have a vertical arrangement.
- When there is only one main action button, its style expands to fill the available space.
- Added style variables for setting the size of bottom icons; changed the default value of the right-side button to 16 px.

[//]: # '#### Drag'

#### InfiniteLoading

- The target attribute is used to obtain the element that is being listened to.

[//]: # '#### Notify'
[//]: # '#### PullToRefresh'
[//]: # '#### Swipe'

#### Switch

- Changed the type of the activeText attribute to ReactNode.
- Changed the type of the inactiveText attribute to ReactNode.

[//]: # '#### Toast'

[//]: ### 展示组件

[//]: # '#### Animate'
[//]: # '#### AnimatingNumbers'

#### Audio

- Note: This component is not planned to be supported on Taro multi-end. Please use the API instead.

[//]: # '#### Avatar'
[//]: # '#### AvatarGroup'

#### Badge

- Added a new size attribute for the dot size, which takes effect when dot is set to true.
- Removed the color attribute (badge background color) and implemented it using the CSS variable --nutui-badge-background-color.

[//]: # '#### CircleProgress'
[//]: # '#### Collapse'
[//]: # '#### CollapseItem'

#### CountDown

- Added a new type attribute to set the variant type.

[//]: # '#### Ellipsis'

#### Empty

- Removed the theme variable --nutui-empty-title-margin-top.
- Removed the theme variable --nutui-empty-description-margin-top.

[//]: # '#### ImagePreview'
[//]: # '#### NoticeBar'

#### Popover

- Deprecated style variables that existed in the documentation have been removed, `--nutui-popover-hover-background-color`、`--nutui-popover-hover-text-color`、`--nutui-popover-border-color`
- Changed style variable, `--nutui-popover-menu-item-padding` -> `--nutui-popover-padding`，`--nutui-popover-menu-item-width` -> `--nutui-popover-item-width`
- Revised the data type for `location` to use a unified position type `FullPosition`

#### Price

- Modified the size attribute to include an 'xlarge' option.
- Added a new color attribute for price types.

[//]: # '#### Progress'

#### Skeleton

- Removed `avatar` attribute, can be simulated using `width` and `height` attributes
- Removed `avatarShape` attribute, can be set using the `shape` attribute
- Removed `avatarSize` attribute
- Added `width` attribute to control width
- Added `height` attribute to control height
- Added `duration` attribute to control animation duration
- Added `size` attribute to select from built-in component heights

  [//]: # '#### Steps'
  [//]: # '#### Step'

#### Swiper

- Changed `autoPlay` to `autoplay`

  [//]: # '#### Table'
  [//]: # '#### Tag'
  [//]: # '#### TrendArrow'
  [//]: # '#### Video'
  [//]: # '#### VirtualList'
  [//]: # '#### WaterMark'
  [//]: # '### 特色组件'
  [//]: # '#### Address'
  [//]: # '#### Barrage'
  [//]: # '#### Card'
  [//]: # '#### Signature'
  [//]: # '#### TimeSelect'
