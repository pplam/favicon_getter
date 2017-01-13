'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = fetchFavicon;

var _request = require('request');

var _request2 = _interopRequireDefault(_request);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

var _url = require('url');

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function fetchFavicon(pageUrl) {
  return new Promise(function (resolve, reject) {
    (0, _request2.default)(pageUrl, function (err, res, body) {
      if (err) {
        reject(err);
      }

      var $ = _cheerio2.default.load(body);
      var selector = "link[rel='shortcut icon'], link[rel='icon']";
      var faviconHref = $(selector).first().attr('href');

      if (faviconHref) {
        resolve(_url2.default.resolve(pageUrl, faviconHref));
      } else {
        resolve(_url2.default.resolve(pageUrl, '/favicon.ico'));
      }
    });
  });
}