# Uploader Upload

Used to upload local images or files to the server.

## Introduction

```tsx
import { Uploader } from '@nutui/nutui-react'
```

## Sample code

### Basic usage

:::demo

<CodeBlock src='h5/demo1.tsx'></CodeBlock>

:::

### Upload status

:::demo

<CodeBlock src='h5/demo2.tsx'></CodeBlock>

:::

### Limit the number of uploads

:::demo

<CodeBlock src='h5/demo3.tsx'></CodeBlock>

:::

### Limit upload size

:::demo

<CodeBlock src='h5/demo4.tsx'></CodeBlock>

:::

### Customize pre-upload processing

:::demo

<CodeBlock src='h5/demo5.tsx'></CodeBlock>

:::

### Disabled state

:::demo

<CodeBlock src='h5/demo6.tsx'></CodeBlock>

:::

### Custom delete icon

:::demo

<CodeBlock src='h5/demo7.tsx'></CodeBlock>

:::

### Directly activate the camera (valid on mobile version)

:::demo

<CodeBlock src='h5/demo8.tsx'></CodeBlock>

:::

### Manually perform an upload with a button when a file is selected

:::demo
<CodeBlock src='h5/demo9.tsx'></CodeBlock>
:::

### Basic usage - upload list display

:::demo
<CodeBlock src='h5/demo10.tsx'></CodeBlock>
:::.

## Uploader

### Props

