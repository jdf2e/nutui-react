import { BaseLang } from './base'

const jaJP: BaseLang = {
  save: '保存',
  confirm: '確認',
  cancel: 'キャンセル',
  done: '完了',
  noData: 'データなし',
  placeholder: '内容を入力してください',
  select: '選択してください',
  edit: '編集',
  reset: 'リセット',
  video: {
    errorTip: '動画の読み込みに失敗しました',
    clickRetry: 'クリックして再試行',
  },
  fixednav: {
    activeText: 'ナビを折りたたむ',
    inactiveText: 'クイックナビゲーション',
  },
  infiniteloading: {
    pullRefreshText: '指を離して更新',
    loadText: '読み込み中',
    loadMoreText: 'これ以上データはありません',
  },
  pagination: {
    prev: '前へ',
    next: '次へ',
  },
  range: {
    rangeText: 'この範囲外です',
  },
  calendaritem: {
    weekdays: ['日', '月', '火', '水', '木', '金', '土'],
    end: '終了',
    start: '開始',
    confirm: '確認',
    title: 'カレンダー選択',
    monthTitle: (year: number, month: number) =>
      `${year}年${Number(month) < 10 ? `0${Number(month)}` : month}月`,
    today: '今日',
    loadPreviousMonth: '前の月を読み込む',
    noEarlierMonth: 'これより前の月はありません',
  },
  shortpassword: {
    title: 'パスワードを入力してください',
    description: '仮想資産を使用しました。認証を行ってください',
    tips: 'パスワードを忘れた場合',
  },
  uploader: {
    list: 'ファイルをアップロード',
    ready: '準備完了',
    readyUpload: 'アップロード準備完了',
    waitingUpload: 'アップロード待ち',
    uploading: 'アップロード中...',
    success: 'アップロード成功',
    error: 'アップロード失敗',
    deleteWord: 'ユーザーによって削除がブロックされました！',
  },
  countdown: {
    day: '日',
    hour: '時間',
    minute: '分',
    second: '秒',
  },
  address: {
    selectRegion: '住所を選択してください',
    deliveryTo: '配送先',
    chooseAnotherAddress: '別の住所を選択',
    hotCity: '人気都市',
    selectProvince: '都道府県/地域を選択',
  },
  signature: {
    reSign: '再署名',
    unsupported:
      '申し訳ありませんが、現在のブラウザはCanvasをサポートしていません。このコントロールは使用できません！',
  },
  ecard: {
    chooseText: '電子カードの額面を選択してください',
    otherValueText: 'その他の額面',
    placeholder: '1から5000までの整数を入力してください',
  },
  timeselect: {
    pickupTime: '受け取り時間',
  },
  sku: {
    buyNow: '今すぐ購入',
    buyNumber: '購入数量',
    addToCard: 'カートに入れる',
  },
  skuheader: {
    skuId: '商品コード',
  },
  addresslist: {
    addAddress: '新しい住所を追加',
  },
  comment: {
    complaintsText: 'クレームを報告する',
    additionalReview: (day: number) => `購入${day}日後の追加レビュー`,
    additionalImages: (length: number) => `${length}枚の追加レビュー画像`,
  },
  searchbar: {
    basePlaceholder: 'JD（京東）で良い商品を購入',
    text: 'テキスト',
    test: 'テスト',
    title1: '基本使用',
    title2: '検索ボックスの形状と最大長',
    title3: '検索ボックスの内外背景設定',
    title4: '検索ボックスのテキスト設定',
    title5: 'カスタムアイコン設定',
    title6: 'データ変更の監視',
  },
  audio: {
    back: '早戻し',
    forward: '早送り',
    pause: '一時停止',
    start: '開始',
    mute: 'ミュート',
    tips: 'onPlayEndイベントはloop=falseの場合にのみトリガーされます',
  },
  avatarCropper: { rotate: '回転', selectImage: '画像を選択' },
  datepicker: {
    year: '年',
    month: '月',
    day: '日',
    hour: '時',
    min: '分',
    seconds: '秒',
  },
  pullToRefresh: {
    pullingText: '下に引いて更新',
    canReleaseText: '指を離して更新',
    refreshingText: '更新中',
    completeText: '更新成功',
  },
  tour: {
    prevStepText: '前へ',
    completeText: '完了',
    nextStepText: '次へ',
  },
  watermark: {
    errorCanvasTips: '現在の環境はCanvasをサポートしていません',
  },
  mask: 'マスク',
  close: '閉じる',
  quickenter: {
    title: 'クイックアクセス',
  },
}
export default jaJP
