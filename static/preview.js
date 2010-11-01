$(function () {
  var $entry = $('#entry'),
      $preview = $('#preview');

  $entry.keyup(function (e) {
    if (e.keyCode == 13 /* Return */) {
      $preview.text('preview here');
    } else {
      $preview.text($(this).val());
      MathJax.Hub.Typeset();
    }
  });
});