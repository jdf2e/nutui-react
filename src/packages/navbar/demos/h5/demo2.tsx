import React from 'react'
import { NavBar, Toast, Space } from '@nutui/nutui-react'
import { ArrowLeft, Close, More, Share } from '@nutui/icons-react'
import { withTranslation, propsType } from '@/translation/demo.translation'

const Demo2 = ({ t }: propsType) => {
  const styles = {
    flexCenter: {
      display: 'flex',
      alignItems: 'center',
    },
    title: {
      fontSize: '18px',
      fontWeight: 'bold',
      lineHeight: '26px',
    },
    description: {
      fontSize: '12px',
      fontWeight: 400,
      color: 'rgba(0,0,0, 0.5)',
      lineHeight: '16px',
    },
  }

  return (
    <>
      <Space direction="vertical">
        <div style={{ background: '#fff' }}>
          <NavBar
            back={
              <>
                <ArrowLeft />
                {t.back}
              </>
            }
            right={<Share onClick={(e) => Toast.show('icon')} />}
            onBackClick={(e) => Toast.show(t.back)}
          >
            {t.pageTitle}
          </NavBar>
        </div>
        <div style={{ background: '#fff' }}>
          <NavBar
            right={<Share onClick={(e) => Toast.show('icon')} />}
            onBackClick={(e) => Toast.show(t.back)}
          >
            {t.pageTitle}
          </NavBar>
        </div>
        <div style={{ background: '#fff' }}>
          <NavBar
            right={<span onClick={(e) => Toast.show(t.clear)}>{t.clear}</span>}
            left={<Close />}
            back={<ArrowLeft />}
            onBackClick={(e) => Toast.show(t.back)}
          >
            <div style={{ ...styles.flexCenter, flexDirection: 'column' }}>
              <span style={styles.title} onClick={(e) => Toast.show(t.title)}>
                {t.pageTitle}
              </span>
              <span style={styles.description}>{t.subtitle}</span>
            </div>
          </NavBar>
        </div>
        <div style={{ background: '#fff' }}>
          <NavBar
            back={<ArrowLeft />}
            right={
              <>
                <span onClick={(e) => Toast.show(t.edit)}>{t.edit}</span>
                <More onClick={(e) => Toast.show('icon')} />
              </>
            }
            onBackClick={(e) => Toast.show(t.back)}
          >
            <span onClick={(e) => Toast.show(t.pageTitle)}>{t.pageTitle}</span>
          </NavBar>
        </div>
      </Space>
    </>
  )
}

export default withTranslation(Demo2)
