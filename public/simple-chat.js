var socket = io();

socket.on('welcome', function(text){
  $('<li>').text(text).appendTo('#message-log');
});

socket.on('message', function(text){
  $('<li>').text(text).appendTo('#message-log');
});

$('#chat-send').on('click', function(){
  var text = $('#chat-text').val();
  socket.emit('message', text);
  $('#chat-text').val('');
});
