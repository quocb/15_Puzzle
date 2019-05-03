const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/quoc/Documents/Codesmith/15_Puzzle/.cache/dev-404-page.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/quoc/Documents/Codesmith/15_Puzzle/src/pages/index.js")))
}

