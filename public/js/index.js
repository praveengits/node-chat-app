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

socket.on('newMessage', function (message) {

    var formattedTime = moment(message.createdAt).format('h:mm a');
    var template = jQuery('#message-template').html();
    var html = Mustache.render(template, {
      from: message.from,
      text: message.text,
      createdAt: formattedTime
    });
  
    jQuery('#messages').append(html);
  });
  
  socket.on('newLocationMessage', function (message) {
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current location</a>');
  
    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
  });
  
  jQuery('#message-form').on('submit', function (e) {
    e.preventDefault();
  
    var messageTextbox = jQuery('[name=message]');
  
    socket.emit('createMessage', {
      from: 'User',
      text: messageTextbox.val()
    }, function () {
      messageTextbox.val('')
    });
  });
