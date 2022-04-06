const {CruiseShip, Port, Itinerary} = require('../src/cruise-ship');

describe('constructor', () => {
    it('returns an object', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(new CruiseShip(itinerary)).toBeInstanceOf(Object);
    });
});

describe('ship passengers', () => {
    it('returns ship passengers', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.passengers).toEqual(0);
    });
});

describe('additional passengers boarding', () => {
    it('returns new number of passengers', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.addPassengers(4);

        expect(ship.passengers).toEqual(4);
    });
});

describe('checks setSail', () => {
    it('can set sail', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        const port = itinerary.destinations[0];
        ship.setSail();
      
        expect(ship.docked).toBeFalsy();
        expect(ship.previousPort).toBe(port);
      });
      
    it('sets previous port to current port', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.previousPort).toEqual('Manchester');
    });

    it('returns if sailing', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();

        expect(ship.docked).toBeFalsy();
    });

    it('can\'t sail further than its itinerary', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool'])
        const ship = new CruiseShip(itinerary);
      
        ship.setSail();
        ship.dock();
      
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });
});

describe('ships dock status', () => {
    it('returns ship starting port', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.dockedPort).toEqual('Manchester');
    });


    it('initial previous port is null', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        expect(ship.previousPort).toEqual(null);
    });

    it('can dock at a different port', () => {
        const itinerary = new Itinerary(['Manchester', 'Liverpool', 'Southampton'])
        const ship = new CruiseShip(itinerary);
        ship.setSail();
        ship.dock();

        expect(ship.dockedPort).toEqual('Liverpool');
    });


});



