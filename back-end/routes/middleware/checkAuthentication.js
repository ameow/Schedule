module.exports = function (req, res, next) {
    if(!req.session.user){
        return next(new Error('Forbidden', 403));
    }
    next();
};