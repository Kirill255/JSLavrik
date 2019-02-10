window.onload = function(e) {
  var cat1 = new Cat("Мурзик");
  console.log(cat1);

  var cat2 = new Cat("Мурзик1");
  console.log(cat2);

  var cat3 = new Cat("Мурзик2");
  console.log(cat3);

  cat3.eat();
  cat3.eat();
  cat3.eat();
  console.log(cat3);
  cat3.age++;
  cat3.run();
  cat3.run();
  cat3.run();
  cat3.run();
  console.log(cat3);
};

function Cat(name) {
  this.name = name;
  this.age = 0;
  this.weight = 1;

  this.eat = function() {
    this.weight++;
  };

  this.run = function() {
    this.weight--;
  };
}
