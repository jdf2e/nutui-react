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
