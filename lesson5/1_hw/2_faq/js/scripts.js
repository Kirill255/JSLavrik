$(function() {
  $(".faq .ask").on("click", function() {
    var answer = $(this).next();

    // можно и без фильтра ':visible', $(".faq .answer").not(answer).slideUp(400); но тогда мы какбы даём команду скрыться всем элементам, хотя открытых у нас в один момент не больше одного, вернее ровно один! поэтому для оптимизации применяются фильтры
    $(".faq .answer:visible")
      .not(answer)
      .slideUp(400);

    answer.slideToggle(400);
  });
});
