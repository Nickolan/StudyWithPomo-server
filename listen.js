const connect = require('./config/mongo');
const server = require('./src/app')
server.listen(3001, () => {
  console.log('Servidor escuchando en el puerto 3001');
});

connect();