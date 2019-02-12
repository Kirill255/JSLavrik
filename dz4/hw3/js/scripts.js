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

  this.prev = function() {
    $(slider.images[i]).removeClass("showed");
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    $(slider.images[i]).addClass("showed");
  };

  this.next = function() {
    $(slider.images[i]).removeClass("showed");
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    $(slider.images[i]).addClass("showed");
  };

  $(this.btnPrev).on("click", slider.prev);
  $(this.btnNext).on("click", slider.next);

  if (this.auto) {
    setInterval(slider.next, slider.rate);
  }
}

// js
/*
window.onload = function() {
  var slider = new Slider({
    images: ".gallery-1 img",
    btnPrev: ".gallery-1 .buttons .prev",
    btnNext: ".gallery-1 .buttons .next",
    auto: false
  });

  var slider2 = new Slider({
    images: ".gallery-2 img",
    btnPrev: ".gallery-2 .buttons .prev",
    btnNext: ".gallery-2 .buttons .next",
    auto: true,
    rate: 2000
  });
};

function Slider(options) {
  this.images = document.querySelectorAll(options.images);
  this.btnPrev = document.querySelector(options.btnPrev);
  this.btnNext = document.querySelector(options.btnNext);
  this.auto = options.auto || false;
  this.rate = options.rate || 1000;

  var i = 0;

  var slider = this;

  this.prev = function() {
    slider.images[i].classList.remove("showed");
    i--;

    if (i < 0) {
      i = slider.images.length - 1;
    }

    slider.images[i].classList.add("showed");
  };

  this.next = function() {
    slider.images[i].classList.remove("showed");
    i++;

    if (i >= slider.images.length) {
      i = 0;
    }

    slider.images[i].classList.add("showed");
  };

  this.btnPrev.onclick = slider.prev;
  this.btnNext.onclick = slider.next;

  if (this.auto) {
    setInterval(slider.next, slider.rate);
  }
}
*/
