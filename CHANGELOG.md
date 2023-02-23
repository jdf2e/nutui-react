# v1.4.8
`2023-02-15`

* :sparkles: feat(configprovider): demo 增加国际化 (#706) @eiinu
* :sparkles: feat(rate): demo 增加国际化 (#704) @eiinu
* :sparkles: feat(shortpassword): demo 增加国际化 (#705) @eiinu
* :sparkles: feat(shortpassword): 支持自动聚焦 (#693) @Kason Yang
* :sparkles: feat(sidenavbar): demo 增加国际化 (#709) @eiinu
* :sparkles: feat(switch): demo 增加国际化 (#708) @eiinu
* :sparkles: feat(tag): demo 增加国际化 (#707) @eiinu
* :sparkles: feat: badge组件增加元素提取，增加徽章border设置，完善文档，补充多语言支持 (#697) @xiaoyatong
* :sparkles: feat: calendar 适配taro 功能增强 (#715) @xiaoyatong
* :sparkles: feat: cascader 增加checkedIcon属性，增加视觉元素提取，增加自定义样式demo (#719) @xiaoyatong
* :sparkles: feat: checkbox 增加group样式 (#721) @xiaoyatong
* :sparkles: feat: collapse 提取变量，增加多语言支持，补充demo (#691) @xiaoyatong
* :sparkles: feat: inputnumber 增加 buttons 的样式，提取元素变量，增加demo (#685) @xiaoyatong
* :sparkles: feat: popover 增加交互样式，提取元素变量 (#681) @xiaoyatong
* :sparkles: feat: steps组件调整样式布局，增加点状样式等，提取元素变量，增加demo (#712) @xiaoyatong
* :sparkles: feat: swipe 组件对外暴露 open 和 close 方法，优化 taro 版本下 width 的计算时机 (#714) @oasis-cloud
* :sparkles: feat: tabbar 组件增加受控的 activeVisible 属性 (#711) @oasis-cloud
* :sparkles: feat: tabs 组件增加 leftAlign 属性；提取视觉元素变量；修复disable 时有 active 状态的问题 (#674) @xiaoyatong
* :sparkles: feat: textarea 提取元素变量，增加demo演示 (#688) @xiaoyatong
* :sparkles: feat: 多个组件 demo 完善国际化 (#710) @eiinu
* :sparkles: feat: 新增form-item的validator校验和重置提示状态功能 (#689) @junjun666
* :sparkles: feat: 新增taro uploader的multiple属性 (#686) @junjun666
* :sparkles: feat: 新增表单组件Form.useForm()创建form控制实例的功能 (#679) @junjun666
* :bug: fix(layout): 修复布局组件 `Row` 和 `Col` 的 className 设置问题 (#683) @AnteeHub
* :bug: fix: badge初始化classname (#722) @xiaoyatong
* :bug: fix: button plain的样式 (#678) @xiaoyatong
* :bug: fix: cascader 没有传递 ref 参数 (#699) @oasis-cloud
* :bug: fix: checkboxgroup组件通过options渲染时组件选中值反填问题 (#680) @cuicuiworld
* :bug: fix: ellipsis 展开和关闭操作应该阻止事件冒泡 (#700) @oasis-cloud
* :bug: fix: radio 支持 换行 (#675) @xiaoyatong
* :bug: fix: switch 组件的元素变量修改 (#690) @xiaoyatong
* :bug: fix: textarea 禁用状态仍然可以输入 (#687) @oasis-cloud
* :bug: fix: 修复 taro 版本中 dialog 组件的 lockScroll 属性，重构 taro 版本的 dialog 类型，去掉函数调… (#702) @oasis-cloud
* :bug: fix: 修改taro的inputnumber输入框键盘输入异常问题 (#703) @junjun666
* :bug: fix: 类型错误，修复 @hanyuxinting
* 🔨 chore: button 组件增加 opentype 示例 @oasis-cloud
* 🔨 chore: 统一 classnames 导出名称 (#684) @eiinu
* 🔨 chore: 重构h5和taro环境下 barrage组件代码并修复loop循环的问题 (#717) @junjun666
* 📖 docs: dialog 组件的 taro 文档去掉函数调用方式 (#677) @oasis-cloud


# v1.4.7
`2023-02-15`

* :sparkles: feat: swiper 新增重新计算尺寸方法，文档修改 (#649) @lkjh3214
* :sparkles: feat: button 增加iconSize 属性，提取视觉元素变量 (#654) @xiaoyatong
* :sparkles: feat: form表单组件新增initialValue初始值属性 (#671) @junjun666
* :sparkles: feat: popup增加closeiconsize属性，提取元素变量 (#663) @xiaoyatong
* :sparkles: feat: progress 提取元素变量，去掉无意义属性，增加fillcolor demo (#662) @xiaoyatong
* :sparkles: feat: searchbar 新增 cleariconsize，提取元素变量 (#660) @xiaoyatong
* :sparkles: feat: swipe 组件对外暴露 onTouchStart onTouchMove onTouchEnd 事件 (#656) @oasis-cloud
* :sparkles: feat: swiper 增加元素变量提取 (#666) @xiaoyatong
* :sparkles: feat: tabbar增加视觉变量，调整样式布局，支持独立配置icon大小 (#653) @xiaoyatong
* :sparkles: feat: tag 增加iconSize属性，提取元素变量 (#657) @xiaoyatong
* :bug: fix: ellipsis内存泄露 (#646) @Kason Yang
* :bug: fix: numberkeyboard add new props overlay (#661) @Drjingfubo
* :bug: fix: checkboxgroup options渲染 (#638) @Kason Yang
* :bug: fix: docs “废弃”格式不一致，统一修复 (#652) @xiaoyatong
* :bug: fix: jest waring (#651) @oasis-cloud
* :bug: fix: radio 反转样式，不可选状态默认也不可选 (#659) @xiaoyatong
* :bug: fix: 修改elevator组件自定义内容使用方式 (#630) @拧巴的猫
* :bug: fix: 暗黑模式下部分组件样式问题 (#670) @xiaoyatong
* 🔨 chore: 本地开发切换到模拟器后，刷新页面跳转到demo (#669) @oasis-cloud
* 📖 docs: button 文档 (#655) @xiaoyatong
* 📖 docs: progress 文档修改 (#673) @xiaoyatong


# v1.4.6
`2023-02-08`

* :sparkles: feat: image 组件增加懒加载 (#615) @vickyYe
* :sparkles: feat: sticky 适配 taro (#613) @libin0824
* :bug: fix: 修复 fixednav 组件的 zIndex (#643) @oasis-cloud
* :bug: fix: 修复 taro h5 有些 api 未导出导致报错 (#642) @oasis-cloud
* :bug: fix: 修复 overlay 组件 style 不生效的问题 (#641) @oasis-cloud
* :bug: fix: 修复获取元素的大小和位置信息未判断元素是否存在 (#640) @oasis-cloud
* :bug: fix: 修复 taro h5 virtualList 组件demo中的字号 (#639) @oasis-cloud
* :bug: fix: 修复 taro h5 有些 api 未导出导致报错 (#637) @oasis-cloud
* :bug: fix: 修复 address 组件无法设置标题 (#622) @yangxiaolu1993
* :bug: fix: 修复小程序环境下 overlay 组件滚动穿透的问题 (#621) @junjun666
* :bug: fix: 修复 docs 在线调试问题。 (#631) @xiaoyatong
* :bug: fix: 修复 FormItem 代理子元素 onChange 后忽略了原属性的问题 (#619) @sun
* :bug: fix: SearchBar 组件样式修改，排版错误问题处理 (#632) @Ymm
* :bug: fix: 补充 tag 组件缺少的样式变量，修复在线调试问题 (#635) @eiinu
* :bug: fix: image 组件 demo 优化 (#636) @vickyYe
* :bug: fix: noticebar 组件在卸载时不应该初始化动画 (#634) @oasis-cloud
* :bug: fix: icon 组件未设置 width、height 时，不应出现在 style 上 (#628) @oasis-cloud
* :bug: fix: input 组件在暗黑模式下 label 颜色错误 (#627) @oasis-cloud
* :bug: fix: popup 动效优化 (#620) @xiaoyatong
* :bug: fix: image 组件更新后无法移除 loading 状态 (#625) @oasis-cloud
* 🔨 chore: 删除 avatar 不必要的打印日志 (#623) @Antee
* 🔨 chore: 开发环境优化 (#626) @oasis-cloud


# v.1.4.5
`2023-02-01`

* :sparkles: feat: virtuallist 组件适配 taro (#602) @vickyYe
* :bug: fix: 修复 tag 组件 plain 与 type 同时使用时的样式错误 (#606) @eiinu
* :bug: fix: 修复 noticebar 组件垂直滚动自定义内容点击问题，增加onClickItem事件 (#596) @vickyYe
* :bug: fix: 修复 uploader 组件 beforeUpload 方法的 ts 类型 (#601) @junjun666
* :bug: fix: 修复 cell 组件 descTextAlign 相关代码的注入时机和使用文档 (#598) @irisSong
* :bug: fix: 修复 radio 组件横向排列选中后页面抖动 (#600) @oasis-cloud
* 🔨 chore: nutui-react-taro 在 iOS 11 下和 taro 的 regenerator-runtime 冲突 (#604) @oasis-cloud
* 🔨 chore: nutui-react-taro 版本移除 image 和 audio (#609) @oasis-cloud
* 🔨 chore: 在线主题定制启动后默认打开基础样式 (#603) @oasis-cloud
* 🔨 chore: 开发环境文档预览增加最小宽度 (#608) @oasis-cloud
* 🔨 chore: 提取组件的 CSS Variables (#605) @oasis-cloud

# v1.4.4
`2023-01-17`

* :sparkles: feat: GridItem 支持自定义图标颜色、大小 (#588) @cuicuiworld
* :bug: fix: 修复 inputnumber 无法清空输入框 (#587) @junjun666
* :bug: fix: 修复input组件onChange事件循环问题；修复错误提示样式问题； (#593) @vickyYe
* :bug: fix: 修复 button 组件在 taro 中被破坏的边框 (#589) @oasis-cloud
* 📖 docs: watermark 文档更新 (#590) @oasis-cloud
* 🔨 chore: 添加组件时，增加排序功能；已有组件已完成排序 (#586) @xiaoyatong

# v1.4.3
`2023-01-11`

* :sparkles: feat: watermark水印组件taro编译h5环境下适配 (#570) @junjun666
* :bug: fix: 修复 Badge 组件无法修改背景色问题 (#582) @xiaoyatong
* :bug: fix: inputNumber 组件在 taro h5 环境样式缺失 (#577) @oasis-cloud
* :bug: fix: drag 组件 Trao h5 适配 (#576) @irisSong
* :bug: fix: backtop组件demo优化，父级元素内滚动方式优化 (#575) @vickyYe
* :bug: fix: dialog 组件 okText 属性缺失默认值 (#573) @oasis-cloud
* :bug: fix: signature组件适配taro:h5 (#571) @irisSong
* 📖 docs: 更新多语言文档 (#584) @xiaoyatong

# v1.4.2
`2023-01-04`

* :sparkles: feat: taro适配 sidenavbar 组件 (#558) @libin0824
* :bug: fix: input error 状态重置失效问题修改；校验格式 onBlur 失效问题修改 (#567) @vickyYe
* 🔨 chore: picker 组件删除无用的日志输出 (#566) @oasis-cloud

# v1.4.1
`2022-12-28`

* :sparkles: feat: Swiper 组件增加指示器的默认背景色配置 (#552) @xiaoyatong
* :sparkles: feat: docs 不展示demo问题修复 @oasis-cloud
* :bug: fix: input taro显示右侧按钮时focus失效问题修复；textare limitshow属性名字更正 (#557) @vickyYe
* :bug: fix: iconfont 在 dev 模式下加载多次 (#555) @oasis-cloud
* :bug: fix: Address 组件适配Taro (#554) @xiaoyatong
* :bug: fix: Searchbar 组件修复图标样式。 (#553) @xiaoyatong
* :bug: fix: react-router-dom 安装到 devDependencies 中 @oasis-cloud
* :bug: fix: Range 组件手动设置为0时，页面无法渲染的问题。 (#551) @xiaoyatong


# v1.4.0
`2022-12-21`

* :sparkles: feat: 新增动态主题定制能力 (#546) @oasis-cloud
* :sparkles: feat: 新增 input 组件对小程序特性的支持 (#542) @simpleStyle
* :sparkles: feat: 删除 react-router-dom 依赖，涉及的 to 属性不再支持 (#550)  @oasis-cloud
* :bug: fix: 修复 searchBar 组件 onSearch 方法。 (#549) @xiaoyatong
* :bug: fix: 修复 noticbar 垂直滚动延迟问题 (#545) @vickyYe


# v1.3.15
`2022-12-14`

* :sparkles: feat: 新增 animate 动画/动效组件 (#541) @junjun666
* :sparkles: feat: 新增 ellipsis 组件 (#515) @vickyYe
* :sparkles: feat: 新增维吾尔语言包 (#526) @MirGhojam
* :bug: fix: 修复 publish 脚本执行时机错误的问题 (#540) @oasis-cloud
* 📖 docs: 文档更新 tabbar 的 to 增加属性的说明 (#539)  @oasis-cloud

# v1.3.14
`2022-12-09`

* :sparkles: feat: image 适配 taro (#507) @vickyYe
* :sparkles: feat: Grid 组件添加 onClick 事件，统一管理子项点击事件，无需在GridItem组件中分别添加点击事件 (#492) @cuicuiworld
* :bug: fix: react18 render 提示错误信息 (#524) @oasis-cloud
* :bug: fix: noticebar 纵向滚动渲染慢问题修复，设置高度小于默认值时动效失效问题修复 (#528) @vickyYe
* :bug: fix: icon 组件 mask-close 未展示叉号 (#527) @oasis-cloud
* :bug: fix: #508 修改折叠面板组件修改后不刷新问题 (#521) @zhenyulei
* :bug: fix: imagepreview 设置 initNo 后  active 计算错误 (#512) @oasis-cloud
* :bug: fix: 移除 formitem 对 react-router-dom 的依赖 (#513) @oasis-cloud
* :bug: fix: trendarrow 组件文档增加taro引入方式说明、css文件引入icon的scss文件、修改icon组件的引入方式 (#502) @irisSong
* 📖 docs: 修正 virtualList 的文档错误 (#510) @Antee
* 📖 docs: Readme 中英文修改 (#525) @vickyYe
* 📖 docs: 文档中增加 nutui-react-taro的 import 方式 (#522) @oasis-cloud


# v1.3.13
`2022-11-30`
* :sparkles: feat: 新增image组件，适配多语言，增加单元测试 (#498) @vickyYe
* :sparkles: feat: trendarrow趋势箭头组件开发完成 (#491)  @irisSong
* :bug: fix: 提交skeleton骨架屏白底修改 (#499) @junjun666
* 📖 docs: pagination demo 增加白色底 (#496) @oasis-cloud
* 📖 docs: popover demo 增加白色底 (#497) @oasis-cloud
* :bug: fix: cell 空链接不需跳转 (#495) @oasis-cloud
* :sparkles: feat: 新增cascader的tabs底部选中颜色 (#493) @simpleStyle
* :bug: fix: taro demo 启动报 declare 错误 (#490) @oasis-cloud
* :sparkles: feat: 增加 triangle 图标 (#489) @oasis-cloud
* :sparkles: chore: interface 统一 @oasis-cloud
* :sparkles: feat: cascader组件支持activeColor选中态属性 (#487) @simpleStyle

# v1.3.12
`2022-11-23`

* :bug: fix: children 无数据时不展示cell，应在顶层判断 (#482) @xiaoyatong
* :sparkles: chore: pulltorefresh 删除取用 console (#480) @oasis-cloud
* :bug: fix: taro:h5启动时textare组件change时间获取数据报错问题修复 (#479) @vickyYe
* :sparkles: feat: add form (#470) @xiaoyatong
* :bug: fix: taro 包不需要依赖 react-router-dom (#475) @oasis-cloud
* :bug: fix: calendar taro中Popup组件与h5中属性不一致问题 (#468) @Phyzait
* :bug: fix: Cell组件当children为空数组时不渲染Cell组件问题 (#466) @cuicuiworld
* :sparkles: feat: range组件新增描述属性 (#471) @simpleStyle
* :bug: fix: textarea组件字数统计不准确问题修改，兼容emoji (#467) @vickyYe

# v1.3.11
`2022-11-16`

* :bug: fix: CheckboxGroup和RadioGroup组件动态改变options没有导致子组件更新问题 (#464) @cuicuiworld
* :sparkles: feat: avatar组件支持iconSize自定义图标大小 (#461) @cuicuiworld
* :bug: fix: avatar img 标签增加 avatar-img (#462) @oasis-cloud
* :bug: fix: button 组件中 icon 单独使用不居中  @oasis-cloud
* :bug: fix: tag组件去除多余标签元素 (#459) @cuicuiworld
* :bug: fix: calendar 今日标签样式错误 (#460) @Phyzait
* :sparkles: feat: infiniteloading 组件适配 taro (#458) @junjun666
* :bug: fix: 修复taro原生img标签无法重新渲染的问题 (#455) @junjun666
* :sparkles: feat: swiperItem组件支持className和style属性 (#454) @cuicuiworld
* :bug: fix: 修复TabBar组件demo演示页路由跳转失败问题 (#451) @cuicuiworld
* :bug: fix: 修复Row组件的文档示例错误 (#453) @simpleStyle
* 📖 docs: 修复 datepicker 文档中示例代码错误 (#449) @xxxnine
* :sparkles: feat: 补全button的关于小程序API的typescript支持 (#447) @simpleStyle
* :bug: fix: input组件defaultvalue值为空时不可清除问题修复 (#452) @vickyYe
* :sparkles: feat: menuitem 支持 ref (#450) @oasis-cloud
* :sparkles: feat: badge组件支持className和style属性 (#444) @cuicuiworld
* :bug: fix: 引入样式文件运行报错(#439) (#441) @hydeia
* :sparkles: feat: button组件支持原生小程序和H5的button特性 (#433) @simpleStyle
* :sparkles: feat: row和col组件支持className和style属性 (#440) @cuicuiworld
* :sparkles: feat: rate组件添加className和style属性 (#438) @cuicuiworld

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