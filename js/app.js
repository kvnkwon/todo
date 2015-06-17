$(document).ready(function() {
  $('#inputTask').focus();
  $(document)
  //Adding to list
  .on('click', '.add-button', function(event) {
    event.preventDefault();
    var itemToAdd = $('input[name="item-input"]').val().trim();
    if (itemToAdd) {
      var formattedItem = $('<div class="item-container"><p>' + itemToAdd + '</p><button class="btn btn-success complete-button"><i class="fa fa-check-square"></i></button><button class="btn btn-danger remove-button"><i class="fa fa-trash"></i></button></div>').hide().fadeIn(800);
      $('.list-items').append(formattedItem);
    }
    $('#inputTask').val('');
    $('#inputTask').focus();
    $('.instructions').fadeIn(800);
  })
  //Complete item
  .on('click', '.complete-button', function() {
    $(this).parent().animate({
      backgroundColor: "#50ABF9"
    }, 400);
    $(this).remove();
  })
  //Remove item
  .on('click', '.remove-button', function() {
    $(this).parent().fadeOut(800, function() {
      $(this).remove();
    });
  });

  $('.list-items').sortable();
});