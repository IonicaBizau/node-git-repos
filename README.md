# 

## Installation

```sh
$ npm i 
```

## Example

```js
// Dependencies
var GitRepos = require("../");

// Find all the git repos from home
GitRepos("~/", function (err, dir, stat) {
    if (err) { return console.log(err); }
    console.log(dir);
});
```

## Documentation

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

See the [LICENSE](/LICENSE) file.

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md