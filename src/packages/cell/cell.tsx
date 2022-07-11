import React, { FunctionComponent, ReactNode } from 'react'
import { useHistory } from 'react-router-dom'
import bem from '@/utils/bem'
import Icon from '@/packages/icon'

export interface CellProps {
  title: string
  subTitle: string
  desc: string
  descTextAlign: string
  isLink: boolean
  to: string
  replace: boolean
  url: string
  icon: string
  className: string
  extra: ReactNode
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const defaultProps = {
  title: '',
  subTitle: '',
  desc: '',
  descTextAlign: 'right',
  isLink: false,
  to: '',
  replace: false,
  url: '',
  icon: '',
  className: '',
  extra: '',
  click: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {},
} as CellProps
export const Cell: FunctionComponent<Partial<CellProps> & React.HTMLAttributes<HTMLDivElement>> = (
  props
) => {
  const {
    children,
    click,
    isLink,
    to,
    url,
    replace,
    className,
    descTextAlign,
    desc,
    icon,
    title,
    subTitle,
    extra,
    ...rest
  } = {
    ...defaultProps,
    ...props,
  }
  const b = bem('cell')
  const history = useHistory()
  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    click(event)
    if (to && history) {
      history[replace ? 'replace' : 'push'](to)
    } else if (url) {
      replace ? location.replace(url) : (location.href = url)
    }
  }

  const styles =
    title || subTitle || icon
      ? {}
      : {
          textAlign: descTextAlign,
          flex: 1,
        }
  return (
    <div
      className={`${b({ clickable: !!(isLink || to) }, [className])} `}
      onClick={(event) => handleClick(event)}
      {...rest}
    >
      {children || (
        <>
          {title || subTitle || icon ? (
            <>
              <div className={`${b('title', { icon: !!icon })}`}>
                {icon ? <Icon name={icon} className={`${b('icon')}`} /> : null}
                {subTitle ? (
                  <>
                    <div className={b('maintitle')}>{title}</div>
                    <div className={b('subtitle')}>{subTitle}</div>
                  </>
                ) : (
                  <>{title}</>
                )}
              </div>
            </>
          ) : null}
          {desc ? (
            <div className={b('desc')} style={styles as React.CSSProperties}>
              {desc}
            </div>
          ) : null}
        </>
      )}
      {extra || null}
      {!extra && (isLink || to) ? <Icon name="right" className={b('link')} /> : null}
    </div>
  )
}

Cell.defaultProps = defaultProps
Cell.displayName = 'NutCell'
