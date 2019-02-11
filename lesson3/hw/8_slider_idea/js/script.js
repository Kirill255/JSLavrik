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
    rate: 1000
  });
};

function Slider(options) {
  this.images = document.querySelectorAll(options.images);
  this.btnPrev = document.querySelector(options.btnPrev);
  this.btnNext = document.querySelector(options.btnNext);
  this.auto = options.auto;
  this.rate = options.rate || 2000;

  var i = 0;
  var that = this; // сохраняем контекст

  this.prev = function() {
    that.images[i].classList.remove("showed");
    i--;

    if (i < 0) {
      i = that.images.length - 1;
    }

    that.images[i].classList.add("showed");
  };

  this.next = function() {
    that.images[i].classList.remove("showed");
    i++;

    if (i >= that.images.length) {
      i = 0;
    }

    that.images[i].classList.add("showed");
  };

  this.btnPrev.onclick = this.prev;
  this.btnNext.onclick = this.next;

  if (this.auto) {
    // setInterval(function() {
    //   that.next();
    // }, 2000);

    // т.к. у нас тут созранён контекст мы можем сделать вот так
    // setInterval(that.next, 2000);

    setInterval(that.next, that.rate);
  }
}
