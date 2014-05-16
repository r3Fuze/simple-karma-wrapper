# simple-karma-wrapper

A super simple wrapper around Karma

This is very hacky and will fail if used incorrectly, I mostly built this for myself

[![build status](https://secure.travis-ci.org/r3Fuze/simple-karma-wrapper.png)](http://travis-ci.org/r3Fuze/simple-karma-wrapper)

## Installation

This module is installed via npm:

``` bash
$ npm install simple-karma-wrapper
```

## API

### start(configFile, options, callback)

#### configFile
Type: `Sting`
Default: `karma.conf.js`

The path to your karma config file

#### options
Type: `Object`
Default: `{}`

Options to pass into karma

#### callback
Type: `Function`

Optional callback to run when karma is finished. Useful for gulp


### run(config, callback)

#### config
Type: `Object`
Default: `{}`

Options to pass into karma

#### callback
Type: `Function`

Optional callback to run when karma is finished. Useful for gulp

## Example Usage
``` js
var simpleKarmaWrapper = require('simple-karma-wrapper');

simpleKarmaWrapper.start("karma.conf.js", { port: 9879}, callback);

simpleKarmaWrapper.run(callback);
```
