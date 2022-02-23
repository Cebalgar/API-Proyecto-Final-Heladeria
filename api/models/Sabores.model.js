const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let SaboresSchema = new Schema({
    sabor: {
        type: String, 
    },
    descripcion: {
        type: String, 
    },
}, {
    collection: 'Sabores'
})


module.exports = mongoose.model('Sabores', SaboresSchema); 