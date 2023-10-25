import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import AvatarCropper, { AvatarCropperRef } from '../index'
import { simulateTouchMove, simulateTouchZoom } from '@/utils/test/event'
import { sleep } from '@/utils/sleep'
import Button from '@/packages/button'

const mockFile = new File([new ArrayBuffer(10000)], 'test.jpg', {
  type: 'image/jpg',
})

test('layout default slot', () => {
  const { container } = render(
    <AvatarCropper>
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        alt="avatar"
      />
    </AvatarCropper>
  )

  expect(screen.getByAltText('avatar')).toBeInTheDocument()
  expect(container.querySelector('.nut-avatar-cropper')).toMatchSnapshot()
})

test('should render base cutAvatar and type', async () => {
  const { container } = render(<AvatarCropper />)

  expect(container.querySelector('.nut-avatar-cropper')).toBeInTheDocument()

  const input = container.querySelector('.nut-avatar-cropper__input')
  expect(input?.getAttribute('type')).toBe('file')
})

test('layout toolbar slot', () => {
  const handleCancel = jest.fn()
  const handleConfirm = jest.fn()
  const avatarCropperRef = React.createRef<AvatarCropperRef>()
  const Toolbar = () => {
    return (
      <div className="toolbar">
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.cancel()}
        >
          取消
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.reset()}
        >
          重置
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.rotate()}
        >
          旋转
        </Button>
        <Button
          type="primary"
          onClick={(e: any) => avatarCropperRef.current?.confirm()}
        >
          确认
        </Button>
      </div>
    )
  }
  const { container } = render(
    <AvatarCropper
      ref={avatarCropperRef}
      toolbar={Toolbar()}
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    >
      <img
        src="https://img12.360buyimg.com/imagetools/jfs/t1/196430/38/8105/14329/60c806a4Ed506298a/e6de9fb7b8490f38.png"
        alt="avatar"
      />
    </AvatarCropper>
  )
  expect(container.querySelector('.toolbar')).toBeInTheDocument()
  // 验证toolbar的点击事件
  const toolbarItems = container.querySelectorAll('.toolbar button')
  expect(toolbarItems.length).toBe(4)
  const cancel = toolbarItems[0]
  fireEvent.click(cancel)
  expect(handleCancel).toBeCalled()
  const reset = toolbarItems[1]
  fireEvent.click(reset)
  const rotate = toolbarItems[2]
  fireEvent.click(rotate)
  fireEvent.click(rotate)
  fireEvent.click(rotate)
  fireEvent.click(rotate)
  const confirm = toolbarItems[3]
  fireEvent.click(confirm)
})

test('AvatarCropper: Select the image to open the crop window', async () => {
  const handleCancel = jest.fn()
  const handleConfirm = jest.fn()
  const { container } = render(
    <AvatarCropper
      maxZoom={2}
      space={20}
      toolbarPosition="top"
      editText="修改"
      cancelText="取消"
      confirmText="裁剪"
      onCancel={handleCancel}
      onConfirm={handleConfirm}
    />
  )

  const input = container.querySelector('.nut-avatar-cropper__input') as
    | Element
    | Node
    | Document
    | Window
  expect(input).toBeInTheDocument()

  const smallFile = new File([new ArrayBuffer(100)], 'small.jpg')

  Object.defineProperty(input, 'files', {
    get: jest.fn().mockReturnValue([mockFile, smallFile]),
  })

  expect(container.querySelector('.nut-cropper-popup')).toHaveStyle({
    display: 'none',
  })
  fireEvent.change(input)
  await sleep(10)
  expect(container.querySelector('.nut-cropper-popup')).toHaveStyle({
    display: 'block',
  })
  expect(
    container.querySelector('.nut-cropper-popup__canvas')
  ).toBeInTheDocument()

  const track = container.querySelector('.nut-cropper-popup__highlight')

  await simulateTouchZoom(track as HTMLElement, 0, 400, 1000)

  const toolbarItems = container.querySelectorAll(
    '.nut-cropper-popup__toolbar-item'
  )
  expect(toolbarItems.length).toBe(4)

  const cancel = toolbarItems[0]
  fireEvent.click(cancel)
  expect(container.querySelector('.nut-cropper-popup')).toHaveStyle({
    display: 'none',
  })
  expect(handleCancel).toBeCalled()

  await sleep(10)

  const reset = toolbarItems[1]
  fireEvent.click(reset)

  const rotate = toolbarItems[2]
  fireEvent.click(rotate)
  // 模拟触摸移动
  await simulateTouchMove(track as HTMLElement, 10, 10, 1000, 800, 1000)

  fireEvent.click(rotate)
  fireEvent.click(rotate)
  fireEvent.click(rotate)

  const confirm = toolbarItems[3]
  fireEvent.click(confirm)

  expect(container.querySelector('.nut-cropper-popup')).toHaveStyle({
    display: 'none',
  })
})
