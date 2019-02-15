window.onload = function() {
  const items = document.querySelectorAll(".items .item");

  function activeItem() {
    this.classList.toggle("item-active");
  }

  setInterval(function() {
    var rand = mthRand(0, items.length - 1);
    activeItem.call(items[rand]);
  }, 500);
};

function mthRand(min, max) {
  return Math.floor(Math.random() * (max - min + 1));
}
