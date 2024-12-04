# Uploader 上傳

用於將本地的圖片或文件上傳至服務器。

## 引入

```tsx
import { Uploader } from '@nutui/nutui-react'
```

## 示例代碼

### 基礎用法

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### 上傳狀態

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### 限製上傳數量

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### 限製上傳大小

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### 自定義上傳前的處理

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### 禁用狀態

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### 自定義刪除icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### 直接調起攝像頭（移動端生效）

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### 選中文件後，通過按鈕手動執行上傳

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### 基礎用法-上傳列表展示

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

## Uploader

### Props

| 字段 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| autoUpload | 是否在選取文件後立即進行上傳，false 時需要手動執行 ref submit 方法進行上傳 | `boolean` | `true` |
| upload | 上傳方法，入參是需要被上傳的文件對象，經過異步處理之後，返回上傳結果 | `(file: File) => Promise<FileItem>` | `-` |
| name | `input` 標簽 `name` 的名稱，發到後臺的文件參數名 | `string` | `file` |
| defaultValue | 默認已經上傳的文件列表 | `FileItem[]` | `[]` |
| value | 已經上傳的文件列表 | `FileItem[]` | `-` |
| preview | 是否上傳成功後展示預覽圖 | `boolean` | `true` |
| previewUrl | 當上傳非圖片('image')格式的默認圖片地址 | `string` | `-` |
| deletable | 是否展示刪除按鈕 | `boolean` | `true` |
| method | 上傳請求的 http method | `string` | `post` |
| previewType | 上傳列表的內建樣式，支持兩種基本樣式 picture、list | `string` | `picture` |
| capture | 圖片[選取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture")，直接調起攝像頭 | `string` | `false` |
| maxFileSize | 可以設定最大上傳文件的大小（字節） | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | 文件上傳數量限製 | `number` \| `string` | `1` |
| fit | 圖片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | 是否需要清空`input`內容，設為`true`支持重復選擇上傳同一個文件 | `boolean` | `true` |
| accept | 允許上傳的文件類型，[詳細說明]("https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B") | `string` | `*` |
| uploadIcon | 上傳區域<a href="#/zh-CN/icon">圖標名稱</a> | `React.ReactNode` | `-` |
| deleteIcon | 刪除區域的圖標名稱 | `React.ReactNode` | `-` |
| uploadLabel | 上傳區域圖片下方文字 | `React.ReactNode` | `-` |
| multiple | 是否支持文件多選 | `boolean` | `false` |
| disabled | 是否禁用文件上傳 | `boolean` | `false` |
| beforeUpload | 上傳前的函數需要返回一個`Promise`對象 | `(file: File[]) => Promise<File[] \| boolean>` | `-` |
| beforeDelete | 除文件時的回調，返回值為 false 時不移除。支持返回一個 `Promise` 對象，`Promise` 對象 resolve(false) 或 reject 時不移除 | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onOversize | 文件大小超過限製時觸發 | `(file: File[]) => void` | `-` |
| onOverCount | 文件數量超過限製時觸發 | `(count: number) => void` | `-` |
| onChange | 已上傳的文件列表變化時觸發 | `(files: FileItem[]) => void` | `-` |
| onDelete | 點擊刪除文件時觸發 | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | 文件上傳成功後點擊觸發 | `(file: FileItem, index: number) => void` | `-` |
| onUploadQueueChange | 圖片上傳隊列變化時觸發 | `(tasks: FileItem[]) => void` | `-` |

> 註意：accept、capture 和 multiple 為瀏覽器 input 標簽的原生屬性，移動端各種機型對這些屬性的支持程度有所差異，因此在不同機型和 WebView 下可能出現一些兼容性問題。

### FileItem

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| status | 文件狀態值，可選'ready,uploading,success,error' | `ready` |
| uid | 文件的唯一標識 | `-` |
| name | 文件名稱 | `-` |
| url | 文件路徑 | `-` |
| type | 文件類型 | `image` |
| loadingIcon | 加載圖標 | `-` |
| failIcon | 加載失敗圖標 | `-` |
| percentage | 上傳進度條百分比 | `-` |

### Methods

通過ref可以獲取到 Uploader 實例並調用實例方法

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| submit | 手動上傳模式，執行上傳操作 | `-` | `-` |
| clear | 清空已選擇的文件隊列（該方法一般配合在手動模式上傳時使用） | `index` | `-` |

## 主題定製

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-uploader-image-width | 上傳圖片的寬度 | `100px` |
| \--nutui-uploader-image-height | 上傳圖片的高度 | `100px` |
| \--nutui-uploader-image-border | 上傳圖片的border值 | `0px` |
| \--nutui-uploader-image-border-radius | 上傳圖片的border圓角 | `4px` |
| \--nutui-uploader-background | 上傳圖片的背景顏色 | `$color-background` |
| \--nutui-uploader-background-disabled | 上傳圖片禁用狀態的背景顏色 | `$color-background` |
| \--nutui-uploader-image-icon-tip-font-size | 上傳區域圖片下方文字大小 | `12px` |
| \--nutui-uploader-image-icon-tip-color | 上傳區域圖片下方文字顏色 | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | 上傳區域預覽進度的背景顏色 | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | 上傳區域預覽margin-right的值 | `10px` |
| \--nutui-uploader-preview-margin-bottom | 上傳區域預覽margin-bottom的值 | `10px` |
| \--nutui-uploader-preview-tips-height | 上傳圖片預覽tips下的高度 | `24px` |
| \--nutui-uploader-preview-tips-background | 上傳圖片預覽tips下的背景顏色 | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | 上傳圖片預覽tips下的padding值 | `0 5px` |
| \--nutui-uploader-preview-close-right | 上傳圖片關閉按鈕的right值 | `0px` |
| \--nutui-uploader-preview-close-top | 上傳圖片關閉按鈕的top值 | `0px` |
