const mongoose = require("mongoose");
const DB_URI = 'mongodb://127.0.0.1:27017/Pomo';
const connect = () => {
    mongoose.set("strictQuery", false);
    mongoose.connect(DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conexión exitosa a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));
}

module.exports = connect;

