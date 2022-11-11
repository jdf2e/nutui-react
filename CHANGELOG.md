# v1.3.10
`2022-11-09`

* :bug: fix: tabbarItem组件自定义名称统一为className字段 (#434) @cuicuiworld
* :bug: fix: checkbox 内部类型可选 (#430) @oasis-cloud
* :bug: fix: noticebar 关闭事件优化，小程序样式优化 (#424) @vickyYe
* :bug: fix: 取消mixin样式文件引入 (#428) @libin0824
* :bug: fix(button): add space between icon and text (#418) @Kwan
* :bug: fix: cell 组件 icon marign 设置错误 (#423) @oasis-cloud
* :bug: fix: cell组件删除冗余样式 (#401) @irisSong
* :bug: fix: 变量提取、暗黑模式适配：cellgroup、demo主样式 (#404) @xiaoyatong
* :sparkles: feat: tag组件添加自定义className和style属性 (#435) @cuicuiworld
* :sparkles: feat: Address 增加Elevator Taro 适配 (#400) @yangxiaolu1993
* :sparkles: feat: CheckboxGroup支持options设置子元素 (#425) @cuicuiworld
* :sparkles: feat: price组件新增自定义大中小尺寸、自定义符号展示在价格前或后、支持没有小数 (#429) @irisSong
* :sparkles: feat: input组件支持name属性 (#427) @simpleStyle
* :sparkles: feat: 增加issue-helper入口 (#421) @Ymm0008
* :sparkles: feat: 单选按钮组支持options设置子元素 (#374) @cuicuiworld
* 📖 docs: tabs 文档中的粘性布局文案修改 (#403) @oasis-cloud
* 📖 docs: radio和checkbox文档优化 (#431) @oasis-cloud
* 📖 docs: 修复部分演示组件的文案显示问题 (#419) @Kwan

# v1.3.9
`2022-11-02`

* :bug: fix: cellgroup组件自定义名称统一为className字段 (#399) @irisSong
* :bug: fix: GridItem缺少onClick事件;DatePicker修改onChange名 (#394) @yangxiaolu1993
* :bug: fix: 支持css粘性布局，引起的左右布局bug修复 (#393) @leiyu0932
* :bug: fix: button 自定义 style 重复生效 (#391) @oasis-cloud
* :sparkles: chore: 生成多语言用到的 key (#390) @oasis-cloud
* :bug: fix: 修复cellgroup组件描述判断错误问题 (#389) @irisSong
* :bug: fix: sass 变量增加 !default (#387) @oasis-cloud
* :sparkles: docs: icon 大小展示按照从小到大顺序 (#386) @oasis-cloud
* :bug: fix: elevator组件taro版本适配完成 (#372) @irisSong
* :sparkles: feat: backtop 组件适配 taro (#376) @vickyYe

# v1.3.8
`2022-10-26`

* :sparkles: feat: tabs 组件支持 css 粘性布局 (#346) @leiyu0932
* :sparkles: feat: tabpane 组件增加 className 属性 (#343) @oasis-cloud
* :sparkles: feat: sidenavbar 事件名修改为 onClick (#359) @oasis-cloud
* :sparkles: feat: collapse 组件增加 className 和 style 支持 (#360) @oasis-cloud
* :sparkles: feat: tabbar 组件增加 onSwitch 事件 (#361) @oasis-cloud
* :sparkles: feat: timeselect 组件增加 onSelect onPannelChange onTimeChange 事件 (#362) @oasis-cloud
* :sparkles: feat: virtuallist 组件增加 onScroll 事件 (#363) @oasis-cloud
* :sparkles: feat: input、noticebar、range组件 event 事件修改, divider组件demo优化 (#365) @vickyYE
* :sparkles: feat: avartar、steps、video、inputnumber 组件事件优化 (#371)  @junjun666
* :bug: fix: 修改 signature 组件taro demo文案 (#344)  @irisSong
* :bug: fix: switch 组件-事件命名修改 (#352)  @libin0824
* :bug: fix: radio 组件中的 render 数组改成 fragment (#353) @oasis-cloud
* :bug: fix: taro/components 组件的使用，taro:h5 启动报错 (#357) @oasis-cloud
* :bug: fix: uploader 使用 isDeletable 无法隐藏 删除按钮 (#366)  @junjun666
* :bug: fix: cell 和 signature 修改 Event (#367) @irisSong
* :bug: fix: 修改 collapse 组件的事件名称 (#369)  @zhenyulei
* 📖 docs: button 组件文档中事件 click 改为 onClick (#356) @oasis-cloud
* 📖 docs: icon 组件文档中事件 click 改为 onClick (#358) @oasis-cloud
* 📖 docs: input 数据变化控制例子补充 (#364) @vickyYE
* 📖 docs: layout 文档修改 (#368) @Ymm0008 
* 📖 docs: tabs 文档优化 (#370) @oasis-cloud


# v1.3.7
`2022-10-19`
* :sparkles: feat: 优化 menu 组件的弹出动画效果 (#341) @oasis-cloud
* :sparkles: chore: add issue template (#334) @oasis-cloud
* :bug: fix: feat: Audio 组件 Demo 变量名修改 (#340) @libin0824
* :bug: fix: Collapse 改变变量的名字 (#336) @zhenyulei

# v1.3.6
`2022-10-12`
* :sparkles: feat: Swipe 组件适配小程序，Searchbar 增加 onCancel 回调函数 (#311) @Ymm0008
* :sparkles: chore: Switch demo import 优化 (#332) @oasis-cloud
* :bug: fix: Signature 和 Drag 组件 Taro 适配完成 (#322) @irisSong
* :bug: fix: searchbar 组件样式兼容 (#333) @Ymm0008

# v1.3.5
`2022-09-28`
* :sparkles: feat: cascader 组件适配 taro (#318) @ailululu
* :sparkles: feat: Address 组件Taro适配 (#327) @yangxiaolu1993
* :sparkles: feat: imagepreview 适配 taro (#326) @eiinu
* :sparkles: feat: 对话框 Dialog 适配Taro修改 (#323) @yangjinjun3
* :bug: fix:rate组件+switch组件 demo优化, rate组件lint问题修复 (#321) @libin0824
* :sparkles: feat: notify组件适配taro (#319) @vickyYe
* :sparkles: feat: table 组件适配小程序 (#320) @eiinu
* :bug: fix: AnimatingNumber 组件 Taro 适配完成 (#317) @irisSong
* :bug: fix: Infiniteloading修复ts报错 (#316) @junjun666

## v1.3.4
`2022-09-21`
* :sparkles: feat: Infiniteloading滚动taro适配优化开发 (#308) @junjun666
* :sparkles: feat: 适配 Taro h5。处理样式兼容问题。 (#307) @xiaoyatong
* :sparkles: chore: demo 增加白底 (#306) @oasis-cloud
* :sparkles: feat: 适配 Taro 的 3.5.x 版本；清理无用依赖；增加小程序首页的分享功能。 (#305) @xiaoyatong
* :sparkles: feat: 适配Taro h5，调整样式配置。 (#309) @xiaoyatong
* :sparkles: feat: nutui-react taro uploader功能更新 (#303) @junjun666
* :bug: fix: createRoot 类型检查 (#302) @oasis-cloud
* :sparkles: feat: uploader组件h5功能新增和文档修复 (#301) @junjun666
* :sparkles: feat: 增加布局组件Sticky (#294) @mangov587
* :sparkles: chore: 文档需要增加 demo 用到的 css (#300) @oasis-cloud
* :sparkles: chore: taro docs (#299) @oasis-cloud
* :sparkles: chore: typescript 4.8 (#298) @oasis-cloud
* :bug: fix: Iconclassprefix waring 问题修复 (#297) @oasis-cloud
* :sparkles: feat: toast适配taro (#295) @ovickyYe
* :sparkles: feat: audio组件taro适配 (#292) @libin0824
* :sparkles: chore: taro docs 预览 (#289) @oasis-cloud
* :sparkles: feat: Grid 适配 Taro。 (#287) @xiaoyatong
* :sparkles: feat: 增加 Taro 多端输出路径。 (#286) @xiaoyatong

## v1.3.3
`2022-09-14`
* :sparkles: chore: 组件 icon 自定义以及优化typing 导出 (#283) @oasis-cloud
* :sparkles: chore: sideEffects 优化 (#280) @oasis-cloud
* :sparkles: feat: drag组件增加单元测试 (#277) @irisSong
* :sparkles: feat: 适配jd小程序。 (#278) @xiaoyatong
* :bug: fix: 修复 button 组件 loading 效果 (#284) @oasis-cloud
* :bug: fix: countdown 组件 props 能力补全、demo 和文档国际化 (#279) @irisSong
* :bug: fix : rate组件taro适配 (#276) @libin0824

## v1.3.2
`2022-09-07`
* :sparkles: feat: Popover 新增国际化 (#260) @yangxiaolu1993
* :sparkles: feat: 下拉刷新组件 (#261) @oasis-cloud
* :sparkles: feat: Actionsheet 新增单元测试，修改事件属性名。 (#272) @xiaoyatong
* :sparkles: feat: Badge 增加测试用例，修改top、right 值的适配，去掉doc中的hidden属性，无此属性。 (#269) @xiaoyatong
* :sparkles: feat: noticebar、range组件增加单元测试 (#267) @vickyYe
* :sparkles: feat: menu scrollFixed 属性 (#268) @oasis-cloud
* :sparkles: feat: tabs 增加国际化 (#262) @yangjinjun3
* :sparkles: feat: Picker、Datepicker组件Taro适配 (#259) @yangxiaolu1993
* :bug: fix: elevator组件支持pc端 (#258) @irisSong
* :bug: fix: Swiper组件taro适配优化 (#263) @lkjh3214
* 📖 docs: Badge增加多语言 (#265) @xiaoyatong
* 📖 docs: actionsheet 文档支持多语言版本 (#264) @xiaoyatong
* 📖 docs: radio 组件文档优化并增加单元测试 (#266) @oasis-cloud
* 📖 docs: layout、fixednav 国际化文档，searchbar 单元测试 (#271) @Ymm0008
* 📖 docs: card\drag组件文档和demo国际化, cell组件英文文档修改 (#270) @irisSong

## v1.3.1
`2022-08-31`
* :sparkles: feat: calendar 组件功能补齐、单元测试 (#228) @love_forever
* :bug: fix: audio组件内部css覆盖range组件样式问题修复 (#254) @libin0824
* :sparkles: chore: audio 组件增加 taro 文件 (#253) @libin0824
* :sparkles: feat: 新增 ImagePreview、Dialog国际化&单元测试 (#244) @yangjinjun3
* :sparkles: feat: 增加backtop、input、notify组件的单元测试 (#252) @vickyYe
* :sparkles: feat: textarea 组件增加单元测试、优化自动伸缩高度功能 (#248) @vickyYe
* :sparkles: chore: taro 版本构建不压缩，解决 banner 插入导致打出的文件报错 oasis-cloud
* :sparkles: feat: 新增组件 Grid (#237) @yangxiaolu1993
* :sparkles: chore: 导出组件的 props 类型 oasis-cloud
* :sparkles: feat: 新增 audio 组件 (#250) @libin0824
* :sparkles: feat: 新增 menu 组件 (#251) @oasis-cloud
* :bug: fix: elevator 电梯楼层组件索引滚动后白屏 (#238) @mike8625
* :sparkles: feat: SearchBar、ShortPassword 适配 Taro (#247) @xiaoyatong
* :sparkles: feat: Picker、DatePicker、Address 组件添加国际化 (#236) @yangxiaolu1993
* :sparkles: feat: 新增 cascader 组件 (#202) @ailululu
* :sparkles: feat: 新增 swipe 组件 (#226) @Ymm
* :sparkles: feat: range适配taro (#243) @xiaoyatong

## v1.3.0
`2022-08-24`

* :sparkles: chore: Taro support (#240) @xiaoyatong
* :sparkles: chore: support react18 (#224) @oasis-cloud
* :sparkles: chore: noticebar (#233) @vickyYe
* :sparkles: feat: add SideNavBar (#198) @mangov587
* :sparkles: feat: add Table (#185) @yangjinjun3
* :sparkles: feat: popover 功能补齐与单元测试 (#219) @yangxiaolu1993
* :sparkles: feat: notify 增加props+国际化文档 (#221) @vickyYe
* :sparkles: feat: icon 组件增加自定义字体新方案，增加 fontClassName 属性 (#232) @oasis-cloud
* :sparkles: feat: toast 组件props补齐+国际化，input组件issue问题修改 (#214) @vickyYe
* :sparkles: feat: shortpassword 优化demo，增加单元测试，增加国际化 (#222) @Drjingfubo
* :sparkles: feat: fixednav 单元测试 (#217) @Ymm0008
* :sparkles: feat: timeselect (#216) @shadow-Fiend
* :sparkles: feat: layout props补齐，单元测试 (#208) @Ymm0008
* :sparkles: feat: Address 组件功能补齐-添加默认选中项；单元测试添加 (#207) @yangxiaolu1993
* :sparkles: feat: popup 增加指定节点挂载与多层堆叠功能 (#197) @love_forever
* :sparkles: feat: Swiper 组件能力补齐，新增demo，添加国际化文档 (#196) @lkjh3214
* :bug: fix: checkbox 组件的全选 demo 无法高亮全选按钮 (#239) @oasis-cloud
* :bug: fix: 解决Picker滚动结束延迟触发事件问题 (#218) @yangxiaolu1993
* :bug: fix: radio 组件 demo 中自定义尺寸文案错误 (#231) @oasis-cloud
* :bug: fix: radio 组件 demo 中自定义图标展示错误 (#230) @oasis-cloud
* :bug: fix: checkbox 全选 demo 中的错误 (#229) @oasis-cloud
* :bug: fix: vite 构建 umd 文件时 banner 插入错误 @oasis-cloud
* :bug: fix: 修复Infiniteloading 组件 pullTxt、loadTxt 和 loadMoreTxt 参数无效 (#227) @junjun666
* :bug: fix: radio 组件选中后可以取消的问题 (#211) @oasis-cloud

## v1.2.2
`2022-08-10`

* :zap: feat: range组件props补齐+国际化 (#201) @vickyYE
* :zap: feat: signature组件增加单元测试、文档和demo国际化 (#205) @irisSong
* :zap: test(navbar): navbar unit test (#203) @szg2008
* :zap: test(tabbar): tabbar unit test (#204) @szg2008
* :zap: feat: 新增 searchbar 组件 (#186) @Ymm0008
* :zap: feat(numberkeyboard): new components (#192) @Drjingfubo
* :zap: feat(tabbar): 组件能力补齐 (#178) @szg2008
* :zap: feat: progress 组件 (#187) @ailululu
* :zap: chore: tag 组件 eslint 修复 (#200) @libin0824
* :zap: feat: datepicker 功能补齐 (#182) @yangxiaolu1993
* :zap: feat: tag 组件新增 onClick 事件，closeable 支持非受控(#195) @libin0824
* :zap: feat: divider组件增加单元测试 (#194) @vickyYE
* :zap: feat: Dialog组件增加在线调试能力,文档多语言支持 (#193) @libin0824

## v1.2.1
`2022-08-03`

* :sparkles: feat: video 视频组件 (#174)
* :zap: feat: checkbox props 扩展
* :zap: feat: tabs 能力补齐&单元测试 (#175)
* :zap: feat(navbar): navbar组件能力补齐 (#177)
* :zap: feat: input 组件新增 props (#173)
* :bug: fix: elevator 组件props补全、新增单元测试、demo和文档多语言支持 (#180)
* :bug: fix: 修改steps点击报错和eslint校验报错 (#179)
* 📖docs: feat: timeselect 国际化支持
* 📖docs: feat: vlist 国际化
* 📖docs: feat: tag 增加在线调试能力
* 📖docs: feat: badge 增加在线调试能力
* 📖docs: fix: 修复 video 组件 demo 样式冲突
* 📖docs: feat: noticebar、notify、range、textarea、toast组件增加在线编辑功能 (#190)
* 📖docs: feat: price组件文档和demo国际化 (#191)
* 📖docs: feat: vlist 国际化文档
* 📖docs: feat: animatingnumbers 增加单元测试、文档和demo国际化支持、主题定制支持 (#189)
* 📖docs: feat: divider组件增加国际化demo (#176)
* 📖docs: feat: layout 增加在线调试，变量提取，依赖版本锁定 (#157)
* 📖docs: chore: 在线调试增加scss支持


## v1.2.0
`2022-07-27`

* :bug: fix: html title 文案修改 & button 组件 readme 格式修改 (#126)
* :zap: feat: 国际化语言支持 (#124)
* :zap: feat: add empty & review (#130)
* :bug: fix: 修复 button 组件 demo 中的错误文案 (#134)
* :zap: feat: cell 单元测试完成 (#132)
* :bug: fix: 修复 input 组件添加多语言支持后 placeholder 属性设置不生效的问题
* :bug: fix: fixednav 样式类名优化
* :bug: fix: 修改Button在服务端不渲染class和style (#133)
* :bug: fix: 修复自定义地址组件 (#143)
* :bug: fix: swiper问题修复 (#140)
* :bug: fix: 修复address组件三级地址切换回来二级地址不同步的问题 (#144)
* :bug: fix: dialog 组件多语言后props设置出错
* :zap: feat: 新增collapse组件的单元测试 (#145)
* :zap: feat: tag + switch 组件测试用例 (#148)
* :zap: feat: 新增虚拟列表virtuallist (#136)
* :zap: feat: indicator 组件 (#158)
* :bug: fix: textarea placeholder 设置不生效
* :bug: fix: textarea 组件 change、focus、blur 事件改为 onChange、onFocus、onBlur (#163)
* :zap: feat: popup在线文档接入和国际化支持 (#167)
* :zap: feat: navbar在线文档接入和国际化支持 (#171)
* :zap: feat: tabbar在线文档接入和国际化支持 (#169)
* :bug: fix: empty空状态组件新增国际化文档新增单元测试 (#164)
* :zap: feat: calendar在线文档接入和国际化支持 (#168)
* :zap: feat: indicator指示器组件新增国际化文档 (#166)
* :zap: feat: 弹框增加onClickSelf事件 (#172)
* :zap: feat: timeselect (#149)
* :zap: feat: divider组件新增props (#162)


## v1.1.4
`2022-05-23`

* :zap: feat(upload): upload 组件上传失败时希望可以自定义是否显示图片(#114 ) @junjun666
* :zap: feat(tabbar): tabbar 组件支持路由跳转,文档更新(#123 ) @allan2coder
* :zap: feat(circleprogress): circleprogress 组件 strokeInnerWidth 属性重命名为 strokeWidth，移除 isAuto、progressOption 属性(#121 ) @junjun666
* :zap: feat(avatar): avatar 组件 src 属性重命名为 url，增加 avatargroup 子组件(#121 ) @junjun666
* :zap: feat(skeleton): skeleton 组件 width、height 属性的类型修改为 string(#121 ) @junjun666
* :bug: fix(dialog): 修复 swiper 组件在 Next.js 环境下提示 window not defined 问题 @oasis-cloud
* :bug: fix(backtop): 修复 backtop 组件在 Next.js 环境下提示 document not defined 的问题 @oasis-cloud
* :zap: feat: NutUI-React 官网增加 issue 入口，以及组件文档更新。

## v1.1.3
`2022-04-18`

* :zap: feat(countdown): 新增 countdown 组件(#107 ) @irisSong
* :zap: feat(upload): 新增 defaultImg 属性支持(#108 ) @junjun666
* :bug: fix(dialog): 修复Dialog自定义关闭事件不清除body样式类问题(#111 ) @yangjinjun3
* :zap: feat: NutUI-React 官网增加 countdown 组件的文档。

## v1.1.2
`2022-03-29`

* :zap: feat(tabs): 新增 card 组件(#105 ) @irisSong
* :zap: feat: NutUI-React 官网增加 card 组件的文档。

## v1.1.1
`2022-03-21`

* :zap: feat(tabs):  新增 tabs 组件(#99 ) @HaoGeShuoHuaNiHaoHaoTing
* :zap: feat(datepicker): 新增 datepicker 组件(#102 ) @dushoujun
* :zap: feat(skeleton): 新增 skeleton 组件(#96 ) @junjun666
* :zap: feat: NutUI-React 官网增加 tabs、datepicker、skeleton 组件的文档。


## v1.1.0
`2022-02-25`

* :bug: fix(input):  修复边框的处理(#98) @oasis-cloud
* :bug: fix(overlay): 修复遮罩层在安卓机未显示的问题(#97) @oasis-cloud
* :zap: feat(address):  支持动态设置city(#90) @yangxiaolu1993
* :zap: feat(fixednav): 增加文档调试功能,回调函数名称修改 @Ymm0008
* :zap: feat(popup): 支持className props @szg2008
* :zap: feat: 发布 NutUI-React 官网。


## v1.0.0
`2022-01-10`

> :tada: :tada: :tada: NutUI-React 1.0 来了！

* :zap: feat: 第一个公开版本，发布 Layout、BackTop、Collapse、 ActionSheet、 Toast、 Notify、 Steps、 Drag、 Range、 InfiniteLoading、 Dialog、 Popup、 Swiper、 NoticeBar、 CircleProgress、 Button、 Cell、 Icon、 Price、 Avatar、 OverLay、 Divider、 Navbar、 Elevator、 Tabbar、 FixedNav、 InputNumber、 Checkbox、 Radio、 Picker、 Uploader、 Input、 Switch、 Rate、 Calendar、 ShortPassword、 Tag、 Badge、 Pagination、 Popover、 TextArea、 Signature、 Address、 Barrage
等组件。
* :zap: feat: 发布 NutUI-React 官网。