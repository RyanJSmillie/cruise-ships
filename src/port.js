// (function exportPort() {

function Port(portName) {
    this.name = portName;
    this.ships = [];
};

Port.prototype.addShip = function(ship) {
    const ships = this.ships;
    ships.push(ship);
};

Port.prototype.removeShip = function(ship) {
    const ships = this.ships;
    const removePortIndex = ships.indexOf(ship);

    ships.splice(removePortIndex);
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
  } else {
    window.Port = Port;
  };

// }());


// module.exports = Port;