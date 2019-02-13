$(function() {
  // в этом примере у нас один элемент всегда видимый, и при загрузке страницу по умолчанию это первый элемент

  // первый элемент показываем, или можно не задавать это поведение и показать его с помощью css
  // $(".faq .answer:first").show();

  $(".faq .ask").on("click", function() {
    var answer = $(this).next();

    $(".faq .answer:visible")
      .not(answer)
      .slideUp(400);

    answer.slideDown(400);
  });
});
