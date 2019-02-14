// получаем набор элементов с классом 'button', дальше проверяем если кликнутый элемент имеет класс 'button-down' то вычеслить высоту документа, после этого проскролить к target, а это или верх документа или низ
$(function() {
  // console.log(window);
  // console.log($(document).height());
  // console.log(window.innerHeight);
  // console.log($(document).height() - window.innerHeight);
  // console.log($(document).height() - $(window).innerHeight());

  var $button = $(".button");

  $button.on("click", function(e) {
    var target = 0;
    if ($(this).hasClass("button-down")) {
      // target = $(document).height();
      target = $(document).height() - $(window).innerHeight();
    }

    // сейчас target равен 0(верх) или равен высоте документа(тоесть низ)
    $("html, body").animate({ scrollTop: target }, "slow");
  });

  function scroolBtn() {
    var height = $(this).scrollTop();
    if (height > 20) {
      $button.fadeIn();
    } else {
      $button.fadeOut();
    }
  }

  scroolBtn();

  $(window).on("scroll", scroolBtn);
});
