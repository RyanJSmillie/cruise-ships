function CruiseShip(startPort) {
    this.startPort = startPort
    this.passengers = 0;
    }

CruiseShip.prototype.addPassengers = function (passengersBoarding) {
    this.passengers += passengersBoarding;
}

    
module.exports = CruiseShip;
    