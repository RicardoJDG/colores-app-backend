const express = require('express');
const router = express.Router();
const Color = require('../models/Color');

//GET colores. Envia listado de colores disponibles con un máximo de 6 por página
router.get('/', async (req, res) => {
  // Si quisieramos cambiar la cantidad de colores que se muestran por pagina, solo tendriamos que modificar esta variable
  const coloresMax = 6;
  try {
    const page = parseInt(req.query.page);
    if (!page || page === 1) {
      const colores = await Color.find({}, 'name color').limit(coloresMax);
      res.status(200).json(colores);
    } else if (!isNaN(page)) {
      const colores = await Color.find({}, 'name color')
        .skip(coloresMax * (page - 1))
        .limit(coloresMax);
      res.status(200).json(colores);
    } else {
      res.status(400).json('Bad request');
    }
  } catch (err) {
    console.error(err);
  }
});

//GET color id. Envia informacion de un color especifico
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const color = await Color.findById(id);
    res.status(200).json(color);
  } catch (err) {
    console.error(err);
    res.status(404).json('Color not found');
  }
});

module.exports = router;
