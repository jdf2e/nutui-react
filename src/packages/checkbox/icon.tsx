import { createElement } from 'react'
import { mergeProps } from '@/utils/merge-props'

interface IconProps {
  tag: any
  classPrefix: string
  name: 'normal' | 'disabled' | 'checked' | 'checked-disabled'
}

const Icon = (props: Partial<IconProps>) => {
  const { tag, classPrefix, name } = mergeProps(
    {
      tag: 'div',
      classPrefix: 'nut-checkbox-self',
      name: 'normal',
    },
    props
  )
  return createElement<{ className: string }>(tag, {
    className: `${classPrefix} ${classPrefix}-${name}`,
  })
}

export default Icon
