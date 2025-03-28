const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Home Server');
});

app.listen(port, () => {
    console.log(`Server attivo sulla port: ${port}`);
});