import React from 'react'
import { Cell, Indicator } from '@nutui/nutui-react-taro'
import { View } from '@tarojs/components'
import { harmonyAndRn } from '@/utils/platform-taro'
import pxTransform from '@/utils/px-transform'

const Demo4 = () => {
  return (
    <>
      <Cell>
        <Indicator total={6} current={5} direction="vertical">
          <View
            style={
              !harmonyAndRn()
                ? {
                    display: 'inline-block',
                    width: '14px',
                    height: '14px',
                    lineHeight: '14px',
                    textAlign: 'center',
                    fontSize: '12px',
                    color: '#FFFFFF',
                    border: '1px solid #FFFFFF',
                    borderRadius: '50%',
                    margin: '4px',
                    backgroundColor: 'var(--nutui-color-primary)',
                    boxShadow: `0 0 1px 1px var(--nutui-color-primary)`,
                  }
                : {
                    display: 'inline-block',
                    width: pxTransform(14),
                    height: pxTransform(14),
                    lineHeight: pxTransform(14),
                    textAlign: 'center',
                    fontSize: pxTransform(12),
                    color: '#FFFFFF',
                    borderWidth: 1,
                    borderColor: '#FFFFFF',
                    borderRadius: pxTransform(14),
                    margin: 4,
                    backgroundColor: '#ff0f23',
                    // @ts-ignore
                    shadowColor: '#ff0f23',
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                    shadowOpacity: 1,
                    shadowRadius: 1,
                  }
            }
          >
            {5}
          </View>
        </Indicator>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          style={{
            marginLeft: 50,
          }}
        />

        <Indicator
          total={6}
          current={5}
          direction="vertical"
          type="slide"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
      <Cell style={{ background: '#C2C4CC' }}>
        <Indicator
          total={6}
          current={2}
          direction="vertical"
          color="white"
          style={{
            marginLeft: '50px',
          }}
        />
      </Cell>
    </>
  )
}
export default Demo4
