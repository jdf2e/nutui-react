# v3.0.12

`2025-05-17`

- :sparkles: feat(range): 鸿蒙适配,修订NaN,纵向mark时异常问题 (#3217)
- :sparkles: feat(progress): 兼容并支持taro components的progressProps & v15适配 (#3202)
- :sparkles: feat(searchbar): v15 适配,增加了受控和默认值 (#3209)
- :sparkles: feat(steps): v15 (#3216)
- :bug: fix(uploader): beforeUpload failed to work (#3219)
- :bug: fix(uploader): 多端上传媒体文件逻辑与2x保持一致 (#3223)
- :bug: fix(address): 构建单一样式文件 (#3220)

# v3.0.11

`2025-05-09`

- :bug: fix(address): 构建单一样式文件 (#3220)
- 📖 docs: 升级文档补充 (#3204)
- :sparkles: feat(address): v15 适配 (#3171)
- :bug: fix: 修复编译单个组件在小程序下路径异常的问题 (#3215)
- :bug: fix(picker): 解决透传popup的round属性不生效问题 (#3205)
- zap: perf: optimize the performance issues caused by style injection (#3203)

# v3.0.10

`2025-04-25`

- 📖 docs: jmapp 不判断环境，直接打开 (#3193)
- :sparkles: feat(switch): loading 态受控 (#3149)
- :sparkles: feat(uploader): add listUploadRender prop for custom list mode upload… (#3198)
- :sparkles: feat(video): 兼容taro Component属性 (#3185)
- :sparkles: feat(radio): 支持自定义icon的classname (#3196)
- :bug: fix(tabs): 修复滚动计算问题，优化定位逻辑 (#3183)
- :bug: fix: 兼容选中值为0的情况 (#3192)

# v3.0.9

`2025-04-18`

- :sparkles: feat(form): 增加 taro components 属性的支持,抽象类型 (#3182)
- :sparkles: feat(input): 增加 taro components 属性的支持 (#3181)
- :sparkles: feat(button): 兼容 taro components (#3188)
- :bug: fix(image): update image props tsType (#3178)
- 🪵 refactor: 打包组件不同主题的 css 文件 (#3189)
- 🪵 refactor(loading): 移除内置的 lottie，可通过 icon 属性加载 lottie (#3184)
- 📖 docs(audio): 修订audio taro 端文档,不再支持taro多端 (#3187)
- 🏡 chore: update taro version (#3186)
- 🏡 chore: 调整 utils 和 hooks 的导出方式 (#3162)

# v3.0.8

`2025-04-11`

- :sparkles: feat(v15): swipe 增加 v15 的 demo (#3160)
- :sparkles: feat(dialog): 添加变量处理 (#3172)
- :bug: fix(sidebar): scroll animation not working with sidebarDuration prop (#3169)
- :bug: fix(switch): 异步操作中抛错可中断 loading 态 (#3143)
- :bug: fix: jmapp demo build (#3146)
- :bug: fix(image): 组件内部的style处理覆盖传入的className (#3165)
- :bug: fix(cascader): 选中后 tab 应展示 text 字段的值 (#3167)
- :bug: fix: codesandbox displays abnormal (#3159)
- :bug: fix(docs): 修复 markdown 无法正确编译注释 (#3158)
- :bug: fix(skeleton): 废弃inline 导致的警告问题修复 (#3154)
- 🏡 chore: 增加 useHtmlComponents 模式 (#3156)
- 📖 docs: 补充快速上手和主题中的配置项的解释 (#3163)

# v3.0.7

`2025-04-03`

- :sparkles: feat(jdesign): 修订变量名 (#3127)
- :sparkles: feat(collapse): 适配鸿蒙 (#3139)
- :bug: fix(tabs): 兼容16的处理 (#3150)
- :bug: fix(dialog)：修复函数式调用时 hidecancel 不生效问题 (#3145)
- :bug: fix(button): 样式变量无法生效问题修复 (#3142)
- :bug: fix(Popup): 调整最小高度设定为 26% (#3144)
- :bug: fix: popover 无法关闭的问题,删除无用代码和无用的样式变量 (#3129)
- :bug: fix: contribution img failed to display (#3141)
- :bug: fix(switch): 简化props使用 (#3132)
- :bug: fix: tabbar config json (#3134)
- 🪵 refactor(dialog): 抽离types到标准spec下，去掉web h5 wrap层 (#3147)
- 🏡 chore: 修复正式环境的 publicPath (#3137)

# v3.0.6

`2025-03-28`

- :sparkles: feat(skeleton): v15 (#3086)
- :sparkles: feat(Tabbar): v15 样式适配；增加 icon/value/title 的function类型，支持根据active状态渲染不同数据；增加 onDoubleClick 事件 (#3110)
- :sparkles: feat(indicator): 增加 UI 变体的类型 (#3114)
- :sparkles: feat(switch): 异步切换支持受控loading态 (#3122)
- :sparkles: feat(notify): v15 (#3082)
- :sparkles: feat(lottie): 支持京东小程序 (#3080)
- :sparkles: feat(demoblock): code block scrolling behavior， CodesandBox function and copyCode styles (#3106)
- :bug: fix(searchbar): 支付宝小程序设置 enableInPageRenderInput 后无法触发 onChange (#3130)
- :bug: fix: doc css (#3126)
- :bug: fix(overlay): 扩大点击范围 (#3117)
- :bug: fix(pickerview): 解决小程序获取高度计算错误 (#3120)
- :bug: fix(badge): 修正css变量定义 (#3123)
- :bug: fix: update pkgjson title (#3119)
- 🪵 refactor(badge): 支持禁用模式 (#3118)
- 🏡 chore: support ui review (#3121)

# v3.0.5

`2025-03-21`

- feat(pickerview): 小程序支持自定义列表行高 (#3102)
- feat: 优化了一下文档样式,更紧凑清晰 (#3105)
- fix(ImagePreview): 优化代码，fix 因为popup最大宽度导致的问题 (#2939)
- fix(badge): 解决中文偏上问题 (#3111)
- fix(swipe): 调整 demo 中字体为 12 (#3093)
- fix: correct import paths (#3089)
- fix: 开发环境中导出 types 下的类型 (#3090)
- fix(inputnumber): value 大于 max 图标应处于禁用态 (#3107)
- fix(resultpage): 引入button样式 (#3103)
- fix(SearchBar): demo 样式变量修订 (#3101)
- fix: adjust site style (#3096)
- refactor(fixednav): support harmony (#3095)
- docs: 补充web 设置 px 转 rem时的文档 (#3098)
- feat(pickerview): 选中值增加class类名用于自定义样式 (#3097)
- test(uploader): optimize async test cases stability (#3104)

# v3.0.4

`2025-03-07`

- fix(sidebar): 禁用属性和内容显示异常 (#3084)
- fix: 示例中 toast 的用法修复 (#3083)
- chore: 移除废弃的 github action (#3085)
- chore(deps): 升级 actions/github-script 到 v7 (#3012)

# v3.0.3

`2025-03-07`

- refactor(pagination): 组件重构, hooks 实现数据抽象 (#2988)
- refactor(cascader): 组件重构，修订 lazy 属性的定义 (#3007)
- fix(countdown): 秒位补 0 展示 (#3072)
- fix(popup): 修复 popup 示例问题 (#3075)
- fix(calendarcard): 修复日历卡片在 JD 小程序下的示例 (#3074)
- fix(inputnumber): 组件重构, 增加 beforeChange，调整异步触发逻辑 (#3006)
- chore: 类型文件中增加 jsdoc (#3073)
- chore: 类型规范化 (#3034)
- docs: 增加组件相关Issues和更新日志的展示 (#3027)
- docs: 修复快速上手中的按需加载配置 (#3071)
- docs: 更新迁移文档 (#3077)

# v3.0.2

`2025-03-07`

- feat(form): 同步 2.x 的功能 (#2976)
- feat(swipe): harmony (#3039)
- fix: sync v15 sign (#3067)
- fix: 解决按需引入picker和datepicker没有样式问题 (#3064)
- fix(signature): 解决taro h5不能绘制问题 (#3060)
- fix(input): style 属性设置为 CSSProperties 类型的值 (#3059)
- fix: taro default import error (#3057)
- fix(docs): 快速上手文件 (#3058)
- docs(site): 删除无用的代码，更新视觉版本号 (#3063)
- docs: update common docs
- docs: fix some mistakes in the documentation (#3056)
- chore: add jdtaro. True means that will repeat (#3065)
- chore: update site style (#3055)
- refactor: migrate site to nutui-react (#2955)

# v3.0.1

`2025-03-05`

- feat: 增加一个以组为单位的编译逻辑 (#3042)
- feat(shortpassword): harmony (#3017)
- feat: datepickerview (#3026)
- fix(drag): 解决 taro 不能滑动问题 (#3054)
- fix(input): 显示设置 placeholder 字体颜色 (#3050)
- fix: hoverbutton h5 border (#3053)
- fix(navbar): 居左展示时，副标题居左 (#3049)
- fix: demos full css (#3051)
- fix: 调整 dd 展示 (#3052)
- fix: H5 小程序走查中遇到的问题修复 (#3047)
- fix(navbar): tabpane 展示控制只限于 navbar (#3048)
- fix: config v15 调整 (#3046)
- fix: change index (#3045)
- fix: inactive color (#3044)
- fix: merge tabs 2.x, 修复第一个项目无法滚动到视图的问题 (#3043)
- fix: popup 鸿蒙下层级问题修复，dialog 的适配做了调整，日历卡片调整了 demo (#3038)
- fix(watermark): 小程序图片高度未撑开 (#3040)
- fix(collapse): 去掉 demo 顶部留白 (#3041)
- fix: textarea 鸿蒙适配 (#3037)

# v3.0.0

`2025-02-28`

### 1. **Fix (修复问题)**

- `fix(swiper): 设置横向轮播后，手势无法触发页面的滚动 (#3004)`
- `fix(form): replace with Taro Form and add the rest property for passt… (#3016)`
- `fix: check harmony adaptions (#3005)`
- `fix: badge harmony (#3001)`
- `fix: jdharmonycpp version and dd attribute are updated (#2997)`
- `fix: throw error should not block the export of component (#2996)`
- `fix: remove demo conditional restrictions & update the creation process (#2991)`
- `fix: receiving a 404 error when publishing npm in CI (#2994)`
- `fix: adjust pr-label strategy (#2984)`
- `fix: github actions permission (#2981)`
- `fix: resolve 'Resource not accessible by integration' (#2980)`
- `fix: add PR review labels automation (#2972)`
- `fix: calender footer button css (#2971)`
- `fix: corepack manager use pnpm failed  (#2965)`
- `fix: update variables`
- `fix: update the v15 style (#2843)`
- `fix: modifykey`
- `fix(elevator): harmony适配 (#2836)`
- `fix: popover dark and maxwidth`
- `fix: aimate不再设置inline-block`
- `fix(countup): 分隔符文字颜色支持css变量修改 (#2871)`
- `fix: jd white screen (#2824)`
- `fix: space harmony (#2817)`
- `fix(empty): correct css and docs (#2819)`
- `fix: change scss import path (#2812)`
- `fix(timeselect): harmony适配 (#2806)`
- `fix(Ellipsis): Correction of text (#2778)`
- `fix(progress): fix style & support icon demo (#2729)`
- `fix(pagination): color of icon (#2769)`
- `fix(toast): svg color (#2775)`
- `fix: loading (#2733)`
- `fix: radio type (#2735)`
- `fix(searchbar): 多端适配 (#2657)`
- `fix: vite5 relative warnings and deprecated usage (#2704)`
- `fix(inputnumber): icon 适配 && 修改icon宽度和设定的--nut-icon-width一致 (#2707)`
- `fix(cell): update Icon (#2716)`
- `fix: 恢复icon,简化demo (#2725)`

### 2. **Refactor (代码重构)**

- `refactor: datepicker (#3023)`
- `refactor: picker (#2990)`
- `refactor: popup 优化代码 (#2944)`
- `refactor: new components are generated automatically (#2940)`
- `refactor: remove special handling for rntaro's environment configuration and component (#2934)`
- `refactor: site running faster when it's development (#2926)`
- `refactor: replace lodash.isEqual with react-fast-compare (#2925)`
- `refactor: add global scss (#2798)`
- `refactor: use compatible systemInfo util API (#2975)`
- `refactor: fixed overlay zIndex is not effective, and extract types of compnoents (#2954)`
- `refactor: popup 优化代码 (#2944)`
- `refactor: tabs 适配鸿蒙 (#2820)`
- `refactor: modify import mode (#2782)`
- `refactor: modify ts (#2781)`
- `refactor: add global scss (#2798)`
- `refactor: fix icon svg (#2742)`
- `refactor: backtop using hoverbutton and v15 adaption (#2866)`

### 3. **Feat (新增功能)**

- `feat: pickerview 组件 (#2986)`
- `feat: icons 的替换方案优化，支持无法可用 icon 映射的情况 (#2922)`
- `feat: sidebar 组件 (#2868)`
- `feat: lottie 组件 (#2867)`
- `feat(price): v15 (#2885)`
- `feat(indicator): v15 (#2746)`
- `feat(input): v15 (#2889)`
- `feat(textarea): v15 (#2887)`
- `feat(navbar): v15 (#2881)`
- `feat(infinite): v15 (#2841)`
- `feat(backtop): v15 (#2866)`
- `feat(badge): v15 (#2826)`
- `feat(numberkeyboard): v15 (#2799)`
- `feat(inputNumber): v15 (#2823)`
- `feat(tabs): v15 (#2820)`
- `feat(checkbox): v15 (#2730)`
- `feat(button): v15 (#2737)`
- `feat(calendarcard): v15 (#2732)`
- `feat(radio): v15 (#2721)`
- `feat(input): v15 (#2711)`
- `feat(pagination): v15 (#2712)`
- `feat(trendarrow): v15  (#2540)`
- `feat(Toast): v15 (#2299)`

### 4. **Perf (性能优化)**

- `perf: input (#2978)`
- `perf: 优化渲染节点 (#2967)`
- `perf: 优化 animate (#2968)`

# v2.x

去 [GitHub](https://github.com/jdf2e/nutui-react/blob/2.x-stable/CHANGELOG.md) 查看 `1.x` 的 Change Log。

# v1.x

去 [GitHub](https://github.com/jdf2e/nutui-react/blob/1.x-stable/CHANGELOG.md) 查看 `1.x` 的 Change Log。
