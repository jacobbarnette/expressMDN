var Author = require('../models/author');

exports.author_list = function(req, res) {
    res.send('Not IMPLEMENTED: Author List');
}

exports.author_detail = function(req, res){
    res.send('NOT IMPLEMENTED: Author Detail ' + req.params.id);
}

exports.author_create_get = function(req, res) {
    res.send('Not Implemented: Author create GET');
}

exports.author_create_post = function(req, res) {
    res.send('Not Implemented: Author create POST')
}

exports.author_delete_get = function(req, res){
    res.send('Not Implemented: Author delete GET');
}

exports.author_delete_post = function(req, res){
    res.send('Not Implemented: Author delete POST');
}

exports.author_update_get = function(req, res){
    res.send('Not Implemented: Author update GET');
}

exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
}

