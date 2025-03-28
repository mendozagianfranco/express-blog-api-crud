const posts = require('../data/posts');

function index(req, res) {

    let filteredPosts = posts;
    let tag = req.query.tag;
    let capitalizeTag = tag[0].toUpperCase() + tag.slice(1);

    console.log(capitalizeTag);

    if (tag) {
        filteredPosts = posts.filter(post => post.tags.includes(capitalizeTag));
    }

    res.json(filteredPosts);
}

function show(req, res) {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id);

    res.json(post);
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
    const post = posts.findIndex(post => post.id === id);

    posts.splice(post, 1);
    console.log(posts);
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };