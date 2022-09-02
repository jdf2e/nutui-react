import { BaseLang } from './base'

const idID: BaseLang = {
  save: 'Simpan',
  confirm: 'Konfirmasi',
  cancel: 'Batal',
  done: 'Selesai',
  noData: 'Tidak Ada Data',
  placeholder: 'Kolom Input',
  select: 'Pilih',
  video: {
    errorTip: 'Terjadi Kesalahan',
    clickRetry: 'Coba Lagi',
  },
  fixednav: {
    activeText: 'Tutup Navigasi',
    unActiveText: 'Buka Navigasi',
  },
  infiniteloading: {
    pullRefreshText: 'Lepaskan untuk memperbarui',
    loadText: 'Memuat',
    loadMoreText: 'Oops, sudah sampai bawah',
  },
  pagination: {
    prev: 'Sebelumnya',
    next: 'Selanjutnya',
  },
  range: { rangeText: 'is overflow' },
  calendaritem: {
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    end: 'Selesai',
    start: 'Mulai',
    title: 'Kalender',
    monthTitle: (year: number, month: number) => `${year}/${month}`,
    today: 'Hari ini',
    loadPreviousMonth: 'Muat Bulan Sebelumnya',
    noEarlierMonth: 'Tidak Ada Bulan Sebelumnya',
  },
  shortpassword: {
    title: 'SIlakan masukan kata sandi',
    desc: 'Anda telah menggunakan aset virtual, mohon lakukan verifikasi.',
    tips: 'Lupa Kata Sandi',
  },
  uploader: {
    ready: 'File berhasil diunggah',
    readyUpload: 'Siap untuk mengunggah',
    waitingUpload: 'Menunggu untuk diunggah',
    uploading: 'Mengunggah',
    success: 'Berhasil Diunggah',
    error: 'Gagal Mengunggah',
    deleteWord: 'The user blocked the deletion!',
  },
  countdown: {
    day: ' Hari ',
    hour: ' Jam ',
    minute: ' Menit ',
    second: ' Detik ',
  },
  address: {
    selectRegion: 'Pilih Daerah',
    deliveryTo: 'Kirim Ke',
    chooseAnotherAddress: 'Pilih alamat lain',
  },
  signature: {
    reSign: 'Masuk Kembali',
    unSupportTpl: `Maaf, browser Anda saat ini tidak mendukung Canvas, sehingga kita tidak dapat menggunakan kontrol ini!`,
  },
  ecard: {
    chooseText: 'Pilih',
    otherValueText: 'Jumlah Lain',
    placeholder: 'Kolom Input',
  },
  timeselect: {
    pickupTime: 'Waktu Penjemputan',
  },
  sku: {
    buyNow: 'Beli Sekarang',
    buyNumber: 'Jumlah Pembelian',
    addToCard: 'Tambahkan ke Keranjang',
  },
  skuheader: {
    skuId: 'Nomor SKU',
  },
  addresslist: {
    addAddress: 'Tambah Alamat Baru',
  },
  comment: {
    complaintsText: 'Saya memiliki komplain',
    additionalReview: (day: number) =>
      `Ulas setelah ${day} hari dari pembelian`,
    additionalImages: (length: number) => `Terdapat ${length} komentar lainnya`,
  },
  searchbar: {
    basePlaceholder: 'pergi ke jd.com, membeli barang baik',
    text: 'teks',
    test: 'tes',
    title1: 'penggunaan dasar',
    title2: 'bentuk kotak pencarian dan panjang maksimum',
    title3: 'pengaturan latar belakang di dalam dan diluar kotak pencarian',
    title4: 'tetapan teks kotak pencarian',
    title5: 'pengaturan ikon suai',
    title6: 'Monitor perubahan data',
  },
  audio: {
    back: 'Fastback',
    forward: 'maju',
    pause: 'berhenti sebentar',
    start: 'Mulailah',
    mute: 'bisu',
    tips: 'Acara Onplayend hanya akan dipicu saat loop = false',
  },
  datepicker: {
    year: 'Tahun',
    month: 'Bulan',
    day: 'Hari',
    hour: 'Jam',
    min: 'Menit',
    seconds: 'Detik',
  },
  pullToRefresh: {
    pullingText: 'Tarik ke bawah untuk menyegarkan',
    canReleaseText: 'Rilis untuk menyegarkan',
    refreshingText: 'Memuat...',
    completeText: 'Penyegaran berhasil',
  },
}
export default idID
