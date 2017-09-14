/**
 * Created by HP on 02/03/2017.
 */

var express = require('express');
var upperCaseMid  =   require('../mid/upper');
var moviesData = require('../data/movies-exporter');

var router = express.Router();

/* GET movies listing. */
router.get('/',function (req, res, next) {
    console.log( );
    res.json(moviesData.movies);
});

/* GET movies by Index. */
router.get('/:index',function (req, res, next) {
    console.log( );
    res.json(moviesData.movies[req.params.index]);
});

/* GET movies by titre . */
router.get('/search/:titre', function (req, res, next) {
    var tab = [];
    moviesData.movies.forEach(function (movie) {
        //contains
        if (movie.titre.indexOf(req.params.titre) !== -1)
        {
            tab.push(movie);
        }

        /*
         if(movie.titre == req.params.titre)
         tab.push(movie);
         */
    });
    res.json(tab);
});

/* Delete movies by index . */
router.delete('/:index', function (req, res, next) {
    moviesData.movies.splice(req.params.index, 1);
    return res.json(moviesData.movies);
});

/* Update movies by index . */
router.put('/:index', function (req, res, next) {
    moviesData.movies[req.params.index] = req.body;
    return res.json(moviesData.movies);
});

/* POST movies . */
router.post('/', function (req, res, next) {
    var movie = {};
    movie = req.body;
    moviesData.movies.push(movie);
    return res.json(moviesData.movies);
});


/* GET middleware upperCase param . */
router.get('/mid/:upMe',upperCaseMid, function (req, res, next) {
    res.json(req.upperTitre);
});

module.exports = router;
