const express = require("express");
const router = express.Router();
const SaboresSchema = require("../models/Sabores.model");

router.route('/').get((req, res) => {
    SaboresSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
router.post('/createSabor', async (req, res, next) => {
    try {
      const newSabores = new SaboresSchema({
        sabor: [req.body.sabor],
        descripcion: [req.body.descripcion],
      
        
      });
  
      const createdSabores = await newSabores.save();
      return res.status(201).json(createdSabores);
    } catch (error) {
          // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  });


module.exports = router;