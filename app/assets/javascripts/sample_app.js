SP = {
  setup: function () {
    $('#micropost_content').bind('input propertychange', function () {
      $('.post-counter').text(140 - $(this).val().length);

      if ($(this).val().length > 140) {
        $('input.btn').attr('disabled', 'disabled');
      } else {
        $('input.btn').removeAttr('disabled');
      }
    });
  }
};

$(SP.setup);