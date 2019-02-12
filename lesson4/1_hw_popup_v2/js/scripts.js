function Popup(options) {
  this.modal = document.querySelector(options.modal);
  this.overlay = document.querySelector(options.overlay);

  var popup = this;

  this.open = function(content) {
    popup.modal.innerHTML = content;
    popup.overlay.classList.add("open");
    popup.modal.classList.add("open");
  };

  this.close = function() {
    popup.overlay.classList.remove("open");
    popup.modal.classList.remove("open");
  };

  this.overlay.onclick = popup.close;
}

window.onload = function() {
  var p = new Popup({
    modal: ".modal",
    overlay: ".overlay"
  });

  var btns = document.querySelectorAll("input[data-popup]");
  for (let i = 0; i < btns.length; i++) {
    const btn = btns[i];
    btn.onclick = function(e) {
      var divContentClass = e.target.dataset.popup; // .for-callme-popup or .for-writeme-popup
      var content = document.querySelector(divContentClass);
      p.open(content.innerHTML);
    };
  }
};

/*
мы в html задали всем кнопкам data-атрибуты (data-popup), теперь мы находим все кнопки с  data-атрибутом (data-popup), в цикле навешиваем на каждую кнопку обработчик, и при клике проверяем содержимое этого data-атрибута, в содержимое мы положили класс div'а с нужной разметкой, которую мы вставляем в popup
*/
