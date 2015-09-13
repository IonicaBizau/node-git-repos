// Dependencies
var FindIt = require("findit")
  , Abs = require("abs")
  , Path = require("path")
  ;

/**
 * GitRepos
 * Finds the git repositories paths in the provided path.
 *
 * @name GitRepos
 * @function
 * @param {String} path The path where to search recursively the git repositories.
 * @param {Function} callback The callback function.
 * @return {EventEmitter} The `FindIt` event emitter.
 */
function GitRepos (path, callback) {
    var ev = FindIt(Abs(path));

    ev.on("directory", function (dir, stat, stop) {

        var cDir = Path.dirname(dir)
          , base = Path.basename(dir)
          ;

        if (base === ".git") {
            callback(null, cDir, stat);
            stop();
        }
    });

    ev.on("error", function (err) {
        callback(err);
    });

    return ev;
}

module.exports = GitRepos;
