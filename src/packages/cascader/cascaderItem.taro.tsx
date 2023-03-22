import React, {
  ForwardRefRenderFunction,
  isValidElement,
  PropsWithChildren,
} from 'react'
import classNames from 'classnames'
import { Loading, Checklist } from '@nutui/icons-react-taro'
import bem from '@/utils/bem'

interface OptiosInfo {
  text: string
  value: string
  paneKey: string
  disabled?: boolean
  loading?: boolean
  children?: OptiosInfo[]
}

export interface CascaderItemProps {
  data: {
    text: string
    value: string
    paneKey: string
    disabled?: boolean
    loading?: boolean
    children?: OptiosInfo[]
  }
  checked: boolean
  checkedIcon: string
  activeColor: string
  chooseItem: (data: any) => void
}

const defaultProps = {
  data: {
    text: '',
    value: '',
    paneKey: '',
    disabled: false,
    loading: false,
    children: [],
  },
  activeColor: '#fa2c19',
  checked: false,
  checkedIcon: 'checklist',
  chooseItem: () => {},
} as CascaderItemProps

const InternalCascaderItem: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<CascaderItemProps>>
> = (props, ref) => {
  const { data, checked, checkedIcon, chooseItem, activeColor } = {
    ...defaultProps,
    ...props,
  }

  const b = bem('cascader-item')

  const classes = classNames(
    {
      active: checked,
      disabled: data.disabled,
    },
    b('')
  )

  const classesTitle = classNames({
    [`${b('')}__title`]: true,
  })

  const renderIcon = () => {
    if (checked) {
      if (isValidElement(checkedIcon)) {
        return checkedIcon
      }
      return <Checklist className={`${checked ? b('icon-check') : ''}`} />
    }
    return null
  }

  return (
    <div
      style={{ color: checked ? activeColor : '' }}
      className={classes}
      onClick={() => {
        chooseItem(data)
      }}
    >
      <div className={classesTitle}>{data.text}</div>
      {data.loading ? (
        <Loading color="#969799" className="nut-cascader-item__icon-loading" />
      ) : (
        renderIcon()
      )}
    </div>
  )
}

export const CascaderItem = React.forwardRef(InternalCascaderItem)

CascaderItem.defaultProps = defaultProps
CascaderItem.displayName = 'NutCascaderItem'
