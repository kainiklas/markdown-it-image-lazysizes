var test = require('tape');

var md = require('markdown-it')();
var lazy_loading = require('./index.js');
md.use(lazy_loading);

test('lazy loading test', function (t) {
  t.plan(1);

  t.equal(
    md.render(`![image alt](example.png "image title")`),
    '<p><img alt="image alt" title="image title" class="lazyload" data-src="example.png"></p>\n'
  );
});

