# simple-karma-wrapper

A super simple wrapper around Karma

This is very hacky and will fail if used incorrectly, I mostly built this for myself

[![build status](https://secure.travis-ci.org/r3Fuze/simple-karma-wrapper.png)](http://travis-ci.org/r3Fuze/simple-karma-wrapper)

## Installation

This module is installed via npm:

``` bash
$ npm install simple-karma-wrapper
```

## Example Usage

``` js
var simpleKarmaWrapper = require('simple-karma-wrapper');

simpleKarmaWrapper.start("karma.conf.js", { port: 9879}, callback);

simpleKarmaWrapper.run(callback);
```
