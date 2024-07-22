import { Home } from 'nutui_jdharmony_example/src/main/ets/components/pages/Home'
import {  JDRouterStack } from '@jd-oh/base-router'
@Entry
@Component
export struct Index {
  @State title: string = '首页';

  build() {
    Column() {
      JDRouterStack() {
         Home()
      }
    }
  }
}
