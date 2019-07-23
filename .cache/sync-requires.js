const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-starter/.cache/dev-404-page.js"))),
  "component---src-pages-imprint-js": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-starter/src/pages/imprint.js"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/anastasia/Desktop/coding/gatsby-starter/src/pages/index.jsx")))
}

