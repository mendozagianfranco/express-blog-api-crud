const express = require('express');
const app = express();
const port = 3000;
const postsRouters = require('./routers/postsRouter');

app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Server');
});

app.use('/posts', postsRouters);

app.listen(port, () => {
    console.log(`Server attivo sulla port: ${port}`);
});