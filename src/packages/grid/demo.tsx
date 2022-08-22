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
        </Grid>
      </div>
    </>
  )
}

export default GridDemo
