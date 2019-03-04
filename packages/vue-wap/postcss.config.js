const px2rem = require('postcss-px2rem')
module.exports = {
  plugins: {
    autoprefixer: {},
    postcss: px2rem({
      remUnit: 75
    })
  }
}
