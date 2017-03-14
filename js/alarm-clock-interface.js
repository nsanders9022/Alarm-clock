$(document).ready(function(){
  function update() {
  $('#time').html(moment().format('H:mm:ss'));
  }
  setInterval(update, 1000);

  var currentTime = moment().format('H:mm');
  console.log(currentTime);

  $('#alarm-clock').submit(function(event) {
    event.preventDefault();

    var inputtedTime = $('input#inputtedTime').val();
  });

  setInterval(function() {
    if (moment().format('H:mm') === $('input#inputtedTime').val())
    {
      $('.display-time').show();
    } else {
      $('.display-time').hide();
    }
  }, 1000)
});
