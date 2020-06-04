'use strict';

module.exports = function lazy_loading_plugin(md, options) {
  var defaultImageRenderer = md.renderer.rules.image;

  md.renderer.rules.image = function (tokens, idx, options, env, self) {
    var token = tokens[idx];
    var imgSrc = token.attrGet('src');

    token.attrJoin('class', 'lazyload');
    token.attrSet('data-src', imgSrc);

    // remove src attribute
    token.attrs.splice([token.attrIndex('src')], 1);

    return defaultImageRenderer(tokens, idx, options, env, self);
  };
};