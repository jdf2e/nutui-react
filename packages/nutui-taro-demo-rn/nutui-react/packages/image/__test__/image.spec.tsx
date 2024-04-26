import * as React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Image from '@/packages/image'

const src =
  'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'

test('image props test', () => {
  const { container } = render(<Image src={src} width="100" height="100" />)
  expect(container.querySelector('.nut-image')).toHaveAttribute(
    'style',
    'height: 100px; width: 100px;'
  )
  expect(container.querySelector('.nut-img')).toHaveAttribute(
    'src',
    'https://img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg'
  )
  expect(container.querySelector('.nut-img')).toHaveAttribute(
    'style',
    'object-fit: fill; object-position: center;'
  )
  expect(container).toMatchSnapshot()
})

test('image position test', () => {
  const { container } = render(
    <Image src={src} width="100" height="100" fit="cover" position="left" />
  )
  expect(container.querySelector('.nut-img')).toHaveAttribute(
    'style',
    'object-fit: cover; object-position: left;'
  )
})

test('image round test', () => {
  const { container } = render(
    <Image src={src} width="100" height="100" radius="50%" />
  )
  expect(container.querySelector('.nut-image')).toHaveAttribute(
    'style',
    'height: 100px; width: 100px; overflow: hidden; border-radius: 50%;'
  )
})
