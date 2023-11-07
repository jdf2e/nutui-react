const propsRules = {
  Button: {
    plain: {
      action: 'rename',
      replacer: {
        name: 'fill',
        value: 'outline',
      },
    },
  },
  Cell: {
    subTitle: {
      action: 'rename',
      replacer: 'description',
    },
    desc: {
      action: 'rename',
      replacer: 'extra',
    },
    roundRadius: {
      action: 'rename',
      replacer: 'radius',
    },
    center: {
      action: 'rename',
      replacer: 'align',
    },
    descTextAlign: {
      action: 'style',
      replacer: {
        name: '--nutui-xxx',
        value: 'xxx',
      },
    },
  },
  'Cell.Group': {
    desc: {
      action: 'rename',
      replacer: 'description',
    },
    titleSlot: {
      action: 'rename',
      replacer: 'title',
    },
    descSlot: {
      action: 'rename',
      replacer: 'description',
    },
  },
  Image: {
    round: {
      action: 'rename',
      replacer: {
        name: 'radius',
        value: '50%',
      },
    },
    showLoading: {
      action: 'rename',
      replacer: 'loading',
    },
    loadingImg: {
      action: 'rename',
      replacer: 'loading',
    },
    slotLoading: {
      action: 'rename',
      replacer: 'loading',
    },
    showError: {
      action: 'rename',
      replacer: 'error',
    },
    slotError: {
      action: 'rename',
      replacer: 'error',
    },
    errorImg: {
      action: 'rename',
      replacer: 'error',
    },
  },
  Overlay: {
    overlayClass: {
      action: 'remove',
      replacer: {
        type: 'className',
      },
    },
    overlayStyle: {
      action: 'remove',
      replacer: {
        type: 'style',
      },
    },
    closeOnClickOverlay: {
      action: 'rename',
      replacer: 'closeOnOverlayClick',
    },
  },
  Popup: {
    popClass: {
      action: 'remove',
      replacer: {
        type: 'className',
      },
    },
    overlayClass: {
      action: 'rename',
      replacer: 'OverlayClassName',
    },
    closeOnClickOverlay: {
      action: 'rename',
      replacer: 'closeOnOverlayClick',
    },
    onOpened: {
      action: 'rename',
      replacer: 'afterShow',
    },
    onClosed: {
      action: 'rename',
      replacer: 'afterClose',
    },
    onClickCloseIcon: {
      action: 'rename',
      replacer: 'onCloseIconClick',
    },
    onClickOverlay: {
      action: 'rename',
      replacer: 'onOverlayClick',
    },
  },
  Divider: {
    dashed: {
      action: 'style',
      replacer: '',
    },
  },
  Grid: {
    columnNum: {
      action: 'rename',
      replacer: 'columnNum',
    },
  },
  Sticky: {
    top: {
      action: 'rename',
      replacer: 'threshold',
    },
    bottom: {
      action: 'rename',
      replacer: 'threshold',
    },
  },
  Elevator: {
    acceptKey: {
      action: 'rename',
      replacer: 'floorKey',
    },
    indexList: {
      action: 'rename',
      replacer: 'list',
    },
    isSticky: {
      action: 'rename',
      replacer: 'sticky',
    },
  },
  FixedNav: {
    unActiveText: {
      action: 'rename',
      replacer: 'inactiveText',
    },
    navList: {
      action: 'rename',
      replacer: 'list',
    },
    slotBtn: {
      action: 'rename',
      replacer: 'content',
    },
    onSelected: {
      action: 'rename',
      replacer: 'onSelect',
    },
    fixednavClass: {
      action: 'remove',
      replacer: {
        type: 'className',
      },
    },
    slotList: {
      action: 'remove',
      replacer: {
        type: 'children',
      },
    },
  },
  Indicator: {
    vertical: {
      action: 'rename',
      replacer: 'direction',
    },
    size: {
      action: 'rename',
      replacer: 'total',
    },
  },
  Menu: {
    titleIcon: {
      action: 'rename',
      replacer: 'icon',
    },
    closeOnClickOverlay: {
      action: 'rename',
      replacer: 'closeOnOverlayClick',
    },
  },
  'Menu.Item': {
    optionsIcon: {
      action: 'rename',
      replacer: 'icon',
    },
  },
  NavBar: {
    desc: {
      action: 'rename',
      replacer: 'right',
    },
    leftText: {
      action: 'rename',
      replacer: 'back',
    },
    safeAreaInsetTop: {
      action: 'rename',
      replacer: 'safeArea',
    },
  },
  Pagination: {
    modelValue: {
      action: 'rename',
      replacer: 'value',
    },
    prevText: {
      action: 'rename',
      replacer: 'prev',
    },
    nextText: {
      action: 'rename',
      replacer: 'next',
    },
    forceEllipses: {
      action: 'rename',
      replacer: 'ellipse',
    },
    showPageSize: {
      action: 'rename',
      replacer: 'itemSize',
    },
    itemsPerpage: {
      action: 'rename',
      replacer: 'pageSize',
    },
    totalitems: {
      action: 'rename',
      replacer: 'total',
    },
    pageNodeRender: {
      action: 'rename',
      replacer: 'itemRender',
    },
  },
  SideNavBar: {
    offset: {
      action: 'rename',
      replacer: 'indent',
    },
  },
  SubSideNavBar: {
    ikey: {
      action: 'rename',
      replacer: 'value',
    },
  },
  SideNavBarItem: {
    ikey: {
      action: 'rename',
      replacer: 'value',
    },
  },
  Tabbar: {
    unactiveColor: {
      action: 'rename',
      replacer: 'inactiveColor',
    },
    bottom: {
      action: 'rename',
      replacer: 'fixed',
    },
    safeAreaInsetBottom: {
      action: 'rename',
      replacer: 'safeArea',
    },
    visible: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    activeVisible: {
      action: 'rename',
      replacer: 'value',
    },
  },
  'Tabbar.Item': {
    tabTitle: {
      action: 'rename',
      replacer: 'title',
    },
  },
  Tabs: {
    titleScroll: {
      action: 'remove',
    },
    ellipsis: {
      action: 'remove',
    },
    size: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-tabs-titles-item-font-size',
      },
    },
    animatedTime: {
      action: 'rename',
      replacer: 'duration',
    },
    titleGutter: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-tabs-title-gap',
      },
    },
    titleNode: {
      action: 'rename',
      replacer: 'title',
    },
    color: {
      action: 'rename',
      replacer: 'activeColor',
    },
    type: {
      action: 'rename',
      replacer: 'activeType',
    },
    leftAlign: {
      action: 'rename',
      replacer: {
        name: 'align',
        value: 'left',
      },
    },
  },
  'Tabs.TabPane': {
    paneKey: {
      action: 'rename',
      replacer: 'value',
    },
  },
  Calendar: {
    poppable: {
      action: 'rename',
      replacer: 'popup',
    },
    isAutoBackFill: {
      action: 'rename',
      replacer: 'autoBackfill',
    },
    toDateAnimation: {
      action: 'rename',
      replacer: 'scrollAnimation',
    },
    onBtn: {
      action: 'rename',
      replacer: 'renderHeaderButtons',
    },
    onDay: {
      action: 'rename',
      replacer: 'renderDay',
    },
    onTopInfo: {
      action: 'rename',
      replacer: 'renderDayTop',
    },
    onBottomInfo: {
      action: 'rename',
      replacer: 'renderDayBottom',
    },
    onSelected: {
      action: 'rename',
      replacer: 'onDayClick',
    },
    onChoose: {
      action: 'rename',
      replacer: 'onConfirm',
    },
    onYearMonthChange: {
      action: 'rename',
      replacer: 'onPageChange',
    },
  },
  Cascader: {
    checkedIcon: {
      action: 'rename',
      replacer: 'activeIcon',
    },
    poppable: {
      action: 'rename',
      replacer: 'popup',
    },
    lazyLoad: {
      action: 'rename',
      replacer: 'onLoad',
    },
    convertConfig: {
      action: 'rename',
      replacer: 'format',
    },
  },
  Checkbox: {
    textPosition: {
      action: 'rename',
      replacer: 'labelPosition',
    },
  },
  'Checkbox.Group': {
    textPosition: {
      action: 'rename',
      replacer: 'labelPosition',
    },
  },
  DatePicker: {
    modelValue: {
      action: 'rename',
      replacer: 'value',
    },
    isShowChinese: {
      action: 'rename',
      replacer: 'showChinese',
    },
    minDate: {
      action: 'rename',
      replacer: 'startDate',
    },
    maxDate: {
      action: 'rename',
      replacer: 'endDate',
    },
    onConfirmDatePicker: {
      action: 'rename',
      replacer: 'onConfirm',
    },
    onCloseDatePicker: {
      action: 'rename',
      replacer: 'onClose',
    },
  },
  'Form.Item': {
    labelWidth: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-form-item-label-width',
      },
    },
  },
  Input: {
    maxlength: {
      action: 'rename',
      replacer: 'maxLength',
    },
  },
  InputNumber: {
    modelValue: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    decimalPlaces: {
      action: 'rename',
      replacer: 'digits',
    },
    isAsync: {
      action: 'rename',
      replacer: 'async',
    },
    inputWidth: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-inputnumber-input-width',
      },
    },
    buttonSize: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: [
          '–-nutui-inputnumber-button-width',
          '-–nutui-inputnumber-button-height',
        ],
      },
    },
  },
  NumberKeyboard: {
    randomKeys: {
      action: 'rename',
      replacer: 'random',
    },
    customKey: {
      action: 'rename',
      replacer: 'custom',
    },
  },
  Picker: {
    isVisible: {
      action: 'rename',
      replacer: 'visible',
    },
    listData: {
      action: 'rename',
      replacer: 'options',
    },
    defaultValueData: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    swipeDuration: {
      action: 'rename',
      replacer: 'duration',
    },
    onCloseUpdate: {
      action: 'rename',
      replacer: 'afterClose',
    },
  },
  Radio: {},
  'Radio.Group': {
    textPosition: {
      action: 'rename',
      replacer: 'afterClose',
    },
  },
  Range: {
    maxDesc: {
      action: 'rename',
      replacer: 'maxDescription',
    },
    minDesc: {
      action: 'rename',
      replacer: 'minDescription',
    },
    curValueDesc: {
      action: 'rename',
      replacer: 'currentDescription',
    },
    onDragStart: {
      action: 'rename',
      replacer: 'onStart',
    },
    onDragEnd: {
      action: 'rename',
      replacer: 'onEnd',
    },
    modelValue: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    hiddenRange: {
      action: 'remove',
      replacer: {
        type: 'props',
        name: 'minDescription',
        value: 'null',
      },
    },
    hiddenTag: {
      action: 'remove',
      replacer: {
        type: 'props',
        name: 'currentDescription',
        value: 'null',
      },
    },
  },
  Rate: {
    minimizeValue: {
      action: 'rename',
      replacer: 'min',
    },
    readonly: {
      action: 'rename',
      replacer: 'readOnly',
    },
    spacing: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-xxx',
      },
    },
    modelValue: {
      action: 'rename',
      replacer: 'defaultValue',
    },
  },
  SearchBar: {
    onClickInput: {
      action: 'rename',
      replacer: 'onInputClick',
    },
    leftoutIcon: {
      action: 'rename',
      replacer: 'left',
    },
    label: {
      action: 'rename',
      replacer: 'left',
    },
    rightoutIcon: {
      action: 'rename',
      replacer: 'right',
    },
    actionText: {
      action: 'rename',
      replacer: 'right',
    },
    leftinIcon: {
      action: 'rename',
      replacer: 'leftIn',
    },
    rightinIcon: {
      action: 'rename',
      replacer: 'rightIn',
    },
    clearSize: {
      action: 'remove',
    },
    background: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-searchbar-background',
      },
    },
    inputBackground: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-searchbar-input-background',
      },
    },
    align: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-searchbar-input-text-align',
      },
    },
  },
  ShortPassword: {
    desc: {
      action: 'rename',
      replacer: 'description',
    },
    noButton: {
      action: 'rename',
      replacer: 'hideFooter',
    },
    onOk: {
      action: 'rename',
      replacer: 'onConfirm',
    },
    errorMsg: {
      action: 'rename',
      replacer: 'error',
    },
    modelValue: {
      action: 'rename',
      replacer: 'value',
    },
  },
  TextArea: {
    maxlength: {
      action: 'rename',
      replacer: 'maxLength',
    },
    readonly: {
      action: 'rename',
      replacer: 'readOnly',
    },
    limitShow: {
      action: 'rename',
      replacer: 'showCount',
    },
    autosize: {
      action: 'rename',
      replacer: 'autoSize',
    },
  },
  Uploader: {
    maximize: {
      action: 'rename',
      replacer: 'maxFileSize',
    },
    maximum: {
      action: 'rename',
      replacer: 'maxCount',
    },
    listType: {
      action: 'rename',
      replacer: 'previewType',
    },
    isDeletable: {
      action: 'rename',
      replacer: 'deletable',
    },
    isPreview: {
      action: 'rename',
      replacer: 'preview',
    },
    defaultImg: {
      action: 'rename',
      replacer: 'previewUrl',
    },
    defaultFileList: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    uploadIconTip: {
      action: 'rename',
      replacer: 'uploadLabel',
    },
    onBeforeUpload: {
      action: 'rename',
      replacer: 'beforeUpload',
    },
    onBeforeXhrUpload: {
      action: 'rename',
      replacer: 'beforeXhrUpload',
    },
    onBeforeDelete: {
      action: 'rename',
      replacer: 'beforeDelete',
    },
    onRemove: {
      action: 'rename',
      replacer: 'onDelete',
    },
  },
  ActionSheet: {
    cancelTxt: {
      action: 'rename',
      replacer: 'cancelText',
    },
    menuItems: {
      action: 'rename',
      replacer: 'options',
    },
    onChoose: {
      action: 'rename',
      replacer: 'onSelect',
    },
  },
  BackTop: {
    elId: {
      action: 'rename',
      replacer: 'target',
    },
    distance: {
      action: 'rename',
      replacer: 'threshold',
    },
    isAnimation: {
      action: 'rename',
      replacer: {
        name: 'duration',
        value: 0,
      },
    },
    right: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: 'right',
      },
    },
    bottom: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: 'bottom',
      },
    },
  },
  Dialog: {
    okText: {
      action: 'rename',
      replacer: 'confirmText',
    },
    mask: {
      action: 'rename',
      replacer: 'overlay',
    },
    closeOnClickOverlay: {
      action: 'rename',
      replacer: 'closeOnOverlayClick',
    },
    noOkBtn: {
      action: 'rename',
      replacer: 'hideConfirmButton',
    },
    noCancelBtn: {
      action: 'rename',
      replacer: 'hideCancelButton',
    },
    okBtnDisabled: {
      action: 'rename',
      replacer: 'disableConfirmButton',
    },
    onOk: {
      action: 'rename',
      replacer: 'onConfirm',
    },
    onClosed: {
      action: 'rename',
      replacer: 'onClose',
    },
    onClickSelf: {
      action: 'rename',
      replacer: 'onClick',
    },
  },
  Infiniteloading: {
    useCapture: {
      action: 'rename',
      replacer: 'capture',
    },
    onScrollChange: {
      action: 'rename',
      replacer: 'onScroll',
    },
    isOpenRefresh: {
      action: 'rename',
      replacer: 'pullRefresh',
    },
    pullTxt: {
      action: 'rename',
      replacer: 'pullingText',
    },
    loadTxt: {
      action: 'rename',
      replacer: 'loadingText',
    },
    loadMoreTxt: {
      action: 'rename',
      replacer: 'loadMoreText',
    },
    containerId: {
      action: 'rename',
      replacer: 'target',
    },
  },
  Notify: {
    onClosed: {
      action: 'rename',
      replacer: 'onClose',
    },
  },
  Swipe: {},
  Switch: {},
  Toast: {},
  Animate: {},
  'AnimatingNumbers.CountUp': {
    maxLen: {
      action: 'rename',
      replacer: 'length',
    },
    endNumber: {
      action: 'rename',
      replacer: 'value',
    },
    delaySpeed: {
      action: 'rename',
      replacer: 'delay',
    },
    easeSpeed: {
      action: 'rename',
      replacer: 'duration',
    },
  },
  Audio: {
    url: {
      action: 'rename',
      replacer: 'src',
    },
    autoplay: {
      action: 'rename',
      replacer: 'autoPlay',
    },
    onFastBack: {
      action: 'rename',
      replacer: 'onBack',
    },
    onPlayEnd: {
      action: 'rename',
      replacer: 'onEnd',
    },
  },
  Avatar: {
    url: {
      action: 'rename',
      replacer: 'src',
    },
    onActiveAvatar: {
      action: 'rename',
      replacer: 'onClick',
    },
  },
  AvatarGroup: {
    maxCount: {
      action: 'rename',
      replacer: 'max',
    },
    span: {
      action: 'rename',
      replacer: 'gap',
    },
    zIndex: {
      action: 'rename',
      replacer: 'level',
    },
  },
  Badge: {},
  CircleProgress: {
    progress: {
      action: 'rename',
      replacer: 'percent',
    },
    circleColor: {
      action: 'rename',
      replacer: 'color',
    },
    pathColor: {
      action: 'rename',
      replacer: 'background',
    },
  },
  Collapse: {
    icon: {
      action: 'rename',
      replacer: 'expandIcon',
    },
  },
  'Collapse.Item': {
    subTitle: {
      action: 'rename',
      replacer: 'extra',
    },
  },
  CountDown: {},
  Ellipsis: {},
  Empty: {},
  ImagePreview: {
    show: {
      action: 'rename',
      replacer: 'visible',
    },
    autoplay: {
      action: 'rename',
      replacer: 'autoPlay',
    },
    initNo: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    paginationVisible: {
      action: 'rename',
      replacer: 'indicator',
    },
    paginationColor: {
      action: 'rename',
      replacer: 'indicatorColor',
    },
    contentClose: {
      action: 'rename',
      replacer: 'closeOnContentClick',
    },
  },
  NoticeBar: {
    text: {
      action: 'rename',
      replacer: 'content',
    },
    closeMode: {
      action: 'rename',
      replacer: 'closeable',
    },
    wrapable: {
      action: 'rename',
      replacer: 'wrap',
    },
    standTime: {
      action: 'rename',
      replacer: 'duration',
    },
    onClickItem: {
      action: 'rename',
      replacer: 'onItemClick',
    },
  },
  Popover: {
    onChoose: {
      action: 'rename',
      replacer: 'onSelect',
    },
  },
  Price: {
    needSymbol: {
      action: 'remove',
    },
    decimalDigits: {
      action: 'rename',
      replacer: 'digits',
    },
  },
  Progress: {
    percentage: {
      action: 'rename',
      replacer: 'percent',
    },
    strokeColor: {
      action: 'rename',
      replacer: 'color',
    },
    fillColor: {
      action: 'rename',
      replacer: 'background',
    },
    status: {
      action: 'rename',
      replacer: 'animated',
    },
    isShowPercentage: {
      action: 'remove',
    },
    textWidth: {
      action: 'remove',
    },
    textInside: {
      action: 'remove',
    },
    textBackground: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-progress-text-background',
      },
    },
    textColor: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-progress-text-color',
      },
    },
  },
  Skeleton: {
    loading: {
      action: 'rename',
      replacer: 'visible',
    },
    row: {
      action: 'rename',
      replacer: 'rows',
    },
    width: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-skeleton-line-width',
      },
    },
    height: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-skeleton-line-height',
      },
    },
    round: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: '--nutui-skeleton-border-radius',
        value: '50%',
      },
    },
  },
  Steps: {
    current: {
      action: 'rename',
      replacer: 'value',
    },
    onClickStep: {
      action: 'rename',
      replacer: 'onStepClick',
    },
    progressDot: {
      action: 'rename',
      replacer: 'dot',
    },
  },
  Step: {
    content: {
      action: 'rename',
      replacer: 'description',
    },
    activeIndex: {
      action: 'rename',
      replacer: 'value',
    },
  },
  Swiper: {
    autoplay: {
      action: 'rename',
      replacer: 'autoplay',
    },
    initPage: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    paginationVisible: {
      action: 'rename',
      replacer: 'indicator',
    },
    isPreventDefault: {
      action: 'rename',
      replacer: 'preventDefault',
    },
    isStopPropagation: {
      action: 'rename',
      replacer: 'stopPropagation',
    },
    isCenter: {
      action: 'rename',
      replacer: 'center',
    },
  },
  Table: {
    onSorter: {
      action: 'rename',
      replacer: 'onSort',
    },
  },
  Tag: {
    color: {
      action: 'rename',
      replacer: 'background',
    },
    textColor: {
      action: 'rename',
      replacer: 'color',
    },
  },
  TrendArrow: {
    rate: {
      action: 'rename',
      replacer: 'value',
    },
    showSign: {
      action: 'rename',
      replacer: 'symbol',
    },
    showZero: {
      action: 'rename',
      replacer: 'zero',
    },
    arrowLeft: {
      action: 'rename',
      replacer: 'left',
    },
    syncTextColor: {
      action: 'rename',
      replacer: 'sync',
    },
    textColor: {
      action: 'rename',
      replacer: 'color',
    },
    upIconName: {
      action: 'rename',
      replacer: 'riseIcon',
    },
    downIconName: {
      action: 'rename',
      replacer: 'dropIcon',
    },
  },
  Video: {},
  VirtualList: {
    sourceData: {
      action: 'rename',
      replacer: 'list',
    },
    conatinerSize: {
      action: 'rename',
      replacer: 'containerHeight',
    },
    itemSize: {
      action: 'rename',
      replacer: 'itemHeight',
    },
    itemEqualSize: {
      action: 'rename',
      replacer: 'itemEqual',
    },
    horizontal: {
      action: 'rename',
      replacer: {
        name: 'direction',
        value: 'horizontal',
      },
    },
  },
  WaterMark: {
    fontColor: {
      action: 'rename',
      replacer: 'color',
    },
  },
  Address: {
    modelValue: {
      action: 'rename',
      replacer: 'visible',
    },
    modelSelect: {
      action: 'rename',
      replacer: 'defaultValue',
    },
    onSelected: {
      action: 'rename',
      replacer: 'onSelect',
    },
    existAddress: {
      action: 'rename',
      replacer: 'existList',
    },
    selectedIcon: {
      action: 'rename',
      replacer: 'selectIcon',
    },
    closeBtnIcon: {
      action: 'rename',
      replacer: 'closeIcon',
    },
    backBtnIcon: {
      action: 'rename',
      replacer: 'backIcon',
    },
    isShowCustomAddress: {
      action: 'rename',
      replacer: 'custom',
    },
    customAddressTitle: {
      action: 'rename',
      replacer: 'title',
    },
    existAddressTitle: {
      action: 'rename',
      replacer: 'title',
    },
  },
  Barrage: {
    barrageList: {
      action: 'rename',
      replacer: 'list',
    },
    frequency: {
      action: 'rename',
      replacer: 'interval',
    },
    speeds: {
      action: 'rename',
      replacer: 'duration',
    },
    top: {
      action: 'rename',
      replacer: 'gapY',
    },
  },
  Signature: {
    unSupportTpl: {
      action: 'rename',
      replacer: 'unsupported',
    },
  },
  TimeSelect: {
    onPannelChange: {
      action: 'rename',
      replacer: 'onDateChange',
    },
    height: {
      action: 'remove',
      replacer: {
        type: 'style',
        name: 'height',
      },
    },
  },
}

module.exports = propsRules
