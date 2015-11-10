# git-repos [![Support this project][donate-now]][paypal-donations]

Find all the git repositories in a specified directory, recursively.

## Installation

```sh
$ npm i git-repos
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

### `GitRepos(path, callback)`
Finds the git repositories paths in the provided path.

#### Params
- **String** `path`: The path where to search recursively the git repositories.
- **Function** `callback`: The callback function.

#### Return
- **EventEmitter** The `FindIt` event emitter.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`git-stats-importer`](https://github.com/IonicaBizau/git-stats-importer)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md