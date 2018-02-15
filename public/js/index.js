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

    var li = jQuery('<li class="list-group-item"></li>');
    li.text(`${msg.from}: ${msg.text}`);
  
    jQuery('#messages-list').append(li);
});

jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
  
    socket.emit('createMessage', {
      from: 'User',
      text: jQuery('[name=message]').val()
    }, function () {
  
    });
  });

