// с сайта Owl Carousel скачивается большой архив с разными файлами, которые на по сути не нужны, нам нужно достать только owl.carousel.min.css и owl.carousel.min.js из папки dist, а также если!!! нужно то и owl.theme.default.min.css и всё!!!

$(function() {
  // https://owlcarousel2.github.io/OwlCarousel2/demos/responsive.html

  $(".faq").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      600: {
        items: 3,
        nav: false
      },
      1000: {
        items: 5,
        nav: true,
        loop: false
      }
    },
    onInitialized: setOwlHeight,
    // onInitialized: function() {
    //   setOwlHeight();

    //   // это костыль для устранения бага с появлением полосы справа при перезагрузке страницы https://user-images.githubusercontent.com/24504648/52816011-4070f500-30b1-11e9-90e3-371fb54f4ca0.gif, в будущих обновлениях возможно этот баг исправят (это баг самой либы)
    //   // после onInitialized, вызвать событие рефреш, без setTimeout тоже не работает
    //   setTimeout(function() {
    //     $(".faq").trigger("refresh.owl.carousel");
    //   }, 0);
    // }
    onResized: setOwlHeight
  });

  // function setOwlHeight() {
  //   var maxHeight = 0;
  //   $(".item").each(function() {
  //     var thisHeight = parseInt($(this).height()); // или .outerHeight()
  //     maxHeight = maxHeight >= thisHeight ? maxHeight : thisHeight;
  //   });
  //   $(".item").css("min-height", maxHeight + "px");
  // }

  // дело в том что у нас теперь при ресайзе запомнится минимально необходимая высота для блока и она останется такой даже если такая высота для блока уже не нужна подробнее на гифке https://user-images.githubusercontent.com/24504648/52812242-12d37e00-30a8-11e9-8a81-fc619b3b42be.gif, для исправления этого бага нам нужно чтобы весь контент внутри наших блоков лежал в одном контейнере, тоесть чтобы у нашего блока '.item' был только один ребёнок, у нас сейчас по факту получается два, поэтому обернём div'ы '.question' и '.answer' в ещё один div и изменим нашу функцию
  // высоту элемента который мы хотим выравнивать, можно расчитывать только по его детям и очень удобно когда такой ребёнок один, мы должны вести расчёт высоты для элемента по тем детям у которых не заданы свойства типа height или min-height

  // function setOwlHeight() {
  //   var maxHeight = 0;
  //   $(".item").each(function() {
  //     var thisHeight = parseInt(
  //       $(this)
  //         .find("> div")
  //         .height()
  //     );
  //     maxHeight = maxHeight >= thisHeight ? maxHeight : thisHeight;
  //   });
  //   $(".item").css("min-height", maxHeight + "px");
  // }

  // чуть перепишу, но вариант выше тоже рабочий

  // function setOwlHeight() {
  //   var maxHeight = 0;
  //   $(".item").each(function() {
  //     var thisHeight = parseInt(
  //       $(this)
  //         .find("> div")
  //         .outerHeight()
  //     );
  //     if (thisHeight > maxHeight) {
  //       maxHeight = thisHeight;
  //     }
  //   });
  //   $(".item").css("min-height", maxHeight + "px");
  // }

  // оказалось что после подключения файла с темой начались глюки с точками и кнопками «Далее», чтобы решить это нам нужно рефрешнуть слайдер, т.к. мы уже писали такой же код только для onInitialized хука, мы решили его засунуть в нашу функцию, раз он нам нужен в обоих случаях

  function setOwlHeight() {
    var maxHeight = 0;
    $(".item").each(function() {
      var thisHeight = parseInt(
        $(this)
          .find("> div")
          .outerHeight()
      );
      if (thisHeight > maxHeight) {
        maxHeight = thisHeight;
      }
    });
    $(".item").css("min-height", maxHeight + "px");

    setTimeout(function() {
      $(".faq").trigger("refresh.owl.carousel");
    }, 0);
  }
});

// если вы хотите использовать стандартные элементы управления навигацией, такие как точки или кнопки «Далее», нам нужно подключить owl.theme.default.min.css, а также задать класс '.owl-theme'
