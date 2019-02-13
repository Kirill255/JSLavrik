$(function() {
  $(".menu a").on("click", function(e) {
    e.preventDefault();

    // навешиваем активный класс текущей ссылке, с остальных удаляем
    $(".menu a")
      .removeClass("active")
      .filter(this)
      .addClass("active");

    var selector = $(this).attr("href"); /* #about - просто строка */
    var h = $(selector); /* jquery-элемент заголовка $("#about") */

    // 70px это отступ который мы задали в css для ".content", его тоже надо учесть
    $("html, body").animate(
      {
        scrollTop: h.offset().top - 70
      },
      400
    );
  });
});
