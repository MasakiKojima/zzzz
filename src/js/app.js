// Font Awesome
import './_fontawesome'

// SVGインポート
const allRequire = el => {
  el.keys().forEach(el)
}
allRequire(require.context('../svg/', true, /\.svg$/))
