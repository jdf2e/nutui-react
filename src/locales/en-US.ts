import { BaseLang } from './base'

const enUS: BaseLang = {
  save: 'Save',
  confirm: 'Confirm',
  cancel: 'Cancel',
  done: 'Done',
  noData: 'No Data',
  placeholder: 'Placeholder',
  select: 'Select',
  edit: 'Edit',
  reset: 'Reset',
  video: {
    errorTip: 'Error Tip',
    clickRetry: 'Click Retry',
  },
  fixednav: {
    activeText: 'Close Nav',
    inactiveText: 'Open Nav',
  },
  infiniteloading: {
    pullRefreshText: 'Pull Refresh',
    loadText: 'Loading',
    loadMoreText: "Oops, here's the bottom",
  },
  pagination: {
    prev: 'Previous',
    next: 'Next',
  },
  range: { rangeText: 'is overflow' },
  calendaritem: {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    end: 'End',
    start: 'Start',
    confirm: 'Confirm',
    title: 'Calendar',
    week: 'W',
    month: 'M',
    year: 'Y',
    quarter: 'Q',
    monthTitle: (year: number, month: number) =>
      `${year}/${Number(month) < 10 ? `0${Number(month)}` : month}`,
    today: 'Today',
    loadPreviousMonth: 'Load Previous Month',
    noEarlierMonth: 'No Earlier Month',
  },
  shortpassword: {
    title: 'Please input a password',
    description: 'Verify',
    tips: 'Forget password',
  },
  uploader: {
    list: 'Upload Files',
    ready: 'Ready',
    readyUpload: 'Ready to upload',
    waitingUpload: 'Waiting for upload',
    uploading: 'Uploading...',
    success: 'Upload successful',
    error: 'Upload failed',
    deleteWord: 'The user blocked the deletion!',
  },
  countdown: {
    day: ' Day ',
    hour: ' Hour ',
    minute: ' Minute ',
    second: ' Second ',
  },
  address: {
    selectRegion: 'Choose Address',
    deliveryTo: 'Delivery To',
    chooseAnotherAddress: 'Choose Another Address',
  },
  signature: {
    reSign: 'Re Sign',
    unsupported: `Sorry, the current browser doesn't support canvas, so we can't use this control!`,
  },
  ecard: {
    chooseText: 'Select',
    otherValueText: 'Other Value',
    placeholder: 'Placeholder',
  },
  timeselect: {
    pickupTime: 'Pickup Time',
  },
  sku: {
    buyNow: 'Buy Now',
    buyNumber: 'Buy Number',
    addToCard: 'Add to Card',
  },
  skuheader: {
    skuId: 'Sku Number',
  },
  addresslist: {
    addAddress: 'Add New Address',
  },
  comment: {
    complaintsText: 'I have a complaint',
    additionalReview: (day: number) => `Review after ${day} days of purchase`,
    additionalImages: (length: number) =>
      `There are ${length} follow-up comments`,
  },
  searchbar: {
    basePlaceholder: 'Go to jd.com and buy good things',
    text: 'text',
    test: 'test',
    title1: 'basic usage',
    title2: 'search box shape and maximum length',
    title3: 'background settings inside and outside the search box',
    title4: 'search box text settings',
    title5: 'custom icon settings',
    title6: 'data change monitoring',
  },
  audio: {
    back: 'fastBack',
    forward: 'forward',
    pause: 'pause',
    start: 'start',
    mute: 'mute',
    tips: 'The onplayend event will only be triggered when loop = false',
  },
  avatarCropper: { rotate: 'Rotate', selectImage: 'Select Image' },
  datepicker: {
    year: 'Year',
    month: 'Month',
    day: 'Day',
    hour: 'Hour',
    min: 'Minute',
    seconds: 'Second',
  },
  pullToRefresh: {
    pullingText: 'Pulling',
    canReleaseText: 'Release to refresh',
    refreshingText: 'Loading...',
    completeText: 'Refresh successful',
  },
  tour: {
    prevStepText: 'Previous',
    completeText: 'Finish',
    nextStepText: 'Next step',
  },
  watermark: {
    errorCanvasTips: 'Canvas is not supported in the current environment',
  },
}
export default enUS
