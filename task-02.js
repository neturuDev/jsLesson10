class CoffeeMachine {
    constructor(power) {
        this.waterAmount = 0;
        this.WATER_HEAT_CAPACITY = 4200;
        this.power = power;
    }
}
CoffeeMachine.prototype.getTimeToBoil = function() {
    return this.waterAmount * this.WATER_HEAT_CAPACITY * 80 / this.power;
};
CoffeeMachine.prototype.run = function() {
    setTimeout(function() {
        console.log('Coffee is ready!');
    }, CoffeeMachine.prototype.getTimeToBoil.call(this));
};
CoffeeMachine.prototype.setWaterAmount = function(amount) {
    this.waterAmount = amount;
};