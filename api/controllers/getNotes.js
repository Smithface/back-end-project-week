const Notes = require('../models/noteModel');

const getNotes = (req, res) => {
  console.log(req.decoded);
  const author = req.decoded.id;
  Notes.find({ author })
    .then(notes => {
      res.status(200).json(notes)
    })
    .catch(err => {
      res.status(422).json({ message: 'Could not get notes.', err });
    });
};

module.exports = getNotes;
