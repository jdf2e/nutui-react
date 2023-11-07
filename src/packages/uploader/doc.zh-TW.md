# Uploader 上傳

## 介紹

用於將本地的圖片或文件上傳至服務器。

## 安裝

```tsx
import { Uploader } from '@nutui/nutui-react';
```

## 代碼演示

### 基礎用法

:::demo

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';
import { Dongdong } from '@nutui/icons-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start 觸發')
  }
  return (
    <>
      <h2>基礎用法</h2>
      <Uploader
        url={uploadUrl}
        onStart={onStart}
        style={{ marginRight: '10px' }}
      />
      <Uploader
        url={uploadUrl}
        uploadLabel="商品主圖"
        onStart={onStart}
        style={{ marginRight: '10px' }}
      />
      <Uploader url={uploadUrl} uploadIcon={<Dongdong />} onStart={onStart} />
    </>
  )
}
export default App;
```

:::

### 上傳狀態

:::demo

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';
import { Dongdong, Loading1, Star } from '@nutui/icons-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList = [
    {
      name: '文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上傳成功',
      type: 'image',
      uid: '122',
    },
    {
      name: '文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上傳成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上傳失敗',
      type: 'image',
      uid: '124',
      failIcon: <Star style={{ color: 'white' }}/>,
    },
    {
      name: '文件5.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '125',
    },
    {
      name: '文件6.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '126',
      loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
    },
    {
      name: '文件7.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]
  const onDelete = (file: FileItem, fileList: FileType<React.ReactNode>[]) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>上傳狀態</h2>
      <Uploader
        url={uploadUrl}
        defaultValue={defaultFileList}
        onDelete={onDelete}
        uploadIcon={<Dongdong />}
      />
    </>
  )
}
export default App;
```

:::

### 基礎用法-上傳列錶展示

:::demo

```tsx
import React, { useState } from "react";
import { Loading1 } from '@nutui/icons-react'
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'

  const defaultFileList = [
    {
      name: '文件文件文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上傳成功',
      type: 'image',
      uid: '122',
    },
    {
      name: '文件1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: '上傳成功',
      type: 'image',
      uid: '123',
    },
    {
      name: '文件4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: '上傳失敗',
      type: 'image',
      uid: '124',
      errorIcon: 'star',
    },
    {
      name: '文件5.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '125',
    },
    {
      name: '文件6.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '126',
      loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
    },
    {
      name: '文件7.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: '上傳中',
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]
  return (
    <>
      <h2>基礎用法-上傳列錶展示</h2>
      <Uploader
        url={uploadUrl}
        defaultValue={defaultFileList}
        maxCount="10"
        multiple
        previewType="list"
      >
        <Button type="success" size="small">
          {translated.bb5caa9c}
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

```tsx
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

```tsx
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

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>限制上傳數量5個</h2>
      <Uploader url={uploadUrl} multiple maxCount="5" />
    </>
  )
}
export default App;
```

:::

### 限制上傳大小（每個文件最大不超過 50kb）

:::demo

```tsx
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
      <Uploader url={uploadUrl} multiple maxFileSize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```

:::

### 圖片壓縮（在beforeupload鉤子中處理）

:::demo

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeUpload = async (files: File[]) => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d') as CanvasRenderingContext2D
    const base64 = await fileToDataURL(files[0])
    const img = await dataURLToImage(base64)
    canvas.width = img.width
    canvas.height = img.height
    context.clearRect(0, 0, img.width, img.height)
    context.drawImage(img, 0, 0, img.width, img.height)
    const blob = (await canvastoFile(canvas, 'image/jpeg', 0.5)) as Blob
    const f = await new File([blob], files[0].name, { type: files[0].type })
    return [f]
  }
  return (
    <>
      <h2>圖片壓縮（在beforeupload鉤子中處理）</h2>
      <Uploader url={uploadUrl} multiple beforeUpload={beforeUpload} />
    </>
  )
}
export default App;
```

:::

### 自定義數據 FormData headers

:::demo

```tsx
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

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const beforeXhrUpload = (xhr: XMLHttpRequest, options: any) => {
    if (options.method.toLowerCase() === 'put') {
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
        beforeXhrUpload={beforeXhrUpload}
       />
    </>
  )
}
export default App;
```

:::

### 手動上傳

:::demo

```tsx
import React, { useState, useRef } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const uploadRef = useRef(null)
  const submitUpload = () => {
    uploadRef.current.submit()
  }
  const clearUpload = () => {
    uploadRef.current.clear()
  };
  return (
    <>
      <h2>手動上傳</h2>
      <Uploader url={uploadUrl} maxCount="5" autoUpload={false} ref={uploadRef} />
      <br />
      <Button type="success" size="small" onClick={submitUpload}>
        執行上傳
      </Button>
      <Button type="danger" size="small" onClick={clearUpload}>
        手動清空上傳
      </Button>
    </>
  )
}
export default App;
```

:::

### 禁用狀態

:::demo

```tsx
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

## Uploader

### Props

