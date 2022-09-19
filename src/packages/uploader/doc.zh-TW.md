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

### 上传状态

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList: FileType<string>[] = [
    {
      name: '檔1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上傳成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '檔2.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上傳失敗',
      type: 'image',
      uid: '124',
    },
    {
      name: '檔3.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中...',
      type: 'image',
      uid: '125',
    },
  ]
  const onDelete = (file: FileItem, fileList: FileItem[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>上傳狀態</h2>
      <Uploader
        url={uploadUrl}
        defaultFileList={defaultFileList}
        onRemove={onDelete}
        maximum="3"
        multiple
        uploadIcon="dongdong"
      />
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
        <Button type="success" size="small">
          上傳文件
        </Button>
      </Uploader>
    </>
  )
}
export default App;
```
:::

### 自定義上傳使用默認進度條

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button, Progress } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const [progressPercent, setProgressPercent] = useState(0)
  const onProgress = ({ event, options, percentage }: any) => {
    setProgressPercent(percentage)
  }
  return (
    <>
      <h2>自定義上傳使用默認進度條</h2>
      <Uploader url={uploadUrl} onProgress={onProgress}>
        <Button type="success" size="small">
          上傳文件
        </Button>
      </Uploader>
      <br />
      <Progress
        percentage={progressPercent}
        strokeColor="linear-gradient(270deg, rgba(18,126,255,1) 0%,rgba(32,147,255,1) 32.815625%,rgba(13,242,204,1) 100%)"
        status
      />
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

### 限制上傳大小（每個文件最大不超過 50kb）

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

### 自定義 xhr 上傳方式(before-xhr-upload)

:::demo
``` tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    if (options.method.toLowerCase() == 'put') {
      xhr.send(options.sourceFile);
    } else {
      xhr.send(options.formData);
    }
  };
  return (
    <>
      <h2>自定義 xhr 上傳方式(before-xhr-upload)</h2>
      <Uploader
        url={uploadUrl}
        method="put"
        onBeforeXhrUpload={beforeXhrUpload}
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
| autoUpload `v1.3.4`             | 是否在選取文件後立即進行上傳，false 時需要手動執行 ref submit 方法進行上傳                                                                                                                                       | Boolean                            | true           |
| name              | `input` 標籤 `name` 的名稱，發到後台的文件參數名                                                                                                                                       | String                            | "file"           |
| url               | 上傳服務器的接口地址                                                                                                                                                                   | String                            | -                |
| defaultFileList               | 默認已經上傳的文件列表                                                                                                                                                                   | FileItem[]                            | []                |
| isPreview        | 是否上傳成功後展示預覽圖                                                                                                                                                               | Boolean                           | true             |
| defaultImg        | 當上傳非圖片('image')格式的默認圖片地址                                                                                                                                                               | String                           | ''             |
| isDeletable      | 是否展示刪除按鈕                                                                                                                                                                       | Boolean                           | true             |
| method            | 上傳請求的 http method                                                                                                                                                                 | String                            | "post"           |
| listType `v1.3.4`            | 上傳列表的內建樣式，支持兩種基本樣式 picture、list                                                                                                                                                                 | String                            | "picture"           |
| capture           | 圖片[選取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，直接調起攝像頭                                                                     | String                            | false            |
| maximize          | 可以設定最大上傳文件的大小（字節）                                                                                                                                                     | Number丨String                    | Number.MAX_VALUE |
| maximum           | 文件上傳數量限制                                                                                                                                                                       | Number丨String                    | 1                |
| clearInput       | 是否需要清空`input`內容，設為`true`支持重複選擇上傳同一個文件                                                                                                                          | Boolean                           | false            |
| accept            | 允許上傳的文件類型，[詳細說明](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | String                            | *                |
| headers           | 設置上傳的請求頭部                                                                                                                                                                     | Object                            | {}               |
| data              | 附加上傳的信息 formData                                                                                                                                                                | Object                            | {}               |
| uploadIcon       | 上傳區域[圖標名稱](#/zh-CN/icon)或圖片鏈接                                                                                                                                             | String                            | "photograph"     |
| uploadIconSize `v1.3.4`       | 上傳區域[圖標尺寸](#/icon)大小，如 `20px` `2em` `2rem`                                                                                                                                             | String or Number                            | -     |
| xhrState         | 接口響應的成功狀態（status）值                                                                                                                                                         | Number                            | 200              |
| withCredentials  | 支持發送 cookie 憑證信息                                                                                                                                                               | Boolean                           | fasle            |
| multiple          | 是否支持文件多選                                                                                                                                                                       | Boolean                           | fasle            |
| disabled          | 是否禁用文件上傳                                                                                                                                                                       | Boolean                           | fasle            |
| timeout           | 超時時間，單位為毫秒                                                                                                   | Number丨String                    | 1000 * 30                 |
| beforeUpload `v1.3.4廢棄`     | 上傳前的函數需要返回一個`Promise`對象                                                                                                                                                  | Function                          | null             |
| onBeforeUpload `v1.3.4`     | 上傳前的函數需要返回一個`Promise`對象                                                                                                                                                  | Function                          | null             |
| onBeforeXhrUpload `v1.3.4`    | 執行 XHR 上傳時，自定義方式                                                                                                                                                  | Function(xhr，option)                          | null             |
| beforeDelete `v1.3.4 廢棄`   | 除文件時的回調，返回值為 false 時不移除。支持返回一個 `Promise` 對象，`Promise` 對象 resolve(false) 或 reject 時不移除                                                                 | Function(file): boolean 丨Promise | -                |
| onBeforeDelete `v1.3.4`   | 除文件時的回調，返回值為 false 時不移除。支持返回一個 `Promise` 對象，`Promise` 對象 resolve(false) 或 reject 時不移除                                                                 | Function(file): boolean 丨Promise | -                |



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
| onStart `v1.3.4`    | 文件上傳開始           | options              |
| start `v1.3.4廢棄`    | 文件上傳開始           | options              |
| onProgress `v1.3.4` | 文件上傳的進度         | event,options,percentage        |
| progress `v1.3.4廢棄` | 文件上傳的進度         | event,options,percentage        |
| onOversize `v1.3.4` | 文件大小超過限制時觸發 | files                |
| oversize `v1.3.4廢棄` | 文件大小超過限制時觸發 | files                |
| onSuccess `v1.3.4`  | 上傳成功               | responseText,options |
| success `v1.3.4廢棄`  | 上傳成功               | responseText,options |
| onFailure `v1.3.4`  | 上傳失敗               | responseText,options |
| failure `v1.3.4廢棄`  | 上傳失敗               | responseText,options |
| onChange `v1.3.4`   | 上傳文件改變時的狀態   | fileList,event       |
| change `v1.3.4廢棄`   | 上傳文件改變時的狀態   | fileList,event       |
| onRemove `v1.3.4`   | 文件刪除之前的狀態     | files,fileList       |
| remove `v1.3.4廢棄`   | 文件刪除之前的狀態     | files,fileList       |
| onFileItemClick `v1.3.4`   | 文件上傳成功後點擊觸發     | fileItem       |
| fileItemClick `v1.3.4廢棄`   | 文件上傳成功後點擊觸發     | fileItem       |

