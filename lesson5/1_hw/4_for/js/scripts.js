$(function() {
  // по data атрибутам, выставляем в html атрибуты и ведём поиск по ним
  $(".faq .ask").on("click", function() {
    // при клике по элементу, берём значение его атрибута data-open (оно рано какому-то id)
    var id = $(this).attr("data-open");

    // открываем все элементы у которых атрибут data-id равен нашему id
    $(".faq .answer[data-id=" + id + "]").slideToggle(400);
  });
});
