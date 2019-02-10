window.onload = function(e) {
  var links = document.querySelectorAll("a[target=_blank]");

  for (var i = 0; i < links.length; i++) {
    links[i].onclick = confimAway;
  }

  function confimAway(e) {
    if (!confirm("Мы не гарантируем, что Вы переходите на какой-то сайт. Перейти?")) {
      return false;
    }
  }

  var images = document.querySelectorAll(".gallery img");

  for (var i = 0; i < images.length; i++) {
    images[i].onmousedown = stopMove;
    images[i].oncontextmenu = stopMove;
  }

  function stopMove(e) {
    return false;
  }
};
