# Uploader 上傳

### 介紹

用於將本地的圖片或文件上傳至服務器。

### 安裝

``` ts
import { Uploader } from '@nutui/nutui-react';
```
### 基本用法

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start 觸發')
  }
  return (
    <>
      <h2>基本用法</h2>
      <Uploader url={uploadUrl} start={onStart} />
    </>
  )
}
export default App;
```
:::

### 自定義上傳樣式

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>自定義上傳樣式</h2>
      <Uploader url={uploadUrl}>
        <Button type="primary" icon="uploader">
          上傳文件
        </Button>
      </Uploader>
    </>
  )
}
export default App;
```
:::

### 直接調起攝像頭（移動端生效）

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>直接調起攝像頭（移動端生效）</h2>
      <Uploader capture url={uploadUrl} />
    </>
  )
}
export default App;
```
:::

### 上傳狀態

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log('delete 事件觸發', file, fileList)
  }
  return (
    <>
      <h2>上傳狀態</h2>
      <Uploader url={uploadUrl} multiple removeImage={onDelete} />
    </>
  )
}
export default App;
```
:::


### 限制上傳數量5個

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>限制上傳數量5個</h2>
      <Uploader url={uploadUrl} multiple maximum="5" />
    </>
  )
}
export default App;
```
:::

### 限制上傳大小（每個文件最大不超過 50kb，也可以在beforeupload中自行處理）

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('oversize 觸發 文件大小不能超過 50kb', files)
  }
  return (
    <>
      <h2>限制上傳大小（每個文件最大不超過 50kb）</h2>
      <Uploader url={uploadUrl} multiple maximize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```
:::


### 自定義 FormData headers

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const formData = {
    custom: 'test',
  }
  return (
    <>
      <h2>自定義 FormData headers</h2>
      <Uploader
        url={uploadUrl}
        data={formData}
        headers={formData}
        withCredentials
       />
    </>
  )
}
export default App;
```
:::

### 手動上傳

:::demo
``` tsx
import React, { useState, useRef } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const uploadRef = useRef(null)
  const submitUpload = () => {
    uploadRef.current.submit()
  }
  return (
    <>
      <h2>手動上傳</h2>
      <Uploader url={uploadUrl} maximum="5" autoUpload={false} ref={uploadRef} />
      <br />
      <Button type="success" size="small" onClick={submitUpload}>
        執行上傳
      </Button>
    </>
  )
}
export default App;
```
:::

### 禁用狀態

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <h2>禁用狀態</h2>
      <Uploader disabled />
    </>
  )
}
export default App;
```
:::

### Prop

| 字段              | 說明                                                                                                                                                                                   | 類型                              | 默認值           |
|-------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------|------------------|
| name              | `input` 標籤 `name` 的名稱，發到後台的文件參數名                                                                                                                                       | String                            | "file"           |
| url               | 上傳服務器的接口地址                                                                                                                                                                   | String                            | -                |
| isPreview        | 是否上傳成功後展示預覽圖                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | 當上傳非圖片('image')格式的默認圖片地址                                                                                                                                                               | String                           | ''             |
| isDeletable      | 是否展示刪除按鈕                                                                                                                                                                       | Boolean                           | true             |
| method            | 上傳請求的 http method                                                                                                                                                                 | String                            | "post"           |
| capture           | 圖片[選取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，直接調起攝像頭                                                                     | String                            | false            |
| maximize          | 可以設定最大上傳文件的大小（字節）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | 文件上傳數量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | 是否需要清空`input`內容，設為`true`支持重複選擇上傳同一個文件                                                                                                                          | Boolean                           | false            |
| accept            | 允許上傳的文件類型，[詳細說明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | 設置上傳的請求頭部                                                                                                                                                                     | Object                            | {}               |
| data              | 附加上傳的信息 formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | 上傳區域[圖標名稱](#/zh-CN/icon)或圖片鏈接                                                                                                                                             | String                            | "photograph"     |
| xhrState         | 接口響應的成功狀態（status）值                                                                                                                                                         | Number                            | 200              |
| withCredentials  | 支持發送 cookie 憑證信息                                                                                                                                                               | Boolean                           | fasle            |
| multiple          | 是否支持文件多選                                                                                                                                                                       | Boolean                           | fasle            |
| disabled          | 是否禁用文件上傳                                                                                                                                                                       | Boolean                           | fasle            |
| timeout           | 超時時間，單位為毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload     | 上傳前的函數需要返回一個`Promise`對象                                                                                                                                                  | Function                          | null             |
| beforeDelete     | 除文件時的回調，返回值為 false 時不移除。支持返回一個 `Promise` 對象，`Promise` 對象 resolve(false) 或 reject 時不移除                                                                 | Function(file): boolean 丨Promise | -                |



### FileItem

| 名稱     | 說明                                                    | 默認值                          |
|----------|---------------------------------------------------------|---------------------------------|
| status   | 文件狀態值，可選'ready,uploading,success,error,removed' | "ready"                         |
| uid      | 文件的唯一標識                                          | new Date().getTime().toString() |
| name     | 文件名稱                                                | ""                              |
| url      | 文件路徑                                                | ""                              |
| type     | 文件類型                                                | "image/jpeg"                    |
| formData | 上傳所需的data                                          | new FormData()                  |

### Event

| 名稱     | 說明                   | 回調參數             |
|----------|------------------------|----------------------|
| start    | 文件上傳開始           | options              |
| progress | 文件上傳的進度         | event,options        |
| oversize | 文件大小超過限制時觸發 | files                |
| success  | 上傳成功               | responseText,options |
| failure  | 上傳失敗               | responseText,options |
| change   | 上傳文件改變時的狀態   | fileList,event       |
| removeImage   | 文件刪除之前的狀態     | files,fileList       |

