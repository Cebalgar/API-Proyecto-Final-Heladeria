const express = require("express");
const router = express.Router();
const EspecialidadesSchema = require("../models/Especialidades.model");

router.route('/').get((req, res) => {
    EspecialidadesSchema.find((error, response) => {
        if (error) {
            return next(error)
        } else {
            res.status(200).json(response)
        }
    })
})
router.post('/createEspecialidad', async (req, res, next) => {
    try {
      const newEspecialidades = new EspecialidadesSchema({
        sabor: [req.body.sabor],
        descripcion: [req.body.descripcion],
      
        
      });
  
      const createdEspecialidades = await newEspecialidades.save();
      return res.status(201).json(createdEspecialidades);
    } catch (error) {
          // Lanzamos la función next con el error para que lo gestione Express
      next(error);
    }
  });


module.exports = router;