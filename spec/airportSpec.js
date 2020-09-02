describe('Airport', function (){

  let airport;
  let plane;
  let weather;

  beforeEach(function() {
    plane = jasmine.createSpy('plane');
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
  });

  it('Has an empty plane array', function(){
    expect(airport.planes()).toEqual([]);
  });

  describe('under normal conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(false);
    });

    it('Clear for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    if('clears planes for takeoff', function(){
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });
  });

  describe('under stormy conditions', function(){
    beforeEach(function(){
      weather.isStormy.and.returnValue(true);
    });
    it('does not clear planes for take off', function(){
      expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
    });
    it('does not clear planes for landing', function() {
      expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
    });
  });
});