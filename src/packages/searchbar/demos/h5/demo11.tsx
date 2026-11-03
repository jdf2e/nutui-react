import React from 'react'
import { ArrowLeft, Photograph, Star, Share, More } from '@nutui/icons-react'
import { SearchBar, Button, ConfigProvider, Cell } from '@nutui/nutui-react'
import { MaterialView } from '../../../materialview/materialview'

const Demo11 = () => {
  const searchStyle = {
    padding: 0,
    '--nutui-color-primary': 'transparent',
  }
  const rowStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: 12,
    margin: '0 8px',
  }
  const back = (
    <MaterialView
      scene="top-plain"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
        width: 40,
        height: 40,
      }}
    >
      <ArrowLeft width={20} height={20} />
    </MaterialView>
  )
  return (
    <ConfigProvider
      theme={{
        nutuiSearchbarInputHeight: '40px',
        nutuiSearchbarInputCurrorColor: 'var(--nutui-color-primary)',
        nutuiButtonPrimaryBackgroundColor: 'var(--nutui-color-primary)',
        nutuiSearchbarBackground: 'transparent',
        nutuiSearchbarContentBackground: 'transparent',
      }}
    >
      <Cell align="stretch" style={{ flexDirection: 'column' }}>
        <div style={rowStyle}>
          {back}
          <MaterialView scene="top-plain" style={{ flex: 1, minWidth: 0 }}>
            <SearchBar
              style={searchStyle}
              leftIn={null}
              placeholder="搜搜感兴趣的商品吧"
              rightIn={
                <Button
                  type="primary"
                  size="mini"
                  style={{
                    height: 32,
                    padding: '0 12px',
                    borderRadius: 'var(--nutui-radius-l)',
                    marginRight: -8,
                  }}
                >
                  搜索
                </Button>
              }
            />
          </MaterialView>
        </div>
        <div style={rowStyle}>
          {back}
          <MaterialView scene="top-plain" style={{ flex: 1, minWidth: 0 }}>
            <SearchBar
              style={searchStyle}
              leftIn={null}
              placeholder="搜搜感兴趣的商品吧"
              rightIn={
                <Photograph
                  color="var(--nutui-color-text-help)"
                  onClick={() => console.log('识图')}
                />
              }
            />
          </MaterialView>
        </div>
        <div style={rowStyle}>
          {back}
          <MaterialView scene="top-plain" style={{ flex: 1, minWidth: 0 }}>
            <SearchBar
              style={searchStyle}
              leftIn={null}
              placeholder="搜搜感兴趣的商品吧"
            />
          </MaterialView>
          <MaterialView
            scene="top-plain"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexShrink: 0,
              width: 100,
              height: 40,
              padding: '0 10px',
              boxSizing: 'border-box',
            }}
          >
            <Star width={20} height={20} onClick={() => console.log('收藏')} />
            <Share width={20} height={20} onClick={() => console.log('分享')} />
            <More width={20} height={20} onClick={() => console.log('更多')} />
          </MaterialView>
        </div>
      </Cell>
    </ConfigProvider>
  )
}
export default Demo11
