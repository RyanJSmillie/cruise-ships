const CruiseShip = require('../src/cruise-ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('constructor', () => {
    it('returns an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    });
});

describe('checks itinerary has destination ports', () => {
    it('has ports', () => {

        const itinerary = new Itinerary(['Liverpool', 'Southampton', 'Calais']);

        expect(itinerary.destinations).toEqual(['Liverpool', 'Southampton', 'Calais']);
    });
});