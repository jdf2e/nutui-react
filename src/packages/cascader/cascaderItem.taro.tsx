import React, {
  ForwardRefRenderFunction,
  PropsWithChildren,
  useEffect,
} from 'react'
import classNames from 'classnames'
import { Icon } from '../icon/icon.taro'
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
  checked: false,
  chooseItem: () => {},
} as CascaderItemProps

const InternalCascaderItem: ForwardRefRenderFunction<
  unknown,
  PropsWithChildren<Partial<CascaderItemProps>>
> = (props) => {
  const { data, checked, chooseItem } = {
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

  useEffect(() => {
    initData()
  }, [data])

  const initData = () => {
    // console.log('------data', data)
  }

  return (
    <div
      className={classes}
      onClick={() => {
        chooseItem(data)
      }}
    >
      <div className={classesTitle}>{data.text}</div>
      {data.loading ? (
        <Icon
          color="#969799"
          className="nut-cascader-item__icon-loading"
          name="loading"
        />
      ) : (
        <Icon
          className={`${checked ? b('icon-check') : ''}`}
          name="checklist"
        />
      )}
    </div>
  )
}

export const CascaderItem = React.forwardRef(InternalCascaderItem)

CascaderItem.defaultProps = defaultProps
CascaderItem.displayName = 'NutCascaderItem'
