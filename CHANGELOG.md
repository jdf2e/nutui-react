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
