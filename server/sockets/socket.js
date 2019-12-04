const { io } = require('../server');

io.on('connection', (client) => {
    console.log('Usuario connectado');

    // Envio de informacion al cliente (1 sola vez despues de que se inicio la comunicacion)
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    });

    // Deteccion de la desconexion de un usuario
    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });

    // Escuchar al cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);
        client.broadcast.emit('enviarMensaje', data);


        // Confirmacion del recibido mediante el callback
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     });
        // } else {
        //     callback({
        //         resp: 'TODO SALIO MAL !!!'
        //     });
        // }
    });
});