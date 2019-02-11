window.onload = function(e) {
  var inputs = document.querySelectorAll("input[type=text]");

  document.querySelector("form").onsubmit = function(e) {
    var error = false;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("err");
        error = true;
      } else {
        inputs[i].classList.remove("err");
      }
    }

    if (error) {
      e.preventDefault();
    }
  };
};
