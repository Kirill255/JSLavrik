function Popup(options) {
  /*
   * инициализация
   * в body добавить дивы для попапа и оверлэя
   */
  this.popupDiv = document.querySelector(options.popup);
  this.overlayDiv = document.querySelector(options.overlay);

  this.open = function(content) {
    if (!content) {
      var content = "default content";
    }

    this.popupDiv.style.display = "block";
    this.overlayDiv.style.display = "block";

    this.popupDiv.innerHTML = content;
  };

  this.close = function() {
    this.popupDiv.style.display = "none";
    this.overlayDiv.style.display = "none";
  };
}

window.onload = function() {
  var overlayDiv = document.querySelector(".overlay");
  var btn = document.querySelector(".btn");

  var p = new Popup({
    popup: ".popup",
    overlay: ".overlay"
  });

  btn.onclick = function() {
    // p.open("1");
    // p.open();
    p.open("<div><h2>Заголовок</h2><p>Текст</p></div>");
  };

  overlayDiv.onclick = function() {
    p.close();
  };
};
