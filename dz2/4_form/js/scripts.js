window.onload = function(e) {
  var inputs = document.querySelectorAll("input[type=text]");
  var form = document.querySelector("form");

  form.onsubmit = submitHandler;

  function validate(inputs) {
    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        console.log(inputs[i].getAttribute("name") + " обязателен!");
        return false;
      }
    }
    return true;
  }

  function submitHandler(e) {
    // ещё не забыли если возвращается false, то отменяется действие по умолчанию?
    // если валидация прошла(true), то форма отправляется, если нет(false), то отменяем submit
    return validate(inputs) ? true : false;
  }
};
