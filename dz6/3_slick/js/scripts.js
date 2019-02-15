$(function() {
  $(".faq").slick({
    dots: true, // точки
    arrows: false, // стрелки
    infinite: true, // зацикленный/бесконечный/круговой
    speed: 300,
    slidesToShow: 3, // показывать одновременно 3
    slidesToScroll: 1, // проматывать по 1
    // adaptiveHeight: true, // адаптивная высота
    // autoplay: true,
    // autoplaySpeed: 2000,
    // respondTo: "min",
    // отзывчивый слайдер с настраиваемыми брейкпоинтами
    responsive: [
      {
        breakpoint: 1024, // на 1024
        settings: {
          slidesToShow: 3, // показывать одновременно 3
          slidesToScroll: 1 // проматывать по 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  /*
  function setSlickHeight() {
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
  }

  setSlickHeight();

  $(".faq").on("setPosition", function(event, slick) {
    setSlickHeight();
  });

  // это не нужно
  // $(window).on("resize", function() {
  //   console.log("resize!!!" + $(window).width());
  //   setSlickHeight();
  // });

  */

  // вынес функцию в плагин
  $(".faq").equalHeights();

  $(".faq").on("setPosition", function(event, slick) {
    $(".faq").equalHeights();
  });

  // это не нужно
  // $(window).on("resize", function() {
  //   console.log('resize!!!' + $( window ).width());
  //   $(".faq").equalHeights();
  // });
});
