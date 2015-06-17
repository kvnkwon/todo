$(document).ready(function() {
  $('#inputTask').focus();
  $(document)
  //Adding to list
  .on('click', '.add-button', function(event) {
    event.preventDefault();
    var itemToAdd = $('input[name="item-input"]').val().trim();
    if (itemToAdd) {
      $('.list-items').append('<div class="item-container"><p>' + itemToAdd + '</p><button class="btn btn-success complete-button"><i class="fa fa-check-square"></i></button><button class="btn btn-danger remove-button"><i class="fa fa-trash"></i></button></div>');
    }
    $('#inputTask').val('');
    $('#inputTask').focus();
  })
  //Complete item
  .on('click', '.complete-button', function() {
    $(this).parent().css('background-color', '#0DFF87');
    $(this).remove();
  })
  //Remove item
  .on('click', '.remove-button', function() {
    $(this).parent().remove();
  });

  $('.list-items').sortable();
});