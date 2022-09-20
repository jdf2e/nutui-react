import * as React from 'react'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'

import { Uploader } from '../uploader'

test('should render base uploader and type', () => {
  const { container, getByTestId } = render(
    <Uploader data-testid="uploader-type" />
  )
  expect(getByTestId('uploader-type')).toHaveClass('nut-uploader')
  expect(
    container.querySelector('.nut-uploader__input')?.getAttribute('type')
  ).toBe('file')
})

test('should render base uploader props', () => {
  const change = jest.fn()
  const { container } = render(
    <Uploader
      autoUpload
      capture
      name="files"
      accept=".jpg"
      maximize={1024 * 50}
      maximum={2}
      onChange={change}
    />
  )
  const input = container.querySelectorAll('.nut-uploader__input')[0]
  expect(input?.getAttribute('capture')).toBe('user')
  expect(input?.getAttribute('name')).toBe('files')
  expect(input?.getAttribute('accept')).toBe('.jpg')
  fireEvent.change(input)
  expect(change).toBeCalled()

  const input1 = container.querySelector('.nut-uploader__upload')
  expect(input1).toBeTruthy()
})

test('should render base uploader other props', () => {
  const onDelete = jest.fn()
  const fileItemClick = jest.fn()
  const App = () => {
    const defaultFileList = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '123',
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: '上传失败',
        type: 'image',
        uid: '124',
      },
      {
        name: '文件3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image',
        uid: '125',
      },
    ]
    return (
      <Uploader
        isDeletable
        defaultFileList={defaultFileList}
        headers={{}}
        multiple
        isPreview
        uploadIcon="dongdong"
        uploadIconSize="20px"
        onRemove={onDelete}
        onFileItemClick={fileItemClick}
      />
    )
  }

  const { container } = render(<App />)
  expect(container.querySelector('.nutui-iconfont')).toBeTruthy()
  expect(container.querySelector('.close')).toBeTruthy()
  expect(container.querySelectorAll('.nut-uploader__preview').length).toBe(3)
  fireEvent.click(container.querySelectorAll('.close')[0])
  expect(onDelete).toBeCalled()

  const toast2 = container.querySelector('.nut-uploader__preview-img__c')
  expect(toast2).toBeTruthy()
  fireEvent.click(
    container.querySelectorAll('.nut-uploader__preview-img__c')[0]
  )
  expect(fileItemClick).toBeCalled()
  expect(toast2?.getAttribute('src')).toBe(
    'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif'
  )
})

test('should render base uploader list', () => {
  const App = () => {
    const defaultFileList = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '123',
      },
      {
        name: '文件2.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'error',
        message: '上传失败',
        type: 'image',
        uid: '124',
      },
      {
        name: '文件3.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'uploading',
        message: '上传中...',
        type: 'image',
        uid: '125',
      },
    ]
    return (
      <Uploader
        defaultFileList={defaultFileList}
        uploadIcon="dongdong"
        listType="list"
      />
    )
  }

  const { container } = render(<App />)
  const toast1 = container.querySelector('.list')
  expect(toast1).toBeTruthy()
})

test('should render base uploader props disabled', () => {
  const { container } = render(<Uploader disabled />)
  const up_load1 = container.querySelector('.nut-uploader__input')
  expect(up_load1?.getAttribute('disabled')).toBe('')
})

test('before-delete prop return false', () => {
  const onDelete = jest.fn()
  const App = () => {
    const defaultFileList = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '12',
      },
    ]
    return (
      <Uploader
        isDeletable
        defaultFileList={defaultFileList}
        onRemove={onDelete}
        onBeforeDelete={() => {
          return false
        }}
      />
    )
  }
  const { container } = render(<App />)
  fireEvent.click(container.querySelectorAll('.nut-icon-failure')[0])
  expect(onDelete).not.toBeCalled()
})

test('before-delete prop return true', () => {
  const onDelete = jest.fn()
  const App = () => {
    const defaultFileList = [
      {
        name: '文件1.png',
        url: 'https://m.360buyimg.com/babel/jfs/t1/164410/22/25162/93384/616eac6cE6c711350/0cac53c1b82e1b05.gif',
        status: 'success',
        message: '上传成功',
        type: 'image',
        uid: '12',
      },
    ]
    return (
      <Uploader
        isDeletable
        defaultFileList={defaultFileList}
        onRemove={onDelete}
        onBeforeDelete={() => {
          return true
        }}
      />
    )
  }
  const { container } = render(<App />)
  fireEvent.click(container.querySelectorAll('.nut-icon-failure')[0])
  expect(onDelete).toBeCalled()
})
