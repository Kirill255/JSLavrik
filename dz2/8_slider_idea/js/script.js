window.onload = function() {
  function Slider(options) {
    this.images = document.querySelectorAll(options.images);
    this.btnPrev = document.querySelector(options.btnPrev);
    this.btnNext = document.querySelector(options.btnNext);
    this.auto = options.auto || false;
    var i = 0;

    // тут можно использовать стрелочную функцию и тогда .bind(this) не нужен
    this.prev = function() {
      this.images[i].classList.remove("showed");
      i--;

      if (i < 0) {
        i = this.images.length - 1;
      }

      this.images[i].classList.add("showed");
    }.bind(this);

    // тут можно использовать стрелочную функцию и тогда .bind(this) не нужен
    this.next = function() {
      this.images[i].classList.remove("showed");
      i++;

      if (i >= this.images.length) {
        i = 0;
      }

      this.images[i].classList.add("showed");
    }.bind(this);

    this.btnNext.onclick = this.next;
    this.btnPrev.onclick = this.prev;

    if (this.auto) {
      setInterval(() => {
        this.next();
      }, 2000);
    }
  }

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
    auto: true
  });
};
