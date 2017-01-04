# Tukki

Tukki is a lightweight wrapper around the [debug](https://github.com/visionmedia/debug) module that allows for tiered logging with the following levels:

* Error
* Warn
* Debug
* Info
* Verbose

This follows the same log level pattern popularized by Android's `logcat` utility.

## Installation

`npm install tukki --save` or `yarn add tukki`

## Usage

```
const tukki = require('tukki')('Namespace');

...

tukki.e('This is an error message');
tukki.w('This is a warning message');
tukki.d('This is a debug message');
tukki.i('This is an info message');
tukki.v('This is a verbose message');
```

When running your script, you can specify the namespace and log levels you wish to see output using the `DEBUG=` environmental variable.

E.g. 

`DEBUG="*:error" node processImages.js` will only display `tukki.e()` log statements.

Whereas `DEBUG="*:error,*:warn,*:debug" node processImages.js` will only display `tukki.e()`, `tukki.w()`, and `tukki.d()` log statements.