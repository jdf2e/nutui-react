# Uploader

## Intro

Used to upload local pictures or files to the server.

## Install

```tsx
import { Uploader } from '@nutui/nutui-react';
```

## Demo

### Basic Usage

:::demo

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';
import { Dongdong } from '@nutui/icons-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onStart = () => {
    console.log('start ！！')
  }
  return (
    <>
      <h2>Basic Usage</h2>
      <Uploader
        url={uploadUrl}
        onStart={onStart}
        style={{ marginRight: '10px' }}
      />
      <Uploader
        url={uploadUrl}
        uploadLabel="Main goods"
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

### upload status

:::demo

```tsx
import React, { useState } from "react";
import { Uploader } from '@nutui/nutui-react';
import { Dongdong, Loading1 } from '@nutui/icons-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const defaultFileList = [
    {
      name: 'filefilefile1.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: 'Uploaded successfully',
      type: 'image',
      uid: '122',
    },
    {
      name: 'file.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'success',
      message: 'Uploaded successfully',
      type: 'image',
      uid: '122',
    },
    {
      name: 'file4.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'error',
      message: 'upload failed',
      type: 'image',
      uid: '124',
    },
    {
      name: 'file5.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: 'uploading...',
      type: 'image',
      uid: '125',
    },
    {
      name: 'file6.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: 'uploading...',
      type: 'image',
      uid: '126',
      loadingIcon: <Loading1 className="nut-icon-loading1" color="#fff" />,
    },
    {
      name: 'file7.png',
      url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
      status: 'uploading',
      message: 'uploading...',
      type: 'image',
      uid: '127',
      loadingIcon: null,
    },
  ]
  const onDelete = (file, fileList) => {
    console.log(translated.ca3903f3, file, fileList)
  }
  return (
    <>
      <h2>upload status</h2>
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

### Custom upload uses default progress bar

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
      <h2>Custom upload uses default progress bar</h2>
      <Uploader url={uploadUrl} onProgress={onProgress}>
        <Button type="success" size="small">
          upload files
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

### Direct camera up (mobile)

:::demo

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>Direct camera up (mobile)</h2>
      <Uploader capture url={uploadUrl} />
    </>
  )
}
export default App;
```

:::

### Limit the number of uploads to 5

:::demo

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  return (
    <>
      <h2>Limit the number of uploads to 5</h2>
      <Uploader url={uploadUrl} multiple maxCount="5" />
    </>
  )
}
export default App;
```

:::

### Limit upload size (maximum 50kb per file)

:::demo

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  const uploadUrl = 'https://my-json-server.typicode.com/linrufeng/demo/posts'
  const onOversize = (files: File[]) => {
    console.log('Oversize triggers the file size cannot exceed 50kb', files)
  }
  return (
    <>
      <h2>Limit upload size (maximum 50kb per file)</h2>
      <Uploader url={uploadUrl} multiple maxFileSize={1024 * 50} oversize={onOversize} />
    </>
  )
}
export default App;
```

:::

### Image compression (handled in beforeupload hook)

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
      <h2>Image compression (handled in beforeupload hook)</h2>
      <Uploader url={uploadUrl} multiple beforeUpload={beforeUpload} />
    </>
  )
}
export default App;
```

:::

### Custom data FormData, headers

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
      <h2>Custom data FormData, headers</h2>
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

### Custom xhr upload method (before-xhr-upload)

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
      <h2>Custom xhr upload method (before-xhr-upload)</h2>
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

### Manual upload

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
      <h2>Manual upload</h2>
      <Uploader url={uploadUrl} maxCount="5" autoUpload={false} ref={uploadRef} />
      <br />
      <Button type="success" size="small" onClick={submitUpload}>
        perform upload
      </Button>
      <Button type="danger" size="small" onClick={clearUpload}>
        Clear upload manually
      </Button>
    </>
  )
}
export default App;
```

:::

### Disabled state

:::demo

```tsx
import React, { useState } from "react";
import { Uploader, Button } from '@nutui/nutui-react';

const App = () => {
  return (
    <>
      <h2>Disabled state</h2>
      <Uploader disabled />
    </>
  )
}
export default App;
```

:::

