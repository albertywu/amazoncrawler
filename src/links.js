const getLinks = require('./getLinks')
const {
  _: [productLink],
  s: selector
} = require('minimist')(process.argv.slice(2))

getLinks(productLink, selector)
  .then(_ => console.log(_))

