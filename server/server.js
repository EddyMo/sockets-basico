// Llamada a librerias necesarias
const express = require('express');
const path = require('path');
const socketIO = require('socket.io');
const http = require('http');

// Creacion del servidor web (http es necesario para manejar los sockets)
const app = express();
let server = http.createServer(app);

// Se define la aplicacion web publica
const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;
app.use(express.static(publicPath));


// IO = esta es la comunicacion del BackEnd (Socket)
//let io = socketIO(server);
module.exports.io = socketIO(server);
require('./sockets/socket');


// Se inicia la escucha del servidor
server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});