| Property | Description | Type | Default |
| --- | --- | --- | --- | autoUpload | Whether to upload the file immediately after selecting it.
| autoUpload | If or not the upload will be done immediately after the file is selected, if false, you need to manually execute the ref submit method to upload | `boolean` | `true` | upload | The upload method, the input parameter is the file to be uploaded.
| upload | Upload method, input is the file object to be uploaded, after asynchronous processing, return the upload result | `(file: File) => Promise<FileItem>` | `-` |
| name | The name of the `input` tag `name`, the name of the file parameter sent to the backend | `string` | `file` |
| defaultValue | Default list of files already uploaded | `FileItem[]` | `[]` |
| value | List of files that have been uploaded | `FileItem[]` | `-` |
| preview | Whether or not to show the preview image after a successful upload | `boolean` | `true` |
| previewUrl | Default image address when uploading non-image ('image') formats | `string` | `-` |
| deletable | Whether or not to show the delete button | `boolean` | `true` |
| method | The http method for the upload request | `string` | `post` | | previewType
| previewType | The built-in style of the uploaded list, two basic styles are supported picture, list | `string`
| capture | Picture [selection mode] (<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/input#htmlattrdefcapture>"), directly bring up the camera | `string` | `false` | maxFileSize
| maxFileSize | You can set the maximum file size (in bytes) for uploading | `number` \| `string` | `Number.MAX_VALUE` |
| maxCount | File upload count limit | `number` \| `string` | `1` |
| fit | Picture fill mode | `contain` \| `cover` \| `fill` \| `none` \| `scale-down` | `cover` |
| clearInput | If or not you want to clear the `input` content, set it to `true` to support selecting the same file to upload over and over again | `boolean` | `true` |
| accept | Allowed file types to be uploaded, [Details] ("<https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/Input/file#%E9%99%90%E5%88%B6%E5%85%81%E8%AE%> B8%E7%9A%84%E6%96%87%E4%BB%B6%E7%B1%BB%E5%9E%8B") | `string` | `*` |
| uploadIcon | uploadRegion <a href=“#/zh-CN/icon”>Icon Name</a> | `React.ReactNode` | `-` |
| deleteIcon | Delete the icon name of the region | `React.ReactNode` | `-` |
| uploadLabel | Text below the image in the upload area | `React.
| multiple | Whether to support file multi-selection |`boolean`|`false`|
| disabled | Whether to disable file uploading |`boolean`|`false`|
| beforeUpload | The beforeUpload function needs to return a`Promise`object |`(file: File[]) => Promise<File[] \| boolean>`|`-`|
| beforeDelete | Callback when deleting a file, does not remove it if the return value is false. Supports returning a`Promise`object, which is not removed when resolve(false) or reject |`(file: FileItem, files: FileItem[]) => boolean`|`-`|
| onOversize | Triggered when file size exceeds limit |`(file: File[]) => void`|`-`|
| onOverCount | Triggered when the number of files exceeds the limit |`(count: number) => void`|`-`|
| onChange | Triggered when the list of uploaded files changes |`(files: FileItem[]) => void`|`-`|
| onDelete | Triggered when clicked to delete a file |`(file: FileItem, files: FileItem[]) => void`|`-`|
| onFileItemClick | Triggered when a file is uploaded successfully |`(file: FileItem, index: number) => void`|`-`|
| onUploadQueueChange | Triggered when the image upload queue changes |`(tasks: FileItem[]) => void`|`-` |

> Note: accept, capture and multiple are the native attributes of the browser input tag, the support for these attributes varies among mobile models, so there may be some compatibility issues under different models and WebViews.

### FileItem

| Name | Description | Default Value |
| --- | --- | --- | status | File status value.
| status | File status value, optionally 'ready,uploading,success,error' | `ready` |
| uid | Unique identifier of the file | `-` | name | File name.
| name | File name | `-` | url | Path to file
| url | file path | `-` | uid | unique identifier for the file | `-` | name | file name | `-` | url | file path | `-` | type | file type
| type | file type | `image` |
| loadingIcon | Loading Icon | `-` |
| failIcon | failureIcon | `-` |
| percentage | upload prgress percent | `-` |

### Methods

The Uploader instance can be retrieved by ref and the instance methods called.
| MethodName | Description | Parameters | ReturnValues |
| --- | --- | --- | --- | --- | submit | Manual upload mode
| submit | Manual upload mode, performs the upload operation | `-` | `-` |
| clear | Clear the queue of selected files (this method is usually used when uploading in manual mode) | `index` | `-` |

## Theme customization

### Style variables

The component provides the following CSS variables that can be used to customize styles, see [ConfigProvider component](#/zh-CN/component/configprovider).

| Name | Description | Default Value |
| --- | --- | --- |
| \--nutui-uploader-image-width | The width of the uploaded image | `100px` |
| \--nutui-uploader-image-height | Height of the uploaded image | `100px` |
| \--nutui-uploader-image-border | Border value of the uploaded image | `0px` |
| \--nutui-uploader-image-border-radius | Rounded border of uploaded image | `4px` |
| \--nutui-uploader-background | The background color of the uploaded image | `$color-background` |
| \--nutui-uploader-background-disabled | Background color for uploaded images in disabled state | `$color-background` |
| \--nutui-uploader-image-icon-tip-font-size | Text size below image in upload area | `12px` |
| \--nutui-uploader-image-icon-tip-color | Text color below image in upload area | `#BFBFBF` |
| \--nutui-uploader-preview-progress-background | The background color of the preview progress in the upload area | `rgba(0, 0, 0, 0.65)` |
| \--nutui-uploader-preview-margin-right | The value of margin-right for the preview of the upload area | `10px` |
| \--nutui-uploader-preview-margin-bottom | Upload area preview the value of margin-bottom | `10px` |
| \--nutui-uploader-preview-tips-height | Height under uploaded image preview tips | `24px` |
| \--nutui-uploader-preview-tips-background | Background color under uploaded image preview tips | `rgba(0, 0, 0, 0.45)` |
| \--nutui-uploader-preview-tips-padding | Padding value under uploaded image preview tips | `0 5px` |
| \--nutui-uploader-preview-close-right | The right value under the upload image's close button | `0px` |
| \--nutui-uploader-preview-close-top | The top value of the uploader's close button | `0px` |
