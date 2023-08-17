# v2.0.13
`2023-08-16`

* :sparkles: feat: dialog 支持函数调用 (#1315) @oasis-cloud
* :sparkles: feat: toast 支持函数调用 (#1307) @oasis-cloud
* :sparkles: feat: 提取 Taro 的 Demo 到 workspace (#1302) @oasis-cloud
* :bug: fix: icons 版本更新 (#1310) @oasis-cloud
* :bug: fix: 非 undefined 的 falsely 值无法传递给子组件 (#1312) @qnnp
* 📖 docs: 删除了skeleton文档中无用的props(width,height) (#1303) @ivan-My


# v2.0.12
`2023-08-11`

* :bug: fix(Avatar): 解决在小程序环境下，使用Avatar.Group无法正常展示头像问题 (#1296) @Tralafalgar Wang
* :bug: fix: overlay 的 zIndex 属性改为 css 变量 (#1294) @oasis-cloud
* :bug: fix: 修复 form 设置 labelPosition=top 的样式 (#1300) @oasis-cloud


# v2.0.11
`2023-08-09`

* :sparkles: feat: 新增 tour 引导组件 (#1279) @junjun666
* :bug: fix: h5下多选上传时 uid 重复的问题 (#1269) @Liuqh233
* :bug: fix: input 组件点击清除图标无法清空内容 (#1292) @oasis-cloud
* :bug: fix: numberkeyboard 设置标题后，完成按钮应该触发 onConfirm 事件 (#1285) @oasis-cloud
* :bug: fix: uploader h5/taro 增加校验 (#1297) @junjun666
* :bug: fix: uploader taro-h5 上传状态样式错乱 (#1293) @junjun666
* 📖 docs: divider 组件的 styles 属性示例改为 style (#1290) @oasis-cloud
* 📖 docs: numberkeyboard 的 type 属性类型更新 (#1284) @oasis-cloud
* 📖 docs: step 组件的 description 属性示例改为节点的实现方式 (#1289) @oasis-cloud
* 📖 docs: 调整 image tao 文档中引入包名 (#1295) @oasis-cloud


# v2.0.10
`2023-08-04`

* :sparkles: feat: loading 组件 (#1204) @mike8625
* :sparkles: feat: 日历支持footer的children定义，增加日历+datepicker的demo (#1277) @xiaoyatong
* :bug: fix: elevator 计算索引出现 -1，导致组件运行报错 (#1276) @oasis-cloud
* :bug: fix: loading 组件导出 props 类型 (#1278) @oasis-cloud


# v2.0.9
`2023-08-02`

* :sparkles: feat(notify): 支持函数调用的展开和关闭 (#1271) @oasis-cloud
* :bug: fix: space 版本号修改为 2.0 (#1265) @oasis-cloud
* 🔨 chore(config): 优化 taro demo 环境配置文件 (#1266) @oasis-cloud
* 📖 docs: cascader 文档更新 (#1270) @vapao
* 📖 docs: tag 文档和 demo 同步 (#1275) @oasis-cloud
* 📖 docs: 升级文档更新 (#1274) @oasis-cloud


# v2.0.8
`2023-07-28`

* :sparkles: feat: 增加了space组件 (#1259) @ivan-My
* 🛠 refactor: tabs 去除 console (#1261) @vapao
* 🔨 chore(script): 简化开发环境启动逻辑 (#1264) @Eiinu



# v2.0.7
`2023-07-26`

* :sparkles: feat: formitem label 支持 reactnode (#1254) @oasis-cloud
* :sparkles: feat: uploader 添加上传的响应数据 (#1251) @逍遥
* 🔨 chore: 优化 any 类型 (#1222) @junjun666
* 📖 docs(SearchBar): 补充 onClear 属性说明 (#1256) @Tralafalgar Wang


# v2.0.6
`2023-07-21`

* :bug: fix(Address): 修复Address组件通过点击CloseIcon和Overlay关闭后，无法再次打开的问题 (#1233) @Tralafalgar Wang
* :bug: fix(button): 渐变色导致边框出现重叠 (#1250) @oasis-cloud


# v2.0.5
`2023-07-19`

* :bug: fix(sticky): 组件卸载移除 tap 事件改为移除 scroll 事件 (#1235) @oasis-cloud
* :bug: fix: height is null (#1239) @Liuqh233
* :bug: fix: 修复popover滑动定位错位的问题 (#1232) @junjun666
* :sparkles: perf: configProvider 组件性能优化 (#1230) @大喵
* 🔨 chore: site 内部移除 taro components @oasis-cloud


# v2.0.4
`2023-07-14`

* :sparkles: feat: configprovider 组件支持传入 className 和 style 属性 (#1219) @大喵
* :bug: fix(button): fill=none & type=default 样式修复 (#1215) @Eiinu
* :bug: fix(form): formItem 的 props 改为 Partial (#1221) @oasis-cloud
* :bug: fix: cascader onChange 触发2次问题修复 (#1224) @xiaoyatong
* :bug: fix: countdown手动控制demo展示样式优化 (#1229) @songsong
* :bug: fix: signature组件提取样式变量+修复taro h5 demo签字时滚动问题 (#1220) @songsong
* :bug: fix: tabs组件在抖音小程序展示异常 (#1211) @oasis-cloud
* :bug: fix: 修复signature小程序下demo签字时页面跟随滚动问题 (#1225) @songsong
* :bug: fix: 文档格式化 @hanyuxinting


# v2.0.3
`2023-07-12`

* :sparkles: feat: image 支持 taro (#1190) @oasis-cloud
* :sparkles: feat: menu 增加打开和关闭的回调方法 (#1206) @oasis-cloud
* :sparkles: feat: 类型文件中导出组件的 props, 简化组件 props 引入方式 (#1205) @oasis-cloud
* :bug: fix: infiniteloading taro doc (#1207) @junjun666
* :bug: fix: 组件2.0走查问题修复 (#1172) @junjun666
* 🔨 chore: pnpm workspace (#1199) @junjun666
* 🔨 chore: 兼容ssr之修复引入组件库启动报错 (#1212) @junjun666
* 📖 docs(form): nativeType 改为 formType (#1209) @oasis-cloud


# v2.0.2
`2023-07-07`

* :sparkles: feat: 日历增加不可选状态、增加style、className 的透传 (#1193) @xiaoyatong
* :bug: fix: animatingNumber组件暗黑模式适配+demo优化 (#1184) @songsong
* :bug: fix: circleprogress color 属性的类型优化 (#1191) @junjun666
* 🔨 chore(backtop): 优化 demo 和文档 (#1186) @Eiinu
* 🔨 chore(deps): add @nutui/touch-emulator (#1196) @Eiinu
* 🔨 chore(progress): update demo (#1192) @Eiinu
* 🔨 chore: overlay 动效优化 (#1183) @junjun666

# v2.0.1
`2023-07-05`

* :sparkles: feat: tag 新增 info 类型 (#1180) @xiaoyatong
* :bug: fix(searchbar): 修复 Taro-H5 下 onSearch 无法触发的问题 (#1178) @Eiinu
* :bug: fix: button 组件在 taro h5 中不设置 opentype (#1167) @oasis-cloud
* :bug: fix: datepicker 修改列数据后，更新下一级数据 (#1179) @xiaoyatong
* :bug: fix: demo 中 input 布局换行 (#1170) @oasis-cloud
* :bug: fix: demo 中 tabs 采用独立状态 (#1169) @oasis-cloud
* :bug: fix: eslint 错误修复 (#1175) @oasis-cloud
* :bug: fix: form 在处理组件受控和非受控的时候存在冲突 (#1166) @oasis-cloud
* :bug: fix: 关闭主题定制入口 (#1171) @oasis-cloud
* :bug: fix: 调整 demo 中 image 组件的间距 (#1168) @oasis-cloud
* 📖 docs: swiper 文档中的 autoplay 描述修复 (#1165) @oasis-cloud
* 📖 docs: update doc link (#1176) @Eiinu


# v2.0.0-beta.3
`2023-06-30`

* 🔨 chore: 增加组件名称调整的内容 (#1161) @oasis-cloud
* 📖 docs: 统一升级文档中的修改的描述术语 (#1159) @xiaoyatong
* :bug: fix: 修改migrate文档 (#1164) @junjun666
* :bug: fix: 单元测试问题修复 (#1158) @Eiinu
* 🛠 refactor: 调整 MenuItem CellGroup SwiperItem 使用方式为 Menu.Item Cell.Group… (#1160) @oasis-cloud


# v2.0.0-beta.2
`2023-06-28`

* :sparkles: feat: 日历组件新增选择周 type='week' 模式 (#1152) @xiaoyatong
* :bug: fix: dialog spelling mistake (#1148) @Katz
* :bug: fix: fit&wxwork (#1146) @junjun666
* :bug: fix: 优化 TrendArrow 组件 props (#1150) @songsong
* :bug: fix: 修改navbar组件demo样式 (#1145) @songsong
* 🛠 refactor: 属性定义走查修复 (#1149) @xiaoyatong
* 🔨 chore(virtuallist): 调整 itemRender (#1151) @Eiinu


# v2.0.0-beta.1
`2023-06-21`

* :bug: fix(collapse): 测试问题修复 (#1132) @Eiinu
* :bug: fix: address taro 白屏 (#1140) @xiaoyatong
* :bug: fix: popup title (#1143) @xiaoyatong
* :bug: fix: remove bem (#1138) @oasis-cloud
* :bug: fix: 修复toast组件屏幕锁定不能滚动的问题 (#1134) @junjun666
* :bug: fix: 单元测试问题修复 (#1137) @Eiinu
* 🛠 refactor: address (#1104) @xiaoyatong
* 🛠 refactor: calendar (#1087) @xiaoyatong
* 🔨 chore(ci): delete sync-gitcode.yml @Eiinu
* 🔨 chore: popover review (#1127) @junjun666
* 🔨 chore: 更新 taro 版本到 3.6.8 @oasis-cloud
* 🔨 chore: 移除 @bem-react/classname (#1142) @oasis-cloud


# v2.0.0-alpha.18
`2023-06-16`

* 🔨 chore(tabbar): 调整 Badge 相关 Props (#1126) @Eiinu
* 📖 docs: update migrate-from-v1.md (#1131) @Eiinu
* :sparkles: feat: 修改升级文档 (#1125) @oasis-cloud
* :bug: fix: button 组件在 taro h5 中的类型优化 (#1133) @oasis-cloud
* :bug: fix: uploader 英文文档修改 (#1124) @oasis-cloud
* :bug: fix: 修复inputnumber在taro H5样式失效的问题 (#1130) @junjun666
* :bug: fix: 完善migrate-from-v1文档 (#1129) @songsong


# v2.0.0-alpha.17
`2023-06-14`

* :bug: fix: searchbar shape=round 效果差的问题 (#1109) @xiaoyatong
* :bug: fix: swipe 类型和文档优化 (#1122) @oasis-cloud
* 🛠 refactor: form (#1118) @oasis-cloud
* 📖 docs: 修改布局文档相关 @hanyuxinting
* 📖 docs: 文档走查及问题修复 (#1123) @xiaoyatong
* 📖 docs: 文档走查及问题修复-基础&布局组件(#1117) @Eiinu
* 📖 docs: 文档走查及问题修复-导航组件 (#1119) @xiaoyatong


# v2.0.0-alpha.16
`2023-06-09`

* :bug: fix(toast): 修复连续调用 show 方法时无法销毁的问题 (#1102) @Eiinu
* :bug: fix: dialog 需要增加 overlay 的样式，否则按需加载样式出现异常 (#1103) @oasis-cloud
* :bug: fix: menu 组件被使用 transform 的组件嵌套后，遮罩层发生偏移 (#1093) @oasis-cloud
* :bug: fix: noticebar 修复小程序多行展示问题 (#1107) @xiaoyatong
* :bug: fix: pikcer 在关闭动画未结束时修改 visible，导致状态更新异常 (#1097) @oasis-cloud
* 🛠 refactor: datepicker (#1091) @xiaoyatong
* 🔨 chore: 修复 Taro Demo 的字号 (#1105) @oasis-cloud
* 🔨 chore(script): 生成 Props 功能增强 (#1096) @Eiinu
* 📖 docs: 文档修订 (#1106) @xiaoyatong


# v2.0.0-alpha.15
`2023-06-07`

* :sparkles: feat(ci): add codecov (#1092) @Eiinu
* :sparkles: feat(ci): add lint action (#1098) @Eiinu
* :sparkles: feat: imagepreview 组件在小程序中支持长按图片保存 (#1090) @oasis-cloud
* :bug: fix: 单元测试问题修复 (#1095) @Eiinu
* 🛠 refactor: card (#1069) @拧巴的猫
* 🛠 refactor: infiniteloading (#1085) @junjun666
* 🛠 refactor: signature (#1080) @拧巴的猫
* 🛠 refactor: tag (#1089) @xiaoyatong
* 🛠 refactor: TimeSelect (#1088) @Eiinu


# v2.0.0-alpha.14
`2023-06-02`

* 🛠 refactor: barrage (#1072) @junjun666
* 🛠 refactor: popover (#1060) @junjun666
* 🛠 refactor: sidenavbar (#1057) @oasis-cloud
* :bug: fix(backtop): 修改 demo (#1083) @Eiinu
* :bug: fix: ellipsis 在 taro 构建的 H5 中偶现无法暂时省略号的情况 (#1076) @oasis-cloud
* :bug: fix: input 组件忽略 maxlength 和 password 属性 (#1079) @oasis-cloud
* :bug: fix: menu 的 closeOnClickOverlay 改为 closeOnOverlayClick (#1084) @oasis-cloud
* :bug: fix: picker 组件渲染的时候触发 onConfirm (#1082) @oasis-cloud
* 📖 docs(textarea): 更新文档说明 (#1086) @Eiinu
* 📖 docs: checkbox demo 增加头部 (#1075) @oasis-cloud
* 📖 docs: 文档中 css 变量表格的文案优化 (#1077) @oasis-cloud


# v2.0.0-alpha.13
`2023-05-31`

* 🛠 refactor: animatingNumbers (#1048) @拧巴的猫
* 🛠 refactor: trendArrow (#1066) @拧巴的猫
* 🛠 refactor: video (#1034) @junjun666
* 🛠 refactor: watermark (#1071) @Eiinu
* :sparkles: feat: 构建类型文件中的注释，方便在编辑器中查看属性的说明 (#1068) @oasis-cloud
* :bug: fix: popup 在 taro 中的动效优化 (#1065) @oasis-cloud
* :bug: fix: 修改 uploader 和 video 的 taro 文档 (#1070) @junjun666
* 📖 docs: correct spelling errors (#1058) @konka



# v2.0.0-alpha.12
`2023-05-26`

* 🛠 refactor: actionSheet (#1053) @xiaoyatong
* 🛠 refactor: countdown (#1040) @拧巴的猫
* 🛠 refactor: searchBar (#1047) @xiaoyatong
* 🛠 refactor: shortPassword (#1046) @Eiinu
* 🛠 refactor: toast (#1026) @justExplore
* 🛠 refactor: virtualList (#1056) @Eiinu
* :sparkles: feat: ellipsis add width attribute (#1038) @Zhu Da Shuai
* :sparkles: feat: 导出主题中的 CSS 变量类型 (#1050) @oasis-cloud
* 📖 docs: import touch-emulator (#1045) @oasis-cloud


# v2.0.0-alpha.11
`2023-05-24`

* 🛠 refactor: collapse (#1027) @Eiinu
* 🛠 refactor: Skeleton (#1036) @Eiinu
* :sparkles: feat: 添加土耳其语 (#1028) @manin
* :bug: fix(fixednav): 修改 onSelect 参数顺序 (#1035) @Eiinu
* :bug: fix: 修复taro下拉刷新组件偶发未触发canRelease状态时松手，组件不会自动回弹的问题 (#1029) @Z-Bokle
* 🔨 chore: 增加同步升级文档到 docs 仓库的脚本 (#1044) @oasis-cloud
* 🔨 chore: 完善组件导出的类型 (#1039) @oasis-cloud
* 🔨 chore: 构建每个组件的 css 文件 (#1037) @oasis-cloud
* 📖 docs: 文档 props 标题统一修复 (#1041) @oasis-cloud


# v2.0.0-alpha.10
`2023-05-19`

* :sparkles: feat(progress): 添加 lazy、delay 属性 (#1023) @Eiinu
* :bug: fix: swiper loop 模式位置计算错误 (#1018) @oasis-cloud
* 🛠 refactor: imagepreview (#1019) @xiaoyatong
* 🛠 refactor: noticebar (#1024) @xiaoyatong
* 🛠 refactor: steps (#1021) @oasis-cloud
* 📖 docs: icon 文档修订 (#1022) @oasis-cloud


# v2.0.0-alpha.9
`2023-05-17`

* :sparkles: feat: add create-properties.js (#1001) @Eiinu
* :sparkles: feat: cascader支持受控 (#1000) @xiaoyatong
* :sparkles: feat: elevator 支持右侧索引是否展示 (#1006) @拧巴的猫
* :bug: fix(image): lazy 优化观察对象数量 (#1015) @Eiinu
* :bug: fix: tabs children 变更后需要展示新的 title (#999) @oasis-cloud
* :bug: fix: 格式化，删掉某些无用代码 (#1014) @xiaoyatong
* 🛠 refactor: notify (#983) @拧巴的猫
* 🛠 refactor: NumberKeyboard (#1012) @Eiinu
* 🛠 refactor: price (#989) @拧巴的猫
* 🛠 refactor: pulltorefresh (#1011) @oasis-cloud
* 🛠 refactor: radio (#1009) @oasis-cloud
* 🛠 refactor: Range (#991) @Eiinu
* 🛠 refactor: swiper 重构；indcator 的索引计算改为从 0 开始 (#1008) @oasis-cloud
* 🔨 chore: autoplay -> autoPlay (#1007) @Eiinu
* 📖 docs(tabbar): update description (#1004) @Eiinu


# v2.0.0-alpha.8
`2023-05-12`
* :sparkles:feat: cascader支持受控 (#1000) @xiaoyatong
* :bug: fix: tabs children 变更后需要展示新的 title (#999) @oasis-cloud
* 🛠 refactor: Range (#991) @Eiinu

# v2.0.0-alpha.7
`2023-05-12`
* :bug: fix: tabs children 变化需要更新选中状态 @oasis-cloud

# v2.0.0-alpha.6
`2023-05-12`

* 🛠 refactor: cascader (#993) @xiaoyatong
* 🛠 refactor: picker (#975) @xiaoyatong
* 🛠 refactor: table (#982) @xiaoyatong
* 🛠 refactor: TextArea (#979) @Eiinu
* :bug: fix: image src 初始状态未空，导致出发加载失败事件 (#988) @oasis-cloud
* 📖 docs(progress): demo 代码更新 (#986) @Eiinu
* 📖 docs(progress): update demo (#987) @Eiinu
* 📖 docs: tabs 文档中的 titleNode 修改为 title (#995) @oasis-cloud
* 🔨 chore: taro es 构建移入 vite 配置文件 (#990) @oasis-cloud


# v2.0.0-alpha.5
`2023-05-10`

* 🛠 refactor: checkbox (#974) @oasis-cloud
* 🛠 refactor: circleprogress-v2.0 (#949) @junjun666
* 🛠 refactor: ellipsis-v2.0 (#963) @junjun666
* 🛠 refactor: empty-v2.0 (#977) @junjun666
* 🛠 refactor: swipe (#958) @justExplore
* 🛠 refactor:avatar-v2.0 (#970) @junjun666
* 📖 docs: 增加 icon 的复制功能 (#973) @oasis-cloud
* :sparkles: feat: cellgroup组件增加单元格之间是否展示分割线props (#961) @拧巴的猫
* :bug: fix: tabbar 通过 Tabbar.Item 方式使用未加载 item 的样式 (#972) @oasis-cloud
* :bug: fix: 修复elevator小程序快速滑动后闪动问题 (#984) @拧巴的猫


# v2.0.0-alpha.4
`2023-05-05`

* 🛠 refactor: circleprogress-v2.0 (#949) @junjun666
* 🛠 refactor: input (#962) @oasis-cloud
* 🛠 refactor: Tabbar (#935) @Eiinu
* :bug: fix: badge 组件的默认样式中，去掉 margin-right (#967) @xiaoyatong
* 🎨 style: fix endLine display error (#964) @HaiTao

# v2.0.0-alpha.3
`2023-04-28`

* :bug: fix: overlay 属性 onClick 暴露、lockscroll 相关demo 修订 (#959) @xiaoyatong
* :bug: fix: 修改taro增加主题编译 (#950) @junjun666
* 🛠 refactor: dialog (#945) @xiaoyatong
* 🛠 refactor: switch (#941) @拧巴的猫
* 🛠 refactor: tabs (#939) @oasis-cloud
* 🔨 chore: website 2.0 (#955) @oasis-cloud
* 📖 docs: button 文档表格优化 (#956) @oasis-cloud


# v2.0.0-alpha.2
`2023-04-26`

* 🛠 refactor: navbar (#890) @拧巴的猫
* 🛠 refactor: animate (#940) @junjun666
* 🛠 refactor: badge (#936) @xiaoyatong
* 🛠 refactor: drag (#937) @拧巴的猫
* 🛠 refactor: elevator (#927) @拧巴的猫
* 🛠 refactor: menu (#923) @oasis-cloud
* 🛠 refactor: progress (#943) @Eiinu
* 🔨 chore: sync pnpm-lock @oasis-cloud
* :bug: fix: 修改taro增加主题编译 (#950) @junjun666


# v2.0.0-alpha.1
`2023-04-21`

* 🔨 chore: markdown 中 props、css variables 类型和默认值增加代码标识 @oasis-cloud
* 🛠 refactor: Audio (#930) @eiinu
* 🛠 refactor: layout (#934) @oasis-cloud
* 🛠 refactor: popup 2.0 (#929) @xiaoyatong
* 🛠 refactor: uploader (#902) @junjun666


# v2.0.0-alpha.0
`2023-04-20`

* 🛠 refactor: backtop (#912) @eiinu
* 🛠 refactor: button (#904) @oasis-cloud
* 🛠 refactor: cell (#876) @拧巴的猫
* 🛠 refactor: divider (#891) @junjun666
* 🛠 refactor: fixednav (#865) @eiinu
* 🛠 refactor: grid (#882) @eiinu
* 🛠 refactor: image (#892) @oasis-cloud
* 🛠 refactor: indicator (#893) @xiaoyatong
* 🛠 refactor: inputnumber (#888) @junjun666
* 🛠 refactor: overlay (#886) @junjun666
* 🛠 refactor: pagination (#861) @eiinu
* 🛠 refactor: Rate (#894) @eiinu
* 🛠 refactor: sticky (#906) @oasis-cloud



# v1.x

去 [GitHub](https://github.com/jdf2e/nutui-react/blob/1.x-stable/CHANGELOG.md) 查看 `1.x` 的 Change Log。
