/**
 * Created by HP on 16/02/2017.
 */
fs = require('fs');
module.exports.movies = JSON.parse(fs.readFileSync('data/movies-data.json'));