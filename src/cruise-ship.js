(function exportCruiseShip () {

function CruiseShip(itinerary) {
    this.itinerary = itinerary
    this.dockedPort = itinerary.ports[0];
    this.passengers = 0;
    this.previousPort = null;
    this.dockedPort.addShip(this);
    }

CruiseShip.prototype.addPassengers = function (passengersBoarding) {
    this.passengers += passengersBoarding;
}

CruiseShip.prototype.setSail = function() {
    const itinerary = this.itinerary;
    currentPortIndex = itinerary.ports.indexOf(this.dockedPort);
    if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
    }
    this.previousPort = this.dockedPort;
    this.previousPort.removeShip(this);
    this.dockedPort = null;
}
    
CruiseShip.prototype.dock = function() {
    const itinerary = this.itinerary;
    const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
    
    this.dockedPort = itinerary.ports[previousPortIndex + 1];

    this.dockedPort.addShip(this);
    }

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = CruiseShip;
      } else {
        window.Port = CruiseShip;
      }

}());


// module.exports = CruiseShip;

    