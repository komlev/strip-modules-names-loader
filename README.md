#Strip modules names loader
[Webpack] loader for stripping names from ES6 modules.

Loader has the same purpose as [add-module-exports] plugin.
It removes modules names from exports.
Plugin will affect all the imports, but loader could be used to separately for specific files.

It is advised to have only one **default** export
If you have several named exports from file all of them will be ignored.

##Example

Existing file
```js
export default {
  a: 1,
  b: true
}

const c = {c: 2}
export {
  c
}
```

Normal Babel v6 modules output
```js
exports.default = {
  a: 1,
  b: true
};
exports.c = c;
```

Loader modules output
```js
module.exports = {
  a: 1,
  b: true
};
exports.c = c;
```

[Webpack]:            http://webpack.github.io/
[add-module-exports]: https://github.com/59naga/babel-plugin-add-module-exports
