import React from 'react'
import { Grid } from './grid'
import GridItem from '../griditem'

const GridDemo = () => {
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
      </div>
    </>
  )
}

export default GridDemo
