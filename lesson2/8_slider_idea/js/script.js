window.onload = function() {
  var slider = new Slider({
    images: ".gallery-1 img",
    btnPrev: ".gallery-1 .buttons .prev",
    btnNext: ".gallery-1 .buttons .next",
    auto: false
  });
};

function Slider(images) {
  this.images = images;
  var i = 0;

  this.prev = function() {
    this.images[i].classList.remove("showed");
    i--;

    if (i < 0) {
      i = this.images.length - 1;
    }

    this.images[i].classList.add("showed");
  };

  this.next = function() {
    this.images[i].classList.remove("showed");
    i++;

    if (i >= this.images.length) {
      i = 0;
    }

    this.images[i].classList.add("showed");
  };
}
