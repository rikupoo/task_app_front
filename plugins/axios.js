// 開発環境の場合にログを出力する設定にする為、isDevで開発のみの設定をする
export default ({ $axios, isDev }) => {
  // リクエストログ
  $axios.onRequest((config) => {
    if (isDev) { console.log(config) }
  })
  // レスポンスログ
  $axios.onResponse((config) => {
    if (isDev) { console.log(config) }
  })
  // エラーログ
  $axios.onError((e) => {
    console.log(e.response)
  })
}