| 字段 | 說明 | 類型 | 默認值 |
| --- | --- | --- | --- |
| autoUpload | 是否在選取文件後立即進行上傳，false 時需要手動執行 ref submit 方法進行上傳 | `Boolean` | `true` |
| name | `input` 標簽 `name` 的名稱，發到後臺的文件參數名 | `string` | `file` |
| url | 上傳服務器的接口地址 | `string` | `-` |
| defaultValue | 默認已經上傳的文件列錶 | `FileType<React.ReactNode>[]` | `[]` |
| value | 已經上傳的文件列錶 | `FileType<string>[]` | `[]` |
| preview | 是否上傳成功後展示預覽圖 | `boolean` | `true` |
| previewUrl | 當上傳非圖片('image')格式的默認圖片地址 | `string` | `-` |
| deletable | 是否展示刪除按鈕 | `boolean` | `true` |
| method | 上傳請求的 http method | `string` | `post` |
| previewType | 上傳列錶的內建樣式，支持兩種基本樣式 picture、list | `string` | `picture` |
| capture | 圖片[選取模式](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture")，直接調起攝像頭 | `string` | `false` |
| maxFileSize | 可以設定最大上傳文件的大小（字節） | `number` \| `string`   | `Number.MAX_VALUE` |
| maxCount | 文件上傳數量限制 | `number` \| `string`  | `1` |
| fit | 圖片填充模式 | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | 是否需要清空`input`內容，設為`true`支持重復選擇上傳同一個文件 | `boolean` | `true` |
| accept | 允許上傳的文件類型，[詳細說明]("https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B") | `string` | `*` |
| headers | 設置上傳的請求頭部 | `object` | `{}` |
| data | 附加上傳的信息 formData | `object` | `{}` |
| uploadIcon | 上傳區域<a href="#/zh-CN/icon">圖標名稱</a> | `React.ReactNode` | `-` |
| uploadLabel | 上傳區域圖片下方文字 | `React.ReactNode` | `-` |
| xhrState | 接口響應的成功狀態（status）值 | `number` | `200` |
| withCredentials | 支持發送 cookie 憑證信息 | `Boolean` | `false` |
| multiple | 是否支持文件多選 | `boolean` | `false` |
| disabled | 是否禁用文件上傳 | `boolean` | `false` |
| timeout | 超時時間，單位為毫秒 | `number` \| `string`  | `1000 * 30` |
| beforeUpload | 上傳前的函數需要返回一個`Promise`對象 | `(file: File[]) => Promise<File[] \| boolean>` | `-` |
| beforeXhrUpload | 執行 XHR 上傳時，自定義方式 | `(xhr: XMLHttpRequest, options: any) => void` | `-` |
| beforeDelete | 除文件時的回調，返回值為 false 時不移除。支持返回一個 `Promise` 對象，`Promise` 對象 resolve(false) 或 reject 時不移除 | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onStart | 文件上傳開始 | `(option: UploadOptions) => void` | `-` |
| onProgress | 文件上傳的進度 | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onOversize | 文件大小超過限制時觸發 | `(file: File[]) => void` | `-` |
| onSuccess | 上傳成功 | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onFailure | 上傳失敗 | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onChange | 上傳文件改變時的狀態 | `(files: FileItem[]) => void` | `-` |
| onDelete | 文件刪除之前的狀態 | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | 文件上傳成功後點擊觸發 | `(file: FileItem, index: number) => void` | `-` |

> 註意：accept、capture 和 multiple 為瀏覽器 input 標簽的原生屬性，移動端各種機型對這些屬性的支持程度有所差異，因此在不同機型和 WebView 下可能出現一些兼容性問題。

### FileItem

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| status | 文件狀態值，可選'ready,uploading,success,error,removed' | `ready` |
| uid | 文件的唯一標識 | `new Date().getTime().toString()` |
| name | 文件名稱 | `-` |
| url | 文件路徑 | `-` |
| type | 文件類型 | `image/jpeg` |
| formData | 上傳所需的data | `new FormData()` |

### Methods

通過ref可以獲取到 Uploader 實例併調用實例方法

| 方法名 | 說明 | 參數 | 返回值 |
| --- | --- | --- | --- |
| submit | 手動上傳模式，執行上傳操作 | `-` | `-` |
| clear | 清空已選擇的文件隊列（該方法一般配合在手動模式上傳時使用） | `index` | `-` |

## 主題定制

### 樣式變量

組件提供了下列 CSS 變量，可用於自定義樣式，使用方法請參考 [ConfigProvider 組件](#/zh-CN/component/configprovider)。

| 名稱 | 說明 | 默認值 |
| --- | --- | --- |
| \--nutui-uploader-picture-width | 上傳圖片的寬度 | `100px` |
| \--nutui-uploader-picture-height | 上傳圖片的高度 | `100px` |
| \--nutui-uploader-picture-border | 上傳圖片的border值 | `0px` |
| \--nutui-uploader-picture-border-radius | 上傳圖片的border圓角 | `4px` |
| \--nutui-uploader-background | 上傳圖片的背景顏色 | `$gray4` |
| \--nutui-uploader-background-disabled | 上傳圖片禁用狀態的背景顏色 | `$gray4` |
| \--nutui-uploader-picture-icon-tip-font-size | 上傳區域圖片下方文字大小 | `12px` |
| \--nutui-uploader-picture-icon-tip-color | 上傳區域圖片下方文字顏色 | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | 上傳區域預覽進度的背景顏色 | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | 上傳區域預覽margin-right的值 | `10px` |
| \--nutui-uploader-preview-margin-bottom | 上傳區域預覽margin-bottom的值 | `10px` |
| \--nutui-uploader-preview-tips-height | 上傳圖片預覽tips下的高度 | `24px` |
| \--nutui-uploader-preview-tips-background | 上傳圖片預覽tips下的背景顏色 | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | 上傳圖片預覽tips下的padding值 | `0 5px` |
| \--nutui-uploader-preview-close-right | 上傳圖片關閉按鈕的right值 | `0px` |
| \--nutui-uploader-preview-close-top | 上傳圖片關閉按鈕的top值 | `0px` |