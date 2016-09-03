const getRelatedProductLinks = require('./getRelatedProductLinks')
const { _ : [productLink] } = require('minimist')(process.argv.slice(2))

getRelatedProductLinks(productLink)
  .then(_ => console.log(_))

