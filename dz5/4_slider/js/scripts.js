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

  var sliderWidth = slider.images.eq(0).width();

  this.prev = function() {
    if (isRunPrev) {
      return;
    }

    isRunPrev = true;

    slider.images.eq(i).animate(
      {
        opacity: 0,
        left: -sliderWidth
      },
      slider.rate
    );

    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images
      .eq(i)
      .css({
        left: sliderWidth
      })
      .animate(
        {
          opacity: 1,
          left: 0
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

    slider.images.eq(i).animate(
      {
        opacity: 0,
        left: sliderWidth
      },
      slider.rate
    );

    i++;

    if (i >= slider.images.length) {
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
