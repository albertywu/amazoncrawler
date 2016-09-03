'use strict';

var rp = require('request-promise');
var cheerio = require('cheerio');
var BASE_AMAZON_URL = 'https://www.amazon.com/';

var _require = require('url');

var resolve = _require.resolve;

var CAROUSEL_CLASS = 'a-carousel-row-inner';

// (uri: string) => Object
var options = function options(uri) {
  return {
    uri: uri,
    transform: function transform(body) {
      return cheerio.load(body);
    }
  };
};

// finds all links inside all carousels on the page
// ($: Cheerio) => Promise<string[]>
var getProductPaths = function getProductPaths($) {
  return $('.' + CAROUSEL_CLASS).find('a').toArray().map(function (link) {
    return $(link).attr('href');
  }).filter(function (link) {
    return link !== '#';
  });
};

// (path: string) => string
var makeAbsoluteUrl = function makeAbsoluteUrl(path) {
  return resolve(BASE_AMAZON_URL, path);
};

// (paths: string[]) => string[]
var makeAbsoluteUrls = function makeAbsoluteUrls(paths) {
  return paths.map(makeAbsoluteUrl);
};

// productUrl must be an Amazon product URL!
// (productUrl: string) => Promise<string[]>
module.exports = function getRelatedProductLinks(productUrl) {
  return rp(options(productUrl)).then(getProductPaths).then(makeAbsoluteUrls);
};