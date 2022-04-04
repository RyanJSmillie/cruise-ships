function CruiseShip(startPort) {
    this.startPort = startPort
    this.passengers = 0;
    }

CruiseShip.prototype.addPassengers = function (passengersBoarding) {
    this.passengers += passengersBoarding;
}

CruiseShip.prototype.setSail = function() {
    this.startPort = false
}
    
module.exports = CruiseShip;
    