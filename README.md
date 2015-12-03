# git-repos [![Support this project][donate-now]][paypal-donations]

Find all the git repositories in a specified directory, recursively.

## Installation

```sh
$ npm i --save git-repos
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md