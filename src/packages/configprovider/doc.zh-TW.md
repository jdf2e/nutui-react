# ConfigProvider 全域配置

用於全域配置 NutUI-React 元件，提供主題定製，國際化支援。

## 引入

```tsx
import { ConfigProvider } from '@nutui/nutui-react'
```

## 示例代碼

### 主題定製

NutUI-React 可以通過 \[CSS 變數\]（<https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using\_CSS\_custom\_properties）> 來組織樣式，通過覆蓋這些 CSS 變數，可以實現定製主題、動態切換主題等效果。

#### 通過 CSS 覆蓋

你可以直接在代碼中覆蓋這些 CSS 變數，Button 元件的樣式會隨之發生改變：

> 小程式不存在 '：root' 元素，只能在page根元素裡覆蓋 CSS 變數。

```css
/* 添加這段樣式后，Primary Button 會變成綠色 */
:root {
  --nutui-color-primary: green;
  --nutui-color-primary-stop1: green;
  --nutui-color-primary-stop2: green;
}
```

> @nutui/nutui-react 中帶了兩個主題檔 默認主題：@nutui/nutui-react/dist/styles/theme-default.scss; 暗黑主題：@nutui/nutui-react/dist/styles/theme-dark.scss; 如果想使用暗黑主題，可以在專案中導入暗黑主題檔。

#### 通過 ConfigProvider 覆蓋

ConfigProvider 元件提供了覆蓋 CSS 變數的能力，你需要在根節點包裹一個 ConfigProvider 元件，並通過 theme 屬性來配置一些主題變數。

> ConfigProvider 組件不是一個虛擬組件，它會生成一個 div 標簽。

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

:::demo

<CodeBlock src='taro/demo2.tsx'></CodeBlock>

:::

#### CSS 變數

NutUI-React 支援的 CSS 變數如下：

```css
:root,
page {
  --nutui-color-primary: #fa2c19;
  // 主要內容用色，常用語常規標題內容、細文流覽、常規按鈕文字以及圖表引導。
  --nutui-gray-7: #1a1a1a;
  // 次要文字色，用於次級標題、屬性標示、非主要信息引導等。
  --nutui-black-10: #757575;
  // 不可操作內容色，用於預置內容、無效內容、特殊不可點擊按鈕、元件邊框線等。
  --nutui-gray-6: #bfbfbf;
  // 頁面基底色，用於卡片式頁面的兜底，永遠置於頁面最底層。
  --nutui-gray-5: #f4f4f4;
  // 卡片內嵌背景色，用於卡片內部的資訊包裹，感知較弱。
  --nutui-gray-4: #f8f8f8;
  // 卡片背景色。
  --nutui-black-3: #ffffff;
  // 頁面全域蒙層，用於彈出層、彈窗、新功能引導出現的整頁遮罩。
  --nutui-gray-3: rgba(0, 0, 0, 0.7);
  // 局部蒙層，用於非整頁遮罩。
  --nutui-gray-2: rgba(0, 0, 0, 0.4);
  // 間隔線/容錯線，用於結構或資訊分割。
  --nutui-black-2: rgba(0, 0, 0, 0.08);
  // 圖片容錯蒙層。
  --nutui-gray-1: rgba(0, 0, 0, 0.02);
}

```

### 國際化

NutUI-React 提供了 ConfigProvider 元件用於全域配置國際化文案。 目前支援以下語言：

- 簡體中文 | zh-CN
- 繁體中文（中國臺灣） | zh-TW
- 維吾爾文 | zh-UG
- 英語（美式） | en-US
- 印尼語 | id-ID

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

:::demo

<CodeBlock src='taro/demo4.tsx'></CodeBlock>

:::

### RTL

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 增加語言包

如果你找不到你需要的語言包，歡迎你在 \[英文語言包\]（） 的基礎上創建一個新的語言包，並給我們發一個 Pull Request。

## ConfigProvider

### Props

| 屬性 | 說明 | 類型 | 預設值 |
| --- | --- | --- | --- |
| locale | 設置多語言包 | `BaseLang` | zhCN |
| theme | 設置主題 | `Record<string, string>` | \- |
