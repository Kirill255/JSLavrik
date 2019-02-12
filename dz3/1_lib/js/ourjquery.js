function $(selector) {
  var elements = document.querySelectorAll(selector);
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

  this.fade = function(t, fps) {
    for (var i = 0; i < this.elements.length; i++) {
      fade(this.elements[i], t, fps);
    }

    // функция польность скопирована из гугла, это типичная fade-функция, нам просто нужно вызвать её для каждого элемента
    function fade(elem, t, fps) {
      var fps = fps || 50;
      var time = t || 500;
      var steps = time / (1000 / fps);
      var op = 1;
      var d0 = op / steps;

      var timer = setInterval(function() {
        op -= d0;
        elem.style.opacity = op;
        steps--;

        if (steps <= 0) {
          clearInterval(timer);
          elem.style.display = "none";
        }
      }, 1000 / fps);
    }

    return this;
  };
}
