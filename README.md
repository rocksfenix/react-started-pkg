# React Started PKG

Environment configured for create testable React Components Libraries and publish it easily using [Rollup](https://github.com/rollup/rollup) for building and [React Scripts](https://github.com/facebook/create-react-app) for development.

## Project Tree
```
react-started-pkg
├─ .babelrc
├─ .gitignore
├─ .npmignore
├─ .travis.yml
├─ example
│  ├─ package-lock.json
│  └─ package.json
├─ package-lock.json
├─ package.json
├─ README.md
├─ rollup.config.js
└─ src
   ├─ components
   │  └─ counter
   │     ├─ counter.test.js
   │     └─ index.js
   └─ index.js
```

## NPM Scripts

### npm build

Create a production build with es6 modules and cjs.

### npm dev

Build and watch ``/scr`` for changes.

### npm test

Run all test with Jest.

This component uses Standard JS

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)

## License

MIT © [rocksfenix](https://github.com/rocksfenix)