/*
 * когда пишется jQuery плагин, то файл обычно именуется с .jquery.js на конце
 * тоесть ваше_название.jquery.js (duplicate.jquery.js)
 * чтобы создать jQuery плагин, нужно написать $.fn и дальше название функции, и это название обычно совпадает с названием вашего плагина/файла
 * тоесть $.fn.ваше_название ($.fn.duplicate)
 * дальше мы присваеваем функцию которая может прнимать/не принимать параметры, и обязательно должна возвращать this
 * а также весь код плагина нужно заключить в конструкцию (function($) { ...код... })(jQuery);
 * подключается плагин после самой библиотеки jQuery, и затем мы можем обращаться к нашей функции/плагину как и к любому методу библиотеки, например так $(".class").duplicate()
 */

/*
 * базовая конструкция для создания плагина выглядит так:

(function($) {
  $.fn.duplicate = function() {

    return this;
  };
})(jQuery);

*/

/*
 * внутри плагина this ссылается на jQuery объект
 * внутри плагина также обязательно работать внутри конструкции this.each(function() {}); т.к. мы знаем что jQuery всегда работает с наборами элементов(всегда!), просто в нём или один или несколько элементов, и поэтому нам тоже нужно это учитывать, а что если тнам приходит не один элемент, а несколько, в общем нам нужно тоже запустить jQuery метод each, чтобы наш плагин работал универсально
 */

/*
 * базовая конструкция для создания плагина теперь выглядит так:

(function($) {
  $.fn.duplicate = function() {

    this.each(function() {
      var elem = $(this); // один элемент

      // работа с элементом

    });

    return this;
  };
})(jQuery);

*/

/*
 * передача параметров в плагин выполняется путём передачи объекта с настройками
 * тоесть $.fn.duplicate = function(settings) {};
 * в плагинах принято задавать также некоторые настройки по-умолчанию var defaults = {};
 * И дальше с помощью конструкции $.extend(defaults, settings); мы объеденяем оба объекта, этот метод работает по принципу Object.assign() https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

/*
* базовая конструкция для создания плагина теперь выглядит так:

(function($) {
  $.fn.duplicate = function(settings) {
    var defaults = {};
    var options = $.extend(defaults, settings);

    this.each(function() {
      var elem = $(this); // один элемент

      // работа с элементом
      // можно обращаться к options, например: options.свойство

    });

    return this;
  };
})(jQuery);

*/

// УДАЛИТЬ ================================

/* (function($) {
  $.fn.duplicate = function(settings) {
    var defaults = {
      d: " ",
      cnt: 2
    };

    var options = $.extend(defaults, settings);

    this.each(function() {
      var elem = $(this);
      var text = elem.html();
      var out = "";

      for (var i = 0; i < options.cnt; i++) {
        out += text;

        if (i < options.cnt - 1) {
          out += options.d;
        }
      }

      elem.html(out);
    });

    return this;
  };
})(jQuery);
 */

// УДАЛИТЬ ================================

(function($) {
  $.fn.mySlider = function(settings) {
    var defaults = {
      images: ".gallery-1 img",
      btnPrev: ".gallery-1 .buttons .prev",
      btnNext: ".gallery-1 .buttons .next",
      auto: false,
      rate: 1000
    };

    var options = $.extend(defaults, settings);

    this.each(function() {
      this.images = $(options.images);
      this.btnPrev = $(options.btnPrev);
      this.btnNext = $(options.btnNext);
      this.auto = options.auto;
      this.rate = options.rate;

      var i = 0;

      var slider = this;

      var isRunPrev = false;
      var isRunNext = false;

      var sliderWidth = slider.images.eq(0).width();

      function move(direction, sliderWidth) {
        // проверка на повторные клики, не знаю как лучше написать эту лапшу
        if (direction > 0) {
          if (isRunPrev) {
            return;
          } else {
            isRunPrev = true;
          }
        } else if (direction < 0) {
          if (isRunNext) {
            return;
          } else {
            isRunNext = true;
          }
        }

        slider.images.eq(i).animate(
          {
            opacity: 0,
            left: sliderWidth
          },
          1000
        );

        i += direction; // i += 1 (i++) или i += -1 (i--)

        if (i < 0) {
          i = slider.images.length - 1;
        } else if (i >= slider.images.length) {
          i = 0;
        }

        slider.images
          .eq(i)
          .css({
            left: -sliderWidth
          })
          .animate(
            {
              opacity: 1,
              left: 0
            },
            1000,
            function() {
              if (direction > 0) {
                isRunPrev = false;
              } else if (direction < 0) {
                isRunNext = false;
              }
            }
          );
      }

      this.btnPrev.on("click", function() {
        move(-1, -sliderWidth);
      });

      this.btnNext.on("click", function() {
        move(1, sliderWidth);
      });

      if (this.auto) {
        setInterval(function() {
          move(1, sliderWidth);
        }, slider.rate);
      }
    });

    return this;
  };
})(jQuery);
