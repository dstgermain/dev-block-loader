#webpack-dev-block

Removes dev code from files before bundle.

## Getting Started

### Install with npm
```
npm install --save-dev webpack-dev-block
```

### Use
This plugin runs a basic find and replace, it searches for the comment dev:start and ends on dev:end everything between these two tags will be removed.

ex.
```
var isDev = false;
/* dev:start */
isDev = true;
/* dev:end */
console.log(isDev); // true

// the above would compile to:

var isDev = false;
console.log(isDev); // false
```

You can also remove one line with dev:line

ex.
```
var isDev = false;
isDev = true; // dev:line
console.log(isDev); // true

// the above would compile to:

var isDev = false;
console.log(isDev); // false
```
