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
}
export default idID
