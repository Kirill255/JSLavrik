// https://stackoverflow.com/questions/1144805/scroll-to-the-top-of-the-page-using-javascript-jquery

// так всё работает, но наблюдается небольшой баг: если проскролить какое-то расстояние, чтобы кнопка появилась, и потом перезагрузить страницу, то кнопка исчезнет, хотя прокруткаостанетсяна том же месте, и по идее кнопка должна отображаться, если ещё поперезагружать несколько раз, то увидим что кнопка иногда, есть иногда нет, чтобы исправить это нужно вынести код который определяеят в какой момент показывать/скрывать кнопку вынести в функцию (чтобы не было дублирования кода) и первый раз (тоесть дополнительно) вызвать эту функцию сразу при загрузке страницы

// $(function() {
//   $(".button-up").on("click", function(e) {
//     $("html, body").animate({ scrollTop: 0 }, "slow");
//   });

//   $(window).on("scroll", function() {
//     var height = $(this).scrollTop();
//     if (height > 20) {
//       $(".button-up").fadeIn();
//     } else {
//       $(".button-up").fadeOut();
//     }
//   });
// });

$(function() {
  $(".button-up").on("click", function(e) {
    $("html, body").animate({ scrollTop: 0 }, "slow");
  });

  function scroolBtn() {
    var height = $(this).scrollTop();
    if (height > 20) {
      $(".button-up").fadeIn();
    } else {
      $(".button-up").fadeOut();
    }
  }

  scroolBtn();

  $(window).on("scroll", scroolBtn);
});
