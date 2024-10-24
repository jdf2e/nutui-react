# Uploader

Used to upload local pictures or files to the server.

## Import

```tsx
import { Uploader } from '@nutui/nutui-react'
```

## Demo

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

> When using the Uploader component to upload files, you may encounter the problem of garbled Chinese characters in the response file information. This usually happens when the client and server are inconsistent in how they handle the encoding of the file. To avoid this problem, it is recommended to ensure that the encoding format of the file read by the server is consistent with that of the client.

```javascript
import React from 'react'
import { Uploader } from '@nutui/nutui-react'
// Server Demo
app.post('/upload', upload.single('file'), (req, res) => {
  const fileEncoding = req.headers['x-file-encoding'] || 'UTF-8'
  const fileContent = iconv.decode(
    Buffer.from(JSON.stringify(req.file), 'binary'),
    fileEncoding
  )
  res.json({
    success: true,
    message: 'File uploaded successfully',
    data: JSON.parse(fileContent),
  })
})
// Client Demo
;<Uploader url={uploadUrl} headers={{ 'x-file-encoding': 'UTF-8' }} />
```

### Basic usage

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### upload status

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Basic usage - upload list dispaly

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Custom upload uses default progress bar

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Direct camera up (mobile)

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Limit the number of uploads to 5

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Limit upload size (maximum 50kb per file)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Image compression (handled in a foreupload hook)

:::demo

<CodeBlock src='h5/demo9.tsx'></CodeBlock>

:::

### Custom data FormData, headers

:::demo

<CodeBlock src='h5/demo10.tsx'></CodeBlock>

:::

### Custom xhr upload method (before-xhr-upload)

:::demo

<CodeBlock src='h5/demo11.tsx'></CodeBlock>

:::

### After selecting Chinese, manually perform the upload via the button

:::demo

<CodeBlock src='h5/demo12.tsx'></CodeBlock>

:::

### Disabled state

:::demo

<CodeBlock src='h5/demo13.tsx'></CodeBlock>

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
| deleteIcon | Delete area icon name | `React.ReactNode` | `-` |
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
| \--nutui-uploader-image-width | The width of the uploaded image | `100px` |
| \--nutui-uploader-image-height | The height of the uploaded image | `100px` |
| \--nutui-uploader-image-border | The border value of the uploaded image | `0px` | `-` |
| \--nutui-uploader-image-border-radius | Border rounded corners of uploaded images | `4px` |
| \--nutui-uploader-background | The background color of the uploaded image | `$color-background` |
| \--nutui-uploader-background-disabled | The background color of the disabled state of uploading images | `$color-background` |
| \--nutui-uploader-image-icon-tip-font-size | The size of the text below the image in the upload area | `12px` |
| \--nutui-uploader-image-icon-tip-color | The color of the text below the image in the upload area | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | The background color of the upload area preview progress | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | Upload area preview margin-right value | `10px` |
| \--nutui-uploader-preview-margin-bottom | Upload area preview margin-bottom value | `10px` |
| \--nutui-uploader-preview-tips-height | Upload a picture to preview the height under tips | `24px` |
| \--nutui-uploader-preview-tips-background | Upload image preview background color under tips | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | Upload an image to preview the padding value under tips | `0 5px` |
| \--nutui-uploader-preview-close-right | The right value of the upload image close button | `0px` |
| \--nutui-uploader-preview-close-top | The top value of the upload image close button | `0px` |
