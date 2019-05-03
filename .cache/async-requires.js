// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-pages-index-js": () => import("/Users/quoc/Documents/Codesmith/15_Puzzle/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Users/quoc/Documents/Codesmith/15_Puzzle/.cache/data.json")

