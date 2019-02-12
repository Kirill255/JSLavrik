// jQuery

$(function() {
  $(".fag-question").on("click", function(e) {
    // закрываем все кроме того по которому кликнули, p.s.: в обоих случаях можно просто .next() вместо .next(".fag-answer")
    $(".fag-answer")
      .not($(this).next(".fag-answer"))
      .slideUp();

    // если элемент по которому кликнули уже открыт, чтобы он закрылся, и наоборот
    $(this)
      .next(".fag-answer")
      .slideToggle();
  });
});
