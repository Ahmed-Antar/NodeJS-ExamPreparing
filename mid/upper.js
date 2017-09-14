module.exports = function (req, res, next) {
    req.upperTitre= req.params.upMe.toUpperCase();
    next();

};