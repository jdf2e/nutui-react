import React, { FunctionComponent } from 'react'
import classNames from 'classnames'
import { ArrowLeft } from '@nutui/icons-react'
import Overlay from '@/packages/overlay/index'
import { useConfig } from '@/packages/configprovider'
import { WebFixedNavProps } from '@/types'
import { defaultOverlayProps } from '@/packages/overlay/overlay'
import Badge from '@/packages/badge/index'

const defaultProps: WebFixedNavProps = {
  ...defaultOverlayProps,
  activeText: '',
  inactiveText: '',
  type: 'right',
  list: [],
  overlay: true,
  position: {
    top: 'auto',
    bottom: 'auto',
  },
  zIndex: 200,
  onChange: (value: boolean) => {},
  onSelect: () => {},
}

export const FixedNav: FunctionComponent<
  Partial<WebFixedNavProps> &
    Omit<
      React.HTMLAttributes<HTMLDivElement>,
      'onChange' | 'onSelect' | 'content'
    >
> = (props) => {
  const { locale } = useConfig()
  const {
    overlay,
    visible,
    list,
    activeText,
    inactiveText,
    position,
    type,
    children,
    style,
    className,
    content,
    zIndex,
    onChange,
    onSelect,
    ...rest
  } = { ...defaultProps, ...props }

  const classPrefix = 'nut-fixednav'
  const classes = classNames(
    classPrefix,
    {
      active: visible,
    },
    type,
    className
  )

  const renderListItem = (item: any, index: number) => {
    return (
      <div
        className={`${classPrefix}-list-item`}
        onClick={(event) => onSelect(item, event)}
        key={item.id || index}
      >
        {React.isValidElement(item.icon) ? (
          item.icon
        ) : (
          <img src={item.icon} alt="" />
        )}
        <div className={`${classPrefix}-list-text`}>{item.text}</div>
      </div>
    )
  }

  return (
    <div
      className={classes}
      style={{
        ...position,
        ...style,
      }}
      {...rest}
    >
      {overlay && (
        <Overlay
          visible={visible}
          zIndex={zIndex}
          onClick={() => onChange(false)}
        />
      )}
      <div className="list">
        {children || (
          <div className={`${classPrefix}-list`}>
            {list.map((item: any, index) => {
              return (
                <>
                  {item.num ? (
                    <Badge value={item.num} top={8} right={6}>
                      {renderListItem(item, index)}
                    </Badge>
                  ) : (
                    <>{renderListItem(item, index)}</>
                  )}
                </>
              )
            })}
          </div>
        )}
      </div>

      <div className={`${classPrefix}-btn`} onClick={() => onChange(!visible)}>
        {content || (
          <>
            <ArrowLeft color="#fff" />
            <div className="text">
              {visible
                ? activeText || locale.fixednav.activeText
                : inactiveText || locale.fixednav.inactiveText}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

FixedNav.displayName = 'NutFixedNav'
