// Dependencies
var GitRepos = require("../");

// Find all the git repos from home
GitRepos("~/", function (err, dir, stat) {
    if (err) { return console.log(err); }
    console.log(dir);
});
