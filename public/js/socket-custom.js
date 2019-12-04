var socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
})

// Para Escuchar (On)
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

// Para Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Edwin',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});

// Para Escuclar informacion
socket.on('enviarMensaje', function(dato) {
    console.log('Servidor:', dato);
});