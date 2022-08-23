import React from 'react'
import Avatar from '../avatar'
import { Grid } from './grid'
import GridItem from '../griditem'

const GridDemo = () => {
  const handleClick = () => {
    console.log('点击了第几个')
  }
  return (
    <>
      <div className="demo">
        <h2>基础用法</h2>
        <Grid>
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>自定义列数</h2>
        <Grid columnNum={3}>
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>正方形格子</h2>
        <Grid columnNum={3} square>
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>格子间距</h2>
        <Grid gutter={3}>
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>内容翻转</h2>
        <Grid reverse>
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>内容横向</h2>
        <Grid direction="horizontal">
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>图标颜色/大小</h2>
        <Grid columnNum="3" iconColor="#fa2c19">
          <GridItem icon="dongdong" text="文字" />
          <GridItem
            icon="dongdong"
            text="文字"
            iconColor="#478EF2"
            iconSize="40"
          />
          <GridItem icon="dongdong" text="文字" />
        </Grid>

        <h2>自定义内容</h2>
        <Grid border={false}>
          <GridItem icon="dongdong" text={<span>More</span>} />
          <GridItem
            text={
              <Avatar
                className="demo-avatar"
                icon="my"
                color="#fff"
                bgColor="#FA2C19"
              />
            }
            onClick={handleClick}
          />
          <GridItem
            icon={
              <Avatar
                className="demo-avatar"
                icon="my"
                color="#fff"
                bgColor="#FA2C19"
              />
            }
          />
          <GridItem>
            <Avatar
              size="large"
              icon="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
            />
          </GridItem>
        </Grid>
      </div>
    </>
  )
}

export default GridDemo
