function Hamster() {
    this.food = [];
}

Hamster.prototype.found = function(something) {
  this.food.push(something);
};