function $(selector) {
  var elements;

  if (selector instanceof HTMLElement) {
    elements = [selector];
  } else {
    elements = document.querySelectorAll(selector);
  }

  return new OurJquery(elements);
}

function OurJquery(elements) {
  this.elements = elements;

  /**
   * Подвесить любое событие на группу элементов
   * @param string eventname Тип события
   * @param callable f Функция обработчик
   * @returns self Текущий объект
   */
  this.on = function(eventname, f) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].addEventListener(eventname, f);
    }

    return this;
  };

  this.addClass = function(name) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.add(name);
    }

    return this;
  };

  this.removeClass = function(name) {
    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].classList.remove(name);
    }

    return this;
  };

  this.html = function(html) {
    if (typeof html === "undefined") {
      return this.elements[0].innerHTML;
    }

    for (var i = 0; i < this.elements.length; i++) {
      this.elements[i].innerHTML = html;
    }

    return this;
  };

  this.fade = function(time, callback) {
    // это заглушка, тоесть мы можем вызывать метод fade и без коллбэка $(this).fade(1000) или $(this).fade(1000, function() { ... }
    var func = callback || function() {};

    for (var i = 0; i < this.elements.length; i++) {
      tehFade(this.elements[i], time, 50, func);
    }
  };

  function tehFade(elem, t, f, callback) {
    var fps = f || 50;
    var time = t || 500;
    var steps = time / (1000 / fps);
    var op = 1;
    var d0 = op / steps;

    var timer = setInterval(function() {
      op -= d0;
      elem.style.opacity = op;
      steps--;

      if (steps == 0) {
        clearInterval(timer);
        elem.style.display = "none";

        // ^ в этот момент наша анимация закончилась, элемент исчез, а дальше мы вызываем наш коллбэк (пример ниже), этот коллбэк передавался при вызове, в нашем случае он устанавливает снова opacity = 1 и display = "block" нашему исчезнувшему элементу, так как мы вызываем его именно в контексте этого же нашего элемента callback.call(elem);
        /*
        function() {
          this.style.opacity = 1;
          this.style.display = "block";
        }
        */
        callback.call(elem);
      }
    }, 1000 / fps);
  }
}
