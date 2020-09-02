'use strict';

describe('features', function() {
    
  let plane;
  let airport;
  
  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('can land at an airport', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });
  it('planes can be instructed to take off', function(){
    plane.land(airport)
    plane.takeoff();
    expect(airport.planes()).not.toContain(plane);
  });
  it('blocks takeoff when weather is stormy', function (){
    plane.land(airport)
    spyOn(airport, 'isStormy').and.returnValue(true);
    expect(function(){ plane.takeoff();}).toThrowError('cannot takeoff during storm');
    expect(airport.planes()).toContain(plane);
  });
});