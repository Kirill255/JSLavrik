window.onload = function(e) {
  var btns = document.querySelectorAll("input[type=button]");
  var inp1 = document.querySelector("input[name=num1]");
  var inp2 = document.querySelector("input[name=num2]");
  var inputs = document.querySelectorAll("input[type=text]"); // чтобы навесить обработчики в цикле (код не оптимизирован вообще)
  var span = document.querySelector(".res");

  btns.forEach((btn) => {
    btn.onclick = function() {
      var num1 = parseInt(inp1.value);
      var num2 = parseInt(inp2.value);
      var res = calcRes(num1, num2, btn);
      span.innerHTML = res;
      btn.setAttribute("disabled", "disabled");
    };
  });

  inputs.forEach((inp) => {
    inp.oninput = function() {
      btns.forEach((btn) => {
        btn.removeAttribute("disabled");
      });
      span.innerHTML = "";
    };
  });

  function calcRes(num1, num2, btn) {
    switch (btn.value) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return;
    }
  }
};
