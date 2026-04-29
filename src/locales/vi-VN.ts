import { BaseLang } from './base'

const viVN: BaseLang = {
  save: 'Lưu',
  confirm: 'Xác nhận',
  cancel: 'Hủy',
  done: 'Hoàn thành',
  noData: 'Tạm thời không có dữ liệu',
  placeholder: 'Vui lòng nhập nội dung',
  edit: 'Chỉnh sửa',
  reset: 'Đặt lại',
  select: 'Vui lòng chọn',
  video: {
    errorTip: 'Tải video không thành công',
    clickRetry: 'Nhấn để thử lại',
  },
  fixednav: {
    activeText: 'Thu gọn thanh điều hướng',
    inactiveText: 'Điều hướng nhanh',
  },
  infiniteloading: {
    pullRefreshText: 'Thả để làm mới',
    loadText: 'Đang tải……',
    loadMoreText: 'Ôi, đã đến cuối rồi!',
  },
  pagination: {
    prev: 'Trang trước',
    next: 'Trang sau',
  },
  range: {
    rangeText: 'Không nằm trong phạm vi này',
  },
  calendaritem: {
    weekdays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
    end: 'Kết thúc',
    start: 'Bắt đầu',
    confirm: 'Xác nhận',
    title: 'Chọn lịch',
    monthTitle: (year: number, month: number) => `Tháng ${month} Năm ${year}`,
    today: 'Hôm nay',
    loadPreviousMonth: 'Tải dữ liệu của tháng trước',
    noEarlierMonth: 'Không có tháng nào sớm hơn',
  },
  shortpassword: {
    title: 'Vui lòng nhập mật khẩu',
    description: 'Bạn đã sử dụng tài sản ảo, vui lòng xác minh',
    tips: 'Quên mật khẩu',
  },
  uploader: {
    list: 'Tải lên tập tin',
    ready: 'Chuẩn bị hoàn thành',
    readyUpload: 'Chuẩn bị tải lên',
    waitingUpload: 'Đang đợi tải lên',
    uploading: 'Đang tải lên...',
    success: 'Tải lên thành công',
    error: 'Tải lên thất bại',
    deleteWord: 'Người dùng đã chặn xóa!',
  },
  countdown: {
    day: 'Ngày',
    hour: 'Giờ',
    minute: 'Phút',
    second: '',
  },
  address: {
    selectRegion: 'Vui lòng chọn khu vực',
    deliveryTo: 'Giao đến',
    hotCity: 'Thành phố nóng',
    chooseAnotherAddress: 'Chọn địa chỉ khác',
    selectProvince: 'Chọn Tỉnh/Thành phố',
  },
  signature: {
    reSign: 'Ký lại',
    unsupported:
      'Xin lỗi, trình duyệt hiện tại không hỗ trợ Canvas, không thể dùng tính năng này!',
  },
  ecard: {
    chooseText: 'Chọn mệnh giá thẻ',
    otherValueText: 'Mệnh giá khác',
    placeholder: 'Nhập số nguyên 1-5000',
  },
  timeselect: {
    pickupTime: 'Thời gian lấy hàng',
  },
  sku: {
    buyNow: 'Mua ngay',
    buyNumber: 'Số lượng mua',
    addToCard: 'Thêm vào giỏ hàng',
  },
  skuheader: {
    skuId: 'Mã sản phẩm',
  },
  addresslist: {
    addAddress: 'Tạo địa chỉ ',
  },
  comment: {
    complaintsText: 'Tôi muốn khiếu nại',
    additionalReview: (day: number) => `Đánh giá thêm sau ${day} ngày`,
    additionalImages: (length: number) => `${length} ảnh đánh giá thêm`,
  },
  searchbar: {
    basePlaceholder: 'Lên JD tìm sản phẩm tốt',
    text: 'Văn bản',
    test: 'Kiểm tra',
    title1: 'Cách dùng cơ bản',
    title2: 'Hình dạng và độ dài tối đa ô tìm kiếm',
    title3: 'Cài đặt nền trong và ngoài ô tìm kiếm',
    title4: 'Cài đặt văn bản ô tìm kiếm',
    title5: 'Tùy chỉnh biểu tượng',
    title6: 'Lắng nghe thay đổi dữ liệu',
  },
  audio: {
    back: 'Quay lại',
    forward: 'Chuyển nhanh',
    pause: 'Tạm dừng',
    start: 'Bắt đầu',
    mute: 'Tắt âm',
    tips: 'Sự kiện onPlayEnd chỉ xảy ra khi loop=false',
  },
  avatarCropper: { rotate: 'Xoay', selectImage: 'Chọn ảnh' },
  datepicker: {
    year: 'Năm',
    month: 'Tháng',
    day: 'Ngày',
    hour: 'Giờ',
    min: 'Phút',
    seconds: 'Giây',
  },
  pullToRefresh: {
    pullingText: 'Kéo xuống để làm mới',
    canReleaseText: 'Thả để làm mới',
    refreshingText: 'Đang tải...',
    completeText: 'Làm mới thành công',
  },
  tour: {
    prevStepText: 'Bước trước',
    completeText: 'Hoàn thành',
    nextStepText: 'Bước tiếp theo',
  },
  watermark: {
    errorCanvasTips: 'Môi trường hiện tại không hỗ trợ Canvas',
  },
}
export default viVN
