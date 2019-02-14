// jQuery

$(function() {
  var slider = new Slider({
    images: ".gallery-1 img",
    btnPrev: ".gallery-1 .buttons .prev",
    btnNext: ".gallery-1 .buttons .next"
  });

  var slider2 = new Slider({
    images: ".gallery-2 img",
    btnPrev: ".gallery-2 .buttons .prev",
    btnNext: ".gallery-2 .buttons .next",
    auto: true,
    rate: 2000
  });
});

function Slider(options) {
  this.images = $(options.images);
  this.btnPrev = $(options.btnPrev);
  this.btnNext = $(options.btnNext);
  this.auto = options.auto || false;
  this.rate = options.rate || 1000;

  var i = 0;

  var slider = this;

  var isRunPrev = false;
  var isRunNext = false;

  this.prev = function() {
    if (isRunPrev) {
      return;
    }

    isRunPrev = true;

    // скрыть
    slider.images
      .eq(i)
      .css({
        left: 0,
        top: 0,
        right: "auto",
        bottom: "auto"
      })
      .animate(
        {
          width: 0
        },
        slider.rate
      );

    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    // показать
    slider.images
      .eq(i)
      .css({
        left: "auto",
        top: "auto",
        right: 0,
        bottom: 0
      })
      .animate(
        {
          width: "100%"
        },
        slider.rate,
        function() {
          isRunPrev = false;
        }
      );
  };

  this.next = function() {
    if (isRunNext) {
      return;
    }

    isRunNext = true;

    // скрыть
    slider.images
      .eq(i)
      .css({
        left: "auto",
        top: "auto",
        right: 0,
        bottom: 0
      })
      .animate(
        {
          width: 0
        },
        slider.rate
      );
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    // показать
    slider.images
      .eq(i)
      .css({
        left: 0,
        top: 0,
        right: "auto",
        bottom: "auto"
      })
      .animate(
        {
          width: "100%"
        },
        slider.rate,
        function() {
          isRunNext = false;
        }
      );
  };

  this.btnPrev.on("click", slider.prev);
  this.btnNext.on("click", slider.next);

  if (this.auto) {
    setInterval(slider.next, slider.rate);
  }
}

/*
у нас есть 4 свойства для позиционирования top, bottom, left, right, и суть в том что мы можем задать значения всем 4-ём свойствам сразу, но элемент не может быть спозиционирован одновременно и слева и справа, поэтому есть приоритет свойст, top приоритетнее bottom, left приоритетнее bottom, поэтому нам нужно отключить те свойства которые в данный момент не должны влиять на работу элемента,
просто указываемэтим свойствам значение "auto", например: right: "auto"


небольшой пример, в нашем случае у нас изначально заданы стили в css с left: 0; и дальше когда мы в анимации устанавливаем например right: 0; у нас получается уже два установленных свойства и left: 0; и right: 0; дальше дейстует принцип приоритетности, что left: 0; главнее, поэтому если мы задали просто right: 0;, это не сработает, нам нужно сбросить left: "auto"; и потом right: 0;
*/
