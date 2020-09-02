describe('airport', function (){

  let airport;
  let plane;

  beforeEach(function() {
    airport = new Airport();
    plane = jasmine.createSpy('plane', ['land']);
  });

  it('Has an empty plane array', function(){
    expect(airport.planes()).toEqual([]);
  });
  it('Clear for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });
  if('clears planes for landing', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });
  it('checks for stormy weather', function(){
    expect(airport.isStormy()).toBeFalsy();
  });
});

describe('under stormy conditions', function(){

  let airport; 
  let plane;

  it('does not clear planes for take off', function(){
    airport = new Airport();
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeOff(plane); }).toThrowError('cannot takeoff during storm');
  });
});