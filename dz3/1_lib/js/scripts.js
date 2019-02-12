window.onload = function(e) {
  var inputs = document.querySelectorAll(".check");

  document.querySelector("form").onsubmit = function(e) {
    var error = false;

    for (var i = 0; i < inputs.length; i++) {
      if (inputs[i].value === "") {
        inputs[i].classList.add("err");
        error = true;
      }
    }

    if (error) {
      e.preventDefault();
    }
  };

  /* for(var i = 0; i < inputs.length; i++){
        inputs[i].oninput = function(){
            this.classList.remove('err');
        }
    }

    for(var i = 0; i < inputs.length; i++){
        inputs[i].onfocus = function(){
            this.classList.add('focus');
        }
    }

    for(var i = 0; i < inputs.length; i++){
        inputs[i].onblur = function(){
            this.classList.remove('focus');
        }
    } */

  var jqInputs = $(".check");

  jqInputs.on("click", function() {
    this.classList.remove("err");
  });

  jqInputs.on("focus", function() {
    this.classList.add("focus");
  });

  jqInputs.on("blur", function() {
    this.classList.remove("focus");
  });

  jqInputs
    .addClass("some")
    .addClass("some1")
    .addClass("some2");

  $(".items .item")
    .html("1")
    .addClass("nz")
    .on("click", function() {
      this.style.color = "red";
    });

  console.log($(".items .item").html());

  /* Реализовать функцию fade
   *  $('.items .item').fade(300);
   *  https://dmitrylavrik.ru/javascript/prostaya-animaciya-na-javascript
   *  */

  var jqitem = $(".items .item");

  // jqitem.fade(300);
  jqitem.fade(2300);
};
