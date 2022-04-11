const CruiseShip = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    it('returns an object', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
    });
});

describe('ship passengers', () => {
    it('returns ship passengers', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        expect(ship.passengers).toEqual(0);
    });

    it('returns new number of passengers', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});

describe('checks setSail', () => {
    it('can set sail', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        const startPort = itinerary.destinations[0];
        ship.setSail();
      
        expect(ship.docked).toBeFalsy();
        expect(ship.previousPort).toBe(startPort);
        expect(port1.ships).not.toContain(ship);
      });
      
    it('sets previous port to current port', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.previousPort).toEqual(port1);
    });

    it('returns if sailing', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.docked).toBeFalsy();
    });

    it('can\'t sail further than its itinerary', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
      
        ship.setSail();
        ship.dock();
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});

describe('ships dock status', () => {
    it('returns ship starting port', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        expect(ship.dockedPort).toEqual(port1);
    });


    it('initial previous port is null', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        expect(ship.previousPort).toEqual(null);
    });

    it('can dock at a different port', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);
        ship.setSail();
        ship.dock();

        expect(ship.dockedPort).toEqual(port2);
        expect(port2.ships).toContain(ship)
    });

    it('gets added to port on instantiation', () => {
        const port1 = new Port('Manchester')
        const port2 = new Port('Liverpool')
        const port3 = new Port('Southampton')
        const itinerary = new Itinerary([port1, port2, port3])
        const ship = new CruiseShip(itinerary);

        expect(port1.ships).toContain(ship);
    });
});



