const {Router} = require('express');
const mongoose = require("mongoose");
const exampleSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

// Definir el modelo basado en el esquema
const ExampleModel = mongoose.model('Example', exampleSchema);
const exRouter = Router();

exRouter.post('/example', (req, res) => {
    const { name, age } = req.body;
  
    // Crear una nueva instancia del modelo ExampleModel
    const example = new ExampleModel({ name, age });
  
    // Guardar el objeto en la base de datos
    example.save()
    .then(savedExample => res.json(savedExample))
    .catch(err => res.status(500).json({ error: err.message }));
});

  
  // Ruta de ejemplo para obtener todos los objetos de la base de datos
exRouter.get('/example', (req, res) => {
    ExampleModel.find()
      .then(examples => res.json(examples))
      .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = exRouter;