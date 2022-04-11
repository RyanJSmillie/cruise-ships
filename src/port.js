function Port(portName) {
    this.name = portName;
    this.ships = [];
    }

Port.prototype.addShip = function(ship) {
    const ships = this.ships;
    ships.push(ship);
}

Port.prototype.removeShip = function(ship) {
    const ships = this.ships;
    const removePortIndex = ships.indexOf(ship);

    ships.splice(removePortIndex);
}

module.exports = Port;