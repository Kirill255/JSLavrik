window.onload = function() {
  var images = document.querySelectorAll(".gallery-1 .photos img");
  var slider = new Slider(images);

  document.querySelector(".gallery-1 .buttons .prev").onclick = function() {
    slider.prev();
  };

  document.querySelector(".gallery-1 .buttons .next").onclick = function() {
    slider.next();
  };

  var images2 = document.querySelectorAll(".gallery-2 .photos img");
  var slider2 = new Slider(images2);

  document.querySelector(".gallery-2 .buttons .prev").onclick = function() {
    slider2.prev();
  };

  document.querySelector(".gallery-2 .buttons .next").onclick = function() {
    slider2.next();
  };

  // всё дз
  setInterval(function() {
    slider2.next();
  }, 2000);

  // setInterval принимает функцию, но она будет вызвана в контексте window
  // в варианте выше setInterval принимал анонимную функцию, уже внутри которой вызывалась наша функция на объекте slider2, тоесть с правильным контекстом slider2.next();
  // но вот так мы не можем сделать setInterval(slider2.next, 2000), т.к. сейчас это просто ссылка на на нашу функцию next, которую setInterval вызовет в контексте window, ну или просто next()
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
