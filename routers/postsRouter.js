const express = require('express');
const router = express.Router();

// INDEX
router.get('/', (req, res) => {
    res.send('Lista post');
});
// SHOW
router.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send('Visualizzazione post ' + id);
});
// STORE
router.post('/', (req, res) => {
    res.send('Creazione post');
});
// UPDATE
router.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send('Modifica integrale del post ' + id);
});
// MODIFY
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send('Modifica parziale del post ' + id);
});
// DESTROY
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    res.send('Eliminazione del post ' + id);
});

module.exports = router;