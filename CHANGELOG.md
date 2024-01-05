# v2.3.5
`2024-01-05`

* :sparkles: feat(avatarcropper): 新增属性shape，可设置裁剪样式为圆形 (#1842) @Marvin Gui
* :sparkles: feat(dialog): 新增 CSS 变量 (#1844) @LING_ZI_QING
* :sparkles: feat(range): marks type optimization (#1833) @oasis-cloud
* :sparkles: feat(tabs): 新增 CSS 变量 (#1835) @LING_ZI_QING
* :bug: fix(avatarcropper): fix cannot display when it is development at taro (#1840) @xiaoyatong
* :bug: fix(empty): fix import at taro (#1839) @xiaoyatong
* :bug: fix(picker): 优化 options 的 text 属性的判空逻辑 (#1837) @oasis-cloud
* :bug: fix(picker): 修复 safari 下 mask 样式问题 (#1843) @Eiinu
* :bug: fix(pulltorefresh): 修复安卓小程序下拉卡顿问题 (#1830) @NickH
* :bug: fix(tabs): docs and jmapp css variables (#1838) @xiaoyatong
* 🔨 chore(deps): update @nutui/icons to v1.0.1 (#1836) @oasis-cloud


# v2.3.4
`2023-12-29`

* 📖 docs(nabvar): showtoas 改为 showToast (#1826) @MingHui
* :bug: fix(datepicker): 未设置 value/defaultValue 时渲染 0 (#1819) @RyanCW
* :bug: fix(infiniteLoading): ssr (#1828) @xiaoyatong
* :bug: fix(infiniteLoading): 修改类名及demo (#1818) @xiaoyatong
* :bug: fix(popover): icon cannot be displayed at taro (#1820) @xiaoyatong
* :bug: fix(popver): bottom positon (#1823) @xiaoyatong
* :bug: fix(tabbar): fix icon color (#1816) @xiaoyatong
* :bug: fix(virtualList): 等高模式下的抖动处理, 不定高模式快速滑动白屏 (#1825) @oasis-cloud
* :bug: fix(watermark): fix demos (#1817) @xiaoyatong
* 🛠 refactor(infiniteloading): onRefresh、onLoadMore 改为 Promise 类型，去掉显示调用 done 方法 (#1827) @oasis-cloud


# v2.3.3
`2023-12-22`

* :sparkles: feat(form): validateFields 挂到实例上 (#1813) @oasis-cloud
* :sparkles: feat(table): 增加table锁定头部、左侧列、右侧列 (#1775) @zhehu1
* :bug: fix(Button): incorrect color for danger (#1809) @vczyh
* :bug: fix(cascader): 增加 ref 上的 open 和 close 方法，支持 form 中使用 (#1799) @oasis-cloud
* :bug: fix(datepicker): 受控模式不生效 (#1797) @oasis-cloud
* :bug: fix(infiniteloading): scrollview 的 scrolltop 不应该根据高度设置 (#1804) @oasis-cloud
* :bug: fix(pulltorefresh): icon 部分拆到demo中 (#1812) @xiaoyatong
* :bug: fix(tabbaritem): 将 clone 子元素的方法，改为 context 的方式，隐藏内部使用的 props，精简对外暴露的 props 类型 (#1811) @oasis-cloud
* :bug: fix(tabs): 导航滚动到可视范围需要显示指定 name，调整为内置 uuid 替代 name (#1800) @oasis-cloud
* 🔨 chore: use svg64 in taro (#1805) @xiaoyatong


# v2.3.2
`2023-12-15`

* 📖 docs(cascader): 动态加载文档代码与 demo 保持一致，回显已选数据 (#1787) @LING_ZI_QING
* :sparkles: feat(fixednav): add the list icon for ReactNode (#1786) @sunsunmonkey
* :bug: fix(cascader): second column data cannot be displayed (#1796) @xiaoyatong
* :bug: fix: popup minheight for iPhone14 pro max (#1795) @xiaoyatong
* :bug: fix: toast duration too long (#1794) @xiaoyatong
* 🛠 refactor(swiper): implementing sliding logic through useTouch (#1793) @oasis-cloud
* 🛠 refactor: 类型文件统一为 types，增加 fixednavitem 类型 (#1789) @oasis-cloud


# v2.3.1
`2023-12-13`

* :bug: fix(searchbar): 小程序环境不支持 * 选择器，将 * 展开为 div、span、svg (#1777) @oasis-cloud
* :bug: fix: jmapp variables (#1776) @xiaoyatong
* :bug: fix: icon  使用方式错误 (#1778) @xiaoyatong
* :bug: fix: 使用 popup 的组件，采用 scrollview 实现 (#1782) @oasis-cloud


# v2.3.0
`2023-12-08`

* 🔨 chore(config): demo 的配置文件中增加 css 主题 (#1765) @oasis-cloud
* 🔨 chore(deps): update dependency @nutui/icons-* to 0.0.5 (#1767) @oasis-cloud
* 📖 docs(avatar): 修改demo值,改为可支持变量 (#1752) @xiaoyatong
* 📖 docs(checkbox): checkedIcon 改为 activeIcon (#1724) @oasis-cloud
* 📖 docs(countdown): 修复文档中的文案多语言化 (#1723) @xiaoyatong
* 📖 docs(form): 文档增加 useForm 的示例 (#1708) @oasis-cloud
* 📖 docs(overlay): 文档优化 (#1706) @xiaoyatong
* 📖 docs(picker): fix docs (#1740) @xiaoyatong
* 📖 docs(popup): 禁止滚动穿透示例 (#1769) @oasis-cloud
* 📖 docs(pulltorefresh): 增加 scrollTop 相关 demo (#1755) @oasis-cloud
* 📖 docs(table): 修改文档 (#1731) @xiaoyatong
* 📖 docs(tour): fix tour demo (#1759) @xiaoyatong
* 📖 docs: address and collapse doc icons (#1692) @xiaoyatong
* 📖 docs: fix docs (#1678) @xiaoyatong
* :sparkles: feat(calendarcard): 限制范围时禁止面板切换 (#1688) @Eiinu
* :sparkles: feat(checkbox): add button mode (#1738) @xiaoyatong
* :sparkles: feat(empty): adds title,size,and actions (#1697) @xiaoyatong
* :sparkles: feat(example): add with-rsbuild example (#1661) @Kurisu
* :sparkles: feat(form): 增加上下结构的展示的demo (#1729) @xiaoyatong
* :sparkles: feat(infiniteloading): 优化布局,添加css变量,增加demo (#1760) @xiaoyatong
* :sparkles: feat(navbar): 增加标题左对齐方式,优化左侧icon的布局,调整className类 名和css 变量 (#1750) @xiaoyatong
* :sparkles: feat(pagination): add lite mode and css variable (#1743) @xiaoyatong
* :sparkles: feat(popover): 新增属性 action,简化css 变量 (#1747) @xiaoyatong
* :sparkles: feat(popup): 增加description属性,调整从底部弹出时的样式,默认为 round 模式 (#1749) @xiaoyatong
* :sparkles: feat(searchbar): 增加属性 backable 可返回，简化css变量 (#1736) @xiaoyatong
* :sparkles: feat(tabs): 新增模式 divider 及 demo (#1761) @xiaoyatong
* :sparkles: feat(tabs): 新增简约,卡片,按钮/胶囊模式,简化CSS变量,变更className类 名 (#1727) @xiaoyatong
* :sparkles: feat: add dashed and rightIcon, and changed fill default value as outline (#1695) @xiaoyatong
* :sparkles: feat: theme updated to v12 (#1573) @xiaoyatong
* :sparkles: feat: update icons (#1693) @xiaoyatong
* :sparkles: feat: 收敛 icons (#1687) @xiaoyatong
* :bug: fix(calendar): 日历设置结束时间超过开始时间后白屏 (#1745) @oasis-cloud
* :bug: fix(datepicker): 起始时间与结束时间更新后，时间选项数组更新 (#1694) @学友
* :bug: fix(dialog): 调整dialog button大小 (#1720) @xiaoyatong
* :bug: fix(form): 设置 errorMessageAlign="right" 错误文案无法右对齐 (#1709) @oasis-cloud
* :bug: fix(form): 重置功能无法清空报错信息 (#1711) @oasis-cloud
* :bug: fix(image): 修复开启 lazy 后 loading 失效问题 (#1768) @Eiinu
* :bug: fix(indicator): 修订样式名称和样式变量 (#1712) @xiaoyatong
* :bug: fix(swiper): demo 中分页器样式显示错误 (#1703) @xiaoyatong
* :bug: fix: address close icon cannot be customed (#1685) @xiaoyatong
* :bug: fix: change drag demo radius value of button (#1701) @xiaoyatong
* :bug: fix: picker 和 address 在 form 中使用，未阻止冒泡，导致取消和确认无法关闭 (#1710) @oasis-cloud
* :bug: fix: 对使用icon的demo 进行了size 设置的废弃，使用了默认size (#1728) @xiaoyatong
* :bug: fix: 调整demo中button大小,调整stoke的默认颜色 (#1717) @xiaoyatong
* 🛠 refactor(cell): 修订类名 (#1722) @xiaoyatong
* 🛠 refactor(numberkeyboard): 修订类名和样式变量 (#1719) @xiaoyatong
* 🛠 refactor(swipe): 修订className类名 (#1715) @xiaoyatong
* 🛠 refactor(switch): 修改样式名称及样式变量，添加相应demo (#1714) @xiaoyatong
* 🛠 refactor(table): props 中的 data 校验逻辑异常 (#1675) @oasis-cloud
* 🛠 refactor(timeselect): 优化结构,简化css变量 (#1732) @xiaoyatong
* 🛠 refactor: css 变量命名规范（主题色部分，不含灰阶） (#1679) @xiaoyatong
* 🛠 refactor: rename card classname (#1700) @xiaoyatong
style(button): class 名 nut-button__warp 更改为 nut-button-wrap (#1705) @xiaoyatong
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

* :sparkles: feat(badge): 优化结构 (#1663) @xiaoyatong
* :sparkles: feat(dialog): 标题前增加结构 (#1666) @xiaoyatong
* :sparkles: feat(grid): 增加 demo (#1660) @xiaoyatong
* :sparkles: feat(image): 增加 demo (#1658) @xiaoyatong
* :sparkles: feat(theme): 修订 fontSize (#1674) @xiaoyatong
* :bug: fix(elevator): 索引定位不准 (#1667) @oasis-cloud
* :bug: fix(swiper): swiper-item 宽高异常问题 (#1657) @Eiinu
* :bug: fix(uploader): Update uploader.tsx (#1656) @Kurisu
* :bug: fix(uploader): uploader when item type is undefined (#1650) @xiaoyatong
* 🛠 refactor: css 变量命名规范（主题色部分，不含灰阶） (#1679) @xiaoyatong
* 🛠 refactor: elevator css and variables (#1668) @xiaoyatong
* 🛠 refactor: 防抖方法归一 (#1664) @xiaoyatong
* 🌈 style: delete dark in demos (#1670) @xiaoyatong
* 🌈 style: divider css 修改, 修改部分css变量 (#1669) @xiaoyatong
* 🌈 style: 清理样式变量 (#1673) @xiaoyatong
* 📖 docs(address): 修复非受控模式演示代码不显示 (#1659) @haitao
* 📖 docs: fix docs (#1678) @xiaoyatong
* 📖 docs: 修改文档 (#1662) @xiaoyatong
* 🔨 chore: add jmapp (#1665) @xiaoyatong


# v2.1.0
`2023-11-17`

* :sparkles: feat(Button): size 增加可选值 mini (#1617) @Eiinu
* :sparkles: feat(calendarcard): 增加自定义 className (#1636) @Eiinu
* :sparkles: feat(infiniteLoading): 通过scrolltolower触发加载事件 (#1633) @oasis-cloud
* :sparkles: feat(safearea): 新增安全区组件 (#1642) @oasis-cloud
* :sparkles: feat(toast): 通过 config 方法设置内容区的className (#1632) @oasis-cloud
* :sparkles: feat: uploader taro h5 支持 video (#1605) @xiaoyatong
* :bug: fix(infiniteloading): onloadmore 无法获取最新的 state (#1644) @oasis-cloud
* :bug: fix: change text in locales (#1634) @xiaoyatong
* :bug: fix: picker and datepicker theme config at taro and indicator css at taro (#1615) @xiaoyatong
* :bug: fix: 日历close样式，可自定义样式；修改弹幕样式；更名CircleClose为Failure、Issue 为 Tips (#1648) @xiaoyatong
* :bug: fix: 🐛 修复swipe存在点击事件时,触发onTouchStart,获取到rightRect为null导致的报错问题 (#1608) @Levidcd
* 🚀 perf: radio reverse and demos (#1631) @xiaoyatong
* 🛠 refactor(classname): 调整 classname 的顺序 (#1637) @oasis-cloud
* 📖 docs(cell): 增加卡片类型的 demo (#1639) @oasis-cloud
* 📖 docs(sideNavBar): handleClose 改为 onClose (#1635) @haitao


# v2.0.24
`2023-11-10`

* 🚀 perf(deps): 升级 icons 依赖，icons 包体积缩减 (#1604) @oasis-cloud
* 🚀 perf(CalendarCard): taro demo 性能优化 (#1593) @Eiinu
* :sparkles: feat(Toast): 新增 wordBreak 属性 (#1606) @Eiinu
* :sparkles: feat: picker and datepicker add onCancel (#1603) @xiaoyatong
* :sparkles: feat: 类似微信头像裁剪组件 (#1564) @Marvin Gui
* :bug: fix(CalendarCard): 初始化渲染逻辑优化 (#1596) @Eiinu
* :bug: fix(circleprogress): 计算出现 NaN 导致组件展示为 100% 的情况 (#1602) @oasis-cloud
* :bug: fix(elevator): 替换文档展示pagation到showKeys (#1598) @HaiTao
* :bug: fix(tag): 修复加载样式问题 #1588 (#1592) @Eiinu
* :bug: fix: picker & DatePicker onConfirm failed (#1601) @xiaoyatong
* :bug: fix: swiper indicator zindex at taro (#1586) @xiaoyatong
* :bug: fix: taro event detail is undefined (#1591) @xiaoyatong
* :bug: fix: virtuallist key at taro (#1584) @xiaoyatong
* :bug: fix: 标签上的属性默认为 true，导致渲染 lockscroll 相关的 class (#1599) @oasis-cloud
* 📖 docs(form): 由于文案包含姓名等文字，导致小程序审核不通过 (#1609) @oasis-cloud
* 📖 docs: V1 升 V2 差异点更新 (#1607) @JQ

# v2.0.23
`2023-11-03`

* :sparkles: feat(image): ssr 适配 (#1579) @Eiinu
* :sparkles: feat: 新增组件 calendar (#1565) @Eiinu
* :bug: fix: calendar scrolltop bad (#1583) @xiaoyatong
* :bug: fix: noticebar 垂直滚动初始化时,无法及时展示元素信息 (#1576) @xiaoyatong
* :bug: fix: popup zindex at taro and picker adds popupProps (#1581) @xiaoyatong
* :bug: fix: popup zindex failed to set (#1578) @xiaoyatong
* :bug: fix: searchbar lose focus when input nothing but input the delete (#1577) @xiaoyatong
* :bug: fix: taro 编译 H5 出现滚动穿透 (#1537) @oasis-cloud


# v2.0.22
`2023-10-27`

* :sparkles: feat(NoticeBar): leftIcon 可自定义，并且支持设置 null 后不展示 icon (#1562) @oasis-cloud
* :bug: fix(Dialog): 点击蒙层无法关闭 (#1552) @oasis-cloud
* :bug: fix(Input): onChange 执行多次 (#1551) @oasis-cloud
* :bug: fix(Swipe): 禁止父元素滚动的 demo (#1560) @oasis-cloud
* :bug: fix: image height in taro (#1567) @xiaoyatong
* 🛠 refactor(Tabs): 滚动到可视区域代码优化，同时放开 tab title 的宽度限制 (#1563) @oasis-cloud


# v2.0.21
`2023-10-18`

* :sparkles: feat(Uploader): onFileItemClick 增加索引参数 (#1544) @oasis-cloud
* :sparkles: feat: add demo about infiniteloading (#1533) @xiaoyatong
* :bug: fix(menu): getBoundingClientRect 兼容 H5 (#1548) @oasis-cloud
* :bug: fix: form input blur (#1542) @oasis-cloud
* :bug: fix: imagepreview h5 (#1538) @xiaoyatong
* :bug: fix: jdapp picker's item-height doesn't match jdapp's default setting (#1545) @xiaoyatong
* :bug: fix: taro image and imagepreivew on h5 (#1532) @xiaoyatong
* :bug: fix: zindex of popover because popup changed its zindex (#1543) @xiaoyatong
* 📖 docs(tabbar): Correct module names of tabbar component (#1539) @HUMORCE


# v2.0.20
`2023-10-13`

* :sparkles: feat: add demo about infiniteloading (#1533) @xiaoyatong
* :bug: fix(form): 自定义校验 promise 返回错误不能被正确收集 (#1523) @samber
* :bug: fix(popup): popup zIndex 无效 (#1521) @Clay Zhang
* :bug: fix: demo format (#1530) @xiaoyatong
* :bug: fix: taro image and imagepreivew on h5 (#1532) @xiaoyatong
* :bug: fix: taro image default width and height (#1531) @xiaoyatong


# v2.0.19
`2023-09-27`

* :sparkles: feat(menu):  overlay onclick 事件中调用 hideMenuItem 实现关闭 (#1505) @oasis-cloud
* :sparkles: feat(menu): onClose 事件增加触发来源参数 (#1502) @oasis-cloud
* :sparkles: feat(swiper): swiperItem 支持设置 className (#1504) @oasis-cloud
* :bug: fix(uploader): 受控模式调整，props 类型调整，回调参数修正 (#1500) @oasis-cloud
* :bug: fix: imagepreview with control (#1480) @xiaoyatong
* :bug: fix: indicator 超长换行 (#1486) @oasis-cloud
* :bug: fix: menu 在 lockscroll 的时候不需要加滚动事件 (#1509) @oasis-cloud
* :bug: fix: ios和android下点击button时出现半透明灰色遮罩 (#1495) @Kurisu



# v2.0.18
`2023-09-20`

* :sparkles: feat(menu): 增加受控和非受控的模式 (#1433) @oasis-cloud
* :sparkles: feat: menu 展开关闭事件增加参数 (#1447) @oasis-cloud
* :bug: fix(Badge): Badge位置值兼容两种类型，添加css变量min-width (#1410) @beginnerZhang
* :bug: fix(Notify): type NotifyType incorrectly spelling warning as waring (#1441) @Katz
* :bug: fix: calendar 在 iOS 中不展示开始和结束 (#1471) @oasis-cloud
* :bug: fix: swiperItem 的子元素在 H5 中设置 onClick 无效 (#1472) @oasis-cloud
* :bug: fix: uploader 列表类型内置上传按钮 (#1477) @oasis-cloud
* :bug: fix: uploader 缩略图圆角样式未生效 (#1476) @oasis-cloud
* :bug: fix: useFrom 类型优化 (#1473) @oasis-cloud
* :bug: fix: zIndex 层级统一调整 (#1460) @oasis-cloud
* :bug: fix: 组件依赖样式处理 (#1474) @xiaoyatong
* 📖 docs: form 组件文档格式化 (#1436) @oasis-cloud


# v2.0.17
`2023-09-13`

* :sparkles: feat: form 增加 validateTrigger 和 getFieldsValue (#1411) @oasis-cloud
* :bug: fix: add popupProps (#1426) @oasis-cloud
* :bug: fix: form label position left (#1412) @oasis-cloud
* :bug: fix: lint errors (#1406) @xiaoyatong
* :bug: fix: review package update (#1423) @xiaoyatong
* :bug: fix: swipe component fails to slide in Alipay (#1399) @oasis-cloud
* :bug: fix: table expose rowIndex (#1400) @oasis-cloud
* :bug: fix: toast组件 duration 设置无效 (#1424) @oasis-cloud
* 🔨 chore: glob & prettier update (#1427) @xiaoyatong
* 🔨 chore: swc 版本恢复 (#1425) @oasis-cloud


# v2.0.16
`2023-09-06`

* :sparkles: feat: form 支持分割线 (#1389) @oasis-cloud
* :bug: fix(pulltorefresh): 修复 H5 卡顿 & 小程序滑动距离问题 @Eiinu
* :bug: fix: csstransition using findDOMNode which is deprecated (#1370) @oasis-cloud
* :bug: fix: dialog 的函数调用增加对 classname 和 style 的支持 (#1391) @oasis-cloud
* :bug: fix: swipe 阻止页面滚动 (#1380) @oasis-cloud
* :bug: fix: useForm 在类组件下报错，可以采用 ref 的方式使用 FormInstance (#1383) @oasis-cloud
* :bug: fix: 多个 Swipe 的滑动选项完全相等 (#1334) @Clay Zhang
* 📖 docs: toast组件完善了样式变量 (#1379) @ivan-My


# v2.0.15
`2023-08-30`

* :sparkles: feat: support next.js (#1326) @oasis-cloud
* :bug: fix: dialog content 失效 (#1323) @oasis-cloud
* :bug: fix: space 复制按钮重复 (#1322) @oasis-cloud
* 🔨 chore(tabs): 更新文档与 demo (#1339) @Eiinu


# v2.0.14
`2023-08-18`

* :bug: fix: skeleton row 设置为 1 时, 宽度只能固定为70% (#1306) @ivan-My
* :bug: fix: loading 构建产物增加类型注释 (#1320) @oasis-cloud
* :bug: fix: space 构建产物增加类型注释 (#1321) @oasis-cloud
* 📖 docs: dialog 指令式用法注意事项 (#1318) @oasis-cloud



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
