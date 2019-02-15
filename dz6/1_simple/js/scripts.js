$(function() {
  // выборку лучше делать по уникальному элементу $(".gallery-1").mySlider(), а не $(".gallery").mySlider()

  $(".gallery-1").mySlider();

  // $(".gallery-1").mySlider({
  //   images: ".gallery-1 img",
  //   btnPrev: ".gallery-1 .buttons .prev",
  //   btnNext: ".gallery-1 .buttons .next"
  // });

  $(".gallery-2").mySlider({
    images: ".gallery-2 img",
    btnPrev: ".gallery-2 .buttons .prev",
    btnNext: ".gallery-2 .buttons .next",
    auto: true,
    rate: 2000
  });
});

/* ======== */
// jQuery

/* $(function() {
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
} */
