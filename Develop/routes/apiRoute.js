//dependencies

const router = require('express').Router();
const savedNotes = require('../db/savedNotes');

//GET request
router.get('/notes', function (req, res) {
    savedNotes 
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});
//POST request
router.post('/notes', (req, res) => {
    savedNotes
        .addNote(req.body)
        .then((note) => res.json(note))
        .catch(err => res.status(500).json(err));
});

//bonus - DELETE
router.delete('/notes/:id', function (req, res) {
    savedNotes
    .deleteNote(req.params.id)
    .then(() => res.json({ ok: true}))
    .catch(err => res.status(500).json(err));
});

module.exports = router;

