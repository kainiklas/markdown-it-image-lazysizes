# markdown-it-image-lazysizes

A markdown-it plugin to support lazy loading of images using [lazysizes](https://github.com/aFarkas/lazysizes).

The plugin makes lazyload possible by:

- Move `src` to `data-src`
- Add class `lazyload` to img tag.

[lazysizes](https://github.com/aFarkas/lazysizes) has to be installed to make this plugin work.

## Install

```bash
npm i -D markdown-it-image-lazysizes
npm i -D lazysizes
```

## Usage

```javascript
const md = require('markdown-it')();
const lazy_loading = require('markdown-it-image-lazysizes');
md.use(lazy_loading);

md.render(`![](example.png "image title")`);
// <p><img alt="" title="image title" class="lazyloading" data-src="example.png"></p>\n
```

Add the `lazysize` javascript:

```html
<script src="lazysizes.min.js" async></script>
```

## Related Information

- [Lazy load offscreen images with lazysizes](https://web.dev/codelab-use-lazysizes-to-lazyload-images/)

## Contribution

This is a minimum plugin. Please open an issue when you need more functionalities or something doesn't work!
