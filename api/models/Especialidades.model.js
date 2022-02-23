const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let EspecialidadesSchema = new Schema({
    sabor: {
        type: String, 
    },
    descripcion: {
        type: String, 
    },
}, {
    collection: 'Especialidades'
})


module.exports = mongoose.model('Especialidades', EspecialidadesSchema); 