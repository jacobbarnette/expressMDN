var BoookInstance = require('../models/bookinstance');

exports.bookinstance_list = function (req, res) {
    res.send('NOT Implemented: Book instance list');
}

exports.bookinstance_detail = function(req, res) {
    res.send('Not Implemented: BookInstance detail: ' + req.params.id);
}

exports.bookinstance_create_get = function(req, res){
    res.send('Not Implemented: BookInstance create GET');
}

exports.bookinstance_create_post = function(req, res){
    res.send('Not Implemented: Bookinstance create POST');
}

exports.bookinstance_delete_get = function(req, res){
    res.send('Not Implemented: Bookinstance delete GET');
}

exports.bookinstance_delete_post = function(req, res){
    res.send('Not Implemented: Book instance delete POST');
}

exports.bookinstance_update_get = function(req, res){
    res.send('Not Implemented: Book instance update GET');
}

exports.bookinstance_update_post = function(req, res){
    res.send('Not Implemented: Book instance update POST');
}
