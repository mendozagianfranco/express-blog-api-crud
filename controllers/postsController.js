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

    if (!post) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    res.json(post);
}

function store(req, res) {
    const newId = posts.at(-1).id + 1;
    const newPost = {
        id: newId,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    };

    posts.push(newPost);
    console.log(posts);
    res.status(201).json(newPost);
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

    if (post < 0) {
        return res.status(404).json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        });
    }

    posts.splice(post, 1);
    console.log(posts);
    res.sendStatus(204);
}

module.exports = { index, show, store, update, modify, destroy };