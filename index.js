/*global hexo */
'use strict';

var myth = require('myth');
var rework = require('rework');
var _ = require('lodash');

var defaults = {
  compress: false,
  browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
};

hexo.extend.renderer.register('css', 'css', function(data) {
  var themeConfig = hexo._themeConfig.myth || {};
  var config = _.extend(defaults, themeConfig);
  var css = data.text;
  return rework(css).use(myth(config)).toString();
}, true);
