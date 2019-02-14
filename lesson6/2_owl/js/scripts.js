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
    }
  });
});

// дз например у нас разное содержимое в блоках, то у них будет разная высота и нужно сделать высоту всех элемнтов одинаковой независимо от содержимого, ps: есть спец класс у owl или если не найдёте класс, написать самим код, нужно как-то подписаться на тот момент когда переключаются брейкпоинты и взять все элементы, высчитать наибольшую высоту из них и потом задать это значение всем элементам как min-height
