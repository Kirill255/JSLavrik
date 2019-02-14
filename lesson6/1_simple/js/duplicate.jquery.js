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

(function($) {
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
