const posts = require('../data/posts');

function index(req, res) {
    res.send('lista post');
}

function show(req, res) {
    const id = parseInt(req.params.id);
    res.send('Visualliazione del post ' + id);
}

function store(req, res) {
    res.send('Creazione post');
}

function update(req, res) {
    const id = parseInt(req.params.id);
    res.send('Modifica integrale del post ' + id);
}

function modify(req, res) {
    const id = parseInt(req.params.id);
    res.send('Modifica parziale del post ' + id);
}

function destroy(req, res) {
    const id = parseInt(req.params.id);
    res.send('Eliminazione del post ' + id);
}

module.exports = { index, show, store, update, modify, destroy };