## Uploader

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- |
| autoUpload | Whether to upload the file immediately after selecting it, if false, you need to manually execute the ref submit method to upload | `boolean` | `true` |
| name | The name of the `input` tag `name`, the file parameter name sent to the background | `string` | `file` |
| url | The interface address of the upload server | `string` | `-` |
| defaultValue | List of uploaded files by default | `FileType<React.ReactNode>[]` | `[]` |
| value | List of uploaded files | `FileType<string>[]` | `[]` |
| preview | Whether to display the preview image after the upload is successful | `boolean` | `true` |
| previewUrl | When uploading a default image URL in a non-image ('image') format | `string` | `-` |
| deletable | Whether to display the delete button | `boolean` | `true` |
| method | The http method of upload request | `string` | `post` |
| previewType | The built-in style of the upload list, supports two basic styles picture, list | `string` | `picture` |
| capture | Capture, can be set to [camera](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture)，turn on the camera directly | `string` | `false` |
| maxFileSize | You can set the maximum upload file size (bytes) | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | File upload limit | `number` \| `string` | `1` |
| fit | image fill mode | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | Whether to clear the `input` content, set to `true` to support repeated selection and upload of the same file | `boolean` | `true` |
| accept | File types that can be accepted. See [Des](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B) | `string` | `*` |
| headers | Set request headers | `object` | `{}` |
| data | Uploading extra params or function which can return uploading extra params formData | `object` | `{}` |
| uploadIcon | Upload area<a href="#/zh-CN/icon">icon name</a> | `React.ReactNode` | `-` |
| uploadLabel | Upload area tip | `React.ReactNode` | `-` |
| xhrState | The success status (status) value of the interface response | `number` | `200` |
| withCredentials | Support for sending cookie credential information | `boolean` | `false` |
| multiple | Whether to support multiple file selection | `boolean` | `false` |
| disabled | Whether to disable file upload | `boolean` | `false` |
| timeout | timeout, in milliseconds | `number` \| `string` | `1000 * 30` |
| beforeUpload | The pre-upload function needs to return a `Promise` object | `(file: File[]) => Promise<File[] \| boolean>` | `-` |
| beforeXhrUpload | When performing an XHR upload, the custom method | `(xhr: XMLHttpRequest, options: any) => void` | `-` |
| beforeDelete | Callback when file is removed. If the return value is false, it will not be removed. Supports returning a `Promise` object, which is not removed when the `Promise` object resolves(false) or rejects | `(file: FileItem, files: FileItem[]) => boolean` | `-` |
| onStart | File upload started | `(option: UploadOptions) => void` | `-` |
| onProgress | Progress of file upload | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onOversize | Triggered when the file size exceeds the limit | `(file: File[]) => void` | `-` |
| onSuccess | uploaded successfully | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onFailure | upload failed | `(param: {e: ProgressEvent<XMLHttpRequestEventTarget>;option: UploadOptions;percentage: string \| number}) => void` | `-` |
| onChange | Status when uploaded files change | `(files: FileItem[]) => void` | `-` |
| onDelete | The state of the file before deletion | `(file: FileItem, files: FileItem[]) => void` | `-` |
| onFileItemClick | Click trigger after the file is uploaded successfully | `(file: FileItem, index: number) => void` | `-` |

> Note: accept, capture, and multiple are the native attributes of the browser's input tag. The mobile terminal's different models support these attributes differently, so there may be some compatibility problems under different models and WebView.

### FileItem

| Property | Description | Default |
| --- | --- | --- |
| status | File status value, optional ‘ready,uploading,success,error’' | `ready` |
| uid | Unique ID of the file | `new Date().getTime().toString()` |
| name | File name | `-` |
| url | File path | `-` |
| type | File type | `image/jpeg` |
| formData | Upload the required data | `new FormData()` |

### Methods

Use ref to get Uploader instance and call instance methods.

| Name | Description | Arguments | Return value |
| --- | --- | --- | --- |
| submit | Manual upload mode, perform upload operation | `-` | `-` |
| clear | Empty the selected file queue (this method is generally used when uploading in manual mode) | `index` | `-` |

## Theming

### CSS Variables

The component provides the following CSS variables, which can be used to customize styles. Please refer to [ConfigProvider component](#/en-US/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-uploader-picture-width | The width of the uploaded image | `100px` |
| \--nutui-uploader-picture-height | The height of the uploaded image | `100px` |
| \--nutui-uploader-picture-border | The border value of the uploaded image | `0px` | `-` |
| \--nutui-uploader-picture-border-radius | Border rounded corners of uploaded images | `4px` |
| \--nutui-uploader-background | The background color of the uploaded image | `$gray4` |
| \--nutui-uploader-background-disabled | The background color of the disabled state of uploading images | `$gray4` |
| \--nutui-uploader-picture-icon-tip-font-size | The size of the text below the image in the upload area | `12px` |
| \--nutui-uploader-picture-icon-tip-color | The color of the text below the image in the upload area | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | The background color of the upload area preview progress | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | Upload area preview margin-right value | `10px` |
| \--nutui-uploader-preview-margin-bottom | Upload area preview margin-bottom value | `10px` |
| \--nutui-uploader-preview-tips-height | Upload a picture to preview the height under tips | `24px` |
| \--nutui-uploader-preview-tips-background | Upload image preview background color under tips | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | Upload an image to preview the padding value under tips | `0 5px` |
| \--nutui-uploader-preview-close-right | The right value of the upload image close button | `0px` |
| \--nutui-uploader-preview-close-top | The top value of the upload image close button | `0px` |