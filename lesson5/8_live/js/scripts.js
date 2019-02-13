$(function() {
  // всплытие события: мы вешаем обработчик на родителя на '.items' и слушаем событие 'focus' на элементах 'input[type="text"]'
  $(".items").on("focus", 'input[type="text"]', function() {
    $(this).addClass("active");
  });

  $(".items").on("blur", 'input[type="text"]', function() {
    $(this).removeClass("active");
  });

  // динамически создаём кусок разметки $("<div/>") это если тэг парный, то нужно писать со слэшем в конце (это краткая запись), можно конечно написать и $("<div><div/>")
  // функция appendTo - это мы берём наш элемент и вставляем его куда-то, тоесть у нас есть input и мы вставляем его в div (что(input) положить куда(в div))
  // функция append - это мы находим то куда нужно вставить наш элемент и вставляем, тоесть мы находим элемент с классом .items и в этот элемент нам нужно вставить наш div (куда(в ".items") положить что(div))
  $(".addField").on("click", function() {
    var $div = $("<div/>").addClass("item");
    $("<input>")
      .attr("type", "text")
      .addClass("check")
      .appendTo($div);

    $(".items").append($div);
  });
});
