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
        // Don't traverse into directories that typically won't contain
        // git repositories, most notably the .git directory itself,
        // other hidden directories such as .terraform, but also node_modules.
        if (dir.match(/(\/\..+|node_modules)/)) {
            if (Path.basename(dir) === ".git") {
                callback(null, Path.dirname(dir), stat);
            }
            stop();
        }
    });

    ev.on("error", function (err) {
        callback(err);
    });

    return ev;
}

module.exports = GitRepos;
