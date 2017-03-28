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
 * @param {Object} options An optional object containing extra options
 * @param {Function} callback The callback function.
 * @return {EventEmitter} The `FindIt` event emitter.
 */
function GitRepos (path, options, callback) {
    var ev = FindIt(Abs(path));
  
    if (arguments.length < 3) {
      callback = options;
      options = { };
    }
  
    var ignore;
    if (typeof options.ignore === 'function') {
      ignore = options.ignore;
    }
    else if (options.ignore instanceof RegExp) {
      ignore = function(dir) {
        return options.ignore.test(dir);
      };
    }
    else {
      ignore = function() { return false; };
    }

    ev.on("directory", function (dir, stat, stop) {
        if (ignore(dir)) {
          return stop();
        }

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
