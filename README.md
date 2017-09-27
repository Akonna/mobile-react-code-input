# react-input-code-pretty
---

react-input-code-pretty

[![build status][travis-image]][travis-url]
[![NPM version][npm-image]][npm-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![npm download][download-image]][download-url]

[travis-image]: https://travis-ci.org/konna/react-input-code-pretty.svg?style=flat-square
[travis-url]: https://travis-ci.org/konna/react-input-code-pretty
[npm-image]: https://img.shields.io/npm/v/react-input-code-prettyt.svg?style=flat-square
[npm-url]: http://npmjs.org/package/react-input-code-pretty
[coveralls-image]: https://coveralls.io/repos/github/konna/react-input-code-pretty/badge.svg?style=flat-square
[coveralls-url]: https://coveralls.io/github/konna/react-input-code-pretty?branch=master
[download-image]: https://img.shields.io/npm/dm/react-input-code-pretty.svg?style=flat-square
[download-url]: https://npmjs.org/package/react-input-code-pretty

## install

[![react-input-code-pretty](https://nodei.co/npm/react-input-code-pretty.png)](https://npmjs.org/package/react-input-code-pretty)

## Usage

```js
var VerifyCode = require('react-input-code-pretty');
var React = require('react');
React.render(<VerifyCode />, container);
```

## API

### props

<table class="table table-bordered table-striped">
    <thead>
    <tr>
        <th style="width: 100px;">name</th>
        <th style="width: 50px;">type</th>
        <th style="width: 50px;">default</th>
        <th>description</th>
    </tr>
    </thead>
    <tbody>
           <tr>
              <td>isShow</td>
              <td>Boolean</td>
              <td>false</td>
              <td>false 不显示按钮，true 为显示按钮，处理code逻辑</td>
            </tr>
            <tr>
              <td>btnText</td>
              <td>String</td>
              <td>无</td>
              <td>按钮内容文本</td>
            </tr>
        <tr>
          <td>useCodeFun</td>
          <td>fun</td>
          <td></td>
          <td>useCodeFun, param is value</td>
        </tr>
    </tbody>
</table>

## Development

```
npm install react-input-code-pretty --save
npm start
```

## Example




