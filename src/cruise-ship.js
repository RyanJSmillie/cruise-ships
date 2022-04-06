function CruiseShip(startPort) {
    this.dockedPort = startPort;
    this.passengers = 0;
    }

CruiseShip.prototype.addPassengers = function (passengersBoarding) {
    this.passengers += passengersBoarding;
}

CruiseShip.prototype.setSail = function() {
    this.dockedPort = false;
}
    
CruiseShip.prototype.dock = function (newPort) {
    this.dockedPort = newPort;
    }

function Port(portName) {
    this.name = portName;
    }

module.exports = {
    CruiseShip,
    Port
};
    