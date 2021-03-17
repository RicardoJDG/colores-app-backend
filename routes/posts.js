const express = require('express');
const router = express.Router();
const Color = require('../models/Color');
const Counter = require('../models/Counter');

getNextSequenceValue = async (sequenceName) => {
  const filter = { _id: sequenceName };
  const update = { $inc: { sequence_value: 1 } };
  const updated = await Counter.findOneAndUpdate(filter, update, {
    new: true,
    upsert: true,
  });
  return updated.sequence_value;
};

router.post('/', async (req, res) => {
  const id = await getNextSequenceValue('colorid');
  const color = new Color({
    _id: id,
    name: req.body.name,
    year: req.body.year,
    color: req.body.color,
    pantone_value: req.body.pantone_value,
  });

  color
    .save()
    .then((data) => res.status(200).json(data))
    .catch((err) => console.error(err));
});

module.exports = router;
