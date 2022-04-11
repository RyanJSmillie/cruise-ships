function CruiseShip(itinerary) {
    this.itinerary = itinerary
    this.dockedPort = itinerary.destinations[0];
    this.passengers = 0;
    this.previousPort = null;
    this.dockedPort.addShip(this);
    }

CruiseShip.prototype.addPassengers = function (passengersBoarding) {
    this.passengers += passengersBoarding;
}

CruiseShip.prototype.setSail = function() {
    const itinerary = this.itinerary;
    currentPortIndex = itinerary.destinations.indexOf(this.dockedPort);
    if (currentPortIndex === (itinerary.destinations.length - 1)) {
        throw new Error('End of itinerary reached');
    }
    this.previousPort = this.dockedPort;
    this.dockedPort = null;
}
    
CruiseShip.prototype.dock = function() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.destinations.indexOf(this.previousPort);
    
    this.dockedPort = itinerary.destinations[previousPortIndex + 1];
    }

module.exports = CruiseShip;

    