var socket = io();

socket.on('connect', function() {
    console.log('Connected to server!');                

    // socket.emit('createMessage', {
    //     from: 'Praveen',
    //     text: 'Heyyy'
    // });
});

socket.on('disconnect', function() {
    console.log('Disconnected from server');                
});

socket.on('newMessage', function(msg) {
    console.log('welcome !!', msg);
});
