# markdown-it-image-lazysizes

A markdown-it plugin to support lazy loading of images using [lazysizes](https://github.com/aFarkas/lazysizes).

## Install

```bash
npm install markdown-it-image-lazysizes
```

## Usage

```javascript
const md = require('markdown-it')();
const lazy_loading = require('markdown-it-image-lazysizes');
md.use(lazy_loading);

md.render(`![](example.png "image title")`);
// <p><img src="example.png" alt="" title="image title" class="lazyloading"></p>\n
```

## More Information

- [Lazy load offscreen images with lazysizes](https://web.dev/codelab-use-lazysizes-to-lazyload-images/)
- [Gatsby](https://www.gatsbyjs.org/packages/gatsby-remark-lazy-load/?=lazy-load)

## License

MIT
