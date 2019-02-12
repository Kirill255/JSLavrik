// философия jQuery такая, что неважно один элемент или много, функция всегда применяется к набору элементов, а в нём либо один элемент либо много

function $(selector) {
  var elements;

  // если передаётся не селектор, а DOM-элемент, например $(this)
  if (selector instanceof HTMLElement) {
    // ложим DOM-элемент в массив, ведь OurJquery ожидает массив элементов, да! querySelectorAll возвращает nodelist(псевдомассив), но по сути наша библиотека OurJquery рабоатает с ним только как с массивом, просто беребирает элементы в цикле, поэтому самое простое это эмулировать nodelist ввиде массива, т.к. создать nodelist самому нетак просто!
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

  this.fade = function(time) {
    for (var i = 0; i < this.elements.length; i++) {
      tehFade(this.elements[i], time, 50);
    }
  };

  function tehFade(elem, t, f) {
    var fps = f || 50;
    var time = t || 500;

    // на сайте функция была с ошибкой в расчётах, поэтому мы её пофиксили
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
      }
    }, 1000 / fps);
  }
}
