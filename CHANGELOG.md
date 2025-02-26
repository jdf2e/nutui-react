# v2.7.9

`2025-02-21`

- :bug: fix(swiper): 设置横向轮播后，手势无法触发页面的滚动 (#3003)
- 🪵 refactor: use compatible systemInfo util API (#2995)
- 📖 docs(loading): 主题变量修正 (#3008)

# v2.7.8

`2025-02-14`

- 📖 docs(configprovider): 优化文档中的主题配置描述 (#2959)
- :bug: fix: next ci failed (#2970)
- zap: perf: animate (#2969)
- 🪵 refactor: calendar (#2983)

# v2.7.7

`2025-01-24`

- :sparkles: feat(form): resetFields 增加 namepath 参数，用于重置指定的字段 (#2953)
- :sparkles: feat(form): add useWatch (#2932)
- :bug: fix: tabs 代码简化,调整部分样式 (#2949)
- :bug: fix: 受控模式下返回的selectedOptions进行校验处理 (#2951)
- :bug: fix(form): 修复 formitem 的值如果是对象会自动重置为空对象的问题 (#2952)
- :bug: fix: imageSize=0无效 (#2937)
- 📖 docs(toast): 修复文档中的函数式例子 (#2957)
- 📖 docs: popup 使用说明描述优化(#2943)

# v2.7.6

`2025-01-10`

- :bug: fix(form): item label 未对齐 (#2931)
- :bug: fix(form): 分割线未生效 (#2927)
- :bug: fix(tabs): 修复意外地出现了滚动条 (#2912)
- :bug: fix(swiper): 修复duration不生效 (#2913)
- :bug: fix: jmapp variables

# v2.7.5

`2025-01-03`

- 🏡 chore(pre-commit): add check-lock-file script (#2916)
- :sparkles: feat(performance): getRectByTaro 方法在小程序内增加缓存以提升性能 (#2831)
- :sparkles: feat(uploader): suppport chooseMedia in web (#2902)
- :bug: fix(textarea): 字数限制文本遮挡输入框的内容 (#2910)
- :bug: fix: 调整日历日期 (#2914)
- :bug: fix: update backtop demos (#2865)
- :bug: fix: scss variables jmapp

# v2.7.4

`2024-12-20`

- :bug: fix(form): 修复label字号的css变量 (#2872)
- :bug: fix: 修改小程序下自动吸边计算逻辑&&解决部分小程序写法不支持问题 (#2855)
- :bug: fix(countup): 分隔符文字颜色支持css变量修改 (#2869)
- :bug: fix: update variables-jmapp.scss

# v2.7.3

`2024-12-13`

- :sparkles: feat(Video): web h5 下支持 ref 调用 (#2852)
- :sparkles: feat(popover): 增加最大宽度设置，支持文本超过最大宽度时，换行展示 (#2851)
- :bug: fix(empty): actions add support for events (#2854)
- :bug: fix: 支持 button block (#2853)
- :bug: fix: dark 模式下arrow 未配置 (#2850)

# v2.7.2

`2024-12-06`

- 🏡 chore(uploader): use scss variable (#2825)
- 🏡 chore: migrate to v3
- 📖 docs(infiniteloading): remove deprecated usage (#2801)
- :sparkles: feat(form): add validateTrigger, setFieldValue and disabled (#2772)
- :sparkles: feat(elevator): 采用唯一ID，避免未传入 className 导致的报错 (#2834)
- :bug: fix: 解决微信小程序滚动报错问题 (#2833)
- :bug: fix(uploader): 修复选择多个文件上传只会上传一个文件的问题 (#2807)
- :bug: fix: Uploade 组件无法预览图片 (#2822)
- :bug: fix(deps): update dependency vitest to v2 (#2697)
- :bug: fix(Table): 给个默认背景色，解决在小程序中固定列与滚动内列混合 (#2789)

# v2.7.1

`2024-11-22`

- :bug: fix(popup): display should not trigger the scrollview to update (#2773)
- :bug: fix(toast): load dependent CSS (#2776)
- :bug: fix(Form): Form 组件文档 demo 中 Switch 组件使用问题 (#2774)
- :bug: fix(textarea): handle undefined placeholder explicitly (#2748)
- 🏡 chore: jdesign 主题 (#2703)
- 🏡 chore: ci optimize (#2692)
- 🏡 chore: ci (#2690)
- 📖 docs(infiniteLoading): optimize target description (#2770)
- 📖 docs: 官方主题入口 (#2634)

# v2.7.0

`2024-11-01`

- :sparkles: feat: add plugin to remove rtl (#2673)
- :sparkles: feat: replacing the css paths imported from a specified package (#2675)
- :sparkles: feat(replace icon): jmapp icon (#2672)
- :sparkles: feat: add plugin to replace icons (#2671)
- :bug: fix(tabs): clicked tabs should be entirely visible (#2685)
- :bug: fix(avatarcropper): multi-language support (#2666)
- :bug: fix: optimize vertical type syntax for divider (#2664)
- :bug: fix: @nutui/icons-react changed to @nutui/icons-react-taro (#2651)

# v2.6.23

`2024-10-18`

- :sparkles: feat(calendar): support renderBottomButton props (#2645)
- :sparkles: feat(calendar): support deleteIcon props (#2644)
- :bug: fix(overlay): tour position offset in tour.taro (#2631)
- :bug: fix: import error (#2648)
- :bug: fix(dialog): remove defaultprops (#2639)

# v2.6.22

`2024-10-12`

- :sparkles: feat(popup): lockscroll 增加可选值 strict, 用于支持 iOS12 (#2629)
- :bug: fix(dialog): revert defaultprops
- :bug: fix(range): usememo (#2638)
- :bug: fix(backtop & menu): lint, code simplification, deprecated pageYOffset removed (#2633)
- :bug: fix: taro async warning in taro-h5 env (#2636)
- :bug: fix(range): refactor & lint fixed (#2637)
- :bug: fix(radio): lint fixed (#2635)
- :bug: fix(navbar): safearea displays abnormal when safeAreaInsetTop has been set true (#2632)
- :bug: fix: usecallback to fix render too many times, button,animatingnumbers,avatar,audio; and fix avatargroup when length > maxsize (#2628)
- 🏡 chore(demo): display bound dispatchSetState in demo8 of table demos (#2626)
- 📖 docs: swiper 可通过 css 的 touch-action 设置用户操作行为 (#2630)
- 📖 docs: 文档构建出现未闭合标签的错误提示

# v2.6.21

`2024-09-27`

- 🏡 chore: update dependency linguist-languages to be included within package (#2607)
- :sparkles: feat(Uploader): add support for deleteIcon prop customization (#2618)
- :bug: fix: 修改jd小程序高版本弹幕不滚动问题 (#2612)

# v2.6.20

`2024-09-20`

- :bug: fix: i18n (#2597)
- :bug: fix: 类型构建错误 (#2605)
- 🏡 chore: replace local prettier plugin with npm package (#2603)

# v2.6.19

`2024-09-13`

- 🏡 chore(deps): update dependency vite-plugin-dts to v4 (#2533)
- :bug: fix(cascader): 受控状态下 value 变化时同步组件选中状态 (#2591)
- :bug: fix: 移除不必要的 fragment 元素 (#2587)
- :bug: fix(datepicker): show zero on page (#2582)
- :bug: fix: findDomNode from transition (#2525)
- :bug: fix(props): add mergeProps utility to resolve all defaultProps warnings (#2581)
- 🪵 refactor: resolve sass nested rules warning (#2579)

# v2.6.18

`2024-09-06`

- 🏡 chore: remove deprecated (#2573)
- 🏡 chore(deps): update dependency marked to v14 (#2532)
- :sparkles: feat: demos for popup & dialog (#2574)
- :sparkles: feat: beforeupload (#2567)
- :bug: fix: remove icons defaultprops (#2571)
- :bug: fix(input): type props didnot work when equals number|digit (#2563)
- :bug: fix: dialog
- :bug: fix(sticky): should rerender when zIndex changes (#2572)
- :bug: fix(sticky): rerender sticky when threshold change (#2564)
- :bug: fix(deps): update dependency jscodeshift to v17 (#2534)

# v2.6.17

`2024-08-30`

- 🏡 chore(form): form demo (#2528)
- 📖 docs(readme): fix pnpm run dev weapp jd dir (#2514)
- :sparkles: feat(cell): add clickable prop to support click style feedback (#2527)
- :sparkles: feat(image-preview): 增加索引字段，用于预览内容排序 (#2519)
- :bug: fix(tabs.taro.tsx): 解决在不需要滚动的时候，切换tab产生tab位置错乱的问题 (#2554)
- :bug: fix(uploader): beforeUpload should trigger every time before uploading (#2553)
- :bug: fix(PullToRefresh): 修复PullToRefresh组件disabled属性在taro中无效的问题 (#2538)
- :bug: fix(uploader): ios 下无法回显的问题修复 (#2550)
- :bug: fix(uploader): sizeType prop didnot work when weapp || jd (#2526)

# v2.6.16

`2024-08-03`

- 📖 docs(card): correct doc (#2504) @Alex-huxiyang
- :sparkles: feat(menu): menu-item 组件增加标题icon自定义方式 (#2488) @zhangming
- :sparkles: feat(form): Form.Item 增加 align 属性 (#2492) @zhangming
- :bug: fix(inputNumber): correct onChange, onOverlimit event triggering timing when async & sync (#2509) @Alex-huxiyang
- :bug: fix(uploader): xhrBeforeUpload判断错误 (#2507) @Alex-huxiyang
- :bug: fix(swiper): correct onChange ts type (#2493) @Alex-huxiyang
- 🪵 refactor(numberkeyboard): optimize code & correct defaultProps (#2508) @Alex-huxiyang
- 🏡 chore(cell): unify ts type & docs (#2496) @Alex-huxiyang
- 🏡 chore(deps): update vitest monorepo to v2 (major) (#2439) @renovate[bot]
- 🏡 chore(deps): update dependency glob to v11 (#2438) @renovate[bot]
- 🏡 chore(deps): update dependency inquirer to v10 (#2420) @renovate[bot]
- 🏡 chore(deps): update dependency marked to v13 (#2358) @renovate[bot]

# v2.6.15

`2024-07-26`

- 🏡 chore: run md-table-format when git commit changes (#2484) @Alex-huxiyang
- :sparkles: feat(menu): allow custom classnames for Menu and dynamic titles (#2480) @Alex-huxiyang
- :sparkles: feat(watermark): support multi-line text (#2477) @xiaoyatong
- :bug: fix: move defaultprops (#2482) @xiaoyatong
- :bug: fix: snapshot update (#2481) @Alex-huxiyang
- :bug: fix(uploader): image 居中展示 (#2475) @xiaoyatong
- :bug: fix(infiniteLoading): rest 导致事件无法触发 (#2474) @oasis-cloud
- :bug: fix: sticky 构建时类型错误 @oasis-cloud
- :bug: fix(uploader): images should display when they've been successfully uploaded (#2448) @Alex-huxiyang
- :bug: fix: 修复日历进行快捷选择日期时 点击确认获取的是上一次的日期 (#2436) @yangqianlu
- 🪵 refactor: table (#2473) @zanyuki-jd
- 🪵 refactor: sticky (#2468) @oasis-cloud

# v2.6.14

`2024-07-19`

- :sparkles: feat(menuitem): 新增css类名，增强自定义样式能力 (#2443) @Alex-huxiyang
- :sparkles: feat(empty): add css variable nutui-empty-background-color (#2451) @Alex-huxiyang
- :sparkles: feat(infiniteLoading): 继承 scrollView 的 props 类型 (#2441) @oasis-cloud
- :bug: fix(cascader): 初始化设置value未成功选中 (#2435) @Alex-huxiyang
- :bug: fix(swiper): display abnormal when dir = 'rtl' (#2454) @Alex-huxiyang
- :bug: fix(form): 兼容校验时机 (#2437) @Alex-huxiyang
- :bug: fix(form): 在FromInstance增加validateFields方法的定义 (#2450) @jinjl

# v2.6.13

`2024-07-12`

- :sparkles: feat: tabs滚动条兼容火狐浏览器 (#2431) @JoanneXu6677
- :sparkles: feat(drag): add the ability to support onDrag, onDragStart, onDragEnd callbacks (#2418) @Alex-huxiyang
- :bug: fix(formItem): validateTrigger无法正确触发校验 (#2433) @Alex-huxiyang
- :bug: fix: 日历组件滚动到顶部时 出现空白问题 (#2409) @522109452
- :bug: fix(imagepreview): 无法在预期情景正确关闭图片的异常 (#2421) @Alex-huxiyang

# v2.6.12

`2024-07-05`

- :sparkles: feat: add pagination whether to show pages in imagepreview (#2411) @xiaoyatong
- :bug: fix(uploader): pre-upload pmage preview bug (#2416) @Alex-huxiyang
- :bug: fix(taro-form-demo): 点击演示demo表单内的重置会触发提交表单事件bug修复 (#2415) @Skedush
- :bug: fix(form): validator 中的 value 类型更新为 any (#2406) @oasis-cloud
- :bug: fix(uploader): 京东小程序中可上传时可选择图片和视频 (#2410) @xueshufive
- :bug: fix(avatarcropper): 报错 (#2364) @Alex-huxiyang
- :bug: fix(form): setFields未触发校验 (#2400) @Alex-huxiyang

# v2.6.11

`2024-06-28`

- :sparkles: feat(table): table新增自定义行 (#2390) @zanyuki-jd
- :bug: fix(fixednav): 可拖拽元素样式缺失 (#2391) @oasis-cloud

# v2.6.10

`2024-06-21`

- 🏡 chore: 文档未来规范 (#2373) @Alex-huxiyang
- 🤖 ci: 统一使用 pnpm @oasis-cloud
- :sparkles: feat(tabpane): 增添修改tabpane背景色的主题变量 (#2366) @Alex-huxiyang
- :bug: fix(tabs): 修复tabs异步设置titles滚动失效（#2351） (#2369) @ShuchenEason
- :bug: fix: umd 中替换环境变量 (#2368) @oasis-cloud

# v2.6.9

`2024-06-14`

- :sparkles: feat(form): footer 容器增加 className (#2345) @oasis-cloud
- :bug: fix: 解决Drag组件拖拽后会在原地留一个遮挡元素问题+解决weapp/taro-h5多个demo拖拽位置不正确问题 (#2330) @irisSong
- :bug: fix(searchbar): 修复 clear 时未触发 change 的问题 (#2262) @eiinu

# v2.6.8

`2024-05-31`

- :sparkles: feat(button): 新增 button 原始类型属性 (#2195) @Jiankian
- :sparkles: feat(card): add card hide price and shop usage (#2292) @wick
- :bug: fix(cascader): onPathChange is not a function (#2308) @oasis-cloud
- :bug: fix: safearea for ac (#2293) @xiaoyatong
- :bug: fix(InputNumber): 扩大点击区域 (#2302) @xiaoyatong
- :bug: fix(picker): 函数调用之前检查 locale 是否已经定义 (#2259) @Alex-huxiyang
- 🏡 chore(demo): 更新组件引用方式 (#2304) @oasis-cloud
- 🏡 chore: fix typos (#2300) @Snoppy

# v2.6.7

`2024-05-28`

- :sparkles: feat: 签名组件增加当没有签名或已清空的情况下的参数暴露 (#2288) @xiaoyatong
- :bug: fix: ActionSheet 增加安全区处理 (#2286) @xiaoyatong
- :bug: fix(actionsheet): 去掉无意义的 padding，popup 已不再暴露 (#2285) @xiaoyatong

# v2.6.6

`2024-05-24`

- 🏡 chore(tag): css样式变量修复 (#2279) @Alex-huxiyang
- 🏡 chore(deps): update dependency eslint-plugin-markdown to v5 (#2218) @renovate[bot]
- 📖 docs(uploader): update (#2265) @eiinu
- :bug: fix(input): placeholder 无法设置空字符串 (#2282) @oasis-cloud
- :bug: fix(imagepreview): 阻止冒泡，防止点击图片关闭 (#2281) @Alex-huxiyang
- :bug: fix(FormItem): 修复initialValue属性初始化未被正确加入到Formstore中导致的问题 (#2247) @Alex-huxiyang

# v2.6.5

`2024-05-17`

\*🏡 chore(image): 官网taro的demo显示与h5不一致 (#2244) @Alex-huxiyang

- :bug: fix(circleprogress): update demo (#2260) @Eiinu
- :bug: fix: 移除 defaultProps(2) (#2254) @Eiinu
- :bug: fix: 关于checkbox&tabs的doc与demo修改 (#2253) @Alex-huxiyang
- :bug: fix(table): 修复部分由于场景下width未生效导致的一些问题 (#2241) @Alex-huxiyang
- :bug: fix(menu): 选项文字很多时右侧箭头展示异常 (#2252) @Alex-huxiyang
- :bug: fix(input): 修复特殊场景下自动清除失效问题 (#2240) @Eiinu

# v2.6.4

`2024-05-10`

- 🏡 chore: 修改默认的微信基础库版本 (#2235) @eiinu
- 🏡 chore(image): demo代码风格优化 (#2220) @Alex-huxiyang
- 📖 docs(uploader): 文件上传编码使用提示 (#2224) @Alex-huxiyang
- :bug: fix(imagePreview): 阻止关闭预览事件对父结构的非必要影响 (#2227) @Alex-huxiyang
- :bug: fix(picker): 修复连续多次打开 picker 时显示值错误 (#2222) @eiinu
- :bug: fix(virtualList): 修复部分场景onScroll不触发 (#2221) @Alex-huxiyang
- :bug: fix: 移除 defaultProps (#2230) @eiinu

# v2.6.3

`2024-04-30`

- :bug: fix(tabs): 修复特殊场景下 value 设置未生效问题 (#2211) @eiinu
  :art: style(Tabs.Tabpane): 给Tabs.Tabpane新增内边距样式变量，使得使用者可以自由控制该内边距。 (#2210) @jianhuagao
- 🏡 chore(icon): update demo (#2214) @eiinu

# v2.6.2

`2024-04-26`

- :bug: fix(datepicker): 修复受控方式下选项联动更新问题 (#2201) @eiinu
- :bug: fix(signature): 调整清空时机并更新demo (#2190) @Alex-huxiyang
- :bug: fix(ellipsis): 部分场景下的ref报错 (#2200) @Alex-huxiyang
- :bug: fix(inputnumber): 修复设置`InputNumber`组件className不生效的问题 (#2188) @Kurisu
  :art: style: jmapp style 语义化 (#2052) @zhehu1
  :art: style(CellGroup): 给`CellGroup`组件新增外边距样式变量，使得使用者可以自由控制该外边距。 (#2189) @Kurisu
  :art: style(badge): jdesign badge 样式 (#2164) @zhehu1
- 📖 docs(tag):修复demo描述错误 (#2204) @jianhuagao

# v2.6.1

`2024-04-19`

- :bug: fix(image): standardize demos (#2177) @Alex-huxiyang
- :bug: fix(cellgroup): 去掉 cellgroup 未单独使用的 style 属性 (#2176) @kurisu994
- :bug: fix(site): png url error & key duplicate (#2178) @Alex-huxiyang
- :bug: fix(swiper): 异步加载 indicator 不显示 (#2167) @Alex-huxiyang

# v2.6.0

`2024-04-12`

- 🪵 refactor(swiper): H5 下实现重构，增加 focus 模式 (#1962) @oasis-cloud
- :sparkles: feat: input 的 onFocus 增加 height 键盘高度参数 (#2154) @alex.zeng
- :bug: fix(drag): demo拆解与规范 (#2163) @eiinu
- :bug: fix(form): 可定义 fontsize (#2162) @oasis-cloud
- 🏡 chore(picker): demo拆解与规范 (#2157) @Alex-huxiyang
- 🏡 chore(radio): demo拆解与规范 (#2158) @LuckyLucy
- 🏡 chore(menu): demo拆解与规范 (#2153) @Alex-huxiyang
- 🏡 chore(loading): demo拆解与规范 (#2155) @Alex-huxiyang
- 🏡 chore(notify): demo拆解与规范 (#2151) @Alex-huxiyang

# v2.5.2

`2024-04-03`

- 🏡 chore(form): demo拆解与规范 (#2148) @oasis-cloud
- 🏡 chore(countdown): demo拆解与规范 (#2147) @Alex-huxiyang
- 🏡 chore(cascader): demo拆解与规范 (#2144) @Alex-huxiyang
- 🏡 chore(checkbox): demo拆解与规范 (#2146) @Alex-huxiyang
- :bug: fix(calendarcard): 直接抛出ondayclick (#2150) @oasis-cloud
- :bug: fix(radio): 样式变量修复(issue) (#2149) @Alex-huxiyang

# v2.5.1

`2024-03-29`

\*🏡 chore(deps): update dependency @types/testing-library\_\_jest-dom to v6 (#2127) @renovate[bot]

- 📖 docs(readme): change npm to pnpm in the document (#2131) @JedediahXu
- :sparkles: feat(popover): rtl (#2121) @xiaoyatong
- :sparkles: feat(ellipsis): rtl (#2128) @irisSong
- :sparkles: feat(Form): rtl (#2120) @xiaoyatong
- :sparkles: feat(progress): Taro新增lazy属性 (#2108) @Alex-huxiyang
- :bug: fix(datepicker): 修复 datepicker 类型为hour-minutes/time时选中值无法回显的问题 (#2141) @yeyu98
- :bug: fix(Toast): demo拆解与规范 (#2073) @OrdinarySF
- :bug: fix(calendar): demo拆解与规范 (#2137) @mikasayw
- :bug: fix(DatePicker): demo拆解与规范 (#2133) @yeyu98
- :bug: fix(uploader): demo拆解与规范 (#2140) @irisSong
- :bug: fix(tabs): 修复 tab 过多时滚动定位不准确的问题 (#2135) @eiinu
- :bug: fix(range): demo拆解与规范 (#2139) @ShuchenEason
- :bug: fix(imagepreview): demo拆解与规范 (#2134) @Alex-huxiyang
- :bug: fix(textarea): demo拆解与规范 (#2132) @Amylee9712
- :bug: fix(tour): demo拆解与规范 (#2130) @Alex-huxiyang
- :bug: fix(actionsheet): demo拆解与规范 (#2124) @ZissyW
- :bug: fix(icon): update taro demo (#2129) @eiinu
- :bug: fix(popup): demo拆解与规范 (#2122) @ZissyW
- :bug: fix(numberkeyboard): demo拆解与规范 (#2123) @ZissyW

# v2.5.0

`2024-03-22`

- :sparkles: feat(Popover): 新增单条数据的demo展示 (#2117) @xiaoyatong
- :sparkles: feat(progress): 支持taro的lazy属性 & demo拆解与规范 (#2086) @Alex-huxiyang
- :bug: fix(dialog): 关闭按钮默认在底部，24px白色图标 (#2118) @irisSong
- :bug: fix(noticebar): fix docs (#2119) @xiaoyatong
- :bug: fix(virtuallist): demo拆解与规范 (#2116) @eiinu
- :bug: fix: 修复address组件onChange参数透传问题 (#2110) @DreamSeeker321
- :bug: fix(Icon): 小程序下展示异常问题修复 (#2114) @xiaoyatong
- :bug: fix(swiper): demo拆解与规范 (#2115) @Alex-huxiyang
- :bug: fix(audio): demo拆解与规范 (#2111) @Alex-huxiyang
- :bug: fix(animatingnumbers): demo拆解与规范 (#2109) @Alex-huxiyang
- :bug: fix(video): demo拆解与规范 (#2104) @eiinu
- :bug: fix(avatarcropper): demo拆解与规范 (#2103) @eiinu
- :bug: fix(steps): demo拆解与规范 (#2105) @eiinu
- :bug: fix: 修复 demo 目录报错 (#2107) @eiinu
- :bug: fix(swipe): 修改demo文案 (#2106) @xiaoyatong
- :bug: fix(shortpassword): demo拆解与规范 (#2102) @Alex-huxiyang
- :bug: fix(circleprogress): demo拆解与规范 (#2091) @Alex-huxiyang
- :bug: fix: vitest (#2101) @xiaoyatong
- :bug: fix(table): demo拆解与规范 (#2074) @Alex-huxiyang
- :bug: fix(timeselect): demo拆解与规范 (#2087) @Alex-huxiyang
- :bug: fix(tabs): demo拆解与规范 (#2066) @yeyu98
- :bug: fix(signature): demo拆解与规范 (#2099) @Alex-huxiyang
- :bug: fix(tag): taro 下自定义icon无法展示 (#2088) @eiinu
- :bug: fix(animate): demo拆解与规范 (#2085) @eiinu
- :bug: fix(collapse): demo拆解与规范 (#2094) @eiinu
- :bug: fix(barrage): 简化demo (#2100) @xiaoyatong
- :bug: fix(barrage): demo拆解与规范 (#2098) @joyfully-W
- :bug: fix: taro-demo full class (#2095) @eiinu
- :bug: fix(Ellipsis): 修复小程序环境下给Ellipsis设置字号后工作不正常的问题 (#2078) @FPG-Alan
- :bug: fix: test (#2096) @xiaoyatong
- :bug: fix: 代码块修改为等宽字体 (#2092) @eiinu
- 🚦 Revert "feat(progress): 支持taro的lazy属性 & demo拆解与规范 (#2086)" @oasis-cloud
- 🏡 chore(calendarcard): demo 拆解与规范 (#2026) @eiinu
- 🏡 chore: 优化组件类型导出 (#2036) @eiinu
- 🏡 chore(deps): update dependency happy-dom to v14 (#2097) @renovate[bot]
- 🏡 chore: update changelog @oasis-cloud
- 📖 docs(overlay): fix typo @eiinu

# v2.4.2

`2024-03-20`

- 🔨 chore(row): 优化 className (#2054) @eiinu
- :sparkles: feat(backtop): rtl (#2051) @xiaoyatong
- :sparkles: feat(NoticeBar): 增加right 属性,支持更多可自定义内容 @xiaoyatong
- :bug: fix(address): demo拆解与规范 (#2068) @Alex-huxiyang
- :bug: fix(avatar): demo规范与调整 (#2071) @Alex-huxiyang
- :bug: fix(badge): demo拆解与规范 (#2060) @sd
- :bug: fix(calendarcard): 修复受控模式 (#2063) @eiinu
- :bug: fix(Card): demo拆解与规范 (#2072) @joyfully-W
- :bug: fix(dialog): demo拆解与规范 (#2069) @irisSong
- :bug: fix(fixedNav): demo拆解与规范 (#2048) @Alex-huxiyang
- :bug: fix(icon): 处理 rtl 部分 (#2050) @xiaoyatong
- :bug: fix(indicator): demo拆解与规范 (#2090) @eiinu
- :bug: fix(infiniteLoading): demo拆解与规范+增加joy logo的demo (#2081) @irisSong
- :bug: fix(input): demo拆解与规范 (#2035) @yeyu1998
- :bug: fix(navbar): demo拆解与规范 (#2055) @Alex-huxiyang
- :bug: fix(pagination): demo拆解与规范 (#2079) @Alex-huxiyang
- :bug: fix(price): demo拆解与规范 (#2082) @Alex-huxiyang
- :bug: fix(pulltorefresh): demo中下拉图标修改为joy logo (#2084) @irisSong
- :bug: fix(rate): demo拆解与规范 (#2045) @sandra
- :bug: fix(SearchBar): demo拆解与规范 (#2064) @joyfully-W
- :bug: fix(sideNavBar): demo拆解与规范 (#2058) @Alex-huxiyang
- :bug: fix(skeleton): demo拆解与规范 (#2047) @sd
- :bug: fix(sticky): demo拆解与规范 (#2024) @Alex-huxiyang
- :bug: fix(swiper): rtl (#2061) @xiaoyatong
- :bug: fix(tabbar): demo拆解与规范&脚本增强 (#2059) @Alex-huxiyang
- :bug: fix(trendarrow): demo拆解与规范 (#2075) @ber
- :bug: fix(watermark): demo拆解与规范 (#2083) @eiinu
- :bug: fix: update copy-docs-h5-or-taro.js (#2080) @eiinu
- test: migrate jest to vitest (#2057) @eiinu

# v2.4.1

`2024-03-15`

- :sparkles: feat(badge): 新增 fill 属性 (#2042) @eiinu
- :sparkles: feat(button): 增加xlarge,按钮内图标大小追随按钮当前字号 (#2037) @xiaoyatong
- :sparkles: feat(ci): add issue-close.yml (#2031) @eiinu
- :sparkles: feat(infiniteloading): add type props (#2027) @irisSong
- :sparkles: feat(pulltorefresh): 增加 type 属性，支持深色背景设置 (#2044) @xiaoyatong
- :sparkles: feat(tabs): rtl (#2004) @irisSong
- :bug: fix(backtop): demo拆解与规范 (#2025) @Alex-huxiyang
- :bug: fix(badge): 修复value传入0时显示不正确的问题 (#2006) @boiboif
- :bug: fix(build): 移除构建产物中重复的类型文件 (#2038) @eiinu
- :bug: fix(calendarcard): 选择范围时支持仅选择单个日期 (#2009) @eiinu
- :bug: fix(configProvidder): demo拆解与自动替换脚本&configProvider规范统一 (#2005) @Alex-huxiyang
- :bug: fix(divider): demo拆解与规范 (#2013) @Alex-huxiyang
- :bug: fix(elevator): demo拆解与规范 (#2030) @Alex-huxiyang
- :bug: fix(ellipsis): 修复设置行数超过内容高度时只显示一行内容的问题 (#2028) @boiboif
- :bug: fix(Empty): 调整默认图片为jd图片 (#2032) @xiaoyatong
- :bug: fix(grid): demo拆解与规范 (#2014) @Alex-huxiyang
- :bug: fix(icon): demo拆解与规范 (#2010) @Alex-huxiyang
- :bug: fix(Image): demo拆解与规范 (#2011) @Alex-huxiyang
- :bug: fix(layout): demo拆解与规范 & 修复脚本在不同操作系统的正则匹配出错 (#2016) @Alex-huxiyang
- :bug: fix(overlay): demo拆解与规范 (#2012) @Alex-huxiyang
- :bug: fix(popover): 调整demo (#2043) @xiaoyatong
- :bug: fix(range): touchmove 回调中 rect 获取失败时终止 (#2029) @eiinu
- :bug: fix(space): demo拆解与规范 (#2021) @Alex-huxiyang
- :bug: fix(switch):switch组件demo代码重构 (#2033) @jiangjin3323
- :bug: fix: docs (#2023) @xiaoyatong
- :bug: fix: fix swipe slide element get rect width error (#2017) @awefeng
- :bug: fix: 构建站点主题变量未成功引入 (#2002) @oasis
  style(button): jmapp style (#2019) @zhehu1

# v2.4.0

`2024-03-08`

- :sparkles: feat(inputnumber): update UI (#1989) @oasis-cloud
- :sparkles: feat(checkbox): list model (#1957) @oasis-cloud
- :sparkles: feat(dialog): added custom content area demo (#1995) @irisSong
- :sparkles: feat(dialog): support bottom close button (#1978) @irisSong
- :sparkles: feat(dialog): support confirm button loading effect (#1983) @bbf
- :sparkles: feat(empty): 图片变更 (#1988) @xiaoyatong
- :sparkles: feat(noticebar): supports the center layout (#1972) @irisSong
- :sparkles: feat(popover): 增加 light 和 dark 模式的区分 (#1977) @xiaoyatong
- :sparkles: feat(swipe): 增加自定义高度的demo (#1996) @xiaoyatong
- :sparkles: feat(rtl): badge (#1986) @eiinu
- :sparkles: feat(rtl): collapse (#1981) @eiinu
- :sparkles: feat(rtl): noticebar (#1984) @eiinu
- :sparkles: feat(rtl): table (#1982) @eiinu
- :sparkles: feat(animatingNumbers): support rtl (#1985) @irisSong
- :bug: fix(badge): the text set by value unwrap (#1992) @irisSong
- :bug: fix(cell): unify the demos of Cell (#1998) @Alex-huxiyang
- :bug: fix(toast): add deprecated prop msg (#1999) @eiinu
- :bug: fix(toast): 变更 taro下的属性 msg 为 content，增加 taro 下 demo (#1994) @xiaoyatong
- :bug: fix(virtuallist): 修复 vitrual list 组件 Taro 下获取窗口高度不正确的问题 (#1993) @CDog34
- :bug: fix: dts 插件升级导致构建产物路径错误 (#1979) @oasis-cloud
- :bug: fix: tabs 小程序滚动操作问题 (#1969) @feiyang1020
- 🔨 chore(deps): bump typescript v5 (#1975) @eiinu
- 🔨 chore(deps): update commitlint monorepo to v19 (#1976) @renovate[bot]
- 🔨 chore: 构建 demo 要定义 **PROJECTID** (#1974) @oasis-cloud
- 📖 docs(tabs): fix typo (#1997) @eiinu

# v2.3.12

`2024-03-01`

- :sparkles: feat(inputnumber): taro 环境下增加 number类型的键盘 (#1965) @LING_ZI_QING
- :sparkles: feat(rtl): support progress & range (#1961) @eiinu
- :bug: fix(elevator): 修复增加页码的逻辑 (#1960) @oasis-cloud
- :bug: fix(elevator): 解决部分安卓手机右侧导航高亮偏差问题 (#1966) @irisSong
- :bug: fix(form): after setting validateTrigger, `trigger` should be excluded (#1963) @oasis-cloud
- :bug: fix(form): 组件更新时，标签结构变化，会导致失去焦点 (#1973) @oasis-cloud
- :bug: fix(inputnumber): provide finalValue (#1959) @oasis-cloud
- 📖 docs: 修复文档 (#1964) @xiaoyatong
- 🛠 refactor(docs): 文档支持通过标签使用已有的 demo 代码 (#1950) @Alex-huxiyang
- 🛠 refactor: adjust build target to ES6, reduce size of configprovider (#1949) @oasis-cloud
- 🔨 chore(ci): update workflows (#1970) @eiinu
- 🔨 chore(dev): development mode, remove duplicate CSS stylesheets (#1958) @oasis-cloud
- 🔨 chore: remove CSS logic conflicting with MDX (#1971) @oasis-cloud

# v2.3.11

`2024-02-23`

- :sparkles: feat(inputnumber): support allow empty (#1943) @oasis
- :bug: fix(actionsheet): 关闭弹窗后内容显示在页面，优化 popup 相关属性传递 (#1954) @LING_ZI_QING
- :bug: fix(rtl): css 样式变量部分 (#1944) @xiaoyatong
- :bug: fix(form): validateFields support promise (#1955) @oasis

# v2.3.10

`2024-02-06`

- :sparkles: feat(form): support renderProps (#1937) @oasis-cloud
- :sparkles: feat(shortpassword): support ref for form (#1930) @oasis-cloud
- :sparkles: feat: 生成用于 rtl 校对的 css 文件 (#1927) @oasis-cloud
- :bug: fix(barrage): 解决新增弹幕重叠问题+不同宽度弹幕滚动速度不一致问题+重构taro版本 (#1942) @irisSong
- :bug: fix(popover): can not be closed (#1931) @oasis-cloud
- :bug: fix(sticky): 适配 taro (#1928) @xiaoyatong
- :bug: fix(tabs): 修订左对齐样式 (#1929) @xiaoyatong
- 📖 docs(tabs): 文档可读性优化 (#1935) @Alex-huxiyang

# v2.3.9

`2024-02-02`

- :sparkles: feat: generate stylesheets containing RTL-related styles (#1889) @oasis-cloud
- :bug: fix(infiniteloading): infiniteloading 点击后再滑动，操作出现异常 (#1919) @JQ
- :bug: fix(input): controlled mode, content clearing does not work (#1912) @oasis-cloud
- :bug: fix(popup): support destroyOnClose (#1914) @oasis-cloud
- :bug: fix(rtl): 修复文本 margin (#1926) @xiaoyatong
- :bug: fix(textarea): 修复maxlength=-1时无法输入字符的情况 (#1910) @xiaoyatong
- :bug: fix(input): 受控模式下在 H5 无法清空内容 (#1925) @oasis-cloud
- :bug: fix(rtl): 左右方向箭头的处理 (#1922) @xiaoyatong
- 📖 docs(backtop): 文档可读性优化 (#1909) @Alex-huxiyang
- 📖 docs(image): correct the error attribute (#1916) @oasis-cloud
- 📖 docs(layout): 文档可读性优化 (#1904) @Alex-huxiyang
- 📖 docs(navbar): 文档可读性优化 (#1915) @Alex-huxiyang
- 📖 docs(sidenavbar): 文档可读性优化 (#1920) @Alex-huxiyang
- 📖 docs(sticky): 文档可读性优化 (#1906) @Alex-huxiyang
- 📖 docs(tabbar): 文档可读性优化 (#1921) @Alex-huxiyang

# v2.3.8

`2024-01-26`

- 🔨 chore: 修复dev环境下demo分包体超过2M问题 (#1905) @xiaoyatong
- 📖 docs(configprovider): 文档可读性优化 (#1882) @Alex-huxiyang
- 📖 docs(grid): 文档可读性优化 (#1903) @Alex-huxiyang
- 📖 docs(swiper): customize pagination controls (#1892) @oasis-cloud
- :sparkles: feat(navbar): title区域自适应宽度 (#1891) @irisSong
- :sparkles: feat(rate): 新增 touchable 属性支持滑动选择 (#1880) @eiinu
- :sparkles: feat(video): support passing through attributes for Taro Video (#1890) @xiaoyatong
- :sparkles: feat: radiogroup add shape props (#1898) @oasis-cloud
- :bug: fix(ellipsis): 修复小程序文本省略问题 (#1888) @eiinu
- :bug: fix(ellipsis): 在 taro 小程序下尽量展示的平滑舒适 (#1902) @xiaoyatong
- :bug: fix(image): 文档可读性优化 (#1887) @Alex-huxiyang
- :bug: fix(overlay): 文档可读性优化 (#1894) @Alex-huxiyang
- :bug: fix(rate): 修复 rate 高度问题 (#1883) @eiinu
- :bug: fix(steps): 小程序的真机情况下出现的换行的情况 (#1899) @xiaoyatong
- :bug: fix(swiper): 轮播跳帧 (#1886) @oasis-cloud
- :bug: fix(tabs): 解决组件嵌套tabs，横向滚动位置计算偏差问题 (#1884) @irisSong
- :bug: fix: doc、demo调整&优化 @huxiyang3
- :bug: fix: taro.createSelectorQuery not function (#1907) @oasis-cloud

# v2.3.7

`2024-01-19`

- :sparkles: feat(checkbox): 增加至少选择项数量的设置功能 (#1859) @oasis
- :sparkles: feat(dialog): 增加关闭按钮 (#1872) @irisSong
- :sparkles: feat(imagepreview): 新增 closeIcon & closeIconPosition (#1873) @eiinu
- :sparkles: feat(numberkeyboard): add title right actions (#1881) @xiaoyatong
- :sparkles: feat: support debugging RTL in the H5 development environment (#1865) @oasis
- :bug: fix(space): 主/交叉轴的 demo 与国际化改进 (#1867) @Alex-huxiyang
- :bug: fix(animatingnumbers): 修复单元测试问题 (#1878) @eiinu
- :bug: fix(button): demo和doc一致化、文档代码优化、属性补充 (#1875) @Alex-huxiyang
- :bug: fix(cell): doc、demo一致化改进 (#1877) @Alex-huxiyang
- :bug: fix(popover): 置于滚动容器中，popover 需要跟随滚动，修复选中项的样式 (#1869) @oasis
- :bug: fix(table): fixed sticky css (#1866) @xiaoyatong
- :bug: fix(tabs): 纵向图标未对齐问题 (#1868) @irisSong
- :bug: fix(Textarea): 文档demo中props拼写错误修改 (#1874) @irisSong
- :bug: fix(uploader): fix the styles when custom progress (#1863) @xiaoyatong
- :bug: fix: 增加 CSS 变量配置颜色的例子，完善 color 属性的使用场景描述 (#1857) @oasis
- 📖 docs(avatar): add list display mode (#1862) @oasis
- 📖 docs(icon): 更新文档 (#1879) @eiinu
- 📖 docs(shortpassword): 增加onComplete的demo及文档 (#1860) @xiaoyatong
- 🛠 refactor(circleprogress): optimize animation duration (#1861) @oasis

# v2.3.6

`2024-01-12`

- :sparkles: feat(space): update demos and docs of justify and align (#1856) @Alex-huxiyang
- :sparkles: feat(tag): image text (#1851) @oasis
- :sparkles: feat: doc文档优化 (#1850) @Alex-huxiyang
- :bug: fix(swiper): fix props of saving image at taro, fix parameter of onChange, update taro version to 3.6.22 (#1847) @xiaoyatong
- :bug: fix: fix some components display bad with the white screen at taro when is development (#1852) @xiaoyatong
- 🔨 chore(deps): update icons to v1.0.2 (#1853) @oasis

# v2.3.5

`2024-01-05`

- :sparkles: feat(avatarcropper): 新增属性shape，可设置裁剪样式为圆形 (#1842) @Marvin Gui
- :sparkles: feat(dialog): 新增 CSS 变量 (#1844) @LING_ZI_QING
- :sparkles: feat(range): marks type optimization (#1833) @oasis-cloud
- :sparkles: feat(tabs): 新增 CSS 变量 (#1835) @LING_ZI_QING
- :bug: fix(avatarcropper): fix cannot display when it is development at taro (#1840) @xiaoyatong
- :bug: fix(empty): fix import at taro (#1839) @xiaoyatong
- :bug: fix(picker): 优化 options 的 text 属性的判空逻辑 (#1837) @oasis-cloud
- :bug: fix(picker): 修复 safari 下 mask 样式问题 (#1843) @eiinu
- :bug: fix(pulltorefresh): 修复安卓小程序下拉卡顿问题 (#1830) @NickH
- :bug: fix(tabs): docs and jmapp css variables (#1838) @xiaoyatong
- 🔨 chore(deps): update @nutui/icons to v1.0.1 (#1836) @oasis-cloud

# v2.3.4

`2023-12-29`

- 📖 docs(nabvar): showtoas 改为 showToast (#1826) @MingHui
- :bug: fix(datepicker): 未设置 value/defaultValue 时渲染 0 (#1819) @RyanCW
- :bug: fix(infiniteLoading): ssr (#1828) @xiaoyatong
- :bug: fix(infiniteLoading): 修改类名及demo (#1818) @xiaoyatong
- :bug: fix(popover): icon cannot be displayed at taro (#1820) @xiaoyatong
- :bug: fix(popver): bottom positon (#1823) @xiaoyatong
- :bug: fix(tabbar): fix icon color (#1816) @xiaoyatong
- :bug: fix(virtualList): 等高模式下的抖动处理, 不定高模式快速滑动白屏 (#1825) @oasis-cloud
- :bug: fix(watermark): fix demos (#1817) @xiaoyatong
- 🛠 refactor(infiniteloading): onRefresh、onLoadMore 改为 Promise 类型，去掉显示调用 done 方法 (#1827) @oasis-cloud

# v2.3.3

`2023-12-22`

- :sparkles: feat(form): validateFields 挂到实例上 (#1813) @oasis-cloud
- :sparkles: feat(table): 增加table锁定头部、左侧列、右侧列 (#1775) @zhehu1
- :bug: fix(Button): incorrect color for danger (#1809) @vczyh
- :bug: fix(cascader): 增加 ref 上的 open 和 close 方法，支持 form 中使用 (#1799) @oasis-cloud
- :bug: fix(datepicker): 受控模式不生效 (#1797) @oasis-cloud
- :bug: fix(infiniteloading): scrollview 的 scrolltop 不应该根据高度设置 (#1804) @oasis-cloud
- :bug: fix(pulltorefresh): icon 部分拆到demo中 (#1812) @xiaoyatong
- :bug: fix(tabbaritem): 将 clone 子元素的方法，改为 context 的方式，隐藏内部使用的 props，精简对外暴露的 props 类型 (#1811) @oasis-cloud
- :bug: fix(tabs): 导航滚动到可视范围需要显示指定 name，调整为内置 uuid 替代 name (#1800) @oasis-cloud
- 🔨 chore: use svg64 in taro (#1805) @xiaoyatong

# v2.3.2

`2023-12-15`

- 📖 docs(cascader): 动态加载文档代码与 demo 保持一致，回显已选数据 (#1787) @LING_ZI_QING
- :sparkles: feat(fixednav): add the list icon for ReactNode (#1786) @sunsunmonkey
- :bug: fix(cascader): second column data cannot be displayed (#1796) @xiaoyatong
- :bug: fix: popup minheight for iPhone14 pro max (#1795) @xiaoyatong
- :bug: fix: toast duration too long (#1794) @xiaoyatong
- 🛠 refactor(swiper): implementing sliding logic through useTouch (#1793) @oasis-cloud
- 🛠 refactor: 类型文件统一为 types，增加 fixednavitem 类型 (#1789) @oasis-cloud

# v2.3.1

`2023-12-13`

- :bug: fix(searchbar): 小程序环境不支持 _ 选择器，将 _ 展开为 div、span、svg (#1777) @oasis-cloud
- :bug: fix: jmapp variables (#1776) @xiaoyatong
- :bug: fix: icon 使用方式错误 (#1778) @xiaoyatong
- :bug: fix: 使用 popup 的组件，采用 scrollview 实现 (#1782) @oasis-cloud

# v2.3.0

`2023-12-08`

- 🔨 chore(config): demo 的配置文件中增加 css 主题 (#1765) @oasis-cloud
- 🔨 chore(deps): update dependency @nutui/icons-\* to 0.0.5 (#1767) @oasis-cloud
- 📖 docs(avatar): 修改demo值,改为可支持变量 (#1752) @xiaoyatong
- 📖 docs(checkbox): checkedIcon 改为 activeIcon (#1724) @oasis-cloud
- 📖 docs(countdown): 修复文档中的文案多语言化 (#1723) @xiaoyatong
- 📖 docs(form): 文档增加 useForm 的示例 (#1708) @oasis-cloud
- 📖 docs(overlay): 文档优化 (#1706) @xiaoyatong
- 📖 docs(picker): fix docs (#1740) @xiaoyatong
- 📖 docs(popup): 禁止滚动穿透示例 (#1769) @oasis-cloud
- 📖 docs(pulltorefresh): 增加 scrollTop 相关 demo (#1755) @oasis-cloud
- 📖 docs(table): 修改文档 (#1731) @xiaoyatong
- 📖 docs(tour): fix tour demo (#1759) @xiaoyatong
- 📖 docs: address and collapse doc icons (#1692) @xiaoyatong
- 📖 docs: fix docs (#1678) @xiaoyatong
- :sparkles: feat(calendarcard): 限制范围时禁止面板切换 (#1688) @eiinu
- :sparkles: feat(checkbox): add button mode (#1738) @xiaoyatong
- :sparkles: feat(empty): adds title,size,and actions (#1697) @xiaoyatong
- :sparkles: feat(example): add with-rsbuild example (#1661) @Kurisu
- :sparkles: feat(form): 增加上下结构的展示的demo (#1729) @xiaoyatong
- :sparkles: feat(infiniteloading): 优化布局,添加css变量,增加demo (#1760) @xiaoyatong
- :sparkles: feat(navbar): 增加标题左对齐方式,优化左侧icon的布局,调整className类 名和css 变量 (#1750) @xiaoyatong
- :sparkles: feat(pagination): add lite mode and css variable (#1743) @xiaoyatong
- :sparkles: feat(popover): 新增属性 action,简化css 变量 (#1747) @xiaoyatong
- :sparkles: feat(popup): 增加description属性,调整从底部弹出时的样式,默认为 round 模式 (#1749) @xiaoyatong
- :sparkles: feat(searchbar): 增加属性 backable 可返回，简化css变量 (#1736) @xiaoyatong
- :sparkles: feat(tabs): 新增模式 divider 及 demo (#1761) @xiaoyatong
- :sparkles: feat(tabs): 新增简约,卡片,按钮/胶囊模式,简化CSS变量,变更className类 名 (#1727) @xiaoyatong
- :sparkles: feat: add dashed and rightIcon, and changed fill default value as outline (#1695) @xiaoyatong
- :sparkles: feat: theme updated to v12 (#1573) @xiaoyatong
- :sparkles: feat: update icons (#1693) @xiaoyatong
- :sparkles: feat: 收敛 icons (#1687) @xiaoyatong
- :bug: fix(calendar): 日历设置结束时间超过开始时间后白屏 (#1745) @oasis-cloud
- :bug: fix(datepicker): 起始时间与结束时间更新后，时间选项数组更新 (#1694) @学友
- :bug: fix(dialog): 调整dialog button大小 (#1720) @xiaoyatong
- :bug: fix(form): 设置 errorMessageAlign="right" 错误文案无法右对齐 (#1709) @oasis-cloud
- :bug: fix(form): 重置功能无法清空报错信息 (#1711) @oasis-cloud
- :bug: fix(image): 修复开启 lazy 后 loading 失效问题 (#1768) @eiinu
- :bug: fix(indicator): 修订样式名称和样式变量 (#1712) @xiaoyatong
- :bug: fix(swiper): demo 中分页器样式显示错误 (#1703) @xiaoyatong
- :bug: fix: address close icon cannot be customed (#1685) @xiaoyatong
- :bug: fix: change drag demo radius value of button (#1701) @xiaoyatong
- :bug: fix: picker 和 address 在 form 中使用，未阻止冒泡，导致取消和确认无法关闭 (#1710) @oasis-cloud
- :bug: fix: 对使用icon的demo 进行了size 设置的废弃，使用了默认size (#1728) @xiaoyatong
- :bug: fix: 调整demo中button大小,调整stoke的默认颜色 (#1717) @xiaoyatong
- 🛠 refactor(cell): 修订类名 (#1722) @xiaoyatong
- 🛠 refactor(numberkeyboard): 修订类名和样式变量 (#1719) @xiaoyatong
- 🛠 refactor(swipe): 修订className类名 (#1715) @xiaoyatong
- 🛠 refactor(switch): 修改样式名称及样式变量，添加相应demo (#1714) @xiaoyatong
- 🛠 refactor(table): props 中的 data 校验逻辑异常 (#1675) @oasis-cloud
- 🛠 refactor(timeselect): 优化结构,简化css变量 (#1732) @xiaoyatong
- 🛠 refactor: css 变量命名规范（主题色部分，不含灰阶） (#1679) @xiaoyatong
- 🛠 refactor: rename card classname (#1700) @xiaoyatong
  style(button): class 名 nut-button\_\_warp 更改为 nut-button-wrap (#1705) @xiaoyatong
  style(calendar): 优化css变量 (#1753) @xiaoyatong
  style(cascader): 去掉无意义样式,修订文档样式变量 (#1757) @xiaoyatong
  style(circleprogress): docs 优化，修订 css 变量 (#1699) @xiaoyatong
  style(collapse): add border-bottom as an item (#1698) @xiaoyatong
  style(fixednav): 废弃 bem 规范, 修订 css 变量 (#1702) @xiaoyatong
  style(input): 增加css 变量,优化demo和文档 (#1730) @xiaoyatong
  style(inputnumber): 简化css变量,修订className类名 (#1737) @xiaoyatong
  style(loading): 修订css变量名,补充css变量文档 (#1721) @xiaoyatong
  style(menu): 优化css变量命名,修改className 类名 (#1746) @xiaoyatong
  style(noticebar): 修订类名和css变量 (#1751) @xiaoyatong
  style(notify): 优化样式布局 (#1762) @xiaoyatong
  style(picker): 修改css变量 (#1735) @xiaoyatong
  style(radio): 优化css变量和样式 (#1756) @xiaoyatong
  style(range): 修订样式变量 (#1718) @xiaoyatong
  style(rate): 修订 css 变量 (#1707) @xiaoyatong
  style(sidnavbar): 修订css 变量 (#1734) @xiaoyatong
  style(steps): 优化steps样式结构,改进css变量名 (#1741) @xiaoyatong
  style(tabbar): add css variable (#1742) @xiaoyatong
  style(tag): 修订样式变量 (#1733) @xiaoyatong
  style(toast): 调整样式,补充demo的多语言化 (#1754) @xiaoyatong
  style(trendarrow): 修订className类名 (#1716) @xiaoyatong
  style(uploader): 修订样式css变量 (#1758) @xiaoyatong
  style: animatenumbers number css (#1681) @xiaoyatong
  style: 修订className (#1770) @xiaoyatong

# v2.2.0

`2023-11-24`

- :sparkles: feat(badge): 优化结构 (#1663) @xiaoyatong
- :sparkles: feat(dialog): 标题前增加结构 (#1666) @xiaoyatong
- :sparkles: feat(grid): 增加 demo (#1660) @xiaoyatong
- :sparkles: feat(image): 增加 demo (#1658) @xiaoyatong
- :sparkles: feat(theme): 修订 fontSize (#1674) @xiaoyatong
- :bug: fix(elevator): 索引定位不准 (#1667) @oasis-cloud
- :bug: fix(swiper): swiper-item 宽高异常问题 (#1657) @eiinu
- :bug: fix(uploader): Update uploader.tsx (#1656) @Kurisu
- :bug: fix(uploader): uploader when item type is undefined (#1650) @xiaoyatong
- 🛠 refactor: css 变量命名规范（主题色部分，不含灰阶） (#1679) @xiaoyatong
- 🛠 refactor: elevator css and variables (#1668) @xiaoyatong
- 🛠 refactor: 防抖方法归一 (#1664) @xiaoyatong
- 🌈 style: delete dark in demos (#1670) @xiaoyatong
- 🌈 style: divider css 修改, 修改部分css变量 (#1669) @xiaoyatong
- 🌈 style: 清理样式变量 (#1673) @xiaoyatong
- 📖 docs(address): 修复非受控模式演示代码不显示 (#1659) @haitao
- 📖 docs: fix docs (#1678) @xiaoyatong
- 📖 docs: 修改文档 (#1662) @xiaoyatong
- 🔨 chore: add jmapp (#1665) @xiaoyatong

# v2.1.0

`2023-11-17`

- :sparkles: feat(Button): size 增加可选值 mini (#1617) @eiinu
- :sparkles: feat(calendarcard): 增加自定义 className (#1636) @eiinu
- :sparkles: feat(infiniteLoading): 通过scrolltolower触发加载事件 (#1633) @oasis-cloud
- :sparkles: feat(safearea): 新增安全区组件 (#1642) @oasis-cloud
- :sparkles: feat(toast): 通过 config 方法设置内容区的className (#1632) @oasis-cloud
- :sparkles: feat: uploader taro h5 支持 video (#1605) @xiaoyatong
- :bug: fix(infiniteloading): onloadmore 无法获取最新的 state (#1644) @oasis-cloud
- :bug: fix: change text in locales (#1634) @xiaoyatong
- :bug: fix: picker and datepicker theme config at taro and indicator css at taro (#1615) @xiaoyatong
- :bug: fix: 日历close样式，可自定义样式；修改弹幕样式；更名CircleClose为Failure、Issue 为 Tips (#1648) @xiaoyatong
- :bug: fix: 🐛 修复swipe存在点击事件时,触发onTouchStart,获取到rightRect为null导致的报错问题 (#1608) @Levidcd
- 🚀 perf: radio reverse and demos (#1631) @xiaoyatong
- 🛠 refactor(classname): 调整 classname 的顺序 (#1637) @oasis-cloud
- 📖 docs(cell): 增加卡片类型的 demo (#1639) @oasis-cloud
- 📖 docs(sideNavBar): handleClose 改为 onClose (#1635) @haitao

# v2.0.24

`2023-11-10`

- 🚀 perf(deps): 升级 icons 依赖，icons 包体积缩减 (#1604) @oasis-cloud
- 🚀 perf(CalendarCard): taro demo 性能优化 (#1593) @eiinu
- :sparkles: feat(Toast): 新增 wordBreak 属性 (#1606) @eiinu
- :sparkles: feat: picker and datepicker add onCancel (#1603) @xiaoyatong
- :sparkles: feat: 类似微信头像裁剪组件 (#1564) @Marvin Gui
- :bug: fix(CalendarCard): 初始化渲染逻辑优化 (#1596) @eiinu
- :bug: fix(circleprogress): 计算出现 NaN 导致组件展示为 100% 的情况 (#1602) @oasis-cloud
- :bug: fix(elevator): 替换文档展示pagation到showKeys (#1598) @HaiTao
- :bug: fix(tag): 修复加载样式问题 #1588 (#1592) @eiinu
- :bug: fix: picker & DatePicker onConfirm failed (#1601) @xiaoyatong
- :bug: fix: swiper indicator zindex at taro (#1586) @xiaoyatong
- :bug: fix: taro event detail is undefined (#1591) @xiaoyatong
- :bug: fix: virtuallist key at taro (#1584) @xiaoyatong
- :bug: fix: 标签上的属性默认为 true，导致渲染 lockscroll 相关的 class (#1599) @oasis-cloud
- 📖 docs(form): 由于文案包含姓名等文字，导致小程序审核不通过 (#1609) @oasis-cloud
- 📖 docs: V1 升 V2 差异点更新 (#1607) @JQ

# v2.0.23

`2023-11-03`

- :sparkles: feat(image): ssr 适配 (#1579) @eiinu
- :sparkles: feat: 新增组件 calendar (#1565) @eiinu
- :bug: fix: calendar scrolltop bad (#1583) @xiaoyatong
- :bug: fix: noticebar 垂直滚动初始化时,无法及时展示元素信息 (#1576) @xiaoyatong
- :bug: fix: popup zindex at taro and picker adds popupProps (#1581) @xiaoyatong
- :bug: fix: popup zindex failed to set (#1578) @xiaoyatong
- :bug: fix: searchbar lose focus when input nothing but input the delete (#1577) @xiaoyatong
- :bug: fix: taro 编译 H5 出现滚动穿透 (#1537) @oasis-cloud

# v2.0.22

`2023-10-27`

- :sparkles: feat(NoticeBar): leftIcon 可自定义，并且支持设置 null 后不展示 icon (#1562) @oasis-cloud
- :bug: fix(Dialog): 点击蒙层无法关闭 (#1552) @oasis-cloud
- :bug: fix(Input): onChange 执行多次 (#1551) @oasis-cloud
- :bug: fix(Swipe): 禁止父元素滚动的 demo (#1560) @oasis-cloud
- :bug: fix: image height in taro (#1567) @xiaoyatong
- 🛠 refactor(Tabs): 滚动到可视区域代码优化，同时放开 tab title 的宽度限制 (#1563) @oasis-cloud

# v2.0.21

`2023-10-18`

- :sparkles: feat(Uploader): onFileItemClick 增加索引参数 (#1544) @oasis-cloud
- :sparkles: feat: add demo about infiniteloading (#1533) @xiaoyatong
- :bug: fix(menu): getBoundingClientRect 兼容 H5 (#1548) @oasis-cloud
- :bug: fix: form input blur (#1542) @oasis-cloud
- :bug: fix: imagepreview h5 (#1538) @xiaoyatong
- :bug: fix: jdapp picker's item-height doesn't match jdapp's default setting (#1545) @xiaoyatong
- :bug: fix: taro image and imagepreivew on h5 (#1532) @xiaoyatong
- :bug: fix: zindex of popover because popup changed its zindex (#1543) @xiaoyatong
- 📖 docs(tabbar): Correct module names of tabbar component (#1539) @HUMORCE

# v2.0.20

`2023-10-13`

- :sparkles: feat: add demo about infiniteloading (#1533) @xiaoyatong
- :bug: fix(form): 自定义校验 promise 返回错误不能被正确收集 (#1523) @samber
- :bug: fix(popup): popup zIndex 无效 (#1521) @Clay Zhang
- :bug: fix: demo format (#1530) @xiaoyatong
- :bug: fix: taro image and imagepreivew on h5 (#1532) @xiaoyatong
- :bug: fix: taro image default width and height (#1531) @xiaoyatong

# v2.0.19

`2023-09-27`

- :sparkles: feat(menu): overlay onclick 事件中调用 hideMenuItem 实现关闭 (#1505) @oasis-cloud
- :sparkles: feat(menu): onClose 事件增加触发来源参数 (#1502) @oasis-cloud
- :sparkles: feat(swiper): swiperItem 支持设置 className (#1504) @oasis-cloud
- :bug: fix(uploader): 受控模式调整，props 类型调整，回调参数修正 (#1500) @oasis-cloud
- :bug: fix: imagepreview with control (#1480) @xiaoyatong
- :bug: fix: indicator 超长换行 (#1486) @oasis-cloud
- :bug: fix: menu 在 lockscroll 的时候不需要加滚动事件 (#1509) @oasis-cloud
- :bug: fix: ios和android下点击button时出现半透明灰色遮罩 (#1495) @Kurisu

# v2.0.18

`2023-09-20`

- :sparkles: feat(menu): 增加受控和非受控的模式 (#1433) @oasis-cloud
- :sparkles: feat: menu 展开关闭事件增加参数 (#1447) @oasis-cloud
- :bug: fix(Badge): Badge位置值兼容两种类型，添加css变量min-width (#1410) @beginnerZhang
- :bug: fix(Notify): type NotifyType incorrectly spelling warning as waring (#1441) @Katz
- :bug: fix: calendar 在 iOS 中不展示开始和结束 (#1471) @oasis-cloud
- :bug: fix: swiperItem 的子元素在 H5 中设置 onClick 无效 (#1472) @oasis-cloud
- :bug: fix: uploader 列表类型内置上传按钮 (#1477) @oasis-cloud
- :bug: fix: uploader 缩略图圆角样式未生效 (#1476) @oasis-cloud
- :bug: fix: useFrom 类型优化 (#1473) @oasis-cloud
- :bug: fix: zIndex 层级统一调整 (#1460) @oasis-cloud
- :bug: fix: 组件依赖样式处理 (#1474) @xiaoyatong
- 📖 docs: form 组件文档格式化 (#1436) @oasis-cloud

# v2.0.17

`2023-09-13`

- :sparkles: feat: form 增加 validateTrigger 和 getFieldsValue (#1411) @oasis-cloud
- :bug: fix: add popupProps (#1426) @oasis-cloud
- :bug: fix: form label position left (#1412) @oasis-cloud
- :bug: fix: lint errors (#1406) @xiaoyatong
- :bug: fix: review package update (#1423) @xiaoyatong
- :bug: fix: swipe component fails to slide in Alipay (#1399) @oasis-cloud
- :bug: fix: table expose rowIndex (#1400) @oasis-cloud
- :bug: fix: toast组件 duration 设置无效 (#1424) @oasis-cloud
- 🔨 chore: glob & prettier update (#1427) @xiaoyatong
- 🔨 chore: swc 版本恢复 (#1425) @oasis-cloud

# v2.0.16

`2023-09-06`

- :sparkles: feat: form 支持分割线 (#1389) @oasis-cloud
- :bug: fix(pulltorefresh): 修复 H5 卡顿 & 小程序滑动距离问题 @eiinu
- :bug: fix: csstransition using findDOMNode which is deprecated (#1370) @oasis-cloud
- :bug: fix: dialog 的函数调用增加对 classname 和 style 的支持 (#1391) @oasis-cloud
- :bug: fix: swipe 阻止页面滚动 (#1380) @oasis-cloud
- :bug: fix: useForm 在类组件下报错，可以采用 ref 的方式使用 FormInstance (#1383) @oasis-cloud
- :bug: fix: 多个 Swipe 的滑动选项完全相等 (#1334) @Clay Zhang
- 📖 docs: toast组件完善了样式变量 (#1379) @ivan-My

# v2.0.15

`2023-08-30`

- :sparkles: feat: support next.js (#1326) @oasis-cloud
- :bug: fix: dialog content 失效 (#1323) @oasis-cloud
- :bug: fix: space 复制按钮重复 (#1322) @oasis-cloud
- 🔨 chore(tabs): 更新文档与 demo (#1339) @eiinu

# v2.0.14

`2023-08-18`

- :bug: fix: skeleton row 设置为 1 时, 宽度只能固定为70% (#1306) @ivan-My
- :bug: fix: loading 构建产物增加类型注释 (#1320) @oasis-cloud
- :bug: fix: space 构建产物增加类型注释 (#1321) @oasis-cloud
- 📖 docs: dialog 指令式用法注意事项 (#1318) @oasis-cloud

# v2.0.13

`2023-08-16`

- :sparkles: feat: dialog 支持函数调用 (#1315) @oasis-cloud
- :sparkles: feat: toast 支持函数调用 (#1307) @oasis-cloud
- :sparkles: feat: 提取 Taro 的 Demo 到 workspace (#1302) @oasis-cloud
- :bug: fix: icons 版本更新 (#1310) @oasis-cloud
- :bug: fix: 非 undefined 的 falsely 值无法传递给子组件 (#1312) @qnnp
- 📖 docs: 删除了skeleton文档中无用的props(width,height) (#1303) @ivan-My

# v2.0.12

`2023-08-11`

- :bug: fix(Avatar): 解决在小程序环境下，使用Avatar.Group无法正常展示头像问题 (#1296) @Tralafalgar Wang
- :bug: fix: overlay 的 zIndex 属性改为 css 变量 (#1294) @oasis-cloud
- :bug: fix: 修复 form 设置 labelPosition=top 的样式 (#1300) @oasis-cloud

# v2.0.11

`2023-08-09`

- :sparkles: feat: 新增 tour 引导组件 (#1279) @junjun666
- :bug: fix: h5下多选上传时 uid 重复的问题 (#1269) @Liuqh233
- :bug: fix: input 组件点击清除图标无法清空内容 (#1292) @oasis-cloud
- :bug: fix: numberkeyboard 设置标题后，完成按钮应该触发 onConfirm 事件 (#1285) @oasis-cloud
- :bug: fix: uploader h5/taro 增加校验 (#1297) @junjun666
- :bug: fix: uploader taro-h5 上传状态样式错乱 (#1293) @junjun666
- 📖 docs: divider 组件的 styles 属性示例改为 style (#1290) @oasis-cloud
- 📖 docs: numberkeyboard 的 type 属性类型更新 (#1284) @oasis-cloud
- 📖 docs: step 组件的 description 属性示例改为节点的实现方式 (#1289) @oasis-cloud
- 📖 docs: 调整 image tao 文档中引入包名 (#1295) @oasis-cloud

# v2.0.10

`2023-08-04`

- :sparkles: feat: loading 组件 (#1204) @mike8625
- :sparkles: feat: 日历支持footer的children定义，增加日历+datepicker的demo (#1277) @xiaoyatong
- :bug: fix: elevator 计算索引出现 -1，导致组件运行报错 (#1276) @oasis-cloud
- :bug: fix: loading 组件导出 props 类型 (#1278) @oasis-cloud

# v2.0.9

`2023-08-02`

- :sparkles: feat(notify): 支持函数调用的展开和关闭 (#1271) @oasis-cloud
- :bug: fix: space 版本号修改为 2.0 (#1265) @oasis-cloud
- 🔨 chore(config): 优化 taro demo 环境配置文件 (#1266) @oasis-cloud
- 📖 docs: cascader 文档更新 (#1270) @vapao
- 📖 docs: tag 文档和 demo 同步 (#1275) @oasis-cloud
- 📖 docs: 升级文档更新 (#1274) @oasis-cloud

# v2.0.8

`2023-07-28`

- :sparkles: feat: 增加了space组件 (#1259) @ivan-My
- 🛠 refactor: tabs 去除 console (#1261) @vapao
- 🔨 chore(script): 简化开发环境启动逻辑 (#1264) @eiinu

# v2.0.7

`2023-07-26`

- :sparkles: feat: formitem label 支持 reactnode (#1254) @oasis-cloud
- :sparkles: feat: uploader 添加上传的响应数据 (#1251) @逍遥
- 🔨 chore: 优化 any 类型 (#1222) @junjun666
- 📖 docs(SearchBar): 补充 onClear 属性说明 (#1256) @Tralafalgar Wang

# v2.0.6

`2023-07-21`

- :bug: fix(Address): 修复Address组件通过点击CloseIcon和Overlay关闭后，无法再次打开的问题 (#1233) @Tralafalgar Wang
- :bug: fix(button): 渐变色导致边框出现重叠 (#1250) @oasis-cloud

# v2.0.5

`2023-07-19`

- :bug: fix(sticky): 组件卸载移除 tap 事件改为移除 scroll 事件 (#1235) @oasis-cloud
- :bug: fix: height is null (#1239) @Liuqh233
- :bug: fix: 修复popover滑动定位错位的问题 (#1232) @junjun666
- :sparkles: perf: configProvider 组件性能优化 (#1230) @大喵
- 🔨 chore: site 内部移除 taro components @oasis-cloud

# v2.0.4

`2023-07-14`

- :sparkles: feat: configprovider 组件支持传入 className 和 style 属性 (#1219) @大喵
- :bug: fix(button): fill=none & type=default 样式修复 (#1215) @eiinu
- :bug: fix(form): formItem 的 props 改为 Partial (#1221) @oasis-cloud
- :bug: fix: cascader onChange 触发2次问题修复 (#1224) @xiaoyatong
- :bug: fix: countdown手动控制demo展示样式优化 (#1229) @irisSong
- :bug: fix: signature组件提取样式变量+修复taro h5 demo签字时滚动问题 (#1220) @irisSong
- :bug: fix: tabs组件在抖音小程序展示异常 (#1211) @oasis-cloud
- :bug: fix: 修复signature小程序下demo签字时页面跟随滚动问题 (#1225) @irisSong
- :bug: fix: 文档格式化 @hanyuxinting

# v2.0.3

`2023-07-12`

- :sparkles: feat: image 支持 taro (#1190) @oasis-cloud
- :sparkles: feat: menu 增加打开和关闭的回调方法 (#1206) @oasis-cloud
- :sparkles: feat: 类型文件中导出组件的 props, 简化组件 props 引入方式 (#1205) @oasis-cloud
- :bug: fix: infiniteloading taro doc (#1207) @junjun666
- :bug: fix: 组件2.0走查问题修复 (#1172) @junjun666
- 🔨 chore: pnpm workspace (#1199) @junjun666
- 🔨 chore: 兼容ssr之修复引入组件库启动报错 (#1212) @junjun666
- 📖 docs(form): nativeType 改为 formType (#1209) @oasis-cloud

# v2.0.2

`2023-07-07`

- :sparkles: feat: 日历增加不可选状态、增加style、className 的透传 (#1193) @xiaoyatong
- :bug: fix: animatingNumber组件暗黑模式适配+demo优化 (#1184) @irisSong
- :bug: fix: circleprogress color 属性的类型优化 (#1191) @junjun666
- 🔨 chore(backtop): 优化 demo 和文档 (#1186) @eiinu
- 🔨 chore(deps): add @nutui/touch-emulator (#1196) @eiinu
- 🔨 chore(progress): update demo (#1192) @eiinu
- 🔨 chore: overlay 动效优化 (#1183) @junjun666

# v2.0.1

`2023-07-05`

- :sparkles: feat: tag 新增 info 类型 (#1180) @xiaoyatong
- :bug: fix(searchbar): 修复 Taro-H5 下 onSearch 无法触发的问题 (#1178) @eiinu
- :bug: fix: button 组件在 taro h5 中不设置 opentype (#1167) @oasis-cloud
- :bug: fix: datepicker 修改列数据后，更新下一级数据 (#1179) @xiaoyatong
- :bug: fix: demo 中 input 布局换行 (#1170) @oasis-cloud
- :bug: fix: demo 中 tabs 采用独立状态 (#1169) @oasis-cloud
- :bug: fix: eslint 错误修复 (#1175) @oasis-cloud
- :bug: fix: form 在处理组件受控和非受控的时候存在冲突 (#1166) @oasis-cloud
- :bug: fix: 关闭主题定制入口 (#1171) @oasis-cloud
- :bug: fix: 调整 demo 中 image 组件的间距 (#1168) @oasis-cloud
- 📖 docs: swiper 文档中的 autoplay 描述修复 (#1165) @oasis-cloud
- 📖 docs: update doc link (#1176) @eiinu

# v2.0.0-beta.3

`2023-06-30`

- 🔨 chore: 增加组件名称调整的内容 (#1161) @oasis-cloud
- 📖 docs: 统一升级文档中的修改的描述术语 (#1159) @xiaoyatong
- :bug: fix: 修改migrate文档 (#1164) @junjun666
- :bug: fix: 单元测试问题修复 (#1158) @eiinu
- 🛠 refactor: 调整 MenuItem CellGroup SwiperItem 使用方式为 Menu.Item Cell.Group… (#1160) @oasis-cloud

# v2.0.0-beta.2

`2023-06-28`

- :sparkles: feat: 日历组件新增选择周 type='week' 模式 (#1152) @xiaoyatong
- :bug: fix: dialog spelling mistake (#1148) @Katz
- :bug: fix: fit&wxwork (#1146) @junjun666
- :bug: fix: 优化 TrendArrow 组件 props (#1150) @irisSong
- :bug: fix: 修改navbar组件demo样式 (#1145) @irisSong
- 🛠 refactor: 属性定义走查修复 (#1149) @xiaoyatong
- 🔨 chore(virtuallist): 调整 itemRender (#1151) @eiinu

# v2.0.0-beta.1

`2023-06-21`

- :bug: fix(collapse): 测试问题修复 (#1132) @eiinu
- :bug: fix: address taro 白屏 (#1140) @xiaoyatong
- :bug: fix: popup title (#1143) @xiaoyatong
- :bug: fix: remove bem (#1138) @oasis-cloud
- :bug: fix: 修复toast组件屏幕锁定不能滚动的问题 (#1134) @junjun666
- :bug: fix: 单元测试问题修复 (#1137) @eiinu
- 🛠 refactor: address (#1104) @xiaoyatong
- 🛠 refactor: calendar (#1087) @xiaoyatong
- 🔨 chore(ci): delete sync-gitcode.yml @eiinu
- 🔨 chore: popover review (#1127) @junjun666
- 🔨 chore: 更新 taro 版本到 3.6.8 @oasis-cloud
- 🔨 chore: 移除 @bem-react/classname (#1142) @oasis-cloud

# v2.0.0-alpha.18

`2023-06-16`

- 🔨 chore(tabbar): 调整 Badge 相关 Props (#1126) @eiinu
- 📖 docs: update migrate-from-v1.md (#1131) @eiinu
- :sparkles: feat: 修改升级文档 (#1125) @oasis-cloud
- :bug: fix: button 组件在 taro h5 中的类型优化 (#1133) @oasis-cloud
- :bug: fix: uploader 英文文档修改 (#1124) @oasis-cloud
- :bug: fix: 修复inputnumber在taro H5样式失效的问题 (#1130) @junjun666
- :bug: fix: 完善migrate-from-v1文档 (#1129) @irisSong

# v2.0.0-alpha.17

`2023-06-14`

- :bug: fix: searchbar shape=round 效果差的问题 (#1109) @xiaoyatong
- :bug: fix: swipe 类型和文档优化 (#1122) @oasis-cloud
- 🛠 refactor: form (#1118) @oasis-cloud
- 📖 docs: 修改布局文档相关 @hanyuxinting
- 📖 docs: 文档走查及问题修复 (#1123) @xiaoyatong
- 📖 docs: 文档走查及问题修复-基础&布局组件(#1117) @eiinu
- 📖 docs: 文档走查及问题修复-导航组件 (#1119) @xiaoyatong

# v2.0.0-alpha.16

`2023-06-09`

- :bug: fix(toast): 修复连续调用 show 方法时无法销毁的问题 (#1102) @eiinu
- :bug: fix: dialog 需要增加 overlay 的样式，否则按需加载样式出现异常 (#1103) @oasis-cloud
- :bug: fix: menu 组件被使用 transform 的组件嵌套后，遮罩层发生偏移 (#1093) @oasis-cloud
- :bug: fix: noticebar 修复小程序多行展示问题 (#1107) @xiaoyatong
- :bug: fix: pikcer 在关闭动画未结束时修改 visible，导致状态更新异常 (#1097) @oasis-cloud
- 🛠 refactor: datepicker (#1091) @xiaoyatong
- 🔨 chore: 修复 Taro Demo 的字号 (#1105) @oasis-cloud
- 🔨 chore(script): 生成 Props 功能增强 (#1096) @eiinu
- 📖 docs: 文档修订 (#1106) @xiaoyatong

# v2.0.0-alpha.15

`2023-06-07`

- :sparkles: feat(ci): add codecov (#1092) @eiinu
- :sparkles: feat(ci): add lint action (#1098) @eiinu
- :sparkles: feat: imagepreview 组件在小程序中支持长按图片保存 (#1090) @oasis-cloud
- :bug: fix: 单元测试问题修复 (#1095) @eiinu
- 🛠 refactor: card (#1069) @拧巴的猫
- 🛠 refactor: infiniteloading (#1085) @junjun666
- 🛠 refactor: signature (#1080) @拧巴的猫
- 🛠 refactor: tag (#1089) @xiaoyatong
- 🛠 refactor: TimeSelect (#1088) @eiinu

# v2.0.0-alpha.14

`2023-06-02`

- 🛠 refactor: barrage (#1072) @junjun666
- 🛠 refactor: popover (#1060) @junjun666
- 🛠 refactor: sidenavbar (#1057) @oasis-cloud
- :bug: fix(backtop): 修改 demo (#1083) @eiinu
- :bug: fix: ellipsis 在 taro 构建的 H5 中偶现无法暂时省略号的情况 (#1076) @oasis-cloud
- :bug: fix: input 组件忽略 maxlength 和 password 属性 (#1079) @oasis-cloud
- :bug: fix: menu 的 closeOnClickOverlay 改为 closeOnOverlayClick (#1084) @oasis-cloud
- :bug: fix: picker 组件渲染的时候触发 onConfirm (#1082) @oasis-cloud
- 📖 docs(textarea): 更新文档说明 (#1086) @eiinu
- 📖 docs: checkbox demo 增加头部 (#1075) @oasis-cloud
- 📖 docs: 文档中 css 变量表格的文案优化 (#1077) @oasis-cloud

# v2.0.0-alpha.13

`2023-05-31`

- 🛠 refactor: animatingNumbers (#1048) @拧巴的猫
- 🛠 refactor: trendArrow (#1066) @拧巴的猫
- 🛠 refactor: video (#1034) @junjun666
- 🛠 refactor: watermark (#1071) @eiinu
- :sparkles: feat: 构建类型文件中的注释，方便在编辑器中查看属性的说明 (#1068) @oasis-cloud
- :bug: fix: popup 在 taro 中的动效优化 (#1065) @oasis-cloud
- :bug: fix: 修改 uploader 和 video 的 taro 文档 (#1070) @junjun666
- 📖 docs: correct spelling errors (#1058) @konka

# v2.0.0-alpha.12

`2023-05-26`

- 🛠 refactor: actionSheet (#1053) @xiaoyatong
- 🛠 refactor: countdown (#1040) @拧巴的猫
- 🛠 refactor: searchBar (#1047) @xiaoyatong
- 🛠 refactor: shortPassword (#1046) @eiinu
- 🛠 refactor: toast (#1026) @justExplore
- 🛠 refactor: virtualList (#1056) @eiinu
- :sparkles: feat: ellipsis add width attribute (#1038) @Zhu Da Shuai
- :sparkles: feat: 导出主题中的 CSS 变量类型 (#1050) @oasis-cloud
- 📖 docs: import touch-emulator (#1045) @oasis-cloud

# v2.0.0-alpha.11

`2023-05-24`

- 🛠 refactor: collapse (#1027) @eiinu
- 🛠 refactor: Skeleton (#1036) @eiinu
- :sparkles: feat: 添加土耳其语 (#1028) @manin
- :bug: fix(fixednav): 修改 onSelect 参数顺序 (#1035) @eiinu
- :bug: fix: 修复taro下拉刷新组件偶发未触发canRelease状态时松手，组件不会自动回弹的问题 (#1029) @Z-Bokle
- 🔨 chore: 增加同步升级文档到 docs 仓库的脚本 (#1044) @oasis-cloud
- 🔨 chore: 完善组件导出的类型 (#1039) @oasis-cloud
- 🔨 chore: 构建每个组件的 css 文件 (#1037) @oasis-cloud
- 📖 docs: 文档 props 标题统一修复 (#1041) @oasis-cloud

# v2.0.0-alpha.10

`2023-05-19`

- :sparkles: feat(progress): 添加 lazy、delay 属性 (#1023) @eiinu
- :bug: fix: swiper loop 模式位置计算错误 (#1018) @oasis-cloud
- 🛠 refactor: imagepreview (#1019) @xiaoyatong
- 🛠 refactor: noticebar (#1024) @xiaoyatong
- 🛠 refactor: steps (#1021) @oasis-cloud
- 📖 docs: icon 文档修订 (#1022) @oasis-cloud

# v2.0.0-alpha.9

`2023-05-17`

- :sparkles: feat: add create-properties.js (#1001) @eiinu
- :sparkles: feat: cascader支持受控 (#1000) @xiaoyatong
- :sparkles: feat: elevator 支持右侧索引是否展示 (#1006) @拧巴的猫
- :bug: fix(image): lazy 优化观察对象数量 (#1015) @eiinu
- :bug: fix: tabs children 变更后需要展示新的 title (#999) @oasis-cloud
- :bug: fix: 格式化，删掉某些无用代码 (#1014) @xiaoyatong
- 🛠 refactor: notify (#983) @拧巴的猫
- 🛠 refactor: NumberKeyboard (#1012) @eiinu
- 🛠 refactor: price (#989) @拧巴的猫
- 🛠 refactor: pulltorefresh (#1011) @oasis-cloud
- 🛠 refactor: radio (#1009) @oasis-cloud
- 🛠 refactor: Range (#991) @eiinu
- 🛠 refactor: swiper 重构；indcator 的索引计算改为从 0 开始 (#1008) @oasis-cloud
- 🔨 chore: autoplay -> autoPlay (#1007) @eiinu
- 📖 docs(tabbar): update description (#1004) @eiinu

# v2.0.0-alpha.8

`2023-05-12`

- :sparkles:feat: cascader支持受控 (#1000) @xiaoyatong
- :bug: fix: tabs children 变更后需要展示新的 title (#999) @oasis-cloud
- 🛠 refactor: Range (#991) @eiinu

# v2.0.0-alpha.7

`2023-05-12`

- :bug: fix: tabs children 变化需要更新选中状态 @oasis-cloud

# v2.0.0-alpha.6

`2023-05-12`

- 🛠 refactor: cascader (#993) @xiaoyatong
- 🛠 refactor: picker (#975) @xiaoyatong
- 🛠 refactor: table (#982) @xiaoyatong
- 🛠 refactor: TextArea (#979) @eiinu
- :bug: fix: image src 初始状态未空，导致出发加载失败事件 (#988) @oasis-cloud
- 📖 docs(progress): demo 代码更新 (#986) @eiinu
- 📖 docs(progress): update demo (#987) @eiinu
- 📖 docs: tabs 文档中的 titleNode 修改为 title (#995) @oasis-cloud
- 🔨 chore: taro es 构建移入 vite 配置文件 (#990) @oasis-cloud

# v2.0.0-alpha.5

`2023-05-10`

- 🛠 refactor: checkbox (#974) @oasis-cloud
- 🛠 refactor: circleprogress-v2.0 (#949) @junjun666
- 🛠 refactor: ellipsis-v2.0 (#963) @junjun666
- 🛠 refactor: empty-v2.0 (#977) @junjun666
- 🛠 refactor: swipe (#958) @justExplore
- 🛠 refactor:avatar-v2.0 (#970) @junjun666
- 📖 docs: 增加 icon 的复制功能 (#973) @oasis-cloud
- :sparkles: feat: cellgroup组件增加单元格之间是否展示分割线props (#961) @拧巴的猫
- :bug: fix: tabbar 通过 Tabbar.Item 方式使用未加载 item 的样式 (#972) @oasis-cloud
- :bug: fix: 修复elevator小程序快速滑动后闪动问题 (#984) @拧巴的猫

# v2.0.0-alpha.4

`2023-05-05`

- 🛠 refactor: circleprogress-v2.0 (#949) @junjun666
- 🛠 refactor: input (#962) @oasis-cloud
- 🛠 refactor: Tabbar (#935) @eiinu
- :bug: fix: badge 组件的默认样式中，去掉 margin-right (#967) @xiaoyatong
- 🎨 style: fix endLine display error (#964) @HaiTao

# v2.0.0-alpha.3

`2023-04-28`

- :bug: fix: overlay 属性 onClick 暴露、lockscroll 相关demo 修订 (#959) @xiaoyatong
- :bug: fix: 修改taro增加主题编译 (#950) @junjun666
- 🛠 refactor: dialog (#945) @xiaoyatong
- 🛠 refactor: switch (#941) @拧巴的猫
- 🛠 refactor: tabs (#939) @oasis-cloud
- 🔨 chore: website 2.0 (#955) @oasis-cloud
- 📖 docs: button 文档表格优化 (#956) @oasis-cloud

# v2.0.0-alpha.2

`2023-04-26`

- 🛠 refactor: navbar (#890) @拧巴的猫
- 🛠 refactor: animate (#940) @junjun666
- 🛠 refactor: badge (#936) @xiaoyatong
- 🛠 refactor: drag (#937) @拧巴的猫
- 🛠 refactor: elevator (#927) @拧巴的猫
- 🛠 refactor: menu (#923) @oasis-cloud
- 🛠 refactor: progress (#943) @eiinu
- 🔨 chore: sync pnpm-lock @oasis-cloud
- :bug: fix: 修改taro增加主题编译 (#950) @junjun666

# v2.0.0-alpha.1

`2023-04-21`

- 🔨 chore: markdown 中 props、css variables 类型和默认值增加代码标识 @oasis-cloud
- 🛠 refactor: Audio (#930) @eiinu
- 🛠 refactor: layout (#934) @oasis-cloud
- 🛠 refactor: popup 2.0 (#929) @xiaoyatong
- 🛠 refactor: uploader (#902) @junjun666

# v2.0.0-alpha.0

`2023-04-20`

- 🛠 refactor: backtop (#912) @eiinu
- 🛠 refactor: button (#904) @oasis-cloud
- 🛠 refactor: cell (#876) @拧巴的猫
- 🛠 refactor: divider (#891) @junjun666
- 🛠 refactor: fixednav (#865) @eiinu
- 🛠 refactor: grid (#882) @eiinu
- 🛠 refactor: image (#892) @oasis-cloud
- 🛠 refactor: indicator (#893) @xiaoyatong
- 🛠 refactor: inputnumber (#888) @junjun666
- 🛠 refactor: overlay (#886) @junjun666
- 🛠 refactor: pagination (#861) @eiinu
- 🛠 refactor: Rate (#894) @eiinu
- 🛠 refactor: sticky (#906) @oasis-cloud

# v1.x

去 [GitHub](https://github.com/jdf2e/nutui-react/blob/1.x-stable/CHANGELOG.md) 查看 `1.x` 的 Change Log。
